# FIX-01 — Truthful Claims, Real App Features, and Functional User Flows

**Priority:** P0 / release blocker for misleading claims and false submission confirmations  
**Target repository:** `sooubh/nashik` (website)  
**Source-of-truth repository:** `sooubh/nashikexplore` (Flutter mobile app; read-only reference)  
**Objective:** Make every user-facing product claim accurate, remove fabricated social proof, and stop fake interactions from reporting success when nothing has been sent or deleted.

---

## 1. Required result

When this fix is complete, the website must describe the app that actually exists—not a hypothetical, fully automated travel platform. Remove unverified numbers, reviews, technical claims and emergency-grade promises. Any form that says a message or deletion request was sent must actually send it through a verified service. If a backend cannot be used, provide a truthful alternative (for example, a confirmed support email link) and explain what the action will do before the user activates it.

Do not make changes to the mobile app in this task. Do not “fix” the website by copying the mobile app's internal implementation or adding new backend features.

## 2. Evidence already found in `sooubh/nashik`

Inspect these files before changing them:

- `src/data/stats.ts` — its own comment describes the stats as placeholder values; it includes `4.8★`, `1,250+` reviews, `50k+` downloads, `100+` spots and `100%` verified.
- `src/data/testimonials.ts` — three hard-coded five-star testimonial records without source review links or verification metadata.
- `src/components/TestimonialsSection.tsx` — labels these static records “Verified Reviews”.
- `src/components/Hero.tsx` — repeats `4.8`, `50k+` and `100% Offline` metrics and makes strong verified/local/weather claims.
- `src/components/WhyChooseUs.tsx`, `src/data/features.ts` and `src/data/faq.ts` — contain broad offline, verification, safety, real-time-weather, moderation-SLA and premium-plan promises.
- `src/app/layout.tsx` — includes a `MobileApplication` JSON-LD `aggregateRating` of 4.8 with rating count 1250.
- `index.html` — old standalone page repeats a different canonical/OG domain, fabricated rating schema and legacy marketing claims.
- `src/components/TripPlanner/TripPlannerClient.tsx` and `src/lib/planner.ts` — create a local demo itinerary using a timer and randomised hard-coded destinations while the UI claims it is connecting to Firestore and calculating an optimal route.
- `src/components/Contact/ContactClient.tsx` — submission is simulated with `setTimeout`; the inspected submit handler does not post to an API or send an email.
- `src/components/DeleteAccount/DeleteAccountClient.tsx` — submission is simulated with `setTimeout`; the inspected submit handler does not send a deletion request to a backend.

These are confirmed repository-level findings, not claims about what may be configured elsewhere. Search the complete repo before finalising changes.

## 3. App facts to verify against `sooubh/nashikexplore`

Read runtime code first; documentation is useful but can be stale. Relevant references include:

- [`README.md`](https://github.com/sooubh/nashikexplore/blob/main/README.md)
- [`SPEC-PLACES.md`](https://github.com/sooubh/nashikexplore/blob/main/docs/specs/SPEC-PLACES.md)
- [`SPEC-TRIP-PLANNER.md`](https://github.com/sooubh/nashikexplore/blob/main/docs/specs/SPEC-TRIP-PLANNER.md)
- [`home_screen.dart`](https://github.com/sooubh/nashikexplore/blob/main/lib/features/places/presentation/screens/home_screen.dart)
- [`place_details_screen.dart`](https://github.com/sooubh/nashikexplore/blob/main/lib/features/places/presentation/screens/place_details_screen.dart)
- [`paginated_places_provider.dart`](https://github.com/sooubh/nashikexplore/blob/main/lib/features/places/presentation/providers/paginated_places_provider.dart)
- [`firestore_places_repository.dart`](https://github.com/sooubh/nashikexplore/blob/main/lib/features/places/data/repositories/firestore_places_repository.dart)
- [`cloudflare_worker_trip_generator.dart`](https://github.com/sooubh/nashikexplore/blob/main/lib/features/trip_planner/data/repositories/cloudflare_worker_trip_generator.dart)
- [`offline_trip_generator.dart`](https://github.com/sooubh/nashikexplore/blob/main/lib/features/trip_planner/data/repositories/offline_trip_generator.dart)
- [`firestore_weather_repository.dart`](https://github.com/sooubh/nashikexplore/blob/main/lib/features/places/data/repositories/firestore_weather_repository.dart)
- [`wishlist_providers.dart`](https://github.com/sooubh/nashikexplore/blob/main/lib/features/wishlist/presentation/providers/wishlist_providers.dart)
- [`security_privacy_screen.dart`](https://github.com/sooubh/nashikexplore/blob/main/lib/features/profile/presentation/screens/security_privacy_screen.dart)
- [`paywall_screen.dart`](https://github.com/sooubh/nashikexplore/blob/main/lib/features/subscription/presentation/screens/paywall_screen.dart)

### Truthful feature baseline (must be checked during implementation)

The Flutter app source and feature specification show these real product areas:

1. **Discover places:** category-based discovery, place details, imagery/galleries, descriptive information, available opening-hours/fee/facility fields, tags, and Google Maps hand-off when valid coordinates or a maps URL exist.
2. **Search and browse:** the app has search/filter logic and sections such as Popular, Hidden Gems, Recommended, Nearby and categories. The current tab logic includes tag/rating rules; do not claim a learned or AI-personalised recommendation engine unless that feature is separately demonstrated in runtime code.
3. **Save places:** users can save places into wishlist boards. Do not promise that every save or all place data is available offline until behaviour is verified on a fresh device with network disabled.
4. **Trip planning:** the mobile app has a multi-step trip-preference flow and a real `CloudflareWorkerTripGenerator`, with an AI generation request and deterministic `OfflineTripGenerator` fallback. Saved trips and drafts are represented in the app's trip-planner feature. This does **not** make the separate website's randomised, hard-coded simulator a real AI planner.
5. **Distance and routes:** Haversine distance is straight-line geographic distance. Actual turn-by-turn road navigation is delegated to external Google Maps. Do not call the Haversine output “live road distance”, “optimal driving route” or “traffic-aware routing”.
6. **Weather:** the mobile `FirestoreWeatherRepository` reads `/weather/nashik`, memoizes the result for 30 minutes and falls back to a baseline value when unavailable. It is not evidence of real-time official hazard warnings or automatic landslide notifications.
7. **Offline:** the places specification explicitly says offline support relies on Firestore's default cache and there is no dedicated offline SQLite/Hive mirror for the entire places catalogue. Do not promise “100% offline database”, downloadable offline map tiles or full use in zero-reception areas without separate proof.
8. **Reviews and issue reports:** the app has place review and inaccuracy-reporting features. This does not validate invented website testimonials. If using social proof, link to a real public review/listing source or remove it.
9. **Authentication and premium:** the app has Google/email authentication flows and a RevenueCat/paywall flow. Available purchase offerings can be dynamic. Do not hard-code ₹199 or lifetime benefits on the website without comparing current Play Store/RevenueCat offerings and the live app's entitlement behavior.
10. **Updates:** the app has an update feed. Do not label it a guaranteed real-time alerting or emergency-warning service.

If runtime code, the live Play Store listing and docs disagree, flag the discrepancy instead of picking whichever text makes the website sound more impressive.

## 4. Exact claims to remove or rewrite

| Existing claim/pattern | Required action | Safe direction (only if runtime app confirms it) |
|---|---|---|
| `4.8★`, “Based on 1,250+ reviews”, `50k+` downloads | Remove unless pulled from an authoritative, live source | Omit numbers; users can check the Play Store listing |
| Hard-coded testimonials called “Verified Reviews” | Remove the testimonials section and its fake/static records unless actual review source IDs/URLs are supplied | Link to the app's Play Store page; do not invent quotations |
| `100% Local Verified`, “Like a Verified Local”, “Verified coordinates” | Remove absolute verification language | “Explore place details and available visitor information” |
| “100% Offline Hive DB”, “100% Offline Ready”, “offline maps” | Remove/qualify claims; no full offline place mirror is documented | “Some previously loaded/cached information may be available offline” only after device testing; otherwise omit |
| “Real-time weather”, “dynamic weather alerts”, “landslide notifications”, “monsoon flood warnings saved hours” | Remove emergency-grade and unsupported real-time promises | If a weather widget exists in the release, describe it as general weather information and clearly avoid emergency-safety implications |
| “AI Planner” as a website tool | Do not market the simulated website widget as the real app feature | Promote the actual mobile trip-planning flow with app screenshots |
| “optimized routes”, “optimal paths”, “live transit time”, “traffic-aware” | Remove unless an actual route matrix/road-routing provider is verified | “Approximate distances; open Google Maps for road navigation” |
| “60fps”, “high-performance”, low battery, “drastically reduces” | Remove unsupported performance/battery metrics | Describe a user-visible benefit without a quantified performance guarantee |
| Fixed ₹199 lifetime price and “unlimited” premium guarantees | Do not copy a fixed price from old HTML/docs | Omit price/benefit specifics until current product config and live app have been checked |
| “Verified Helpdesk”, “reply in 24–48 hours”, “moderation team” | Remove unless a monitored support process/SLA is confirmed | “Contact support” and a real channel, without a response-time promise |

## 5. Fix the simulated Trip Planner page

The mobile app's planner must remain intact. The task is to remove or neutralise the **website-side simulator**.

1. Remove the homepage's `TripPlannerShowcase` promotion if it implies the site itself runs the AI engine.
2. Replace `/trip-planner` with either:
   - a short truthful feature page using real mobile app screenshots and a Google Play download link, or
   - a redirect to the homepage's planner-feature anchor, **after** checking production domain, old URL traffic and existing search-indexing.
3. Remove `TripPlannerClient` and `src/lib/planner.ts` only after all imports/routes/tests/references are checked. Do not delete the app repository's trip planner code.
4. Remove fake progress steps such as “Connecting to Firestore cache…” and “Computing Haversine distance vectors…” from the web simulator. Do not replace them with a different fake backend animation.
5. Preserve real explanatory copy: the app accepts trip preferences and asks a backend generator with an offline heuristic fallback; road navigation is opened in an external maps app. Verify the currently deployed generation endpoint before mentioning provider/model names publicly.
6. If keeping a planner explainer page, call it “Trip planning in the app”, not “Launch Interactive Planner” or “Live On-Device Simulator”.

## 6. Fix Contact flow without fabricating success

Current website form submission calls a local timer. It must not tell a user that a message has been sent when no network request occurred.

1. Inspect for an existing configured API route, server action, email provider, abuse protection and production environment variables. Do not invent an endpoint name or assume a service is configured.
2. If a valid backend exists, submit to it with server-side validation, safe error handling, a loading state, accessible errors, spam protection and a real success response. Only show the success state after the server confirms acceptance.
3. If no backend exists, remove the fake form and show a simple email/contact link **only after confirming that the address is real and monitored**. Make it clear that it opens the user's email client; do not say a message was sent.
4. Remove the “Verified Helpdesk” label and 24–48 business-hour SLA unless the product owner can prove the support operation actually meets it.
5. Test empty, invalid email, network failure, repeated click and success cases.

## 7. Fix Account Deletion request flow carefully

This is not just marketing copy. The mobile repository implements in-app account deletion, but its own website/privacy documentation notes that client-side deletion may not recursively remove nested user subcollections or profile media. Website deletion instructions must not imply more than the runtime deletion flow actually does.

1. Inspect `security_privacy_screen.dart` and `firebase_auth_repository.dart` in `sooubh/nashikexplore` to establish the current deletion sequence.
2. The website's `DeleteAccountClient.tsx` must not show “request registered”, “Data Permanently Purged” or any success message based only on `setTimeout`.
3. If an authenticated backend deletion-request endpoint exists, wire the form into it and show success only after the server confirms request creation. The server must verify and safely process the request; do not accept an arbitrary email as proof of account ownership.
4. If no request endpoint exists, offer a real, monitored support route with clear steps and a prefilled `mailto:` subject/body if appropriate. Explicitly say it opens the user's email client. Do not claim automatic or instantaneous deletion.
5. Verify the relevant Google Play external deletion-request requirement against the app's actual current Play Console configuration before releasing. If a real external request channel cannot be provided, mark this as a release blocker.
6. State deletion scope honestly: account profile/auth, locally stored information and server-side boards/reviews/media may have different deletion paths. Do not promise everything is purged until the runtime deletion job covers all relevant collections/storage objects and has been tested.
7. Keep the website `/delete-account` route stable if it is used by Play Console, and keep the route discoverable without making it a large homepage marketing section.

## 8. Proposed copy (short, honest and user-focused)

Use only after the feature audit confirms each statement:

- **Hero headline:** “Explore Nashik beyond the usual spots.”
- **Hero support line:** “Discover places, explore local attractions, and plan your Nashik trip with NashikExplore.”
- **Places benefit:** “Browse places by category and see available photos, details and visitor information.”
- **Trip-planning benefit:** “Build a multi-day plan around your interests and travel style.”
- **Saved places benefit:** “Save places to revisit and organise favourites in boards.”
- **Directions note:** “Open a place in Google Maps for navigation.”
- **Primary CTA:** “Get NashikExplore on Google Play.”

Do not use these examples to override an actual app limitation. If a feature is not present/working in the current production release, remove the claim.

## 9. Multi-agent plan and ownership

Use one **Coordinator** plus read-only reviewers. Shared files make concurrent implementation unsafe.

- **Agent A — Mobile source-of-truth auditor (read-only):** inspect the app repository and return a claim matrix for discovery, saved boards, trip generation, offline behavior, weather, pricing and deletion. Include exact paths and runtime evidence. No edits.
- **Agent B — Claim/copy auditor (read-only):** search all website paths for percentages, statistics, “verified”, “real-time”, “offline”, “AI”, safety, SLA and price promises. Return all occurrences, including root legacy HTML. No edits.
- **Agent C — Form and interaction auditor (read-only):** inspect contact/delete form handlers, route handlers, server actions, environment configuration and dependencies. State what currently sends network traffic and what only simulates it. No edits.
- **Implementer — Coordinator-owned:** after the reports are merged, one implementer owns the code changes for this fix. Do not have A/B/C patch files in parallel.
- **Reviewer D — independent diff review:** inspect the changed claim copy against runtime source and verify there are no unsubstantiated promises or accidental modifications to `nashikexplore`.

### Suggested implementation order

1. Create a claim inventory with each exact string, source path, evidence and decision: `keep`, `rewrite`, `remove`, or `verify before release`.
2. Remove placeholder stats and testimonial data; keep the repository buildable until FIX-02 removes the now-unused UI components.
3. Replace absolute offline, verified, emergency alert and route-optimisation wording.
4. Replace the website-side planner simulator with a truthful app feature explainer or redirect.
5. Fix contact/deletion actions with a real endpoint or an explicit honest fallback.
6. Run typecheck/build and the reviewer pass.

## 10. Acceptance criteria

- [ ] No hard-coded `4.8`, `1,250`, `50k+`, `100% Verified`, or similar unsupported social-proof figures remain in production website UI/schema.
- [ ] The site does not show fabricated testimonials as reviews, and no fake quote is attributed to a person.
- [ ] No homepage or planner page claims live/optimal road routing based only on Haversine distance.
- [ ] No unqualified “100% offline”, offline map download, real-time hazard, flood or landslide-alert promise remains without runtime proof.
- [ ] The website does not simulate Firestore/API/AI work with timers and present it as real service activity.
- [ ] Contact submission either goes to a verified backend or clearly opens a real contact channel; it never fabricates a sent state.
- [ ] Account deletion does not falsely claim that a request was registered or data was permanently purged.
- [ ] Premium prices and benefits are not hard-coded unless the active store configuration was independently verified.
- [ ] All required privacy/deletion routes remain accessible and truthful.
- [ ] A reviewer documents evidence for every claim retained.
