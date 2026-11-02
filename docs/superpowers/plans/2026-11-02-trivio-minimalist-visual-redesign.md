# Trivio Minimalist Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the website into an ultra-clean, minimalist visual showcase under the brand name **Trivio**, restoring the serene meadow hero visual, embedding the official horizontal logo, stripping promotional clutter and badges, and redesigning destinations into an automatic horizontal scrolling reel.

**Architecture:** Update central branding in `src/config/site.ts`, mount the official horizontal logo in `SiteNav.tsx`, restore `hero-meadow.jpg` with minimal copy in `HeroSection.tsx`, implement a continuous 60fps CSS/hardware-accelerated infinite horizontal photo marquee in `DestinationGallery.tsx`, and clean up the footer in `SiteFooter.tsx`.

**Tech Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion.

**Spec:** [`docs/superpowers/specs/2026-11-02-trivio-minimalist-visual-redesign.md`](docs/superpowers/specs/2026-11-02-trivio-minimalist-visual-redesign.md)

## Global Constraints

* Next.js 14 App Router, React 18, TypeScript.
* Target App Package: `com.sooubh.nashikexplore`.
* Official Brand Name: `Trivio`.
* Canonical Site URL: `https://nashik.sooubh.me`.
* Preloaded imagery must use Next.js `<Image priority>` and preserve 0.00 CLS.
* Animations must respect `prefers-reduced-motion: reduce`.
* Zero broken routes or compilation failures on `npm run build`.

## Review Focus

1. Mobile navigation scaling: Ensure horizontal logo `app-horizontal-icon.png` scales cleanly without wrapping or overflowing the floating pill header.
2. Marquee continuity: Ensure the horizontal marquee loops infinitely without stutter or empty whitespace on wide 4K viewports.
3. Hover behavior: Ensure the auto-scrolling marquee pauses on mouse hover and touch hold without breaking flow.
4. Contrast & Legibility: Ensure white typography over `hero-meadow.jpg` remains crisp and readable across all device screens.
5. Reduced motion compliance: Ensure users with `prefers-reduced-motion` have a static, scrollable destination layout rather than forced auto-scrolling.

---

### Task 1: Navigation & Branding Update (`SiteNav.tsx` & `site.ts`)

**Files:**
* Modify: `src/config/site.ts`
* Modify: `src/components/SiteNav.tsx`

**Interfaces:**
* Consumes: `public/images/branding/app-horizontal-icon.png`
* Produces: `SITE_CONFIG` with `name: 'Trivio'`, `SiteNav` component displaying official horizontal logo.

- [ ] **Step 1: Update `src/config/site.ts`**
  Set `name: 'Trivio'` and ensure `playStoreUrl` points to `https://play.google.com/store/apps/details?id=com.sooubh.nashikexplore`.
- [ ] **Step 2: Update `src/components/SiteNav.tsx`**
  Replace circular icon and separate text in the brand link with Next.js `<Image src="/images/branding/app-horizontal-icon.png" alt="Trivio" width={120} height={32} priority className="h-7 sm:h-8 w-auto object-contain" />`.
- [ ] **Step 3: Verify navigation renders cleanly**
  Check that the floating pill nav renders the horizontal logo smoothly.

---

### Task 2: Hero Section Ultra-Minimalist Overhaul (`HeroSection.tsx`)

**Files:**
* Modify: `src/components/landing/HeroSection.tsx`

**Interfaces:**
* Consumes: `public/images/trivio/hero-meadow.jpg`, `framer-motion`
* Produces: Clean, uncluttered hero section with minimal typography.

- [ ] **Step 1: Revert background image to `/images/trivio/hero-meadow.jpg`**
  Update Next.js `<Image>` source in `HeroSection.tsx` to `/images/trivio/hero-meadow.jpg`.
- [ ] **Step 2: Remove promotional badges and sparkle chips**
  Delete the "Explore Nashik with Local Offline Intelligence" pill badge. Delete bottom feature badges ("100% Free on Android", "Works Offline in Ghats", "Zero Tracking & Ads"). Remove sparkle icons.
- [ ] **Step 3: Minimize copy**
  Headline: `"Every road leads somewhere worth going."`
  Subtitle: `"Places, events and people in one app."`
  Primary Action: Clean high-contrast `"Get it on Google Play"` button pointing to `SITE_CONFIG.playStoreUrl`.
- [ ] **Step 4: Verify hero styling and reduced-motion**
  Verify soft readability scrim overlay and clean typography.

---

### Task 3: Automatic Horizontal Scrolling Destination Reel (`DestinationGallery.tsx`)

**Files:**
* Modify: `src/components/landing/DestinationGallery.tsx`
* Modify: `src/app/globals.css` (if custom marquee keyframes are added)

**Interfaces:**
* Consumes: `NASHIK_REAL_PLACES` from `src/data/nashikPlaces.ts`
* Produces: Infinite auto-scrolling horizontal destination photo reel.

- [ ] **Step 1: Add marquee animation keyframes in CSS or Tailwind**
  Add smooth infinite horizontal translate animation with pause-on-hover support.
- [ ] **Step 2: Redesign `DestinationGallery.tsx`**
  Replace the 3-column static grid with an automatic horizontal scrolling container.
  Double the place list (`[...NASHIK_REAL_PLACES, ...NASHIK_REAL_PLACES]`) to achieve seamless infinite looping.
  Design each card: widescreen photo card (`w-[320px] sm:w-[420px] aspect-[16/10]`), rounded-2xl, subtle dark bottom gradient overlay with only the spot title and Marathi/location area text. Minimal text, maximum visual space.
  Card links directly to Google Maps coordinates on click.
- [ ] **Step 3: Add `prefers-reduced-motion` fallback**
  If reduced motion is active, display as a standard horizontal scrollable container (`overflow-x-auto`) without continuous auto-scrolling.

---

### Task 4: Footer Cleanup (`SiteFooter.tsx`)

**Files:**
* Modify: `src/components/SiteFooter.tsx`

**Interfaces:**
* Consumes: `SITE_CONFIG`
* Produces: Streamlined footer without promotional badges.

- [ ] **Step 1: Remove "Offline-ready for Maharashtra travelers" chip**
  Delete the pill badge from the brand block in `SiteFooter.tsx`.
- [ ] **Step 2: Verify footer alignment**
  Ensure clean spacing between brand description and copyright bar.

---

### Task 5: Compilation & Verification

**Files:**
* Verify: All routes and pages

- [ ] **Step 1: Run production build**
  Execute `npm run build` to confirm zero TypeScript errors and successful static generation across all 15 routes.
- [ ] **Step 2: Visual and interactive audit**
  Check that the horizontal logo displays properly, the hero is serene and uncluttered, the destination marquee moves smoothly and pauses on hover, and the Google Play links point to `com.sooubh.nashikexplore`.
