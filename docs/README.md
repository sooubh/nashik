# TRIVIO Landing Page & Website Documentation 🚀🗺️

Welcome to the central documentation and asset repository for building the official landing page and web presence for **TRIVIO** (NashikExplore).

This directory contains everything required by UI/UX designers, frontend developers, copywriters, and marketers to build a high-converting, visually stunning, and performance-optimized landing page website for the TRIVIO mobile application.

---

## 📁 Directory Structure & Documentation Index

| File | Description & Purpose | Target Audience |
| :--- | :--- | :--- |
| **[`brand_and_design_system.md`](./brand_and_design_system.md)** | Brand identity, color palette tokens (HEX, RGB, CSS vars), typography hierarchy, spacing grid, shadows, border radius scale, and aesthetic principles. | Designers & Frontend Devs |
| **[`site_structure_and_wireframes.md`](./site_structure_and_wireframes.md)** | Complete architectural sitemap, section-by-section landing page layout, ASCII wireframes for desktop & mobile, navigation flows. | UI/UX & Web Developers |
| **[`content_and_copywriting.md`](./content_and_copywriting.md)** | Production-ready verbatim copy for all website sections: Hero, Value Props, Feature cards, Interactive Planner, FAQs, Testimonials, CTAs, and Footer. | Copywriters & Content Devs |
| **[`app_features_and_data_catalog.md`](./app_features_and_data_catalog.md)** | Exhaustive catalog of all 36 app screens, key app capabilities, algorithm details (AI Trip Planner), and real Nashik places database records (Temples, Vineyards, Forts, Waterfalls). | Product & Fullstack Devs |
| **[`seo_meta_and_technical_spec.md`](./seo_meta_and_technical_spec.md)** | Complete SEO tags, OpenGraph / Twitter cards, JSON-LD Structured Data (Schema.org), performance recommendations, Core Web Vitals, and a11y guidelines. | SEO Specialists & Engineers |
| **[`assets_catalog_and_media_guide.md`](./assets_catalog_and_media_guide.md)** | Complete inventory of all copied logos, app icons, and screen mockups in `./assets/`, with code snippets for responsive images and phone mockups. | Frontend Developers |

---

## 🎨 Asset Inventory (`./assets/`)

All logo variants, launcher icons, platform favicons, and production screenshots from the mobile app are copied directly into this directory for immediate use in web development:

```
docs/websitedetails/assets/
├── branding/
│   ├── logo.png                     # Standard app logo with transparent background (399 KB)
│   ├── trivio_horizontal_logo.jpg   # High-resolution horizontal logo banner with typography
│   ├── app-horizontal-icon.png      # Horizontal app lockup for headers and social cards (485 KB)
│   ├── trivio_app_icon.webp         # Ultra-crisp modern WebP square icon (125 KB)
│   ├── trivio_launcher_icon.png     # Full master Android launcher artwork (5 MB)
│   ├── app-launcher-icon.png        # Production launcher icon PNG (5 MB)
│   └── app-splashscreen-icon.png    # Mobile splashscreen brand mark (5 MB)
├── icons/
│   ├── favicon.png                  # Web favicon (32x32 / 64x64)
│   ├── Icon-192.png                 # PWA / Web Manifest icon 192x192
│   ├── Icon-512.png                 # PWA / Web Manifest icon 512x512
│   ├── Icon-maskable-192.png        # Android adaptive maskable icon 192x192
│   └── Icon-maskable-512.png        # Android adaptive maskable icon 512x512
└── screenshots/
    ├── home.png                     # Destination Discovery Home Screen with categories & spotlights
    ├── explore.png                  # Search & Discovery Screen with filters and quick tags
    ├── ai planner.png               # AI Trip Planner Timeline & Itinerary result screen
    ├── saved.png                    # Wishlist & Saved Collections boards
    └── profile.png                  # User Profile, badges, and offline settings
```

---

## ⚡ Quick Technical Stack Recommendations

When building or updating the landing page website, the following stacks are recommended based on your deployment strategy:

1. **Modern Static / Jamstack (Recommended for maximum speed & SEO):**
   - **Framework:** Astro 4+ or Next.js 14+ (Static Export / App Router)
   - **Styling:** Tailwind CSS v3 / v4 with `@tailwindcss/typography`
   - **Icons:** Lucide Icons (`lucide-react` / `lucide-astro`) or HugeIcons
   - **Hosting:** Vercel, Cloudflare Pages, or Firebase Hosting

2. **Single Page Static HTML (Zero dependency / drop-in):**
   - Modern semantic HTML5
   - Tailwind CSS via CDN or standalone PostCSS CLI
   - Vanilla JS for theme toggle (Dark/Light), interactive screenshot tabs, and mobile navbar

---

## 🚀 How to Use This Kit

1. **To establish brand design & color tokens:** Read [`brand_and_design_system.md`](./brand_and_design_system.md).
2. **To see the page layout and wireframes:** Read [`site_structure_and_wireframes.md`](./site_structure_and_wireframes.md).
3. **To populate text & copy:** Copy directly from [`content_and_copywriting.md`](./content_and_copywriting.md).
4. **To implement SEO and Schema tags:** Copy snippets from [`seo_meta_and_technical_spec.md`](./seo_meta_and_technical_spec.md).
5. **To display images and device mockups:** Refer to [`assets_catalog_and_media_guide.md`](./assets_catalog_and_media_guide.md).
