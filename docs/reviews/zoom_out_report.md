# Stage 5 Initial Zoom Out Review Report

* **Target File:** [`docs/designs/landing_page_redesign.md`](docs/designs/landing_page_redesign.md)
* **Date:** 2026-11-02
* **Evaluator:** Skeptical Architect (`egm-zoom-out`)
* **Standard Applied:** Zoom-Out Standard (Simplicity, YAGNI, Codebase Reuse, Architecture Hygiene)

---

## Executive Summary
The proposed design accurately targets the core defects of the existing landing page (brand inconsistency, synthetic reviews, simulated web planner bloat, and anime placeholder imagery). 

However, the architecture contains one critical **Blocker** (untracked imports in subpage and legal layouts that will break the build upon deleting `TrivioNav` and `TrivioFooter`), two **Major** scoping oversights (orphaned components and global navigation inverted under `landing/`), and two **Nits** (premature Client Component conversion on FAQ, and speculative features in Open Questions).

---

## Categorized Findings

### 1. [Blocker] Untracked Subpage Imports Cause Build Failure on Deletion
* **Location:** Section 4.7 (`SiteFooter.tsx`), Section 4.10 (`src/app/page.tsx`), and Section 4.12 (`Deletion List`, lines 223–234).
* **Finding:** 
  The plan commands the immediate deletion of `src/components/trivio/TrivioNav.tsx` and `src/components/trivio/TrivioFooter.tsx`, while only planning modifications to `src/app/page.tsx` and `src/app/layout.tsx`.
  However, four existing subpage modules directly import and render `TrivioNav` and `TrivioFooter`:
  1. `src/components/LegalPageLayout.tsx` (powers `/privacy-policy`, `/terms-of-use`, `/disclaimer`, `/cookies-policy`, and `/data-safety`)
  2. `src/app/trip-planner/page.tsx`
  3. `src/components/Contact/ContactClient.tsx` (`/contact`)
  4. `src/components/DeleteAccount/DeleteAccountClient.tsx` (`/delete-account`)
  Deleting `TrivioNav` and `TrivioFooter` without including these 4 files in the migration plan will immediately break compilation across at least 8 routes during `npm run build`.
* **Action Required:** 
  Update the implementation plan to explicitly re-link `LegalPageLayout.tsx`, `trip-planner/page.tsx`, `ContactClient.tsx`, and `DeleteAccountClient.tsx` to the new shared navigation components.

### 2. [Major] Unaccounted Orphan Components & Broken Accessibility Skip-Link
* **Location:** Section 4 Component Hierarchy and Section 4.12 Deletion List.
* **Finding:** 
  In the current `src/app/page.tsx`, three additional components are rendered:
  - `<TrivioJourney />` (`src/components/trivio/TrivioJourney.tsx`)
  - `<TrivioCategories />` (`src/components/trivio/TrivioCategories.tsx`)
  - `<TrivioFounderNote />` (`src/components/trivio/TrivioFounderNote.tsx`)
  The design document neither schedules their migration nor lists them in Section 4.12 for deletion, leaving them as orphaned dead code.
  Furthermore, `src/app/layout.tsx` contains a keyboard accessibility skip-link: `<a href="#journey">Skip to content</a>`. If `TrivioJourney` is removed without updating the anchor, the skip link becomes broken.
* **Action Required:** 
  Explicitly schedule the retirement/deletion of `TrivioJourney`, `TrivioCategories`, and `TrivioFounderNote`, and update the skip link in `layout.tsx` to target `#main` or `#places`.

### 3. [Major] Architectural Inversion: Global Navigation Scoped Under `landing/`
* **Location:** Section 4 Component Hierarchy (lines 82–83, 122–128) and Section 4.6/4.7.
* **Finding:** 
  Placing `SiteNav.tsx` and `SiteFooter.tsx` inside `src/components/landing/` creates an awkward architecture where secondary compliance pages (`LegalPageLayout`, `DeleteAccountClient`, etc.) import their layout shell from `@/components/landing/`.
* **Action Required:** 
  Move `SiteNav.tsx` and `SiteFooter.tsx` to `src/components/SiteNav.tsx` and `src/components/SiteFooter.tsx` (or `src/components/navigation/`). Reserve `src/components/landing/` strictly for landing-specific sections (`HeroSection`, `AppShowcase`, `DestinationGallery`, `LocalAdvantage`, `DownloadCta`).

### 4. [Major] Greenfield Scope Inflation Over Existing Codebase Assets
* **Location:** Section 4 Component Hierarchy (lines 110–121) and Section 4.3 & 4.5.
* **Finding:** 
  `TrivioFeatures.tsx` already implements 90% of `AppShowcase.tsx` (device bezel, tab state, screenshot wiring). `TrivioComparison.tsx` already contains the tested 5-row advantage comparison. Treating them as ground-up greenfield builds inflates implementation risk.
* **Action Required:** 
  Refactor and re-brand existing components in place or rename them into the new directory, rather than rewriting from scratch.

### 5. [Nit] Premature Client Component Conversion on `AppFaq`
* **Location:** Section 4.9 `AppFaq.tsx`.
* **Finding:** 
  The existing `TrivioFaq.tsx` uses semantic HTML5 `<details>` and `<summary>` elements with zero client-side JavaScript, zero React hydration, and complete SEO crawlability. Converting it into `'use client'` adds unnecessary JavaScript overhead.
* **Action Required:** 
  Retain `AppFaq.tsx` as a Server Component using semantic `<details>` and `<summary>`.

### 6. [Nit] YAGNI in Open Questions (Hero Cross-Fade & Touch Gestures)
* **Location:** Section 3 Open Questions.
* **Finding:** 
  Cross-fading multiple high-res hero images bloats network payload and harms LCP. Adding custom touch swipe gestures to device mockups adds unnecessary complexity when tab pills and CSS scroll-snap suffice.
* **Action Required:** 
  Close Question 1 with a single preloaded photo (`sula-vineyards.jpg`), and close Question 2 using clean tab buttons and CSS scroll snapping.
