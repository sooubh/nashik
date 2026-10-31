# Implementation Plan: World's Best SEO for NashikExplore

**Goal:** Elevate `NashikExplore` (https://nashik.sooubh.me) to world-class SEO standards through comprehensive, truthful Schema.org structured data (JSON-LD), full Web App Manifest discoverability, enhanced robots and sitemap configs, complete OpenGraph/Twitter cards, and hierarchical BreadcrumbList metadata across all routes.

**Canonical Domain:** `https://nashik.sooubh.me`  
**Execution Context:** Next.js 14 App Router, TypeScript, Tailwind CSS.  
**Adherence:** Truthful content only (no fabricated ratings or review counts, real landmarks from `src/data/nashikPlaces.ts`, real FAQs from `src/components/TravelFaq.tsx`).

---

## 1. Architecture & Schema Strategy

```
                          Search Engines & Social Crawlers
                                       │
            ┌──────────────────────────┼──────────────────────────┐
            ▼                          ▼                          ▼
     Technical Core              Rich Structured Data       Semantic & Social
  ┌──────────────────┐        ┌───────────────────────┐   ┌──────────────────┐
  │ sitemap.ts       │        │ MobileApplication     │   │ OpenGraph cards  │
  │ robots.ts        │        │ WebSite + SearchAction│   │ Twitter cards    │
  │ manifest.ts(PWA) │        │ FAQPage               │   │ Viewport & Theme │
  │ Canonical Links  │        │ ItemList (Attractions)│   │ Alt texts & A11y │
  └──────────────────┘        │ BreadcrumbList        │   └──────────────────┘
                              └───────────────────────┘
```

### Schemas to Deploy:
1. **`MobileApplication` Schema** (`src/app/layout.tsx`):
   - Category: `TravelApplication`
   - OS: `Android 8.0+`
   - Features: Real features (destination discovery, multi-day itinerary planning, offline caching, Google Maps handoff).
   - Offers: Free (`price: "0"`, `priceCurrency: "INR"`).
   - Verified download URL: Google Play Store link.
   - Screenshots: Array of 6 real app interface screenshots.
2. **`WebSite` Schema** (`src/app/layout.tsx`):
   - Name, URL, Description, Organization publisher.
   - `potentialAction`: SearchAction for destination queries.
3. **`FAQPage` Schema** (`src/app/page.tsx` or `layout.tsx`):
   - Direct structured mirror of all 6 verified questions from `TravelFaq.tsx` (best season, offline caching, transit hubs, navigation handoff, temple dress codes, free pricing).
4. **`ItemList` & `TouristAttraction` Schema** (`src/app/page.tsx`):
   - 8 authentic Nashik destinations from `src/data/nashikPlaces.ts` with English and Marathi alternate names, category classification, geographical context, and visitor highlights.
5. **`BreadcrumbList` Schema** (Sub-routes & Legal layout):
   - Automatic hierarchical breadcrumbs for `/trip-planner`, `/contact`, `/privacy-policy`, `/terms-of-use`, `/data-safety`, `/delete-account`, `/cookies-policy`, and `/disclaimer`.
6. **Web App Manifest** (`src/app/manifest.ts`):
   - Native Next.js 14 Web App Manifest generator for PWA indexing and mobile search discoverability.

---

## 2. Tasks Breakdown

### Task 1: Rich Structured Data Expansion (Layout & Homepage)
- **Files:** `src/app/layout.tsx`, `src/app/page.tsx`
- **Actions:**
  - Enhance `MobileApplication` schema with price offer (`price: 0`, `priceCurrency: "INR"`), software version (`1.0.0`), operating system, and screenshot list.
  - Enhance `WebSite` schema with SearchAction query-input.
  - Add `FAQPage` JSON-LD schema referencing the 6 factual FAQs.
  - Add `ItemList` JSON-LD schema containing `TouristAttraction` entities for the 8 curated Nashik landmarks.
- **Verification:** Run `npm run build` and inspect the generated HTML for valid `<script type="application/ld+json">` tags.

### Task 2: Sub-Route BreadcrumbList Schemas
- **Files:** `src/components/BreadcrumbJsonLd.tsx`, `src/components/LegalPageLayout.tsx`, `src/app/trip-planner/page.tsx`, `src/app/contact/page.tsx`
- **Actions:**
  - Create reusable `BreadcrumbJsonLd` component generating Schema.org `BreadcrumbList`.
  - Wire `BreadcrumbJsonLd` into `LegalPageLayout` so all 7 legal routes automatically emit structured breadcrumbs.
  - Wire `BreadcrumbJsonLd` into `/trip-planner` and `/contact`.
- **Verification:** Check DOM output on sub-routes for valid `BreadcrumbList` JSON-LD.

### Task 3: Web App Manifest (`src/app/manifest.ts`)
- **Files:** `src/app/manifest.ts`
- **Actions:**
  - Create `manifest.ts` implementing `MetadataRoute.Manifest`.
  - Include name, short_name, description, start_url, display (`standalone`), orientation (`portrait`), theme_color (`#2563EB`), background_color (`#070B14`), and icon entries (`apple-touch-icon.png`, `app-splashscreen-icon.png`).
- **Verification:** Verify `/manifest.webmanifest` compiles during `npm run build`.

### Task 4: Sitemap & Robots Optimization
- **Files:** `src/app/sitemap.ts`, `src/app/robots.ts`
- **Actions:**
  - Update `sitemap.ts` `lastModified` to current ISO date (`2026-10-31`).
  - Confirm priorities: Homepage (1.0), Trip Planner (0.9), Contact (0.8), Legal (0.5 - 0.7).
  - Update `robots.ts` with `host: 'https://nashik.sooubh.me'`.
- **Verification:** Verify `/sitemap.xml` and `/robots.txt` output during build.

### Task 5: Taste Skill Lint & Production Build Verification
- **Files:** All modified source files
- **Actions:**
  - Run tasteskill lint: `node C:\Users\OM\.gemini\config\skills\design-taste-frontend\scripts\lint.mjs src`
  - Ensure 0 FAILs across the entire project.
  - Run `npm run build` to verify clean compilation across all 14 routes.
- **Verification:** Build passes with exit code 0 and 0 lint failures.

### Task 6: Git Commit & Push
- **Actions:**
  - Stage changes, commit with descriptive message, push to `origin/main`.
