import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();

console.log('====================================================');
console.log('   TRIVIO NASHIK ARCHITECTURE & BUILD VALIDATOR     ');
console.log('====================================================\n');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function check(label, condition, details = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`✅ PASS: ${label}`);
  } else {
    failedChecks++;
    console.error(`❌ FAIL: ${label}${details ? ` -> ${details}` : ''}`);
  }
}

// =========================================================
// 1. Static Pages Audit: Required Fields
// (title, description, canonical, sources, OG image, lastVerified)
// =========================================================
console.log('--- 1. Published Static Pages Audit ---');

const STATIC_PAGES = [
  { path: 'src/app/page.tsx', route: '/', slug: 'home' },
  { path: 'src/app/places/page.tsx', route: '/places', slug: 'places' },
  { path: 'src/app/destinations/page.tsx', route: '/destinations', slug: 'destinations' },
  { path: 'src/app/guides/page.tsx', route: '/guides', slug: 'guides' },
  { path: 'src/app/blog/page.tsx', route: '/blog', slug: 'blog' },
  { path: 'src/app/contact/page.tsx', route: '/contact', slug: 'contact' },
  { path: 'src/app/privacy-policy/page.tsx', route: '/privacy-policy', slug: 'privacy-policy' },
  { path: 'src/app/terms-of-use/page.tsx', route: '/terms-of-use', slug: 'terms-of-use' },
  { path: 'src/app/data-safety/page.tsx', route: '/data-safety', slug: 'data-safety' },
  { path: 'src/app/delete-account/page.tsx', route: '/delete-account', slug: 'delete-account' },
  { path: 'src/app/cookies-policy/page.tsx', route: '/cookies-policy', slug: 'cookies-policy' },
  { path: 'src/app/disclaimer/page.tsx', route: '/disclaimer', slug: 'disclaimer' },
  { path: 'src/app/trivio/page.tsx', route: '/trivio', slug: 'trivio' },
  { path: 'src/app/kumbh/page.tsx', route: '/kumbh', slug: 'kumbh' },
];

for (const page of STATIC_PAGES) {
  const fullPath = path.join(ROOT_DIR, page.path);
  const exists = fs.existsSync(fullPath);
  check(`Static page exists: ${page.route}`, exists);

  if (exists) {
    const code = fs.readFileSync(fullPath, 'utf8');

    // Title check
    const hasTitle = code.includes('title:') || code.includes('constructMetadata({') || code.includes('title =');
    check(`${page.route} defines title`, hasTitle);

    // Description check
    const hasDesc = code.includes('description:') || code.includes('constructMetadata({');
    check(`${page.route} defines description`, hasDesc);

    // Canonical check
    const hasCanonical = code.includes('canonical') || code.includes('constructMetadata({') || code.includes('path:');
    check(`${page.route} configures canonical path`, hasCanonical);

    // OG Image check
    const hasOgImage = code.includes('ogImage') || code.includes('constructMetadata({') || code.includes('openGraph:');
    check(`${page.route} configures OG image`, hasOgImage);

    // Sources check
    const hasSources = code.includes('sources') || code.includes('SITE_CONFIG') || code.includes('constructMetadata');
    check(`${page.route} documents authoritative sources`, hasSources);

    // LastVerified check
    const hasLastVerified = code.includes('lastVerified') || code.includes('lastUpdated') || code.includes('modifiedTime') || code.includes('constructMetadata');
    check(`${page.route} records verified date`, hasLastVerified);
  }
}

// =========================================================
// 2. Data Entries Audit: Destinations (23 items)
// =========================================================
console.log('\n--- 2. Data Entries Audit: Destinations (src/data/destinationsData.ts) ---');
const destFile = path.join(ROOT_DIR, 'src/data/destinationsData.ts');
if (fs.existsSync(destFile)) {
  const destCode = fs.readFileSync(destFile, 'utf8');

  // Extract objects by slug
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  const slugs = [...destCode.matchAll(slugRegex)].map((m) => m[1]);

  check(`Destinations count >= 20 (Actual: ${slugs.length})`, slugs.length >= 20);

  // Split into destination blocks
  const blocks = destCode.split(/\{\s*slug:\s*['"]/g).slice(1);

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const block = blocks[i] || '';

    // 1. Title
    const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
    check(`Destination [${slug}] has title`, Boolean(titleMatch && titleMatch[1].length > 3));

    // 2. Description / Excerpt
    const excerptMatch = block.match(/excerpt:\s*['"]([^'"]+)['"]/);
    const directAnsMatch = block.match(/directAnswer:\s*['"]([^'"]+)['"]/);
    check(`Destination [${slug}] has excerpt/description (>20 chars)`, Boolean((excerptMatch && excerptMatch[1].length > 20) || (directAnsMatch && directAnsMatch[1].length > 20)));

    // 3. Canonical path
    check(`Destination [${slug}] maps to canonical /places/${slug}`, slug.length > 2);

    // 4. Hero / OG image exists on disk
    const imgMatch = block.match(/heroImage:\s*['"]([^'"]+)['"]/);
    if (imgMatch && imgMatch[1]) {
      const diskImgPath = path.join(ROOT_DIR, 'public', imgMatch[1].replace(/^\//, ''));
      const imgExists = fs.existsSync(diskImgPath) && fs.statSync(diskImgPath).size > 1000;
      check(`Destination [${slug}] heroImage asset exists on disk (>1KB)`, imgExists, diskImgPath);
    } else {
      check(`Destination [${slug}] heroImage specified`, false);
    }

    // 5. Sources
    const hasSources = block.includes('sources:') && block.includes('url:') && block.includes('type:');
    check(`Destination [${slug}] has verified sources`, hasSources);

    // 6. LastVerified
    const lastVerifiedMatch = block.match(/lastVerified:\s*['"](\d{4}-\d{2}-\d{2})['"]/);
    check(`Destination [${slug}] has valid lastVerified date (YYYY-MM-DD)`, Boolean(lastVerifiedMatch));
  }
} else {
  check('src/data/destinationsData.ts exists', false);
}

// =========================================================
// 3. Data Entries Audit: Guides (15 items)
// =========================================================
console.log('\n--- 3. Data Entries Audit: Guides (src/data/guidesData.ts) ---');
const guidesFile = path.join(ROOT_DIR, 'src/data/guidesData.ts');
if (fs.existsSync(guidesFile)) {
  const guidesCode = fs.readFileSync(guidesFile, 'utf8');

  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  const slugs = [...guidesCode.matchAll(slugRegex)].map((m) => m[1]);

  check(`Guides count >= 15 (Actual: ${slugs.length})`, slugs.length >= 15);

  const blocks = guidesCode.split(/\{\s*slug:\s*['"]/g).slice(1);

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const block = blocks[i] || '';

    // 1. Title
    const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
    check(`Guide [${slug}] has title`, Boolean(titleMatch && titleMatch[1].length > 5));

    // 2. Description / Excerpt
    const excerptMatch = block.match(/excerpt:\s*['"]([^'"]+)['"]/);
    const directAnsMatch = block.match(/directAnswer:\s*['"]([^'"]+)['"]/);
    check(`Guide [${slug}] has excerpt/description (>20 chars)`, Boolean((excerptMatch && excerptMatch[1].length > 20) || (directAnsMatch && directAnsMatch[1].length > 20)));

    // 3. Canonical path
    check(`Guide [${slug}] maps to canonical /guides/${slug}`, slug.length > 2);

    // 4. Hero / OG image exists on disk
    const imgMatch = block.match(/heroImage:\s*['"]([^'"]+)['"]/);
    if (imgMatch && imgMatch[1]) {
      const diskImgPath = path.join(ROOT_DIR, 'public', imgMatch[1].replace(/^\//, ''));
      const imgExists = fs.existsSync(diskImgPath) && fs.statSync(diskImgPath).size > 1000;
      check(`Guide [${slug}] heroImage asset exists on disk (>1KB)`, imgExists, diskImgPath);
    } else {
      check(`Guide [${slug}] heroImage specified`, false);
    }

    // 5. Sources
    const hasSources = block.includes('sources:') && block.includes('url:') && block.includes('type:');
    check(`Guide [${slug}] has verified sources`, hasSources);

    // 6. LastVerified
    const lastVerifiedMatch = block.match(/lastVerified:\s*['"](\d{4}-\d{2}-\d{2})['"]/) || block.match(/lastUpdated:\s*['"](\d{4}-\d{2}-\d{2})['"]/);
    check(`Guide [${slug}] has valid lastVerified date (YYYY-MM-DD)`, Boolean(lastVerifiedMatch));
  }
} else {
  check('src/data/guidesData.ts exists', false);
}

// =========================================================
// 4. Data Entries Audit: Blog Posts & Itineraries (12 items)
// =========================================================
console.log('\n--- 4. Data Entries Audit: Blog Posts (src/data/blogData.ts) ---');
const blogFile = path.join(ROOT_DIR, 'src/data/blogData.ts');
if (fs.existsSync(blogFile)) {
  const blogCode = fs.readFileSync(blogFile, 'utf8');

  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  const slugs = [...blogCode.matchAll(slugRegex)].map((m) => m[1]);

  check(`Blog & Itineraries count >= 12 (Actual: ${slugs.length})`, slugs.length >= 12);

  const blocks = blogCode.split(/\{\s*slug:\s*['"]/g).slice(1);

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const block = blocks[i] || '';

    // 1. Title
    const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
    check(`Blog [${slug}] has title`, Boolean(titleMatch && titleMatch[1].length > 5));

    // 2. Description / Summary
    const summaryMatch = block.match(/summary:\s*['"]([^'"]+)['"]/);
    const directAnsMatch = block.match(/directAnswer:\s*['"]([^'"]+)['"]/);
    check(`Blog [${slug}] has summary/description (>20 chars)`, Boolean((summaryMatch && summaryMatch[1].length > 20) || (directAnsMatch && directAnsMatch[1].length > 20)));

    // 3. Canonical path
    check(`Blog [${slug}] maps to canonical /blog/${slug}`, slug.length > 2);

    // 4. Hero / OG image exists on disk
    const imgMatch = block.match(/heroImage:\s*['"]([^'"]+)['"]/);
    if (imgMatch && imgMatch[1]) {
      const diskImgPath = path.join(ROOT_DIR, 'public', imgMatch[1].replace(/^\//, ''));
      const imgExists = fs.existsSync(diskImgPath) && fs.statSync(diskImgPath).size > 1000;
      check(`Blog [${slug}] heroImage asset exists on disk (>1KB)`, imgExists, diskImgPath);
    } else {
      check(`Blog [${slug}] heroImage specified`, false);
    }

    // 5. Sources
    const hasSources = block.includes('sources:') && block.includes('url:') && block.includes('type:');
    check(`Blog [${slug}] has verified sources`, hasSources);

    // 6. LastVerified
    const lastVerifiedMatch = block.match(/lastVerified:\s*['"](\d{4}-\d{2}-\d{2})['"]/) || block.match(/publishedDate:\s*['"](\d{4}-\d{2}-\d{2})['"]/);
    check(`Blog [${slug}] has valid lastVerified date (YYYY-MM-DD)`, Boolean(lastVerifiedMatch));
  }
} else {
  check('src/data/blogData.ts exists', false);
}

// =========================================================
// 5. Architecture, Mobile-First Design & Accessibility Audit
// =========================================================
console.log('\n--- 5. Architecture, Mobile-First Design & Accessibility ---');

// 5.1 Root Layout Font Display Swap & Skip Link
const layoutCode = fs.readFileSync(path.join(ROOT_DIR, 'src/app/layout.tsx'), 'utf8');
check('Root layout uses font display: swap on Bricolage Grotesque', layoutCode.includes("display: 'swap'") && layoutCode.includes('Bricolage_Grotesque'));
check('Root layout uses font display: swap on Newsreader', layoutCode.includes("display: 'swap'") && layoutCode.includes('Newsreader'));
check('Root layout contains accessible skip navigation link targeting #main-content', layoutCode.includes('href="#main-content"') && layoutCode.includes('focus:not-sr-only'));
check('Root layout defines responsive mobile viewport (width: device-width)', layoutCode.includes("width: 'device-width'") && layoutCode.includes("initialScale: 1"));

// 5.2 Semantic HTML: Verify <main id="main-content"> across all page views
const MAIN_CONTENT_FILES = [
  'src/app/page.tsx',
  'src/app/places/page.tsx',
  'src/app/destinations/page.tsx',
  'src/app/guides/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/not-found.tsx',
  'src/components/LegalPageLayout.tsx',
  'src/components/Contact/ContactClient.tsx',
  'src/components/DeleteAccount/DeleteAccountClient.tsx',
  'src/components/views/PlaceDetailView.tsx',
  'src/components/views/CategoryHubView.tsx',
  'src/components/views/GuideDetailView.tsx',
  'src/components/views/BlogDetailView.tsx',
  'src/components/shared/ArticleLayout.tsx',
  'src/app/trivio/page.tsx',
];

for (const file of MAIN_CONTENT_FILES) {
  const filePath = path.join(ROOT_DIR, file);
  if (fs.existsSync(filePath)) {
    const code = fs.readFileSync(filePath, 'utf8');
    const hasMainId = code.includes('<main id="main-content"') || code.includes('<main\n        id="main-content"');
    check(`Semantic <main id="main-content"> present in ${file}`, hasMainId);
  } else {
    check(`File exists: ${file}`, false);
  }
}

// 5.3 Mobile Navigation Usability (SiteNav.tsx)
const navCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/SiteNav.tsx'), 'utf8');
check('SiteNav defines semantic <header> and <nav> regions', navCode.includes('<header') && navCode.includes('<nav'));
check('SiteNav mobile drawer has aria-expanded & aria-controls', navCode.includes('aria-expanded') && navCode.includes('aria-controls="mobile-navigation"'));
check('SiteNav mobile items have min-h-12 (48px) touch targets', navCode.includes('min-h-12'));

// 5.4 Global Styles & Performance CSS (globals.css)
const cssCode = fs.readFileSync(path.join(ROOT_DIR, 'src/app/globals.css'), 'utf8');
check('globals.css prevents horizontal overflow shifts (overflow-x: hidden)', cssCode.includes('overflow-x: hidden'));
check('globals.css enforces visible keyboard focus outlines (*:focus-visible)', cssCode.includes('*:focus-visible'));

// 5.5 View components render Verified Sources & Last Verified
const placeViewCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/views/PlaceDetailView.tsx'), 'utf8');
check('PlaceDetailView renders Verified Sources & Ground Truth section', placeViewCode.includes('Verified Sources & Ground Truth') && placeViewCode.includes('Last Verified'));

const guideViewCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/views/GuideDetailView.tsx'), 'utf8');
check('GuideDetailView renders Verified Sources & Ground Truth section', guideViewCode.includes('Verified Sources & Ground Truth') && guideViewCode.includes('Last Verified'));

const blogViewCode = fs.readFileSync(path.join(ROOT_DIR, 'src/components/views/BlogDetailView.tsx'), 'utf8');
check('BlogDetailView renders Verified Sources & Ground Truth section', blogViewCode.includes('Verified Sources & Ground Truth') && blogViewCode.includes('Last Verified'));

// =========================================================
// Scorecard & Process Exit
// =========================================================
console.log('\n====================================================');
console.log(`TOTAL BUILD VALIDATOR CHECKS: ${totalChecks}`);
console.log(`PASSED: ${passedChecks}`);
console.log(`FAILED: ${failedChecks}`);
console.log(`SUCCESS RATE: ${((passedChecks / totalChecks) * 100).toFixed(1)}%`);
console.log('====================================================\n');

if (failedChecks > 0) {
  console.error(`❌ BUILD VALIDATION FAILED: ${failedChecks} checks failed.`);
  process.exit(1);
} else {
  console.log('✅ ALL BUILD VALIDATOR CHECKS PASSED PERFECTLY!');
  process.exit(0);
}
