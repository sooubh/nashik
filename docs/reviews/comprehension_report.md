# Stage 6 Comprehension Test Report

* **Target File:** [`docs/designs/landing_page_redesign.md`](docs/designs/landing_page_redesign.md)
* **Date:** 2026-11-02
* **Evaluator:** Naive Reader (`egm-comprehension`)

---

### 1. Paraphrase of What This Design Accomplishes

This document proposes a visual and structural redesign of the public web landing page (`nashik.sooubh.me`) for the production Android application (`com.sooubh.nashikexplore`). It replaces an unverified prototype branded as "Trivio"—which contained placeholder alpine imagery, simulated itinerary features, and fake reviews—with an authoritative, Google Play policy-compliant marketing landing page branded as "Nashik Travel Guide". The redesign focuses on presenting authentic regional photography (Trimbakeshwar, Sula Vineyards, Sahyadri forts), showcasing real mobile screenshots inside realistic device frames, driving app installations via verified Play Store links, and providing transparent navigation to all mandatory legal, privacy, and account-deletion compliance pages.

### 2. Paraphrase of How It Works Mechanically

The web presence is implemented in Next.js using the App Router, Tailwind CSS, and Framer Motion, organized around a single centralized configuration file (`src/config/site.ts`) and verified destination data (`src/data/nashikPlaces.ts`). The page structure replaces legacy `Trivio*` components with a modular component hierarchy under `src/components/landing/` (including HeroSection, AppShowcase, DestinationGallery, LocalAdvantage, AppFaq, SiteNav, and SiteFooter). The layout preloads high-resolution photography with explicit aspect ratios to guarantee a 0.00 Cumulative Layout Shift (CLS), gates motion reveals behind `prefers-reduced-motion` queries, and uses an interactive tabbed SVG/CSS device frame that swaps static PNG screenshots without incurring client-side bundle bloat or full page reloads.

---

### Comprehension Findings, Ambiguities, and Knowledge Gaps

#### Finding 1
* **Severity**: Blocker
* **Affected Scope**: Section 12 & Section 10 under "Detailed Implementation Plan" (Lines 216–234) and "Verification Plan" (Line 241).
* **Discrepancy Description & Rationale**: 
  The plan instructs deleting `src/components/trivio/TrivioNav.tsx` and `src/components/trivio/TrivioFooter.tsx` (Lines 230–231), but lists only `src/app/page.tsx` and `src/app/layout.tsx` under "Modify". In the current codebase, `TrivioNav` and `TrivioFooter` are imported and rendered by `src/components/LegalPageLayout.tsx` (which wraps `/privacy-policy`, `/terms-of-use`, `/data-safety`, `/delete-account`, `/disclaimer`, `/cookies-policy`, and `/contact`) as well as by `src/app/trip-planner/page.tsx`. If an engineer follows this plan and deletes those components without updating `LegalPageLayout.tsx` and `trip-planner/page.tsx` to use the new `SiteNav` and `SiteFooter`, running `npm run build` will immediately fail with broken import errors, and all compliance pages will be inoperable. The implementation plan must explicitly include `src/components/LegalPageLayout.tsx` and `src/app/trip-planner/page.tsx` in the modification list.

#### Finding 2
* **Severity**: Major
* **Affected Scope**: Section "Goals" (Line 31), "Non-Goals" (Line 35), "Component Hierarchy & Responsibilities" (Line 125), and Section 7 under "Detailed Implementation Plan" (Line 203).
* **Discrepancy Description & Rationale**: 
  Ambiguous role of `/trip-planner`. Line 35 explicitly designates "Building an in-browser trip planner, route calculation engine, or web itinerary generator" as Non-Goal 1, and Lines 22 & 131 explain that `TrivioPlannerTeaser.tsx` is deleted because simulated planning confuses visitors into thinking the web page is an in-browser planning tool. Yet Lines 31, 125, and 203 mandate linking navigation to an active `/trip-planner` route described as `(Architecture & Features)`. A naive reader has no way of knowing what `/trip-planner` is, what content it serves, whether it is an existing explanatory page describing the Android app's AI planner feature, or if its own metadata and components still carry deprecated "Trivio" branding that requires refactoring.

#### Finding 3
* **Severity**: Major
* **Affected Scope**: Section "Component Hierarchy & Responsibilities" (Lines 119–121) and Section 5 under "Detailed Implementation Plan" (Lines 192–195) — `LocalAdvantage.tsx`.
* **Discrepancy Description & Rationale**: 
  Vague comparison baseline. The document specifies that `LocalAdvantage.tsx` is a "Comparison: sanctum rules, 80° rock steps, offline Sahyadri trail maps" and "Refactors the existing 5 comparison points... under the unified Nashik Travel Guide brand." However, it never states *what* the application is being compared against (e.g., generic national travel aggregator apps, static blog posts, Google Maps, or unverified crowdsourced tips). A developer who has not inspected legacy component code cannot understand the schema, columns, or narrative purpose of this comparison table without an explicit definition of both sides of the comparison.

#### Finding 4
* **Severity**: Major
* **Affected Scope**: Section "Open Questions" (Lines 40–44) vs. "Detailed Implementation Plan" (Lines 180–187).
* **Discrepancy Description & Rationale**: 
  Contradiction between unresolved open questions and detailed implementation prescriptions. Question 1 asks: *"Should the hero section background use a single cinematic photo... or provide a subtle cross-fade...?"*, and Question 2 asks: *"For mobile viewports, should the device frame mockup remain static or allow horizontal flicking...?"* In the implementation plan (Lines 182 and 186), the document specifies a single static image (`sula-vineyards.jpg`) and a tab bar selector, without stating whether the open questions were definitively resolved, rejected, or deferred. A fresh reader is left uncertain whether touch-swipe gestures or background transitions should be engineered.

#### Finding 5
* **Severity**: Nit
* **Affected Scope**: Line 249 (`*Drafted with EGM*`).
* **Discrepancy Description & Rationale**: 
  Undefined internal acronym. "EGM" appears at the end of the document without explanation, definition, or external reference (presumably Elephant-Goldfish Model). Non-standard internal acronyms should be defined or omitted so that readers unfamiliar with internal process naming are not confused.

#### Finding 6
* **Severity**: Nit
* **Affected Scope**: Section "The Problem" (Line 23) vs. "Overview" (Lines 6, 13, 15).
* **Discrepancy Description & Rationale**: 
  Stack terminology drift. Lines 6, 13, and 15 describe the mobile product as an "Android application", but Line 23 refers to "genuine Flutter app screenshots in the repository". While Flutter produces Android builds, a naive reader unfamiliar with the codebase may wonder if there is an active Flutter web build, an iOS app, or a native Kotlin codebase. Clarifying that the Android app is authored in Flutter will provide clear context.

#### Finding 7
* **Severity**: Nit
* **Affected Scope**: Section "Component Hierarchy & Responsibilities" (Line 100) — `supportEmail`.
* **Discrepancy Description & Rationale**: 
  Domain divergence without explanation. The canonical web domain is `nashik.sooubh.me` and the Play Store ID is `com.sooubh.nashikexplore`, but `supportEmail` is specified as `support@nashikexplore.com`. The document does not indicate whether `nashikexplore.com` is a live domain configured for inbound mail routing or an unverified placeholder, creating a risk of user inquiry delivery failures.
