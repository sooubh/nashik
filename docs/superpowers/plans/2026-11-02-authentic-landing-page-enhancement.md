# Implementation Plan: Authentic Landing Page Enhancement & Anti-Vibe Cleanup

**Goal:** Eliminate every fake, simulated, or vibe-coded artifact across the `NashikExplore` website, transforming it into a confident, clean, warm, and authentic mobile app landing page aligned with `FIX-01` and `FIX-02`.

**Target Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion.  
**Lint / Quality Standard:** 0 FAILs on `tasteskill` (`lint.mjs`) & 0 TypeScript/build errors.

---

## 1. Components & Architecture Changes

```
Old Vibe-Coded Architecture               New Authentic Architecture
┌──────────────────────────────┐        ┌──────────────────────────────┐
│ Hero with 5-Tab Dock         │   ──►  │ Confident Hero + App Dual    │
│ Fake Interactive Planner     │   ──►  │ [REMOVED - No Fake Sim]      │
│ Checkmark SaaS Benefits      │   ──►  │ 3-Benefit Editorial Showcase │
│ Icon-Only Mini-App Places    │   ──►  │ Clean Landmark Radar         │
│ Tech-Jargon Screenshot Strip │   ──►  │ Traveler-Focused Screen Strip│
│ Fake Form triggering mailto  │   ──►  │ Transparent Contact Cards    │
│ Fake Delete Form with mailto │   ──►  │ Clear In-App + Email Steps   │
└──────────────────────────────┘        └──────────────────────────────┘
```

### Key Enhancements:
1. **Hero (`Hero.tsx`)**:
   - Primary headline: *"Explore Nashik beyond the usual spots."*
   - Subhead: *"Vineyards, sacred ghats, and mountain forts with verified visiting guidance, station-based itineraries, and offline wishlists."*
   - Primary CTA: *"Get on Google Play"* direct link.
   - Secondary CTA: *"See app features"*.
   - Visual: Refined dual-screen mobile showcase using authentic assets (`/images/home.png`, `/images/ai-planner.png`). Removed the toy 5-button interactive dock.
2. **Remove Fake Planner (`InteractivePlanner.tsx`)**:
   - Completely remove the fake web simulator from `src/app/page.tsx`.
   - Update `Navbar.tsx` to remove the dead `#trip-planner-demo` anchor.
3. **3-Benefit Editorial Showcase (`Benefits.tsx`)**:
   - Replace SaaS checkmark cards and engineering jargon ("Cloudflare Worker AI", "deterministic offline heuristic fallback", "Hive DB") with 3 consumer-focused travel benefits:
     1. *Curated Destination Dossiers*
     2. *Station-Based Itineraries*
     3. *Offline Saved Boards*
4. **Refined Screenshot Strip (`ScreenshotStrip.tsx`)**:
   - Replace developer release-notes bragging ("Flutter rendering", "Hive DB", "Material 3") with traveler benefits for each authentic screen.
5. **Authentic Contact & Account Deletion (`ContactClient.tsx`, `DeleteAccountClient.tsx`)**:
   - Replace fake forms that secretly trigger `mailto:` with honest, functional cards:
     - Direct verified support channel with 1-click "Copy Email Address" and "Open Mail Client".
     - In-app step-by-step instructions for account deletion and data rights.
6. **Verification & Quality Gate**:
   - Run `node lint.mjs src` to ensure 0 FAILs.
   - Run `npm run build` to confirm all 15 static routes compile cleanly.
   - Commit and push to `origin/main`.
