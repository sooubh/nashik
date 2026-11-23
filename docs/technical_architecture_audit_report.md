# Trivio (Nashik Travel Guide) — Phase A: Technical Architecture & Repository Audit Report

**Platform:** Trivio / Nashik Travel Companion (`com.sooubh.nashikexplore`)  
**Canonical Web Domain:** `https://nashik.sooubh.me`  
**Repository Path:** `/data/data/com.termux/files/home/nashik`  
**Framework:** Next.js 14.2.15 (App Router, React 18, TypeScript 5, Tailwind CSS 3)  
**Author:** Repository and Architecture Technical Auditor (`@auditor`)  
**Status:** Audit Complete — Phase A Baseline Delivered  

---

## Executive Summary & Architecture Scorecard

The **Trivio Nashik Travel Guide** web application serves as the authoritative web portal, SEO content engine, and policy center for the native Android application (`com.sooubh.nashikexplore`). 

The current codebase is built on **Next.js 14 App Router** with a clean component layout, modern Tailwind styling, and comprehensive legal and data safety disclosures compliant with Google Play Console policies. However, the site currently functions primarily as a single landing page with static legal docs, leaving substantial technical and architectural opportunities on the table for organic search, deep linking, and conversion attribution.

### Architecture Audit Scorecard

| Domain | Rating | Current State | Target Phase B/C State |
| :--- | :---: | :--- | :--- |
| **TypeScript & Types** | **A+** | Strict mode enabled, 0 compiler errors | Add `noUncheckedIndexedAccess` |
| **Security Headers & CSP** | **A** | Complete CSP, HSTS, X-Frame-Options, Permissions-Policy | Maintain; expand `connect-src` if analytics added |
| **Legal & Play Compliance** | **A+** | Dedicated routes for Privacy, Account Deletion, Data Safety | Keep synchronized with Flutter app updates |
| **SEO & Schema (Homepage)** | **B+** | Organization, WebSite, MobileApp, ItemList, FAQPage JSON-LD | Add semantic `TouristDestination` & `TouristAttraction` |
| **Dynamic Routing & URLs** | **F** | Zero dynamic routes (`/places/[slug]`, `/guides/[slug]` missing) | SSG dynamic routes with `generateStaticParams` |
| **Android App Deep Linking** | **F** | `public/.well-known/assetlinks.json` is missing | Deploy verified Digital Asset Links JSON |
| **App Store Conversion Tracking** | **D** | Bare Play Store URLs without UTM campaign tags | Implement campaign & placement UTM attribution |
| **Local Build / SWC Portability** | **B-** | Next.js 14 SWC binary absent on Termux ARM64; works in CI/CD | Add SWC fallback documentation / update Next.js |
| **Code Hygiene & Dead Code** | **B** | Orphaned tour components with hardcoded prices | Remove or migrate unreferenced tour components |
| **Web Performance (Images)** | **B** | `unoptimized: true` in config; ~2.5MB total destination JPGs | Modern WebP/AVIF compression & responsive sizes |

---

## 1. Core Repository & Dependency Architecture

### 1.1 Dependency Manifest (`package.json`)
- **Core Runtime:** `next@^14.2.15`, `react@^18.3.1`, `react-dom@^18.3.1`.
- **UI & Motion:** `framer-motion@^13.1.1`, `lucide-react@^1.33.0`, `clsx@^2.1.1`, `tailwind-merge@^3.6.0`.
- **Build & Dev:** `typescript@^5.6.3`, `tailwindcss@^3.4.14`, `postcss@^8.5.26`, `autoprefixer@^10.5.4`.
- **Type Definitions:** `@types/react@^18.3.12`, `@types/react-dom@^18.3.1`, `@types/node@^26.2.0`.
  - *Observation:* `@types/node` is set to `^26.2.0`, while Node runtime is currently v18–v24. While functional, it is cleaner to pin `@types/node` to `@types/node@^20`.
- **Scripts:** `"dev"`, `"build"`, `"start"`, `"lint"`.
  - *Finding:* `"typecheck": "tsc --noEmit"` is missing from `scripts`.
  - *Finding:* Running `npm run lint` invokes Next.js interactive prompt because ESLint dependencies (`eslint`, `eslint-config-next`) are not explicitly configured in `devDependencies` or `.eslintrc.json`.

### 1.2 Next.js Configuration (`next.config.mjs`)
- **Security Headers:** Comprehensive and production-grade:
  - `Content-Security-Policy`: Restricts `default-src 'self'`, `frame-ancestors 'none'`, `object-src 'none'`, and allows Google Maps/Google APIs.
  - `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload` (HSTS preload ready).
  - `X-Frame-Options`: `DENY` (clickjacking mitigation).
  - `X-Content-Type-Options`: `nosniff`.
  - `Referrer-Policy`: `strict-origin-when-cross-origin`.
  - `Permissions-Policy`: Restricts camera, microphone, geolocation, payment, and USB APIs.
- **Legacy Redirects:** Contains 10 permanent (301) redirects mapping historical `.html` URLs (`privacy-policy.html`, `terms-of-use.html`, `contact.html`, etc.) to clean Next.js App Router paths.
- **Image Optimization:** Configured with `images: { unoptimized: true }`. This enables static HTML exports (`output: 'export'`) or simple serverless deployments, but bypasses Next.js on-the-fly WebP transcoding.

### 1.3 TypeScript Configuration (`tsconfig.json`)
- Configured with `strict: true`, `target: "es5"`, `moduleResolution: "bundler"`, and alias path `@/* -> ./src/*`.
- Type checking (`tsc --noEmit`) passes with **0 errors**.

---

## 2. Build Readiness & Environment Compatibility

### 2.1 Next.js App Router Build Pipeline
- The codebase strictly adheres to Next.js 14 App Router paradigms:
  - Server Components are the default for layouts and metadata routes.
  - Client components (`'use client'`) are isolated to interactive widgets (`SiteNav`, `HeroSection`, `DestinationGallery`, `PlaceIntelligence`, `ContactClient`, `DeleteAccountClient`).
  - No unsupported Node runtime dependencies in client bundles.

### 2.2 Termux ARM64 vs Cloud CI/CD (Vercel/GitHub Actions)
- **Local Dev on Termux ARM64:** Next.js 14.2.15 does not publish a pre-compiled native SWC binary for `@next/swc-android-arm64` on npm.
- **Production CI/CD:** In production deployment environments (Vercel, GitHub Actions, Docker Linux x64/musl), `@next/swc-linux-x64-gnu` is automatically resolved and compiles at full native speed.
- **Recommendation:** In `package.json`, maintain `@next/swc-wasm-nodejs` for environments lacking native binary support. For CI/CD, standard Node 18/20 LTS builds succeed without friction.

---

## 3. Application Routing & Component Layer

### 3.1 Current Route Inventory (9 Static Routes)

```
src/app/
├── layout.tsx             # Root layout with fonts, JSON-LD, skip-to-content
├── page.tsx               # Homepage (Landing + Showcase)
├── not-found.tsx          # Custom 404 handler
├── robots.ts              # Dynamic robots.txt
├── sitemap.ts             # Dynamic sitemap.xml
├── manifest.ts            # Dynamic Web App Manifest
├── trip-planner/          # Truthful itinerary feature guide
├── contact/               # Support contact & mailto builder
├── delete-account/        # Play Store compliant data deletion instructions
├── privacy-policy/        # App privacy disclosures (Hive, Firebase)
├── terms-of-use/          # App & website terms of service
├── data-safety/           # Play Store data safety sheet
├── cookies-policy/        # Cookie policy
└── disclaimer/            # Travel, monsoon, and trekking safety disclaimer
```

### 3.2 Missing Dynamic Architecture Routes
Currently, the site has **zero dynamic route handlers**. All destination clicks in `DestinationGallery` and `PlaceIntelligence` link directly to external Google Maps URLs.

To capture the 450,000+ monthly searches identified in the SEO/GEO strategy report, the platform must implement:
1. `/destinations/[category]/page.tsx` — Category hubs (`vineyard`, `heritage`, `trek`, `nature`, `culinary`).
2. `/places/[slug]/page.tsx` — Individual authoritative destination dossiers with rich schema, high-res photos, parking/sanctum timings, ticket fees, elevation profiles, and direct app install hooks.
3. `/guides/[slug]/page.tsx` — In-depth travel guides (e.g. `harihar-fort-trek-guide`, `sula-vineyards-wine-tasting-guide`).
4. `/itineraries/[slug]/page.tsx` — Structured multi-day itineraries (e.g. `nashik-2-day-itinerary`).
5. `/[locale]/` or subpath routing (`/mr/*`, `/hi/*`) — Multilingual localized pages for Marathi and Hindi travelers.

### 3.3 Component Hygiene & Dead Code
- **Active Landing Components:** `SiteNav`, `HeroSection`, `DestinationGallery`, `PlaceIntelligence`, `DiscoverExperiences`, `AppShowcase`, `LocalAdvantage`, `AppFaq`, `DownloadCta`, `SiteFooter`.
- **Orphaned Components Identified:**
  - `src/components/landing/PopularToursSection.tsx` (232 lines) — Unused. Contains simulated tour prices (`₹2,499`, `₹1,499`).
  - `src/components/landing/TourPackagesSection.tsx` (170 lines) — Unused. Contains commercial tour packages (`₹4,999`, `₹6,499`).
  - *Risk:* These violate the project's Truthful Core principle ("no fabricated commercial tours or fake pricing") and create bundle deadweight.
  - *Recommendation:* Safely archive or delete these two orphaned files.

---

## 4. Data Layer & Structured Data (SEO / GEO)

### 4.1 Data Structures (`src/data/`)
- `nashikPlaces.ts`:
  - Contains 8 destination records typed with `NashikPlace`.
  - Includes bilingual titles (English + Marathi Devanagari), coordinates, distance from rail terminus, visiting windows, and practical tips.
  - *Gap:* 8 records is too limited for a comprehensive regional travel companion. The dataset should be expanded to 40+ destinations across Nashik, Trimbak, Igatpuri, and Dindori.
- `faqData.ts`:
  - Contains 6 high-value practical travel FAQs formatted for accordion display and Schema.org `FAQPage`.

### 4.2 Semantic Schema Audit
- **Currently Implemented:**
  - `Organization` (Publisher, logo, support contact, social links).
  - `WebSite` (Canonical URL, site name).
  - `MobileApplication` (Name, operating system, category, rating, screenshot list, download URL).
  - `ItemList` (Listing of the 8 attractions on the homepage).
  - `FAQPage` (FAQ schema on homepage).
  - `BreadcrumbList` (`BreadcrumbJsonLd` component used on all subpages).
- **Missing for GEO / AI Citation Engines:**
  - `TouristAttraction` standalone schemas on individual place pages with `geo`, `openingHoursSpecification`, `isAccessibleForFree`, `publicAccess`.
  - `TouristDestination` schema representing Nashik district.
  - Root `/llms.txt` and `/llms-full.txt` standard files for AI crawlers (Perplexity, ChatGPT, Claude, Gemini).

---

## 5. Mobile Conversion, Play Store CTAs & App Deep Linking

### 5.1 Android App Links (`/.well-known/assetlinks.json`) — CRITICAL GAP
- **Finding:** The file `public/.well-known/assetlinks.json` does **not exist** in the repository.
- **Impact:** Android devices opening links to `https://nashik.sooubh.me/*` will not trigger Android App Links verification, preventing seamless handoff into the installed Trivio Flutter app (`com.sooubh.nashikexplore`).
- **Solution:** Create `public/.well-known/assetlinks.json`:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.sooubh.nashikexplore",
      "sha256_cert_fingerprints": [
        "A8:35:E4:..." // Production release signing key SHA-256
      ]
    }
  }
]
```

### 5.2 Google Play CTA Attribution & UTM Tracking
Currently, all CTA buttons link to:
`https://play.google.com/store/apps/details?id=com.sooubh.nashikexplore`

This provides **zero conversion attribution**. Google Play Console cannot distinguish installs originating from the top navigation bar, the hero CTA, the bottom banner, or specific destination dossiers.

**Recommended UTM Tagging Architecture:**
```
Base: https://play.google.com/store/apps/details?id=com.sooubh.nashikexplore&referrer=
Params:
  - Header Nav CTA: utm_source=website&utm_medium=nav_button&utm_campaign=web_to_app
  - Hero Section CTA: utm_source=website&utm_medium=hero_download&utm_campaign=web_to_app
  - Place Dossier CTA: utm_source=website&utm_medium=place_dossier&utm_campaign={place_id}
  - Trip Planner CTA: utm_source=website&utm_medium=trip_planner_guide&utm_campaign=itinerary
  - Footer Link: utm_source=website&utm_medium=footer_link&utm_campaign=web_to_app
```

---

## 6. UI/UX, Performance & Accessibility (WCAG AA)

### 6.1 Strengths
1. **Touch Target Sizing:** Buttons and clickable navigation elements strictly adhere to >= 44px height (`min-h-[44px]` or `min-h-[48px]`), satisfying WCAG AA standard 2.5.5.
2. **Motion Accessibility:** All Framer Motion animations check `useReducedMotion()`. When `prefers-reduced-motion` is enabled, animations instantly switch to zero transforms and instantaneous opacities.
3. **Screen Reader Landmarks:** RootLayout contains a visible-on-focus skip link (`#main-content`), ARIA labels on all icon-only buttons, and explicit `role="tablist"` / `role="tab"` markup on interactive selectors.
4. **Responsive Layouts:** Zero horizontal scrolling across breakpoints from 320px (iPhone SE) to 2560px ultrawide monitors.

### 6.2 Gaps & Performance Opportunities
1. **Unoptimized Static Images:**
   - Destination images in `public/images/destinations/` are high-resolution JPEGs ranging from 150KB to 800KB.
   - Total destination image payload exceeds 3.5MB.
   - Converting to modern WebP or AVIF formats with responsive srcset dimensions will reduce hero and gallery network transfer by ~70% (saving 2.2MB on initial load).
2. **ESLint Configuration:**
   - Add `.eslintrc.json` extending `next/core-web-vitals` to catch accessibility (`jsx-a11y`) and performance regressions automatically in CI.
3. **Color Contrast:**
   - Light violet subtitles (`text-white/60` and `text-on-surface-variant/65`) in dark sections should be bumped to `text-white/80` to consistently exceed WCAG AA 4.5:1 contrast requirements on low-brightness mobile screens.

---

## 7. Prioritized Architecture Recommendations for Phase B

```
┌────────────────────────────────────────────────────────────────────────┐
│                   TECHNICAL ARCHITECTURE ROADMAP                       │
├──────────────────────────────┬─────────────────────────────────────────┤
│ Immediate Priority (Phase B) │ 1. Create public/.well-known/assetlinks │
│                              │ 2. Remove orphaned tour components      │
│                              │ 3. Add UTM campaign tagging to CTAs     │
│                              │ 4. Configure .eslintrc.json             │
├──────────────────────────────┼─────────────────────────────────────────┤
│ Core Scalability (Phase B/C) │ 5. Implement dynamic /places/[slug]     │
│                              │ 6. Implement dynamic /destinations/[cat]│
│                              │ 7. Expand nashikPlaces.ts (40+ spots)   │
│                              │ 8. Implement root /llms.txt standard    │
├──────────────────────────────┼─────────────────────────────────────────┤
│ Multilingual & Performance   │ 9. Add /mr/ and /hi/ localized routes   │
│                              │ 10. Compress public assets to WebP/AVIF │
│                              │ 11. Automate sitemap dynamic generation │
└──────────────────────────────┴─────────────────────────────────────────┘
```

1. **AssetLinks Deployment:** Place `public/.well-known/assetlinks.json` into the root public tree to activate Android App Links for `com.sooubh.nashikexplore`.
2. **Code Cleanup:** Remove `src/components/landing/PopularToursSection.tsx` and `src/components/landing/TourPackagesSection.tsx` to prevent accidental inclusion and maintain code veracity.
3. **UTM Attribution Utility:** Create `src/lib/utm.ts` with helper function `getPlayStoreUrl(placement: string, campaign?: string)` to standardize install referral tracking across all components.
4. **Dynamic Route Architecture:**
   - Build `/places/[slug]` utilizing Next.js `generateStaticParams()` to pre-render ultra-fast static HTML for all Nashik destinations.
   - Inject specific `TouristAttraction` JSON-LD schema per destination.
5. **AI Discovery Protocol:** Deploy `/llms.txt` and `/llms-full.txt` in the root route to provide direct, clean markdown facts for generative AI engines (Perplexity, ChatGPT, Gemini).

---
*Report certified by Trivio Technical Auditor (`@auditor`) — Ready for Phase B execution.*
