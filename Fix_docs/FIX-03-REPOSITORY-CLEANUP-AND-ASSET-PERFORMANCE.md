# FIX-03 — Repository Cleanup, Legacy Implementation Removal, and Asset Performance

**Priority:** P1 / perform after the truth and homepage phases  
**Target:** `sooubh/nashik` website repo  
**Reference:** `sooubh/nashikexplore` read-only, to verify assets/features  
**Objective:** Remove duplicate implementation and image weight carefully, simplify maintenance and improve page loading without breaking the live deployment, deep links or legally required pages.

---

## 1. Safety-first rule: identify production before deleting anything

The repo contains a Next.js app and a separate root-level static HTML/CSS/JS website. Do not assume which one is deployed merely because `package.json` uses `next dev`/`next build`.

Before deletion, inspect:

1. Vercel/deployment config files and project settings visible in the repository/available integration.
2. The current production domain and which build command/output it serves.
3. Whether public traffic can access paths from the legacy static pages or only the Next.js routes.
4. Existing redirects, redirects configured in hosting, sitemap, robots rules, links from the app repository, Play Console URLs and any existing analytics/search data the owner provides.
5. Git history and current worktree status so no user changes are lost.

**Do not delete legacy HTML pages until the production source and route migration are known.** A duplicated file can still be part of a deployed public URL, especially for old privacy or data-safety links.

## 2. Duplicated implementations already found

### Next.js application

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/contact/`, `src/app/delete-account/`, `src/app/privacy-policy/`, `src/app/data-safety/`, `src/app/terms-of-use/`, `src/app/cookies-policy/`, `src/app/disclaimer/`, `src/app/trip-planner/`
- `src/components/`, `src/data/`, `src/lib/`

### Legacy static application

- `index.html`, `trip-planner.html`, `contact.html`, `privacy-policy.html`, `data-safety.html`, `terms-of-use.html`, `cookies-policy.html`, `disclaimer.html`, `404.html`
- `css/styles.css`, `js/app.js`, root `images/`
- root `robots.txt` and `sitemap.xml`, in addition to Next's `src/app/robots.ts` and `src/app/sitemap.ts`

These may be redundant, but route and deployment checks must establish that before removing them.

## 3. Required migration approach

1. Record the current route inventory and current production host.
2. Treat Next.js App Router as the intended canonical implementation **only if** deployment inspection confirms it is the version in production.
3. Confirm each user-facing legacy URL maps to an existing Next route or a redirect. Preserve important historical routes for legal pages, account deletion and app listing references.
4. If Next.js is canonical, move any unique needed copy/links/assets into the maintained implementation, then remove the legacy duplicate only after reference search and deploy preview checks.
5. If the static site is canonical, do not perform a blind Next-only cleanup; first decide with repository owner which implementation should remain.
6. Keep one maintained copy of SEO metadata, sitemap/robots generation, styles, page content and app-download URL.
7. Add `README.md` that states which implementation is deployed, how to run/build/test it, the canonical domain, required environment settings and the canonical path for each legal page.

Do not keep two complete applications because removing either one “feels risky”; do not delete both before choosing a canonical deployment. Resolve the deployment ambiguity explicitly.

## 4. Asset duplication and size reductions

The GitHub Contents API/hash check showed the following at the time of inspection:

- Root `images/` contains 10 files, about **23.2 MB** in total.
- `public/images/` contains 17 files, about **38.0 MB** in total.
- Several blobs are byte-for-byte duplicates: numbered screenshots and named screenshots, and repeated logo/icon files.
- `public/favicon.ico` is about **5 MB** and has the same blob hash as the app launcher icon/logo source.
- Several screenshot images are around 1.4–2 MB each.

These figures are a snapshot of the GitHub listing, not a performance benchmark. Recalculate against the working tree before deletion.

### Required asset workflow

1. Build a path-to-content/hash map for all images in both `images/` and `public/images/`.
2. Search `src/`, root HTML, CSS, JS, manifest/metadata and any deployment config for every filename before removing it.
3. Choose canonical, descriptive names such as `home.png`, `explore.png`, `ai-planner.png`, `details.png`, `saved.png` and `profile.png`; retain only the files actually referenced by the production implementation.
4. Remove numbered aliases like `1(1).png`, `2.png`, `3.png` and equivalents only after ref search confirms they're not required by a deployed legacy route.
5. Create properly sized optimised image derivatives for web display. Prefer modern WebP/AVIF when the actual browser/device compatibility and screenshot clarity are tested. Retain an appropriate source only where required.
6. Generate a real multi-size favicon set (small ICO/PNG/SVG as appropriate) from an actual brand mark; do not rename a multi-megabyte app launcher image to `favicon.ico`.
7. Preserve screenshots with readable text. Over-compressing app UI may make product screens illegible.
8. Keep image `alt` attributes meaningful; decorative glows/backgrounds must be hidden from screen readers.
9. Use `next/image` with responsive `sizes` where the deployed Next setup supports it. `next.config.mjs` currently uses `images.unoptimized: true`; only change this after verifying deployment image handling and avoiding broken R2/external image URLs.
10. Measure before and after: total public asset size, largest transferred image, initial page transfer, LCP image behavior and screenshot quality.

## 5. Dependency and configuration cleanup

`package.json` currently declares Next.js, React, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, Tailwind, TypeScript and `@next/swc-wasm-nodejs`, among others.

Do not blindly remove dependencies based on the package names. Follow this process:

- Search imports and dynamic imports across `src/` and any retained static/app files.
- Keep `framer-motion` only for actual remaining motion that benefits the page; if all remaining sections become static, remove it after import search and a successful build.
- Keep `lucide-react` for icons still used.
- Keep `clsx`/`tailwind-merge` if `src/lib/utils.ts` or `cn()` still uses them.
- Investigate `@next/swc-wasm-nodejs` and remove only if the current Next build/runtime has no dependency on it; run a clean install and build after any package change.
- The root `index.html` uses Tailwind's Play CDN and an inline Tailwind configuration; the Next app has its own Tailwind config and compiled CSS. If the legacy site is removed, remove the Play CDN and dead CSS config with it rather than keeping two styling pipelines.
- `next.config.mjs` has a custom `@` alias that appears also in `tsconfig.json`. Preserve consistent alias behavior; do not simplify config without a successful TypeScript/Next build.
- Ensure `package-lock.json` matches any dependency changes.
- Inspect whether `next lint` has a valid ESLint setup in this repo. Fix the lint script/config only when appropriate for the installed Next version; do not add a huge tooling stack unnecessarily.

## 6. Unused component/data removal rules

After FIX-02 reduces the homepage, candidate components/data that may become unused include:

- `src/components/BackToTop.tsx`
- `src/components/CategoriesSection.tsx`
- `src/components/FeatureShowcase.tsx`
- `src/components/FaqSection.tsx`
- `src/components/StatsSection.tsx`
- `src/components/TestimonialsSection.tsx`
- `src/components/TripPlannerShowcase.tsx`
- `src/components/ScreenshotGallery.tsx` (if replaced by a simple strip)
- `src/components/QrCodeModal.tsx` (if QR is removed)
- `src/data/stats.ts`, `src/data/testimonials.ts`, and any no-longer-used `src/data` modules
- `src/components/TripPlanner/TripPlannerClient.tsx`, `src/lib/planner.ts`, `src/data/attractions.ts`, `src/data/hubs.ts` if the website simulator route is removed/replaced.

This is a candidate list, **not a deletion order**. For every file: search imports/route usage; remove imports and tests first; delete only when unused. Do not remove `src/data/features.ts` or screenshot data simply because names look old—some may still feed the redesign.

## 7. Domain consistency and legacy routes

The old `index.html` references `https://nashikexplore.com/` in Open Graph metadata, while the Next.js layout/sitemap use `https://nashik.sooubh.me`. This is a real source conflict. The correct production domain must be confirmed from the active deployment and domain settings; do not pick a domain based only on whichever string appears newest.

Once the canonical host is confirmed:

- Set metadata base, canonical URLs, Open Graph URLs, Twitter URLs, structured-data IDs/URLs, sitemap and robots to the same canonical host.
- Remove stale absolute URL references from retained HTML and legal links.
- Preserve redirects for retired paths where they may be indexed or used by external Play Console/user links.
- Do not let two different hosts claim the same page as canonical.

## 8. Multi-agent plan

- **Agent A — Deployment/route inventory (read-only):** identify build source, hosting config, current routes, existing redirects and live host evidence. No edits.
- **Agent B — Asset auditor (read-only):** compute exact hashes/sizes, find all references and produce a keep/remove/optimise table. No edits.
- **Agent C — Dependency auditor (read-only):** find import usage and identify safe removals with evidence. No edits.
- **Coordinator — implementation owner:** decides canonical implementation only after the reports are merged. Does not delete files based on speculation.
- **Agent D — post-cleanup reviewer (read-only):** compare file tree and redirects to the inventory; run broken-link checks and ensure legal/deletion routes still exist.

Avoid concurrent editing of `index.html`, `src/app/layout.tsx`, sitemap/robots or public image paths. Those files are part of the same migration boundary.

## 9. Acceptance criteria

- [ ] One canonical website implementation is identified by production/deployment evidence.
- [ ] Existing essential public URLs are mapped to routes or tested redirects before duplicates are removed.
- [ ] Root legacy HTML pages aren't accidentally served alongside the Next app, or retained only where deliberately needed.
- [ ] Only one metadata/sitemap/robots source is authoritative for the selected deployment.
- [ ] Duplicate image assets are removed only after all references and route usage have been checked.
- [ ] Favicon is a real, appropriately sized favicon asset.
- [ ] Initial screenshot images are responsive/optimised and still legible.
- [ ] Dependency removal is import-driven and passes a clean install, type check and build.
- [ ] `README.md` explains the canonical app/site and local validation commands.
- [ ] All legal routes and the Google Play CTA work after the cleanup.
- [ ] Size/route report is recorded before and after; no unsupported performance gains are claimed.
