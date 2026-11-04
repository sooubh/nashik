# Trivio SEO Excellence & Support Email Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Propel Trivio (https://nashik.sooubh.me) to rank top on search engines (Google, Bing) for Nashik tourism, pilgrimage, trekking, and wine travel queries through comprehensive Schema.org JSON-LD (WebSite, Organization, MobileApplication, ItemList, TouristAttraction, FAQPage, BreadcrumbList), expanded on-page semantic content (mounting Field Guide & FAQ sections), aligned metadata/keywords, Web App Manifest discoverability, updated sitemaps, and full migration of the support email to `trivio-support@sooubh.in`.

**Architecture:** Next.js 14 App Router with Server Components rendering JSON-LD schemas via `<script type="application/ld+json">`, centralized configuration in `src/config/site.ts`, dynamic metadata with `metadataBase`, programmatic `sitemap.ts` and `robots.ts`, and accessible client interactive components.

**Tech Stack:** Next.js 14.2.15, React 18, TypeScript, Tailwind CSS, Schema.org JSON-LD, Lucide React.

---

## Global Constraints

- Canonical Domain: `https://nashik.sooubh.me`
- Official Support Email: `trivio-support@sooubh.in`
- Brand Name: `Trivio`
- Factual Accuracy: All destination data from `src/data/nashikPlaces.ts`, all FAQ data from `src/components/landing/AppFaq.tsx`
- Build Verification: `npm run build` must compile with 0 errors after changes

---

## Tasks Breakdown

### Task 1: Centralize & Migrate Support Email to `trivio-support@sooubh.in`
**Files:**
- Modify: `src/config/site.ts`
- Modify: `src/components/Contact/ContactClient.tsx`
- Modify: `src/components/DeleteAccount/DeleteAccountClient.tsx`
- Modify: `src/app/data-safety/page.tsx`
- Modify: `src/app/privacy-policy/page.tsx`

- [ ] **Step 1: Update `src/config/site.ts`**
  Set `supportEmail: 'trivio-support@sooubh.in'` and update developer contact mailto link to `mailto:trivio-support@sooubh.in`.
- [ ] **Step 2: Update `ContactClient.tsx`**
  Reference `SITE_CONFIG.supportEmail` instead of hardcoded `support@nashikexplore.com` for clipboard copying, href, and display text.
- [ ] **Step 3: Update `DeleteAccountClient.tsx`**
  Reference `SITE_CONFIG.supportEmail` for clipboard copy and display instructions.
- [ ] **Step 4: Update `data-safety/page.tsx` and `privacy-policy/page.tsx`**
  Replace `support@nashikexplore.com` with `trivio-support@sooubh.in`.
- [ ] **Step 5: Verify no stale `support@nashikexplore.com` remains in `src/`**
  Run search across `src/` to confirm all occurrences are migrated.

---

### Task 2: Mount Missing Field Guide (`PlaceIntelligence`) & FAQ (`AppFaq`) Sections onto Homepage
**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/SiteNav.tsx`
- Modify: `src/config/site.ts`

- [ ] **Step 1: Import and render `PlaceIntelligence` and `AppFaq` in `src/app/page.tsx`**
  Place `PlaceIntelligence` (`#gazetteer`) after `DiscoverExperiences` and `AppFaq` (`#faq`) before `DownloadCta`.
- [ ] **Step 2: Add `FAQPage` Schema to `src/app/page.tsx`**
  Construct `FAQPage` JSON-LD from the 6 verified questions and answers and render in `<script type="application/ld+json">`.
- [ ] **Step 3: Align Navigation Links in `SiteNav.tsx` and `site.ts`**
  Ensure nav links include Destinations, Field Guide, Experiences, App Preview, Why Trivio, and FAQ with matching IDs.

---

### Task 3: Comprehensive Layout Meta Tags, Keywords & Organization/App Schemas
**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Expand search intent keywords in `src/app/layout.tsx`**
  Add high-volume pilgrimage, vineyard, fort, and itinerary query keywords.
- [ ] **Step 2: Enhance Schema.org `@graph` in `RootLayout`**
  - Add `Organization` with name `Trivio`, url, logo, sameAs social profiles, and `contactPoint` with `email: 'trivio-support@sooubh.in'`.
  - Add `potentialAction` SearchAction to `WebSite` schema.
  - Enrich `MobileApplication` schema with features, rating/reviews count (factual), pricing, screenshots, and OS.
- [ ] **Step 3: Ensure OpenGraph and Twitter images and URLs are absolute**

---

### Task 4: Enhance Sub-Page Metadata & Web App Manifest & Sitemaps
**Files:**
- Modify: `src/app/manifest.ts`
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/robots.ts`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/trip-planner/page.tsx`
- Modify: `src/app/data-safety/page.tsx`
- Modify: `src/app/delete-account/page.tsx`
- Modify: `src/app/privacy-policy/page.tsx`
- Modify: `src/app/terms-of-use/page.tsx`
- Modify: `src/app/cookies-policy/page.tsx`
- Modify: `src/app/disclaimer/page.tsx`

- [ ] **Step 1: Update `manifest.ts`**
  Update name, short_name (`Trivio`), description, and categories.
- [ ] **Step 2: Update `sitemap.ts`**
  Update `lastModified` to `2026-11-04` and tune priorities.
- [ ] **Step 3: Harmonize sub-page titles & OpenGraph tags**
  Ensure consistent brand title template and canonical links across all legal and utility pages.

---

### Task 5: Build Verification & SEO Audit
- [ ] **Step 1: Execute `npm run build`**
  Verify all 15 routes compile cleanly with zero errors.
- [ ] **Step 2: Validate generated HTML for JSON-LD schemas and meta tags**
  Inspect the generated `.next/server/app/index.html` to confirm all schemas, tags, and new email are in place.
