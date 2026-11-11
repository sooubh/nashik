# Trivio SEO & AI Search Implementation Plan

**Goal:** Make the Trivio website discoverable, technically reliable and genuinely useful for people researching Nashik travel, while preserving the existing visual identity.

**Scope:** Technical SEO, destination-page architecture, editorial content, accessibility/performance, and real-world indexing/crawler verification.

## Principles

1. Write for travellers first. Do not add hidden keyword blocks, crawler-only copy, doorway pages or repetitive AI-generated pages.
2. Keep all important information visible in the rendered page. Screen-reader-only text is appropriate only when it improves accessibility.
3. Use `sooubh/nashikexplore` as the product capability source of truth. Never promise a feature that the current app does not provide.
4. Verify local facts against primary or authoritative sources. Do not invent opening hours, fees, distances, safety conditions, ratings, availability or route guarantees.
5. Structured data must describe visible page content. Add only properties that can be supported.
6. Preserve Trivio's existing brand, layout language and hero composition. Fix usability issues without redesigning the site.
7. No ranking, indexing, AI citation or recommendation guarantees.

## PR sequence and workstreams

| Order | Workstream | GitHub reference | Dependency / exit gate |
|---|---|---|---|
| 0 | Correct the existing technical SEO pass and remove unsupported claims | [PR #3](https://github.com/sooubh/nashik/pull/3) | Fresh preview deployment and review; do not merge until reviewed |
| 1 | Add TypeScript and production-build CI gates | [PR #9](https://github.com/sooubh/nashik/pull/9), [Issue #4](https://github.com/sooubh/nashik/issues/4) | CI typecheck and production build must pass |
| 2 | Upgrade unsupported Next.js and remediate dependency vulnerabilities | [Issue #13](https://github.com/sooubh/nashik/issues/13) | Audit advisories and choose a supported Next.js/React target before implementation |
| 3 | Add robots, sitemap, metadata, canonical and JSON-LD smoke tests | [PR #11](https://github.com/sooubh/nashik/pull/11), [Issue #10](https://github.com/sooubh/nashik/issues/10) | Stacked on PR #9; retarget to main after PR #9 merges; smoke tests must pass |
| 4 | Build factual destination detail pages | [Issue #5](https://github.com/sooubh/nashik/issues/5) | Source-of-truth data audit and content verification first |
| 5 | Publish distinct, people-first Nashik travel guides | [Issue #6](https://github.com/sooubh/nashik/issues/6) | Destination pages and editorial sourcing process established |
| 6 | Improve mobile experience, accessibility and Core Web Vitals | [Issue #7](https://github.com/sooubh/nashik/issues/7) | Baseline measurements before changes; preserve design |
| 7 | Verify canonical host, indexing and AI crawler eligibility | [Issue #8](https://github.com/sooubh/nashik/issues/8) | Requires production-domain and Search Console access |

Each workstream should remain a focused PR. Destination pages and editorial guides should not be combined into one broad content dump. If a workstream requires unverified facts or owner access, keep it blocked rather than publishing assumptions.

## Dependency security gate

The current dependency set uses Next.js 14.2.15. CI reported an npm audit total of four findings (one moderate, two high and one critical) and the Next.js support policy lists 14.x as unsupported. Track this separately in [SEC-01](https://github.com/sooubh/nashik/issues/13). Do not treat a successful build as proof that dependencies are secure. Upgrade to a supported patched Next.js/React combination, review every advisory path, regenerate the lockfile, and rerun all quality gates before production readiness.

## Technical SEO checklist

- Confirm the real production hostname and redirect all alternate hosts to it.
- Use one self-referencing canonical per indexable page.
- Ensure page titles and descriptions are unique, accurate and human-readable.
- Keep sitemap entries limited to canonical, indexable URLs that return HTTP 200.
- Ensure robots.txt references the canonical sitemap and does not block important public assets or routes.
- Check internal links, redirects, 404s, status codes, metadata and rendered HTML.
- Validate JSON-LD syntax and compare every property with visible page content.
- Use descriptive image filenames and meaningful alt text; do not keyword-stuff alt text.
- Avoid stale or fabricated `lastModified` values.

## AI search crawler policy

- Keep general public crawling allowed unless there is a deliberate privacy or access reason to restrict it.
- Allow automatic search crawlers such as OAI-SearchBot, Claude-SearchBot and PerplexityBot.
- Do not confuse OAI-SearchBot with ChatGPT-User (user-triggered fetches) or GPTBot (training crawler).
- Googlebot controls Google Search crawling. Google-Extended is a separate control and is not a substitute for Googlebot access.
- `llms.txt` may be maintained as a supplementary publisher aid, but it is not a Google ranking requirement or a substitute for visible content.

## Destination and editorial content standard

Every destination page must have:
- A distinct search intent and useful information beyond a homepage card.
- A clear H1, concise introduction, unique title/description, canonical URL and breadcrumb.
- Verified destination name and alternate local-language name where known.
- Location/context, relevant images with accurate alt text, and practical visitor notes.
- Primary/official source links for time-sensitive or sensitive claims.
- Explicit caveats where hours, fees, access, weather or seasonal conditions can change.
- Internal links to related destinations and relevant Trivio app functionality.

Do not publish a separate page for every keyword permutation. Publish only pages with enough verified, unique information to help a traveller make a decision.

## Performance and accessibility standard

Measure before changing:
- Lighthouse mobile and desktop on homepage and trip planner.
- LCP, INP and CLS lab diagnostics; distinguish lab data from field Core Web Vitals.
- Image payloads, responsive sizing, font loading, JavaScript/hydration and animation cost.
- Keyboard navigation, visible focus, contrast, heading hierarchy, landmarks, form labels and reduced-motion behaviour.

Fix the largest user-facing issues first without changing the established brand direction.

## Final verification gates

The project is not complete until all applicable gates have evidence:

- [ ] GitHub Actions TypeScript and production build checks pass.
- [ ] SEO smoke tests pass against the production build.
- [ ] Production hostname is confirmed and canonical/redirect behaviour is verified.
- [ ] Every intended indexable route returns 200 and has unique title, description and one canonical.
- [ ] Sitemap URLs are canonical and resolve successfully.
- [ ] robots.txt is checked on the live host and crawler access is not blocked by CDN/WAF rules.
- [ ] JSON-LD validates and matches visible page content.
- [ ] Mobile/desktop Lighthouse reports are recorded; field CWV is checked when data exists.
- [ ] Google Search Console and Bing Webmaster Tools are verified, sitemap submitted and representative URLs inspected.
- [ ] Search visibility is measured over time; no claim of guaranteed ranking or AI recommendations is made.

## Current known blockers

- The production canonical host configured in `src/config/site.ts` is `https://nashik.sooubh.me`; its ownership/production status and redirects must be confirmed before treating it as authoritative.
- Search Console/Bing Webmaster access and CDN/WAF crawler allow-list verification require owner access.
- Destination facts in the current static data need source review before being expanded into indexable detail pages.
