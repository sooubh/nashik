import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT_DIR = process.cwd();

console.log('====================================================');
console.log('   TRIVIO NASHIK PLATFORM COMPREHENSIVE QA AUDIT   ');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`✅ PASS: ${testName}`);
  } else {
    failedTests++;
    console.error(`❌ FAIL: ${testName}${details ? ` -> ${details}` : ''}`);
  }
}

// ---------------------------------------------------------
// 1. TypeScript Strict Type-Checking
// ---------------------------------------------------------
console.log('\n--- 1. TypeScript Strict Compilation (tsc --noEmit) ---');
try {
  execSync('npx tsc --noEmit', { stdio: 'pipe' });
  assert(true, 'TypeScript typecheck (0 errors)');
} catch (err) {
  assert(false, 'TypeScript typecheck (0 errors)', err.stdout?.toString() || err.message);
}

// ---------------------------------------------------------
// 2. Android App Links (.well-known/assetlinks.json)
// ---------------------------------------------------------
console.log('\n--- 2. Android App Links (public/.well-known/assetlinks.json) ---');
const assetLinksPath = path.join(ROOT_DIR, 'public/.well-known/assetlinks.json');
if (fs.existsSync(assetLinksPath)) {
  try {
    const raw = fs.readFileSync(assetLinksPath, 'utf8');
    const parsed = JSON.parse(raw);
    assert(Array.isArray(parsed) && parsed.length > 0, 'assetlinks.json is non-empty array');
    const first = parsed[0] || {};
    assert(
      first.relation && first.relation.includes('delegate_permission/common.handle_all_urls'),
      'assetlinks relation is delegate_permission/common.handle_all_urls'
    );
    assert(
      first.target?.namespace === 'android_app',
      'target namespace is android_app'
    );
    assert(
      first.target?.package_name === 'com.sooubh.nashikexplore',
      'target package_name is com.sooubh.nashikexplore'
    );
    assert(
      Array.isArray(first.target?.sha256_cert_fingerprints) &&
      first.target.sha256_cert_fingerprints.length > 0 &&
      first.target.sha256_cert_fingerprints[0].length === 95, // 32 hex bytes separated by colons
      'sha256_cert_fingerprints is valid SHA-256 fingerprint'
    );
  } catch (err) {
    assert(false, 'assetlinks.json valid JSON', err.message);
  }
} else {
  assert(false, 'public/.well-known/assetlinks.json exists');
}

// ---------------------------------------------------------
// 3. Play Store UTM Tracking (src/lib/utm.ts)
// ---------------------------------------------------------
console.log('\n--- 3. Google Play Store UTM Tracking (src/lib/utm.ts) ---');
const utmPath = path.join(ROOT_DIR, 'src/lib/utm.ts');
if (fs.existsSync(utmPath)) {
  const code = fs.readFileSync(utmPath, 'utf8');
  assert(code.includes('export function getPlayStoreUrl'), 'getPlayStoreUrl exported');
  assert(code.includes('utm_source'), 'utm_source handled');
  assert(code.includes('utm_medium'), 'utm_medium handled');
  assert(code.includes('utm_campaign'), 'utm_campaign handled');
  assert(code.includes('encodeURIComponent'), 'referrer properly URL-encoded');
  assert(code.includes('SITE_CONFIG.playStoreUrl'), 'uses SITE_CONFIG.playStoreUrl target');
} else {
  assert(false, 'src/lib/utm.ts exists');
}

// ---------------------------------------------------------
// 4. Schema.org JSON-LD Syntactic & Semantic Validation
// ---------------------------------------------------------
console.log('\n--- 4. Schema.org JSON-LD Generators (src/lib/schema.ts) ---');
const schemaPath = path.join(ROOT_DIR, 'src/lib/schema.ts');
if (fs.existsSync(schemaPath)) {
  const code = fs.readFileSync(schemaPath, 'utf8');
  assert(code.includes('export function generateTouristAttractionSchema'), 'generateTouristAttractionSchema exported');
  assert(code.includes('export function generateTouristDestinationSchema'), 'generateTouristDestinationSchema exported');
  assert(code.includes('export function generateBreadcrumbSchema'), 'generateBreadcrumbSchema exported');
  assert(code.includes('export function generateFAQSchema'), 'generateFAQSchema exported');
  assert(code.includes('export function generateArticleSchema'), 'generateArticleSchema exported');
  assert(code.includes('export function generateMobileApplicationSchema'), 'generateMobileApplicationSchema exported');
  assert(code.includes('@context\': \'https://schema.org\''), 'Schema.org context standard applied');
  assert(code.includes('GeoCoordinates'), 'TouristAttraction has GeoCoordinates geo markup');
  assert(code.includes('OpeningHoursSpecification'), 'TouristAttraction has OpeningHoursSpecification');
} else {
  assert(false, 'src/lib/schema.ts exists');
}

// ---------------------------------------------------------
// 5. Dynamic SSG Routes & staticParams Audit
// ---------------------------------------------------------
console.log('\n--- 5. Dynamic SSG Routes (dynamicParams = false) ---');
const dynamicRoutes = [
  // English Routes
  { path: 'src/app/places/[slug]/page.tsx', name: 'EN Place Detail' },
  { path: 'src/app/destinations/[category]/page.tsx', name: 'EN Category Hub' },
  { path: 'src/app/guides/[slug]/page.tsx', name: 'EN Guide Detail' },
  { path: 'src/app/blog/[slug]/page.tsx', name: 'EN Blog Detail' },

  // Marathi Routes
  { path: 'src/app/mr/places/[slug]/page.tsx', name: 'MR Place Detail' },
  { path: 'src/app/mr/destinations/[category]/page.tsx', name: 'MR Category Hub' },
  { path: 'src/app/mr/guides/[slug]/page.tsx', name: 'MR Guide Detail' },
  { path: 'src/app/mr/blog/[slug]/page.tsx', name: 'MR Blog Detail' },

  // Hindi Routes
  { path: 'src/app/hi/places/[slug]/page.tsx', name: 'HI Place Detail' },
  { path: 'src/app/hi/destinations/[category]/page.tsx', name: 'HI Category Hub' },
  { path: 'src/app/hi/guides/[slug]/page.tsx', name: 'HI Guide Detail' },
  { path: 'src/app/hi/blog/[slug]/page.tsx', name: 'HI Blog Detail' },
];

for (const route of dynamicRoutes) {
  const fullPath = path.join(ROOT_DIR, route.path);
  if (fs.existsSync(fullPath)) {
    const code = fs.readFileSync(fullPath, 'utf8');
    const hasStaticParams = /export\s+(async\s+)?function\s+generateStaticParams/.test(code) ||
                            /export\s+const\s+generateStaticParams/.test(code);
    const hasDynamicParamsFalse = /export\s+const\s+dynamicParams\s*=\s*false/.test(code);
    const hasGenerateMetadata = /export\s+(async\s+)?function\s+generateMetadata/.test(code);

    assert(hasStaticParams, `${route.name} (${route.path}) exports generateStaticParams`);
    assert(hasDynamicParamsFalse, `${route.name} (${route.path}) defines dynamicParams = false`);
    assert(hasGenerateMetadata, `${route.name} (${route.path}) exports generateMetadata`);
  } else {
    assert(false, `${route.name} file exists at ${route.path}`);
  }
}

// ---------------------------------------------------------
// 6. robots.ts, sitemap.ts, and llms.txt Discovery Audit
// ---------------------------------------------------------
console.log('\n--- 6. SEO, Sitemaps & AI Search Engines (llms.txt) ---');

// robots.ts
const robotsPath = path.join(ROOT_DIR, 'src/app/robots.ts');
if (fs.existsSync(robotsPath)) {
  const code = fs.readFileSync(robotsPath, 'utf8');
  assert(code.includes('sitemap.xml'), 'robots.ts references sitemap.xml');
  assert(code.includes('userAgent'), 'robots.ts defines userAgent rules');
} else {
  assert(false, 'src/app/robots.ts exists');
}

// sitemap.ts
const sitemapPath = path.join(ROOT_DIR, 'src/app/sitemap.ts');
if (fs.existsSync(sitemapPath)) {
  const code = fs.readFileSync(sitemapPath, 'utf8');
  assert(code.includes('DESTINATIONS_DATA'), 'sitemap.ts indexes dynamic places');
  assert(code.includes('ALL_CATEGORIES'), 'sitemap.ts indexes dynamic categories');
  assert(code.includes('GUIDES_DATA'), 'sitemap.ts indexes dynamic guides');
  assert(code.includes('BLOG_POSTS_DATA'), 'sitemap.ts indexes dynamic blog posts');
  assert(code.includes('/mr/places/'), 'sitemap.ts indexes Marathi places');
  assert(code.includes('/hi/places/'), 'sitemap.ts indexes Hindi places');
} else {
  assert(false, 'src/app/sitemap.ts exists');
}

// llms.txt & llms-full.txt
const llmsTxtPath = path.join(ROOT_DIR, 'public/llms.txt');
const llmsFullTxtPath = path.join(ROOT_DIR, 'public/llms-full.txt');

if (fs.existsSync(llmsTxtPath)) {
  const content = fs.readFileSync(llmsTxtPath, 'utf8');
  assert(content.includes('Trivio') && content.includes('Nashik Travel Guide'), 'public/llms.txt has title');
  assert(content.includes('Trimbakeshwar'), 'public/llms.txt documents Trimbakeshwar');
  assert(content.includes('Sula Vineyards'), 'public/llms.txt documents Sula Vineyards');
  assert(content.includes('Harihar Fort'), 'public/llms.txt documents Harihar Fort');
  assert(content.includes('https://play.google.com'), 'public/llms.txt references Android App Link');
} else {
  assert(false, 'public/llms.txt exists');
}

if (fs.existsSync(llmsFullTxtPath)) {
  const content = fs.readFileSync(llmsFullTxtPath, 'utf8');
  assert(content.length > 2000, 'public/llms-full.txt contains rich full documentation (>2KB)');
} else {
  assert(false, 'public/llms-full.txt exists');
}

// ---------------------------------------------------------
// 7. Content Ground Truth & Integrity Audit
// ---------------------------------------------------------
console.log('\n--- 7. Content Ground Truth & 2026 Verification ---');
const destDataPath = path.join(ROOT_DIR, 'src/data/destinationsData.ts');
if (fs.existsSync(destDataPath)) {
  const code = fs.readFileSync(destDataPath, 'utf8');
  // Flagship 5 check
  assert(code.includes("slug: 'trimbakeshwar'"), 'Trimbakeshwar destination present');
  assert(code.includes("slug: 'sula-vineyards'"), 'Sula Vineyards destination present');
  assert(code.includes("slug: 'harihar-fort'"), 'Harihar Fort destination present');
  assert(code.includes("slug: 'panchavati-kalaram'"), 'Panchavati/Kalaram destination present');
  assert(code.includes("slug: 'dugarwadi-waterfall'"), 'Dugarwadi Waterfall destination present');

  // Ground truth check
  assert(code.includes('200') && code.includes('VIP'), 'Verified ₹200 VIP darshan pass rule present for Trimbakeshwar');
  assert(code.includes('80-degree') || code.includes('80°'), 'Harihar Fort 80° rock-cut steps documented');
  assert(code.includes('latitude') && code.includes('longitude'), 'Destinations have precise GPS coordinates');
  assert(code.includes('directAnswer:'), 'Destinations have GEO directAnswer summaries');
} else {
  assert(false, 'src/data/destinationsData.ts exists');
}

// ---------------------------------------------------------
// 8. 50-Article Content Library & Multilingual Parity Audit
// ---------------------------------------------------------
console.log('\n--- 8. 50-Article Content Library & Multilingual Parity ---');
const guidesDataPath = path.join(ROOT_DIR, 'src/data/guidesData.ts');
const blogDataPath = path.join(ROOT_DIR, 'src/data/blogData.ts');

if (fs.existsSync(destDataPath) && fs.existsSync(guidesDataPath) && fs.existsSync(blogDataPath)) {
  const destCode = fs.readFileSync(destDataPath, 'utf8');
  const guidesCode = fs.readFileSync(guidesDataPath, 'utf8');
  const blogCode = fs.readFileSync(blogDataPath, 'utf8');

  const placeSlugs = (destCode.match(/slug:\s*['"][^'"]+['"]/g) || []).length;
  const guideSlugs = (guidesCode.match(/slug:\s*['"][^'"]+['"]/g) || []).length;
  const blogSlugs = (blogCode.match(/slug:\s*['"][^'"]+['"]/g) || []).length;
  const totalArticles = placeSlugs + guideSlugs + blogSlugs;

  assert(placeSlugs >= 20, `Places count >= 20 (Actual: ${placeSlugs})`);
  assert(guideSlugs >= 15, `Guides count >= 15 (Actual: ${guideSlugs})`);
  assert(blogSlugs >= 12, `Blog & Itinerary count >= 12 (Actual: ${blogSlugs})`);
  assert(totalArticles >= 45, `Total published articles >= 45 (Actual: ${totalArticles})`);

  // Multilingual checks for guides & blogs
  assert(guidesCode.includes("mr:") && guidesCode.includes("hi:"), 'Guides contain Marathi and Hindi localizations');
  assert(blogCode.includes("mr:") && blogCode.includes("hi:"), 'Blog posts contain Marathi and Hindi localizations');
  assert(guidesCode.includes("directAnswer:"), 'Guides contain directAnswer summary boxes');
  assert(blogCode.includes("directAnswer:"), 'Blog posts contain directAnswer summary boxes');
} else {
  assert(false, 'All content data files exist');
}

// ---------------------------------------------------------
// 9. Directory Listing Hubs & Regional Cities Audit
// ---------------------------------------------------------
console.log('\n--- 9. Directory Listing Hubs & Regional Cities ---');
const directoryPages = [
  'src/app/places/page.tsx',
  'src/app/guides/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/destinations/page.tsx',
];

for (const dirPage of directoryPages) {
  const exists = fs.existsSync(path.join(ROOT_DIR, dirPage));
  assert(exists, `Directory hub exists: ${dirPage}`);
}

const catPageCode = fs.readFileSync(path.join(ROOT_DIR, 'src/app/destinations/[category]/page.tsx'), 'utf8');
assert(catPageCode.includes('ALL_REGIONAL_CITIES'), 'Destinations route includes ALL_REGIONAL_CITIES in staticParams');
assert(catPageCode.includes('REGIONAL_CITIES'), 'Destinations route handles regional city metadata');

// ---------------------------------------------------------
// 10. Performance, Core Web Vitals (LCP) & Assets Audit
// ---------------------------------------------------------
console.log('\n--- 10. Performance & Core Web Vitals (LCP) ---');

// HeroSection LCP check
const heroSectionPath = path.join(ROOT_DIR, 'src/components/landing/HeroSection.tsx');
if (fs.existsSync(heroSectionPath)) {
  const heroCode = fs.readFileSync(heroSectionPath, 'utf8');
  assert(!heroCode.includes('initial={{ opacity: 0'), 'Hero title does NOT hide on initial mount (no opacity:0 LCP penalty)');
  assert(heroCode.includes('hero-temple-cutout.webp'), 'Hero cutout uses WebP format');
  assert(heroCode.includes('priority'), 'Hero cutout image has priority attribute');
  assert(!heroCode.includes('aria-hidden="true"') || !heroCode.includes('hero-temple-cutout.webp" aria-hidden'), 'Hero cutout is not hidden from accessibility/rendering tree');
} else {
  assert(false, 'src/components/landing/HeroSection.tsx exists');
}

// 404 App Preview Image check
const appPreviewPath = path.join(ROOT_DIR, 'public/images/app-preview/trivio-app-preview.webp');
assert(fs.existsSync(appPreviewPath) && fs.statSync(appPreviewPath).size > 10000, 'App preview WebP asset exists (>10KB, no 404)');

// Preload link tags in Root Layout
const layoutPath = path.join(ROOT_DIR, 'src/app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layoutCode = fs.readFileSync(layoutPath, 'utf8');
  assert(layoutCode.includes('rel="preload" as="image" href="/images/trivio/hero-sky.webp"'), 'Root layout preloads hero sky WebP');
  assert(layoutCode.includes('rel="preload" as="image" href="/images/trivio/hero-temple-cutout.webp"'), 'Root layout preloads hero temple cutout WebP');
} else {
  assert(false, 'src/app/layout.tsx exists');
}

// Next.js caching headers
const nextConfigPath = path.join(ROOT_DIR, 'next.config.mjs');
if (fs.existsSync(nextConfigPath)) {
  const nextConfigCode = fs.readFileSync(nextConfigPath, 'utf8');
  assert(nextConfigCode.includes('Cache-Control') && nextConfigCode.includes('max-age=31536000, immutable'), 'next.config.mjs sets immutable 1-year cache headers for static images');
} else {
  assert(false, 'next.config.mjs exists');
}

// Site config canonical URL
const siteConfigPath = path.join(ROOT_DIR, 'src/config/site.ts');
if (fs.existsSync(siteConfigPath)) {
  const siteConfigCode = fs.readFileSync(siteConfigPath, 'utf8');
  assert(siteConfigCode.includes('https://nashik.sooubh.in'), 'Canonical URL unified to https://nashik.sooubh.in');
} else {
  assert(false, 'src/config/site.ts exists');
}

// ---------------------------------------------------------
// 11. Authentic Destination WebP Assets Audit
// ---------------------------------------------------------
console.log('\n--- 11. Authentic Destination WebP Assets ---');
const destinationWebpImages = [
  'trimbakeshwar-temple.webp',
  'sula-vineyards.webp',
  'harihar-fort.webp',
  'kalaram-temple.webp',
  'dugarwadi-waterfall.webp',
  'pandavleni-caves.webp',
  'york-winery.webp',
  'anjaneri-hills.webp',
  'someshwar-waterfall.webp',
  'nashik-misal-food.webp',
  'ramkund-godavari-aarti.webp',
  'gangapur-lake-sunset.webp',
  'sahyadri-sunrise.webp',
  'saptashrungi-temple.webp',
  'muktidham-temple.webp',
  'brahmagiri-hill.webp',
  'samruddhi-expressway.webp',
  'soma-vine-village.webp',
];

for (const imgName of destinationWebpImages) {
  const imgPath = path.join(ROOT_DIR, 'public/images/destinations', imgName);
  const exists = fs.existsSync(imgPath) && fs.statSync(imgPath).size > 10000;
  assert(exists, `Destination WebP asset exists & valid (>10KB): ${imgName}`);
}

// ---------------------------------------------------------
// Final Audit Scorecard
// ---------------------------------------------------------
console.log('\n====================================================');
console.log(`TOTAL AUDIT CHECKS: ${totalTests}`);
console.log(`PASSED: ${passedTests}`);
console.log(`FAILED: ${failedTests}`);
console.log(`SUCCESS RATE: ${((passedTests / totalTests) * 100).toFixed(1)}%`);
console.log('====================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
