# NashikExplore — Official Website & Travel Companion

Official marketing website and policy center for the **NashikExplore** Android application.

## Overview

- **Canonical Domain:** `https://nashik.sooubh.in`
- **Architecture:** Next.js 14 (App Router) with TypeScript & Tailwind CSS
- **Target App:** Trivio for Android ([Google Play Store](https://play.google.com/store/apps/details?id=com.sooubh.nashikexplore))
- **Support Contact:** `trivio-support@sooubh.in`

---

## Canonical Route Inventory

| Route | Purpose | Status |
|---|---|---|
| `/` | Landing page (Hero, Places, Intelligence, Itineraries, App Showcase) | Active |
| `/places` | Complete directory of 23+ Nashik heritage, fort, and wine destinations | Active |
| `/destinations` | Category hubs & regional corridors (Mumbai, Pune, Shirdi, etc.) | Active |
| `/guides` | In-depth operational travel manuals and transit guides | Active |
| `/blog` | Field stories, 1-3 day road trip itineraries, and food walks | Active |
| `/contact` | Monitored email contact workflow (`trivio-support@sooubh.in`) | Active |
| `/delete-account` | Play Store compliant account & data deletion request instructions | Active |
| `/privacy-policy` | Privacy policy reflecting authentic app architecture | Active |
| `/terms-of-use` | Terms of service for the mobile application and website | Active |
| `/data-safety` | Data safety disclosures matching Play Store declarations | Active |
| `/cookies-policy` | Website cookies and client storage disclosure | Active |
| `/disclaimer` | General travel, trekking safety, and information disclaimer | Active |
| `/sitemap.xml` | Generated dynamically via `src/app/sitemap.ts` | Active |
| `/robots.txt` | Generated dynamically via `src/app/robots.ts` | Active |

### Legacy Route Redirects
Legacy `.html` requests (e.g. `/privacy-policy.html`, `/contact.html`) are permanently redirected (HTTP 301) to their clean Next.js counterparts in `next.config.mjs` to preserve historical search indexes and app console backlinks.

---

## Getting Started

### Prerequisites
- Node.js 18.x or newer
- npm 9.x or newer

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## Architecture & Design Guidelines

1. **Truthful Core:** All claims, features, and capabilities reflect the production Flutter app (`sooubh/nashikexplore`). No fabricated metrics (ratings, download counters, review numbers), no unverified claims of "100% offline", and no simulated web planners masquerading as backend APIs.
2. **Accessible & Responsive:** Meets WCAG AA minimum touch targets (>= 44px), respects `prefers-reduced-motion`, includes keyboard navigation and ARIA landmarks, and supports viewport widths from 320px up to 4K desktops without horizontal overflow.
3. **Optimized Assets:** Small multi-size favicon (`favicon.ico` ~32KB), optimized screenshot images, and zero orphaned duplicate blobs.
