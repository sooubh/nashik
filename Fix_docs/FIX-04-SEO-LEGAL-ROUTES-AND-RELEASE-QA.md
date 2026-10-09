# FIX-04 — SEO, Metadata, Legal Routes and Release QA

**Priority:** P0 for misleading structured data and broken required routes; P1 for broader SEO polish  
**Target repository:** `sooubh/nashik`  
**App reference:** `sooubh/nashikexplore`  
**Objective:** Make the final site crawlable, internally consistent, truthful, lightweight and safe to release after the claims, UI and repository-cleanup phases.

---

## 1. Domain/canonical decision

The inspected website files conflict:

- `src/app/layout.tsx`, route metadata, Next sitemap and Next robots use `https://nashik.sooubh.me`.
- Root `index.html` uses `https://nashikexplore.com/` in Open Graph/Twitter metadata and older images.

Do not hard-code a choice until the coordinator confirms the production domain from the current deployment/custom-domain configuration and owner-provided settings. Once confirmed, set the same canonical host in every retained source. If `nashik.sooubh.me` is confirmed as production, use it consistently; if another domain is actually live, update the whole site to that host instead.

Check:

- `src/app/layout.tsx`
- `src/app/trip-planner/page.tsx` or its replacement/redirect
- `src/app/contact/page.tsx`
- `src/app/delete-account/page.tsx`
- `src/app/privacy-policy/page.tsx`
- `src/app/data-safety/page.tsx`
- `src/app/terms-of-use/page.tsx`
- `src/app/cookies-policy/page.tsx`
- `src/app/disclaimer/page.tsx`
- `src/app/sitemap.ts`, `src/app/robots.ts`
- retained root HTML files, if any
- structured data, image URLs, `og:url`, `twitter:url`, canonical tags and footer links

Each indexable page should have one valid canonical URL and the chosen host should not conflict with an equivalent page on another host.

## 2. Metadata and structured-data cleanup

Current `src/app/layout.tsx` and old `index.html` contain hard-coded application rating data (`4.8`, `1250` reviews). The `src/data/stats.ts` comment confirms the metrics are placeholders. These data must be removed from UI **and** structured data.

Required steps:

1. Remove `aggregateRating` from every `MobileApplication` structured-data block unless the values are sourced from the currently published Play Store listing and the website has a safe, maintainable update process. Never make up schema values.
2. Audit and remove fabricated review count, app download count, verification percentage and other stats from all legacy/new metadata.
3. Keep the app name, platform and Google Play download URL only after confirming those values against the actual listing.
4. Do not state that the app is “completely free” if the app includes in-app purchases. If using an `Offer` schema, ensure its meaning reflects the actual offer and doesn't imply all features are free; otherwise omit pricing schema.
5. Remove fabricated organization/team naming if the actual publisher/developer name isn't confirmed. Use the real publisher name only when verified.
6. Use genuine current screenshots with correct absolute URLs for schema/OG; make sure each referenced asset exists and is not a duplicate or stale filename.
7. Ensure the title/description are concise and describe the product rather than stacking keyword phrases.
8. Avoid “Ultimate”, “official”, “verified”, “real-time weather”, “offline maps” and “AI optimised” in SEO metadata unless each term is accurate and justified by the live app.
9. Remove the `keywords` meta tag if it is being used as an SEO lever. The `keywords` field in Next metadata can also be simplified. Focus on readable page titles, unique descriptions, useful content, correct canonical links and valid internal navigation instead of keyword stuffing.
10. Do not add FAQ schema or AggregateRating schema to obtain search-result enhancements when the data isn't genuine.

Suggested home metadata (adapt to confirmed product name/domain and verified features):

- **Title:** `NashikExplore — Discover Places Around Nashik`
- **Description:** `Explore Nashik attractions, browse place details, and plan a visit with NashikExplore. Get the app on Google Play.`

Only keep “plan a visit” if the current Play Store release contains the described trip-planning flow.

## 3. Sitemap and robots

The repo currently has root static `robots.txt`/`sitemap.xml` and Next-generated `src/app/robots.ts`/`src/app/sitemap.ts`. FIX-03 must determine which implementation is deployed.

- Maintain one authoritative sitemap and robots response for the selected production deployment.
- Sitemap should contain canonical, intended-to-index routes only. It should not list a removed simulator unless it is kept as a truthful app-explainer page.
- Keep legal, privacy, terms, contact and deletion URLs reachable where required, but don't assume all utility pages need the same indexing priority.
- Avoid assigning `lastModified: new Date()` to every entry on every request unless the page truly changed; it creates misleading recency. Use real source-control/content modified dates when supported or omit `lastModified`.
- Use the exact canonical site host in `sitemap.xml` and `robots.txt`.
- Never block useful CSS/images or the whole site from crawling accidentally. `/api/` disallow is appropriate only if a real API route exists and that rule is still intended.
- Test returned XML/text for valid syntax and zero `localhost`, wrong-domain or broken URL references.

## 4. Legal and privacy route review

Do not remove legal pages merely to make the homepage short. The site should have minimal marketing content and complete, truthful policy routes.

### Privacy policy

Compare the text with current app runtime behavior and the actual website's analytics/cookies. The mobile app's privacy documentation references authentication data, Firestore, Hive, AdMob, RevenueCat and Crashlytics. Verify each against current dependencies, initialization code and Play Console disclosures before asserting what is or is not collected.

- Avoid absolutes such as “we never collect anything”, “100% private”, “fully compliant with all global laws” or detailed encryption claims without direct evidence.
- Distinguish website browser storage from mobile app Hive/Firebase storage; don't describe mobile-app local storage as a website cookie.
- Keep policy dates accurate; don't bump dates mechanically without reviewing the changes.
- Don't claim all user data automatically disappears from every nested collection/storage object until tested.

### Data Safety

- Keep if it is linked from Play Console or required for users.
- Remove claims like “full compliance” and “exact declarations submitted” unless the current Play Console Data Safety form has been checked against this page.
- Do not claim all network traffic uses a specific TLS version unless the deployed infrastructure actually confirms it.
- Mark data flows factually and explain the difference between local storage, server storage, authentication, third-party ad/purchase SDKs and deletion scope.

### Terms and disclaimer

- Ensure terms match current Play Store price/entitlement setup; no stale ₹199 “lifetime” wording if the store offering now differs.
- Do not claim that routes, coordinates, accessibility, opening hours or safety warnings are always verified or guaranteed.
- State that details can change where appropriate, but don't use a disclaimer to justify inaccurate marketing copy.
- Keep trekking/weather safety copy cautious; the app is not an emergency warning or official safety authority unless specifically authorised.

### Contact page

- A contact form must send a real request through a configured backend, or be replaced by a working and monitored email/contact path.
- Do not display a “Message Received” state after a local timer only.
- Do not promise 24–48 business-hour response without a real monitored SLA.
- Verify the address before publishing it as a support channel.

### Account deletion

- Keep a stable `/delete-account` URL if required by Google Play settings or existing published links.
- Inspect the app's actual deletion flow and identify profile/auth, user subcollections, wishlist boards, reviews, trip plans and uploaded media. Do not assume deleting the root profile document removes nested records.
- The current website form uses a local timer. Replace it with a genuinely accepted deletion request via a verified service, or a clear monitored contact workflow with no fake success message.
- Keep request instructions usable on mobile and make the request path easy to find.
- No website statement may say “instant”, “completely purged”, “registered”, or “permanently deleted” unless the corresponding action has actually succeeded.
- Test the published URL with a new visitor, not just an authenticated developer.

## 5. Internal linking and download behavior

- Every primary CTA uses the verified Google Play link: `https://play.google.com/store/apps/details?id=com.nashikexplore.app`.
- If opening in a new tab, use `target="_blank"` with `rel="noopener noreferrer"`.
- Make the destination transparent (for example, button text “Get it on Google Play”).
- Ensure all screenshot and logo assets return 200 and are optimised.
- Check nav anchors after homepage sections are removed; no `href="#reviews"`/`#faq` links should point nowhere.
- Check footer legal links in the mobile menu, desktop footer and relevant policy documents.
- If `/trip-planner` is removed as a simulator, add a tested redirect or a plain explainer page before deleting it from the sitemap.
- Do not create a route that auto-generates a plan or makes the Play Store CTA look like an interactive web planner.

## 6. Quality assurance gates

Run the appropriate package-manager commands after reviewing `package.json` and lockfile. Do not invent commands unsupported by the repo. At minimum, verify:

### Build/code

- Clean install from lockfile (`npm ci`, if npm is the intended package manager).
- Next production build (`npm run build`).
- Type check via the repo's valid TypeScript command/config, if available.
- Lint only if the declared lint tool/dependencies are installed; record any baseline/tooling issue rather than claiming lint passed.
- No missing imports, hydration errors, console errors or failed image requests in a browser preview.

### Routes

Verify direct navigation (not only clicking from the homepage):

- `/`
- `/contact`
- `/delete-account`
- `/privacy-policy`
- `/data-safety`
- `/terms-of-use`
- `/cookies-policy`
- `/disclaimer`
- `/trip-planner` (redirect or truthful explainer, based on the decision)
- `robots.txt` and `sitemap.xml`

All pages should have correct titles, canonical host, working back links and appropriate content.

### Responsive/accessibility

- Test widths of 320px, 360px, 390px, 430px, tablet and desktop.
- No horizontal scrolling or clipped CTAs.
- Check color contrast, keyboard focus, labels, semantic heading order, image alt text, menu dismissal and reduced-motion settings.
- Ensure interactive controls have real actions; no button that looks functional but does nothing.

### Claims and link audit

Search the complete final repo for:

`4.8`, `1,250`, `1250`, `50k`, `100%`, `Verified Reviews`, `Verified Helpdesk`, `real-time`, `landslide`, `flash-flood`, `optimized routes`, `AI On-Device`, `₹199`, `24 to 48`, `24–48`, `Instant`, `Permanently Purged`, `100% Offline`.

Review every remaining hit manually. Some hits may be policy text or a legitimate implementation reference, but no stale marketing promise should remain accidentally.

### SEO

- Exactly one canonical host across retained pages and metadata.
- No stale `nashikexplore.com`/`nashik.sooubh.me` mix unless there is an explicitly documented redirect/canonical setup.
- No fabricated aggregate rating/schema.
- No `localhost`, broken OG images, missing favicons or broken sitemap URLs.
- No duplicate homepage section IDs or empty anchor links.

## 7. Multi-agent plan

### Agent A — SEO/domain auditor (read-only)

Find every absolute domain, canonical, Open Graph/Twitter URL, metadata base, sitemap/robots entry and redirect. Report the current host conflict and evidence for the deployment domain. Do not decide the live domain by string frequency alone.

### Agent B — Legal/data-flow auditor (read-only)

Compare website privacy/data safety/deletion copy to mobile runtime code and current disclosures. Return a table of `claim`, `evidence`, `mismatch`, `required correction`; do not provide blanket legal-compliance assertions.

### Agent C — Release QA (read-only until implementation is complete)

Prepare the build, route, responsive, link and string-search checklist. After changes, run tests independently and report failures with exact paths/commands.

### Agent D — Independent reviewer

Review the final diff, structured-data output, legal routes, redirects and CTA links. Must explicitly test that fake contact/deletion success messages are gone.

### Coordinator

Owns `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, per-page metadata and policy routes. These files are connected, so the coordinator should integrate changes after Fix-01 through Fix-03, rather than allowing multiple agents to write them at once.

## 8. Acceptance criteria

- [ ] Canonical domain is evidenced and consistent across all retained files.
- [ ] `MobileApplication` schema contains no invented rating/review count or stale unsupported pricing/features.
- [ ] Every metadata description matches actual app features.
- [ ] Sitemap/robots files reflect the selected deployment implementation and canonical host.
- [ ] No broken old URL is silently discarded where it may be used by Play Console, search engines or users.
- [ ] Privacy, data-safety, terms, disclaimer, contact and deletion content is checked against current behavior.
- [ ] Contact and deletion flows do not fake success, and any real support destination is monitored and tested.
- [ ] Play Store CTA works from desktop and mobile.
- [ ] Build passes; route, asset, and responsive tests have been run and recorded.
- [ ] The final report names remaining unverified product facts instead of covering them up with confident wording.
