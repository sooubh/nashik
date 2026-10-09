# FIX-02 — Premium, Minimal App-Promotion Landing Page

**Priority:** P1 / core product objective  
**Target repository:** `sooubh/nashik`  
**Reference-only repository:** `sooubh/nashikexplore`  
**Goal:** Replace the overbuilt homepage with a fast, polished, mobile-first landing page whose single primary conversion is installing NashikExplore from Google Play.

---

## 1. Design goal

Build a premium product landing page—not a travel directory, not a second version of the Flutter app, and not a technical architecture showcase. Visitors should understand what NashikExplore is, see real app screens, learn three practical benefits and download it within a few seconds.

Target feeling: **confident, clean, warm, modern, trustworthy**. Use a light-first palette, high-quality app screenshots, strong typography and deliberate whitespace. A little accent blue is enough. Do not attempt to make every section “special” with glows, gradients, floating decorations, moving counters, glassmorphism and cards simultaneously.

## 2. Proposed information architecture

Keep the homepage to approximately five content sections plus the footer. Legal/support pages remain separate routes and do not count as homepage sections.

### A. Header/navigation

- Left: actual NashikExplore icon/wordmark.
- Right: at most `Features`, `Screenshots` and one primary `Get the App` CTA. A small `Privacy`/`Support` link may live in the footer rather than competing in the main nav.
- The main CTA links directly to `https://play.google.com/store/apps/details?id=com.nashikexplore.app` and opens safely if using a new tab.
- Retain a keyboard-accessible mobile menu only if needed at the final nav width. Close it after selection and support Escape.
- Remove the seven/eight-link nav that tries to expose every homepage anchor, including a separate AI Planner demo, Reviews, Categories and FAQ when those sections are being removed/merged.
- A theme toggle is not required for the marketing page. If light-theme-only design is approved, remove it rather than preserving a toggle and duplicated dark-mode variants everywhere.

### B. Hero

Use one clear H1, one concise subheading, one dominant CTA, one quiet secondary action (`See how it works`, which scrolls to screenshots/features) and one real phone/app image.

Suggested content:

- **H1:** “Explore Nashik beyond the usual spots.”
- **Body:** “Discover places, explore local attractions, and plan your Nashik trip with NashikExplore.”
- **Primary CTA:** “Get NashikExplore on Google Play”
- **Secondary CTA:** “See the app”
- Small platform note: “For Android” only after the published listing's currently supported platform is confirmed.

Avoid a rating badge, invented downloads, fake review numbers, percent-offline badge, “official/verified local expert” claim or animated metric ticker. The right-side visual should use a real screenshot from the actual app, not a generated mockup that depicts unavailable functionality. Prefer a phone frame with one readable screen and at most one subtly offset secondary screen; do not use a carousel that changes every few seconds.

### C. Three benefits

Merge the current `WhyChooseUs` and `FeatureShowcase` into one lightweight section with up to three benefits. Each card has a short title, a one-sentence user benefit and optionally a cropped screenshot. Avoid technical internal names.

1. **Discover places** — browse Nashik attractions by category and inspect available photos and details.
2. **Plan your visit** — use the app's multi-step planner to generate a multi-day itinerary based on chosen interests and travel preferences; the app has a Cloudflare Worker AI path and a deterministic offline fallback.
3. **Save places** — save places into wishlist boards and organise places to revisit.

Verify these against the current app release before shipping. Do not describe the planner as “on-device AI”, live traffic routing or a guaranteed optimiser. Do not promise a full offline map or offline catalogue.

### D. Real app screenshot strip

Show three or four authentic app screenshots, preferably sourced from the existing app screenshots in `public/images/`:

- `/images/home.png`
- `/images/explore.png`
- `/images/ai-planner.png`
- `/images/saved.png` or `/images/details.png`

Inspect the assets visually and verify each is truly a current app screenshot before selecting it. Use honest captions such as `Discover places`, `Search and filters`, `Trip planning`, `Place details`, or `Saved places` only if the screen shows the described content.

Requirements:

- Keep images correctly proportioned; never stretch them.
- Use `next/image` or the selected Next.js image approach consistently.
- Avoid loading full multi-megabyte source images in every card; create compressed responsive derivatives.
- Three carefully presented screenshots are better than a six-image gallery with lightbox, keyboard state, body-scroll locking and an unnecessary carousel.
- No auto-advancing screenshots. Any user-controlled gallery must work via keyboard and touch, but the preferred implementation is a static grid/strip.

### E. Final download CTA

One calm, high-contrast closing section:

- Heading: “Ready to explore Nashik?”
- Body: “Take NashikExplore with you for your next visit.”
- Button: “Get it on Google Play”

Keep it visually distinct without a large stack of fake assurance badges. Do not repeat fabricated rating, downloads, “100% offline” or unsupported premium price. Do not make a QR code modal a major action. A desktop QR code may be added later if analytics show real need; if so, use a local/static QR asset and preserve the direct Play Store link.

### F. Footer

Keep only necessary and useful links: Contact/Support, Privacy Policy, Terms of Use, Data Safety (if required), Account Deletion and Disclaimer. Preserve their routes and meaningful text. Do not duplicate the complete marketing pitch inside each footer column.

---

## 3. Current sections: keep, merge or remove

The current `src/app/page.tsx` renders 10 components. Use the following disposition.

| Current component | Decision | Reason / condition |
|---|---|---|
| `Hero` | Keep, redesign | Main message and download CTA |
| `WhyChooseUs` | Merge into benefits section | Current text repeats engineering details, claims, numbers and premium promises |
| `FeatureShowcase` | Merge into benefits/screenshot section | Six selectable feature modules are excessive for a small app landing page |
| `TripPlannerShowcase` | Remove as a separate section | A separate web simulator implies duplicated app capability; feature belongs in the benefit/screenshot section |
| `CategoriesSection` | Remove from homepage or reduce to a small visual row | The website does not need to reproduce the app's full category directory |
| `ScreenshotGallery` | Replace with static screenshot strip | Full interactive gallery is unnecessary for the primary conversion goal |
| `StatsSection` | Remove | The configured numbers are explicitly placeholders |
| `TestimonialsSection` | Remove until verified review sources exist | Current records lack source URLs and are labelled as verified |
| `FaqSection` | Remove from homepage initially or reduce to 2–3 genuine user questions | Current FAQ contains technical implementation details and unverified claims |
| `DownloadCta` | Keep as final CTA, simplify | One final strong download action is useful |
| `BackToTop` | Remove from the landing page unless real usability testing proves it helps | Shorter page should not need a dedicated control |
| `QrCodeModal` | Remove from primary flow unless needed | Direct Play Store CTA is clearer and less brittle |

### Important implementation rule

FIX-01 must be completed before or together with this redesign so placeholder data and unsupported copy are not left referenced. This file owns the **homepage structure and visual components**; do not run its implementer concurrently with the claims/form implementer on shared files.

## 4. Visual system

- **Background:** white or warm off-white. Use one neutral surface plus one brand accent.
- **Accent:** use the existing brand blue sparingly; verify it against the real app icon before standardising.
- **Typography:** use the existing DM Sans or another already installed font. Do not add a font dependency unless necessary. Keep one obvious heading scale and body line height.
- **Spacing:** use a repeatable spacing scale, generous horizontal gutters and a constrained text width. Avoid full-width paragraphs.
- **Corners and shadows:** one or two radius levels, subtle borders, minimal shadow. Avoid placing every item in a separate rounded “card”.
- **Motion:** default to static; use only brief entrance transitions if they materially improve the experience. Respect `prefers-reduced-motion`. Avoid auto-rotating content, counter animation, animated glows and loops.
- **Icons:** one icon style, only where the icon improves scanning. Do not use an icon plus badge plus mini-label plus border for every heading.
- **Photography/screenshots:** actual product screenshots are the strongest proof. Do not introduce stock travel images that make users assume the app offers content or experiences that are not shown.
- **Writing:** short, concrete sentences; benefit-first wording. No superlatives such as “ultimate”, “best”, “world-class”, “seamless”, “revolutionary” or “high-performance” unless there is a specific, meaningful basis.

## 5. Responsive/mobile requirements

Mobile traffic is a primary use case. Validate at 320px, 360px, 390px, 430px, tablet and desktop widths.

- H1 should wrap naturally and not create a 4–5-line block.
- Main CTA should be full-width on narrow screens and remain above the fold with part of the product visual visible.
- Do not put 3 desktop CTAs on one row on mobile.
- Keep screenshot frames large enough to recognise but not so large that the CTA is pushed far below the fold.
- Avoid tiny all-caps captions and low-contrast secondary text.
- Ensure page never overflows horizontally.
- Avoid sticky overlays covering content or the system browser controls.
- All actions have a visible focus state and at least 44px effective touch target where practical.
- Use correct semantic order: one H1, section H2s, then card headings.

## 6. Component/file ownership

Likely files to update in `sooubh/nashik`:

- `src/app/page.tsx` — final homepage composition, approximately five sections.
- `src/components/Navbar.tsx` — reduced nav and one CTA.
- `src/components/Hero.tsx` — new text hierarchy and product visual.
- `src/components/WhyChooseUs.tsx` and/or `src/components/FeatureShowcase.tsx` — merge/reduce; choose a single maintained component.
- `src/components/TripPlannerShowcase.tsx` — remove from the home composition and then delete only if no routes/imports use it.
- `src/components/CategoriesSection.tsx` — remove or reduce after checking whether it is linked elsewhere.
- `src/components/ScreenshotGallery.tsx` — replace with the simple screenshot strip or keep a minimal component.
- `src/components/StatsSection.tsx`, `src/components/TestimonialsSection.tsx`, `src/components/FaqSection.tsx` — remove imports/usages and delete once no route depends on them.
- `src/components/DownloadCta.tsx` — final CTA only; remove the QR modal dependency if no longer used.
- `src/components/Footer.tsx` — keep essential legal/support links.
- `src/app/globals.css` and `tailwind.config.js` — prune styles/tokens only after component migration.

Search the whole repository before deleting any component or data module. The old root `index.html` is handled by FIX-03, not by deleting random files during the visual phase.

## 7. Subagents and implementation boundaries

### Read-only parallel audit wave

- **Agent A — UI hierarchy reviewer:** analyse all ten current sections; propose the shortest section tree and locate repeated text. No edits.
- **Agent B — mobile usability reviewer:** inspect responsive classes, auto-rotating Hero, nav links, CTAs, screenshot sizes and reduced-motion support. Return exact affected paths. No edits.
- **Agent C — brand/content reviewer:** compare proposed visible copy to FIX-01's verified claims table and actual app runtime. No edits.

### Implementation wave (one owner per shared component)

- **Agent D — homepage composition owner:** own `src/app/page.tsx` and its imports. Decide which components render; do not edit SEO, legal or forms.
- **Agent E — visual component owner:** own the selected Hero, benefits, screenshot strip, Navbar, final CTA and Footer files. This agent must not edit `src/app/page.tsx` while Agent D is working; run sequentially or assign page composition solely to the coordinator.
- **Agent F — accessibility reviewer (read-only):** test semantics, focus order, keyboard nav, contrast, reduced motion and mobile overflow on the resulting diff.

Subagents must not be allowed to implement overlapping files in parallel. The coordinator is responsible for merge conflict prevention and integration tests.

## 8. Acceptance criteria

- [ ] Homepage has a clear single purpose: promoting the app and sending users to Google Play.
- [ ] Homepage has no more than five primary content sections (excluding header/footer/legal routes).
- [ ] No stats/reviews placeholder is visible.
- [ ] No separate website-side AI simulator is promoted as if it were the app backend.
- [ ] At least three current, real app screenshots are shown with accurate captions, if those screenshots pass visual verification.
- [ ] Main CTA works and always uses the expected app listing URL.
- [ ] Header has few links and no cluttered row of competing buttons.
- [ ] Design is light-first, consistent, restrained and responsive.
- [ ] No horizontal overflow, unreadable text, keyboard traps or auto-advancing UI exists.
- [ ] Reduced-motion settings are respected.
- [ ] Essential footer/legal links remain reachable.
- [ ] Build succeeds and no unused component imports remain.
