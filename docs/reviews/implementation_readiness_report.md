# Stage 9 Implementation Readiness Test Report

**Target:** `docs/designs/landing_page_redesign.md` (`lines 172..249`)

## Reviewer Status

| Reviewer | Status |
| --- | --- |
| `egm-implementation-readiness` | completed |
| `egm-codebase-details` | completed |
| `egm-style` | completed |

---

## Executive Summary

The Implementation Plan (lines 172–249 of [`landing_page_redesign.md`](docs/designs/landing_page_redesign.md#L172-L249)) establishes a solid foundation for component refactoring, but contains **critical blockers and architectural omissions** that will cause immediate build failures (`npm run build`) and leave design choices to the implementer:
- **Severity Breakdown:** 🔴 **2 Blockers**, 🟡 **5 Majors**, 🟢 **2 Nits**
- **Critical Finding:** The plan deletes `TrivioNav.tsx` and `TrivioFooter.tsx` without accounting for `LegalPageLayout.tsx` (which wraps 5 subpages), `trip-planner/page.tsx`, `ContactClient.tsx`, and `DeleteAccountClient.tsx`, breaking imports across 8 routes.
- **Zombie Code:** `TrivioJourney.tsx`, `TrivioCategories.tsx`, and `TrivioFounderNote.tsx` are rendered in `page.tsx` but omitted from both replacement and deletion lists.
- **Schema & Link Drift:** `MobileApplication` schema is erroneously assigned to `page.tsx` rather than `layout.tsx`, and the accessibility skip-to-content anchor in `layout.tsx` will become a dead link.

---

## Prioritized Findings (Blockers -> Major -> Nits)

### 1. Critical Build Breakage: Subpage Layouts and Clients Omitted from Target File Modification List - Severity: Blocker
* **Reviewer Lens:** `egm-codebase-details` / `egm-implementation-readiness`
* **Affected Scope:** Lines 174–234 (Section 174: Target Files & Section 223: Deletion of Deprecated Files)
* **Discrepancy Description:** 
  The implementation plan schedules the deletion of `src/components/trivio/TrivioNav.tsx` and `src/components/trivio/TrivioFooter.tsx` (lines 230–231), but fails to include the following dependent files in the target modification list:
  1. [`src/components/LegalPageLayout.tsx`](src/components/LegalPageLayout.tsx) (imports `TrivioNav` and `TrivioFooter`, wrapping `/privacy-policy`, `/terms-of-use`, `/disclaimer`, `/cookies-policy`, and `/data-safety`)
  2. [`src/app/trip-planner/page.tsx`](src/app/trip-planner/page.tsx) (imports `TrivioNav` and `TrivioFooter`)
  3. [`src/components/Contact/ContactClient.tsx`](src/components/Contact/ContactClient.tsx) (imports `TrivioNav` and `TrivioFooter`)
  4. [`src/components/DeleteAccount/DeleteAccountClient.tsx`](src/components/DeleteAccount/DeleteAccountClient.tsx) (imports `TrivioNav` and `TrivioFooter`)
  
  Executing deletions as specified will immediately cause `npm run build` to fail with TypeScript module resolution errors (`Cannot find module '@/components/trivio/TrivioNav'`). Additionally, these files contain hardcoded strings ("Return to Trivio Home") and outdated package links (`com.nashikexplore.app`).
* **Rationale & Recommendation:** 
  Add these 4 files explicitly to the Target Files Modification List in Section 174. Instruct the implementer to update imports to `@/components/navigation/SiteNav` and `@/components/navigation/SiteFooter` (or `@/components/landing/*`), replace hardcoded legacy strings with `SITE_CONFIG` properties, and update canonical package references.

---

### 2. Unaccounted / Zombie Components in `src/components/trivio/` - Severity: Blocker
* **Reviewer Lens:** `egm-codebase-details`
* **Affected Scope:** Lines 215–218 & Lines 223–234 (Items 10 & 12)
* **Discrepancy Description:** 
  `src/app/page.tsx` currently imports and mounts `TrivioJourney`, `TrivioCategories`, and `TrivioFounderNote`. Item 10 instructs the implementer to "Replace all legacy imports from `@/components/trivio/*` with new `@/components/landing/*` components", but Item 12 does **not** list `TrivioJourney.tsx`, `TrivioCategories.tsx`, or `TrivioFounderNote.tsx` for deletion, nor do Items 1–9 define landing replacements for them. These files will either remain as orphaned dead code or leave the implementer guessing whether to delete or keep them.
* **Rationale & Recommendation:** 
  Explicitly list `src/components/trivio/TrivioJourney.tsx`, `src/components/trivio/TrivioCategories.tsx`, and `src/components/trivio/TrivioFounderNote.tsx` under Item 12 (Deletion list), confirming that their informational content has been consolidated into `LocalAdvantage.tsx` and `DestinationGallery.tsx`.

---

### 3. Ambiguity in `src/app/page.tsx` Component Tree and Layout Ordering - Severity: Major
* **Reviewer Lens:** `egm-implementation-readiness`
* **Affected Scope:** Lines 215–218 (Item 10)
* **Discrepancy Description:** 
  Item 10 provides only high-level instructions: "Replace all legacy imports from `@/components/trivio/*` with new `@/components/landing/*` components." It leaves the JSX element tree, section hierarchy, container wrappers, anchor IDs, and layout sequence completely unspecified. Specifically, it does not state whether `SiteNav` is mounted inside `page.tsx` or `layout.tsx`.
* **Rationale & Recommendation:** 
  Provide the exact JSX structure for `src/app/page.tsx`:
  ```tsx
  export default function HomePage() {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(spotsSchema) }} />
        <SiteNav />
        <main id="main-content">
          <HeroSection />
          <AppShowcase />
          <DestinationGallery />
          <LocalAdvantage />
          <AppFaq />
          <DownloadCta />
        </main>
        <SiteFooter />
      </>
    );
  }
  ```

---

### 4. Schema Location Discrepancy for `MobileApplication` - Severity: Major
* **Reviewer Lens:** `egm-codebase-details`
* **Affected Scope:** Lines 215–218 (Item 10) vs Lines 219–222 (Item 11)
* **Discrepancy Description:** 
  Item 10 directs the implementer to "Update JSON-LD schema definitions (`MobileApplication`, `FAQPage`, `ItemList`) in `src/app/page.tsx`". However, `MobileApplication` is actually defined in `src/app/layout.tsx` (lines 101–152), while `src/app/page.tsx` only contains `FAQPage` and `ItemList`. An implementer following Item 10 will search for `MobileApplication` in `page.tsx` in vain.
* **Rationale & Recommendation:** 
  Update Item 10 to specify updating `FAQPage` and `ItemList` (`TouristAttraction`) schemas in `src/app/page.tsx`. Update Item 11 (`src/app/layout.tsx`) to explicitly specify updating `MobileApplication` and `WebSite` schemas to reflect `SITE_CONFIG` values and `com.sooubh.nashikexplore`.

---

### 5. Incomplete Specification for `AppShowcase.tsx` Tab-to-Screenshot Mapping - Severity: Major
* **Reviewer Lens:** `egm-implementation-readiness`
* **Affected Scope:** Lines 184–186 (Item 3)
* **Discrepancy Description:** 
  Item 3 specifies embedding 5 screenshots (`home.png`, `explore.png`, `ai-planner.png`, `saved.png`, `profile.png`) and providing an interactive feature tab bar. However, Section 92 (#3) only lists 4 tab labels ("Explore Nashik, Plan Itineraries, Offline Trail Guides, Saved Boards"), leaving `profile.png` without an associated tab. The data structure, tab IDs, default tab, and screenshot bindings are left undefined.
* **Rationale & Recommendation:** 
  Specify the exact `TABS` array schema in Item 3:
  ```ts
  interface ShowcaseTab {
    id: string;
    label: string;
    sublabel: string;
    screenshot: string; // e.g. '/images/screenshots/home.png'
  }
  ```
  Prune `profile.png` (due to the "Go Premium" paywall contradiction) and enforce strict 4-tab 1:1 symmetry (`home.png`, `explore.png`, `ai-planner.png`, `saved.png`).

---

### 6. Ambiguous Server Component vs. Client Component Declarations - Severity: Major
* **Reviewer Lens:** `egm-style` / `egm-codebase-details`
* **Affected Scope:** Lines 180–214 (Items 2, 5, 7, 8)
* **Discrepancy Description:** 
  Item 2 classifies `HeroSection.tsx` as "React Server / Client Component" despite specifying Framer Motion fade-up animations (which require `'use client'`). Items 5 (`LocalAdvantage.tsx`), 7 (`SiteFooter.tsx`), and 8 (`DownloadCta.tsx`) are labeled vaguely as "React Component" without clarifying whether they should be Server Components (RSC) or Client Components.
* **Rationale & Recommendation:** 
  Explicitly classify each component:
  - **Client Components (`'use client'`):** `HeroSection.tsx` (Framer Motion), `AppShowcase.tsx` (tab state), `DestinationGallery.tsx` (filter state/dialog), `SiteNav.tsx` (mobile toggle/scroll events), `AppFaq.tsx` (accordion state).
  - **Server Components (RSC):** `LocalAdvantage.tsx`, `DownloadCta.tsx`, `SiteFooter.tsx`.

---

### 7. Broken Accessibility Skip-Link Anchor in `src/app/layout.tsx` - Severity: Major
* **Reviewer Lens:** `egm-codebase-details` / `egm-implementation-readiness`
* **Affected Scope:** Lines 219–222 (Item 11)
* **Discrepancy Description:** 
  `src/app/layout.tsx` defines `<a href="#journey" className="sr-only focus:not-sr-only ...">Skip to content</a>`. In the existing code, this jumped to `id="journey"` in `TrivioJourney.tsx`. In the redesign, `TrivioJourney` is removed, turning this skip link into a dead anchor and violating WCAG 2.4.1 (Bypass Blocks).
* **Rationale & Recommendation:** 
  Update Item 11 to instruct changing the skip link in `layout.tsx` to `href="#main-content"`, and ensure Item 10 adds `id="main-content"` to the `<main>` tag in `src/app/page.tsx`.

---

### 8. Missing TypeScript Interface Contract for `src/config/site.ts` - Severity: Nit
* **Reviewer Lens:** `egm-style`
* **Affected Scope:** Lines 176–178 (Item 1)
* **Discrepancy Description:** 
  Item 1 enumerates configuration fields for `SITE_CONFIG` but does not define the formal TypeScript interface `SiteConfig`, leading to possible type drift across consumers.
* **Rationale & Recommendation:** 
  Provide the explicit TypeScript interface in Item 1:
  ```ts
  export interface SiteConfig {
    name: string;
    tagline: string;
    description: string;
    canonicalUrl: string;
    playStoreUrl: string;
    packageId: string;
    supportEmail: string;
    navLinks: Array<{ label: string; href: string }>;
    footerColumns: Array<{ title: string; links: Array<{ label: string; href: string; external?: boolean }> }>;
  }
  ```

---

### 9. Non-Actionable Verification Plan - Severity: Nit
* **Reviewer Lens:** `egm-implementation-readiness`
* **Affected Scope:** Lines 239–246 (Verification Plan)
* **Discrepancy Description:** 
  The verification plan specifies qualitative checks ("Verify that all Framer Motion animations check prefers-reduced-motion", "Manually test all internal navigation links") without executable command-line verification recipes.
* **Rationale & Recommendation:** 
  Replace manual directives with reproducible commands:
  - Route validation: `curl -I` script across all routes.
  - Reduced motion check: `git grep -n "useReducedMotion" src/components/landing/`.
  - Type & Lint check: `npm run lint && npm run build`.
