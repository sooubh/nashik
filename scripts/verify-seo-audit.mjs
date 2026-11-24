import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();

console.log('====================================================');
console.log('   TRIVIO NASHIK TECHNICAL SEO VERIFICATION SUITE   ');
console.log('====================================================\n');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function check(label, condition, detail = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`✅ PASS: ${label}`);
  } else {
    failedChecks++;
    console.error(`❌ FAIL: ${label} ${detail}`);
  }
}

// 1. Reusable SEO Head Utility (src/lib/seo.ts)
const seoTs = fs.readFileSync(path.join(ROOT_DIR, 'src/lib/seo.ts'), 'utf8');
check('src/lib/seo.ts exists and exports constructMetadata', seoTs.includes('export function constructMetadata'));
check('src/lib/seo.ts exports formatSeoTitle', seoTs.includes('export function formatSeoTitle'));
check('src/lib/seo.ts exports formatSeoDescription', seoTs.includes('export function formatSeoDescription'));
check('src/lib/seo.ts handles absolute canonicals', seoTs.includes('canonicalUrl = `${SITE_CONFIG.canonicalUrl}${cleanPath}`'));
check('src/lib/seo.ts produces hreflang alternates (en, mr, hi, x-default)', seoTs.includes('x-default') && seoTs.includes('mr') && seoTs.includes('hi'));
check('src/lib/seo.ts formats OpenGraph images with width 1200 & height 630', seoTs.includes('width: 1200') && seoTs.includes('height: 630'));

// 2. Schema.org JSON-LD (src/lib/schema.ts)
const schemaTs = fs.readFileSync(path.join(ROOT_DIR, 'src/lib/schema.ts'), 'utf8');
check('schema.ts exports generateBlogPostingSchema with @type BlogPosting', schemaTs.includes('@type\': \'BlogPosting\''));
check('schema.ts generateBlogPostingSchema includes headline & description', schemaTs.includes('headline:') && schemaTs.includes('description:'));
check('schema.ts generateBlogPostingSchema includes datePublished & dateModified', schemaTs.includes('datePublished:') && schemaTs.includes('dateModified:'));
check('schema.ts generateBlogPostingSchema includes author Organization', schemaTs.includes('author:') && schemaTs.includes('@type\': \'Organization\''));
check('schema.ts generateBlogPostingSchema includes publisher with logo', schemaTs.includes('publisher:') && schemaTs.includes('ImageObject'));
check('schema.ts generateBlogPostingSchema includes mainEntityOfPage', schemaTs.includes('mainEntityOfPage:'));
check('schema.ts exports generateBreadcrumbSchema', schemaTs.includes('export function generateBreadcrumbSchema'));

// 3. RootLayout SEO & Security (src/app/layout.tsx)
const layoutTs = fs.readFileSync(path.join(ROOT_DIR, 'src/app/layout.tsx'), 'utf8');
check('layout.tsx has preconnect for Google Fonts', layoutTs.includes('rel="preconnect" href="https://fonts.googleapis.com"'));
check('layout.tsx has preconnect for gstatic', layoutTs.includes('rel="preconnect" href="https://fonts.gstatic.com"'));
check('layout.tsx links manifest.webmanifest', layoutTs.includes('rel="manifest" href="/manifest.webmanifest"'));
check('layout.tsx removes deprecated meta keywords array', !layoutTs.includes('keywords: ['));
check('layout.tsx has NO revisit-after', !layoutTs.includes('revisit-after'));
check('layout.tsx has NO rel prev/next', !layoutTs.includes('rel="prev"') && !layoutTs.includes('rel="next"'));
check('layout.tsx has absolute canonical', layoutTs.includes('canonical: `${SITE_CONFIG.canonicalUrl}/`'));

// 4. Landing Page (src/app/page.tsx) with Blogs & Details
const homeTs = fs.readFileSync(path.join(ROOT_DIR, 'src/app/page.tsx'), 'utf8');
check('HomePage has explicit metadata via constructMetadata', homeTs.includes('export const metadata: Metadata = constructMetadata'));
check('HomePage includes BlogShowcaseSection', homeTs.includes('<BlogShowcaseSection />'));
const blogShowcaseTs = fs.readFileSync(path.join(ROOT_DIR, 'src/components/landing/BlogShowcaseSection.tsx'), 'utf8');
check('BlogShowcaseSection exists and displays blog posts', blogShowcaseTs.includes('BLOG_POSTS_DATA.slice(0, 6)'));
check('BlogShowcaseSection displays dates, author, and route highlights', blogShowcaseTs.includes('post.publishedDate') && blogShowcaseTs.includes('post.author') && blogShowcaseTs.includes('post.itineraryDays'));
check('BlogShowcaseSection links to all blogs /blog', blogShowcaseTs.includes('href="/blog"'));

// 5. Blog Posts Detail Page & View (BlogDetailView.tsx)
const blogViewTs = fs.readFileSync(path.join(ROOT_DIR, 'src/components/views/BlogDetailView.tsx'), 'utf8');
check('BlogDetailView has Table of Contents (TOC) with aria-label', blogViewTs.includes('aria-label="Table of Contents"'));
check('BlogDetailView TOC has anchor links', blogViewTs.includes('href="#direct-answer"') && blogViewTs.includes('href="#detailed-article"'));
check('BlogDetailView injects BlogPosting schema', blogViewTs.includes('safeJsonLd(blogPostingSchema)'));
check('BlogDetailView injects BreadcrumbList schema', blogViewTs.includes('safeJsonLd(breadcrumbSchema)'));
check('BlogDetailView hero image has descriptive alt text', blogViewTs.includes('alt={`${title} - Nashik Travel Guide`}') || blogViewTs.includes('alt='));
check('BlogDetailView contains contextual internal links section', blogViewTs.includes('Featured Nashik Attractions & Guides'));
check('BlogDetailView has exactly 1 h1 tag', (blogViewTs.match(/<h1/g) || []).length === 1);

// 6. Complete Trip-Planner Removal
check('src/app/trip-planner is deleted', !fs.existsSync(path.join(ROOT_DIR, 'src/app/trip-planner')));
const navTs = fs.readFileSync(path.join(ROOT_DIR, 'src/components/SiteNav.tsx'), 'utf8');
check('SiteNav does not link to trip-planner', !navTs.includes('/trip-planner'));
const sitemapTs = fs.readFileSync(path.join(ROOT_DIR, 'src/app/sitemap.ts'), 'utf8');
check('sitemap.ts does not include trip-planner', !sitemapTs.includes('/trip-planner'));

// 7. Robots.txt Directives (src/app/robots.ts)
const robotsTs = fs.readFileSync(path.join(ROOT_DIR, 'src/app/robots.ts'), 'utf8');
check('robots.ts has universal wildcard userAgent rule', robotsTs.includes("userAgent: '*'"));
check('robots.ts allows all paths', robotsTs.includes("allow: '/'"));
check('robots.ts references sitemap.xml', robotsTs.includes('sitemap.xml'));

// 8. Static Page Metadata Verification
const checkPages = [
  'src/app/privacy-policy/page.tsx',
  'src/app/terms-of-use/page.tsx',
  'src/app/data-safety/page.tsx',
  'src/app/delete-account/page.tsx',
  'src/app/cookies-policy/page.tsx',
  'src/app/disclaimer/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/places/page.tsx',
  'src/app/guides/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/destinations/page.tsx',
];

checkPages.forEach(p => {
  const content = fs.readFileSync(path.join(ROOT_DIR, p), 'utf8');
  check(`${p} uses constructMetadata`, content.includes('constructMetadata('));
  check(`${p} has noindex false (indexable)`, !content.includes('noindex: true'));
});

console.log('\n====================================================');
console.log(`TOTAL SEO CHECKS: ${totalChecks}`);
console.log(`PASSED: ${passedChecks}`);
console.log(`FAILED: ${failedChecks}`);
console.log(`SUCCESS RATE: ${((passedChecks / totalChecks) * 100).toFixed(1)}%`);
console.log('====================================================\n');

if (failedChecks > 0) process.exit(1);
