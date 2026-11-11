import assert from 'node:assert/strict';

const baseUrl = process.env.SEO_BASE_URL ?? 'http://127.0.0.1:3000';
const base = new URL(baseUrl);
const requiredPaths = ['/', '/trip-planner', '/contact', '/delete-account', '/data-safety', '/privacy-policy', '/terms-of-use', '/cookies-policy', '/disclaimer'];

async function get(path) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(10_000) });
  assert.equal(response.status, 200, `${path} returned HTTP ${response.status}`);
  return response.text();
}

const robots = await get('/robots.txt');
assert.match(robots, /^User-Agent:\s*\*/im, 'robots.txt must include a wildcard rule');
assert.match(robots, /^Allow:\s*\//im, 'robots.txt must allow public crawling');
assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/im, 'robots.txt must not block the entire site');

const sitemap = await get('/sitemap.xml');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
assert.ok(sitemapUrls.length >= 2, 'sitemap.xml must contain the homepage and trip planner');
const sitemapPaths = new Set(sitemapUrls.map((value) => new URL(value).pathname));
assert.equal(sitemapPaths.size, sitemapUrls.length, 'sitemap.xml must not contain duplicate URLs');
const pathsToCheck = [...new Set([...requiredPaths, ...sitemapPaths])];
for (const path of ['/', '/trip-planner']) {
  assert.ok(sitemapPaths.has(path), `sitemap.xml is missing ${path}`);
}

const pages = [];
for (const path of pathsToCheck) {
  const html = await get(path);
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
  const description = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i)?.[1]?.trim()
    ?? html.match(/<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i)?.[1]?.trim();
  const canonicals = [...html.matchAll(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/gi)];
  assert.ok(title, `${path} is missing a title`);
  assert.ok(description, `${path} is missing a meta description`);
  assert.equal(canonicals.length, 1, `${path} must have exactly one canonical link`);
  pages.push({ path, title, canonical: new URL(canonicals[0][1]) });

  const jsonLdBlocks = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const [, json] of jsonLdBlocks) {
    assert.doesNotThrow(() => JSON.parse(json), `${path} contains invalid JSON-LD`);
  }
}

const canonicalOrigin = pages[0].canonical.origin;
const titles = new Set();
for (const page of pages) {
  assert.equal(page.canonical.origin, canonicalOrigin, `${page.path} canonical uses a different host`);
  assert.ok(page.canonical.pathname === page.path || (page.path === '/' && page.canonical.pathname === '/'), `${page.path} canonical points to ${page.canonical.pathname}`);
  assert.ok(!titles.has(page.title), `Duplicate page title: ${page.title}`);
  titles.add(page.title);
}

for (const url of sitemapUrls) {
  assert.equal(new URL(url).origin, canonicalOrigin, `Sitemap URL uses a different origin: ${url}`);
}

const sitemapLink = robots.match(/^Sitemap:\s*(\S+)/im)?.[1];
assert.ok(sitemapLink, 'robots.txt must reference sitemap.xml');
assert.equal(new URL(sitemapLink).origin, canonicalOrigin, 'robots sitemap URL must use the canonical origin');

const expectedOrigin = process.env.EXPECTED_CANONICAL_ORIGIN;
if (expectedOrigin) {
  assert.equal(canonicalOrigin, new URL(expectedOrigin).origin, 'Live canonical origin differs from EXPECTED_CANONICAL_ORIGIN');
}

console.log(`SEO smoke checks passed for ${pages.length} pages and ${sitemapUrls.length} sitemap URLs. Canonical origin: ${canonicalOrigin}`);
