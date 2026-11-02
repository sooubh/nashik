# SEO, Structured Data & Technical Specification 🚀🔍

This document specifies the search engine optimization (SEO) strategy, meta tags, OpenGraph previews, Schema.org JSON-LD structured data, and performance/accessibility requirements for the **TRIVIO** landing page website.

---

## 1. Primary Page Meta Tags

### Head Tags for `index.html`

```html
<!-- Primary Title & Description -->
<title>TRIVIO - The Ultimate Nashik Travel Guide & AI Trip Planner</title>
<meta name="description" content="Explore Nashik's sacred temples, famous vineyards, ancient hill forts, and misty waterfalls. Plan custom multi-day itineraries with TRIVIO's deterministic AI engine and offline guides.">
<meta name="keywords" content="Nashik, Travel Guide, TRIVIO, Trimbakeshwar Temple, Sula Vineyards, Harihar Fort, Wine Tourism India, Maharashtra Tourism, Nashik Itinerary Planner, Offline Travel App">
<meta name="author" content="TRIVIO Team">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<link rel="canonical" href="https://nashikexplore.com/">

<!-- Viewport & Charset -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#006398" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0B0E11" media="(prefers-color-scheme: dark)">

<!-- Favicons & App Icons -->
<link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon.png">
<link rel="icon" type="image/png" sizes="192x192" href="assets/icons/Icon-192.png">
<link rel="apple-touch-icon" sizes="192x192" href="assets/icons/Icon-192.png">
<link rel="manifest" href="/manifest.json">
```

---

## 2. OpenGraph & Social Sharing Meta Tags

```html
<!-- Open Graph / Facebook / WhatsApp / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://nashikexplore.com/">
<meta property="og:title" content="TRIVIO - Explore Nashik Like a Local">
<meta property="og:description" content="Sacred Jyotirlingas, lush vineyards, Sahyadri forts, and custom AI itineraries. Download the official TRIVIO travel companion for Android.">
<meta property="og:image" content="https://nashikexplore.com/assets/branding/app-horizontal-icon.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="TRIVIO Nashik Travel Guide Preview">
<meta property="og:site_name" content="TRIVIO">
<meta property="og:locale" content="en_IN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://nashikexplore.com/">
<meta name="twitter:title" content="TRIVIO - Explore Nashik Like a Local">
<meta name="twitter:description" content="Discover sacred temples, award-winning wineries, and rugged forts with verified timings and AI itineraries.">
<meta name="twitter:image" content="https://nashikexplore.com/assets/branding/app-horizontal-icon.png">
```

---

## 3. Schema.org JSON-LD Structured Data

Embed the following JSON-LD scripts inside the `<head>` of `index.html`:

### 3.1 Mobile Application Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "TRIVIO",
  "operatingSystem": "Android",
  "applicationCategory": "TravelApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Organization",
    "name": "TRIVIO",
    "url": "https://nashikexplore.com/"
  },
  "screenshot": [
    "https://nashikexplore.com/assets/screenshots/home.png",
    "https://nashikexplore.com/assets/screenshots/explore.png",
    "https://nashikexplore.com/assets/screenshots/ai%20planner.png",
    "https://nashikexplore.com/assets/screenshots/saved.png",
    "https://nashikexplore.com/assets/screenshots/profile.png"
  ],
  "softwareVersion": "1.0.0",
  "fileSize": "28MB",
  "downloadUrl": "https://play.google.com/store/apps/details?id=com.nashikexplore.app"
}
</script>
```

### 3.2 Organization & Local Brand Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TRIVIO",
  "url": "https://nashikexplore.com/",
  "logo": "https://nashikexplore.com/assets/branding/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "trivio-support@sooubh.in",
    "contactType": "Customer Support",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Marathi"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "College Road",
    "addressLocality": "Nashik",
    "addressRegion": "Maharashtra",
    "postalCode": "422005",
    "addressCountry": "IN"
  }
}
</script>
```

### 3.3 FAQPage Schema (For Rich Search Snippets)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the TRIVIO app free to download and use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! TRIVIO is 100% free to download on Android via Google Play, offering full destination guides and offline access."
      }
    },
    {
      "@type": "Question",
      "name": "Does TRIVIO work offline without mobile internet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. TRIVIO is built local-first. Guides, timings, emergency contacts, and saved boards are stored locally on your device via Hive storage."
      }
    },
    {
      "@type": "Question",
      "name": "How does TRIVIO's AI Trip Planner prevent inaccurate itineraries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TRIVIO runs deterministic constraint validation that strictly checks physical opening and closing hours, computes realistic road transit speeds, and balances pacing."
      }
    }
  ]
}
</script>
```

---

## 4. Keyword Strategy & Search Intent Matrix

| Keyword Category | Target Search Query | Search Intent | Target Section / URL |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | `TRIVIO app`, `TRIVIO Nashik`, `NashikExplore app` | Navigational | Homepage Hero & Google Play Link |
| **Wine Tourism** | `Sula vineyards tour timings`, `Nashik wine tasting booking`, `Best wineries in Nashik` | Informational / Commercial | Categories `#vineyards` & App Features |
| **Spiritual & Temples**| `Trimbakeshwar VIP pass online`, `Trimbakeshwar darshan timings`, `Kalaram temple Panchavati` | Transactional / Informational | Featured Destinations & App Guides |
| **Adventure & Treks**| `Harihar fort trek difficulty`, `Anjaneri hill trek timings`, `Someshwar waterfall best time` | Informational | Categories `#forts` & Destination Detail |
| **Itinerary Planning**| `Nashik 2 days itinerary`, `Nashik trip planner app`, `Places to visit in Nashik in 1 day` | Commercial / Tool | Interactive Planner Teaser & App CTA |

---

## 5. Technical Performance & Core Web Vitals Checklist

To achieve a **95+ Google Lighthouse Score**:

1. **Largest Contentful Paint (LCP < 2.5s):**
   - Preload primary display font (`Plus Jakarta Sans` or `Outfit`).
   - The hero phone mockup screenshot (`home.png` or `trivio_app_icon.webp`) should be served in modern WebP/AVIF format with `fetchpriority="high"`.
   - Never lazy-load the above-the-fold hero image.

2. **Cumulative Layout Shift (CLS < 0.1):**
   - Explicitly declare `width` and `height` attributes on all images, logos, and phone mockup wrappers (`width="320" height="650"`).
   - Use CSS `font-display: swap` to prevent FOIT (Flash of Invisible Text).

3. **Interaction to Next Paint (INP < 200ms):**
   - Ensure dynamic tab switching in the feature showcase updates the DOM using lightweight class toggles without heavy synchronous loops.
   - Debounce scroll listeners (e.g. navbar background blur transition) using `requestAnimationFrame`.

4. **Accessibility (WCAG 2.1 AA Compliance):**
   - All interactive icons (theme switch, mobile hamburger menu, social links) must contain descriptive `aria-label` tags.
   - Contrast ratio for all text elements must exceed `4.5:1` against their respective light (`#F9F9F9`) and dark (`#0B0E11`) surfaces.
   - Maintain visible focus rings (`focus:ring-2 focus:ring-brand-blue`) for keyboard navigation.

---

## 6. Robots.txt & Sitemap Directives

### `robots.txt`
```txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://nashikexplore.com/sitemap.xml
```

### `sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nashikexplore.com/</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://nashikexplore.com/trip-planner.html</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nashikexplore.com/contact.html</loc>
    <lastmod>2026-11-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```
