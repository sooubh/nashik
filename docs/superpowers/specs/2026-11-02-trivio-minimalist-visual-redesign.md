# Design Specification: Trivio Minimalist Visual Redesign

* **Date:** 2026-11-02
* **Status:** Proposed
* **Author:** Pair Programming Agent & User
* **Selected Approach:** Approach A (Ultra-Clean GSAP/CSS Auto-Scroll & Minimalist Visuals)

---

## 1. Intent & The Why

The user wants to transform the landing page into an ultra-clean, minimalist visual showcase under the brand name **Trivio**. The current interface contains excessive badges, chips, emojis, and promotional copy ("Explore Nashik with Local Offline Intelligence", "Offline-ready for Maharashtra travelers", sparkle icons, and dense bullet cards) that clutter the visual hierarchy.

The goal is to restore the original serene meadow atmosphere, strip away promotional noise, integrate the official horizontal logo, and present destinations in an automatic, continuous horizontal scrolling reel with prominent photography and minimal text.

---

## 2. Goals, Non-Goals & Anti-Goals

### Goals
* **Hero Section:** Restore [`public/images/trivio/hero-meadow.jpg`](/images/trivio/hero-meadow.jpg) as the hero background. Remove all badges, emojis, and sparkle chips. Reduce copy to an ultra-concise, elegant headline, subtle subline, and the Google Play download button.
* **Header & Navigation:** Rebrand to **Trivio**. Replace the previous small circular icon with the official horizontal logo asset [`public/images/branding/app-horizontal-icon.png`](/images/branding/app-horizontal-icon.png) properly sized with crisp responsive scaling.
* **Destinations Reel:** Redesign the destinations section into an automatic, infinitely looping horizontal marquee/carousel with generous spacing, large widescreen imagery, and minimal text (spot name and area only), pausing smoothly on hover.
* **Footer Cleanup:** Remove the "Offline-ready for Maharashtra travelers" pill badge and promotional clutter while preserving essential compliance and legal links.
* **App Identifier & Funnel:** Ensure all download actions point directly to the verified Google Play Store listing (`https://play.google.com/store/apps/details?id=com.sooubh.nashikexplore`).

### Non-Goals
* Heavy 3D WebGL meshes or Three.js scene runtimes (rejected in favor of 60fps lightweight performance).
* Interactive in-browser itinerary planning engines.
* Modifying existing legal and compliance subpage contents.

### Anti-Goals
* Visual clutter: no promotional chips, no emoji badges, no dense paragraph overlays on photo cards.
* Performance regressions: no choppy animations, no scroll-jacking, and zero layout shift.

---

## 3. Constraints

* Next.js 14 (App Router) with TypeScript and Tailwind CSS.
* Animations must run at 60fps and respect `prefers-reduced-motion`.
* Maintain 100% compilation and type safety on `npm run build`.

---

## 4. Approaches Weighed

### Approach A: Ultra-Clean GSAP / CSS Auto-Scroll & Minimalist Visuals (SELECTED)
* **Description:** Restores the original meadow hero visual, integrates the official horizontal logo, strips all promotional badges and emojis, and turns the destination section into a continuous horizontal marquee using smooth hardware-accelerated CSS/GSAP keyframes with hover pause.
* **Pros:** Zero bundle bloat, instant load times, 60fps smooth scrolling on mobile, zero battery drain.
* **Cons:** No 3D WebGL interaction (which is not needed for photo showcases).
* **Selection Reason:** Selected by the user for its clean aesthetic, speed, and mobile responsiveness.

### Approach B: Interactive 3D WebGL (Three.js) Canvas + GSAP Scroll (REJECTED)
* **Description:** Renders a Three.js WebGL shader canvas with ripple/distortion effects over the hero and destination cards.
* **Pros:** 3D interactive novelty.
* **Cons:** Adds ~600KB+ to the client bundle, increases mobile battery consumption, and risks thermal throttling on lower-end devices.
* **Reason for Rejection:** Overkill for photo reels and adds unnecessary JavaScript bloat without clear visual benefit.

---

## 5. Technical Specification

### A. Navigation (`src/components/SiteNav.tsx`)
* Replace the round icon + text combination with Next.js `<Image>` rendering [`/images/branding/app-horizontal-icon.png`](/images/branding/app-horizontal-icon.png) with `h-8 sm:h-9 w-auto` and `priority`.
* Navigation links: Destinations, Features, Why Local, Trip Guide.
* Clean "Get App" pill button leading to `com.sooubh.nashikexplore`.

### B. Hero Section (`src/components/landing/HeroSection.tsx`)
* Background image: `/images/trivio/hero-meadow.jpg` with priority loading and soft readability scrim.
* Removed:
  * "Explore Nashik with Local Offline Intelligence" badge.
  * All bottom feature badges ("100% Free on Android", "Works Offline in Ghats", "Zero Tracking & Ads").
  * Sparkle icons and secondary buttons.
* Retained:
  * Minimalist headline: *"Every road leads somewhere worth going."*
  * Subtitle: *"Places, events and people in one app."*
  * High-contrast Google Play button: *"Get it on Google Play"*.

### C. Destination Reel (`src/components/landing/DestinationGallery.tsx`)
* Redesigned from a 3-column dense text grid into a continuous horizontal auto-scrolling marquee.
* Structure:
  * Flex container with infinite translateX animation (`animate-marquee` or GSAP marquee loop), pausing on hover.
  * Duplicated array of places from `src/data/nashikPlaces.ts` to ensure seamless looping without jump cuts.
  * Each card: widescreen aspect ratio (`aspect-[16/10]` or `w-[360px] sm:w-[420px]`), high-resolution photo, subtle dark gradient at bottom with only the place name and Marathi/area label in clean typography.
  * One-tap direct link to Google Maps coordinates.

### D. Footer (`src/components/SiteFooter.tsx`)
* Remove the "Offline-ready for Maharashtra travelers" chip.
* Keep clean 3-column links for Legal, Compliance, and Features.

---

## 6. What's Left to the Builder

* Ensure exact marquee CSS animation speed and hover pause mechanics.
* Verify responsive height of the horizontal logo on mobile screens.
* Run `npm run build` to verify clean compilation.
