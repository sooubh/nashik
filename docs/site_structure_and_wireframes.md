# Site Structure & Page Wireframes 📐

This document outlines the information architecture, section breakdown, user flow, and visual wireframes for the **TRIVIO** landing page website.

---

## 1. Complete Website Sitemap

```
nashikexplore.com / trivio.app
│
├── /index.html                   [Primary Landing Page]
│   ├── #about                    (Brand & Vision)
│   ├── #features                 (Core App Capabilities)
│   ├── #interactive-planner      (Live AI Itinerary Demo)
│   ├── #categories               (Nashik Tourism Hubs)
│   ├── #destinations             (Spotlight Places)
│   ├── #screenshots              (Mobile Gallery)
│   ├── #reviews                  (Community Testimonials)
│   ├── #faq                      (Frequently Asked Questions)
│   └── #download                 (Google Play Links)
│
├── /trip-planner.html            [Dedicated Web AI Trip Planner Tool]
│   └── Multi-step interactive itinerary generator for web visitors
│
├── /contact.html                 [Contact, Helpdesk, Support SLA & Inquiries]
│
└── /legal/                       [Legal & Compliance Suite]
    ├── privacy-policy.html       (Privacy Policy & Data Retention)
    ├── terms-of-use.html         (Terms of Service & EULA)
    ├── cookies-policy.html       (Cookie & Local Storage Policy)
    ├── data-safety.html          (Google Play Data Safety Disclosures)
    ├── disclaimer.html           (Accuracy & Travel Advisories)
    └── 404.html                  (Custom 404 Error Page)
```

---

## 2. Main Landing Page (`index.html`) Section Breakdown

### Section 1: Sticky Frosted Glass Navigation Bar
- **Left:** Logo icon (`logo.png`) + App Name `TRIVIO` with subtitle "Travel Guide".
- **Center (Desktop):** Navigation Anchor links (`About`, `Features`, `Screenshots`, `Categories`, `Trip Planner`, `FAQ`, `Contact`).
- **Right:**
  - Dark / Light Theme Toggle button (Moon / Sun icon with smooth local-storage persistence).
  - Primary Action CTA: `Download App` pill button (scrolling to `#download` or opening Google Play directly).
  - Mobile Hamburger Menu button (`md:hidden`).

### Section 2: Hero Section (High Impact Conversion)
- **Left Column (Text & Value Proposition):**
  - Pill Tag: `THE OFFICIAL NASHIK COMPANION APP` with location marker icon.
  - Main H1: `Explore Nashik Like a Local` (with gradient accent on "Like a Local").
  - Subtitle: `Navigate the sacred temples, world-class vineyards, historic hill forts, and misty monsoon waterfalls of Nashik. Get customized multi-day AI itineraries, live weather, and 100% offline travel support.`
  - App Store Badge: Official `Get it on Google Play` SVG badge button with hover lift.
  - Social Proof / Metrics Row:
    - `4.8★` Play Store Rating
    - `50k+` Total Downloads
    - `100%` Verified Local Information
- **Right Column (Visual Centerpiece):**
  - Ultra-realistic smartphone mockup (320px × 650px frame with notch/dynamic island, curved corners, and ambient brand glow).
  - Displays high-resolution mobile app screenshot (`home.png`), which smoothly changes when users interact with the features list below.

### Section 3: Trust Bar & Partner Strip
- Quick credibility counters:
  - `36+` Complete Mobile Screens
  - `15+` Hand-Curated Tourism Categories
  - `0s` Offline Latency with Local Cache
  - `100%` No-Hallucination AI Itineraries

### Section 4: "Why TRIVIO?" (Problem vs Solution)
- Comparison grid contrasting generic map apps vs TRIVIO:
  - Generic: Static pins, ignores temple aarti and closing hours, random driving routes that waste 3 hours in traffic.
  - TRIVIO: Route-optimized sequential clustering, lunch/dinner slot recommendations, opening hours validation, dress code and photography warnings.

### Section 5: Interactive Feature Showcase (Dynamic Screen Swapper)
- Interactive tab list on the left; when clicked, the phone frame instantly cross-fades to the corresponding screenshot:
  1. **Destination Discovery (`home.png`):** Handpicked categories, seasonal spotlights, and daily weather.
  2. **Universal Search & Filters (`explore.png`):** Instant search by tags (Jyotirlinga, Wine Tasting, Treks, Monsoons) with sub-category pills.
  3. **Smart AI Trip Planner (`ai planner.png`):** 1 to 5 day auto-generated itineraries, transit estimates, and budget tiers.
  4. **Wishlist & Custom Boards (`saved.png`):** Organize spots into custom trip boards for easy group sharing.
  5. **Traveler Profile & Badges (`profile.png`):** Offline saved routes, community reviews, and safety settings.

### Section 6: Live AI Trip Planner Teaser Widget
- An embedded lightweight interactive widget allowing prospective tourists to experience the planner right inside the browser:
  - Controls: Duration (1 Day / 2 Days / 3 Days), Pacing (Relaxed / Moderate / Packed), Travel Group (Solo / Couple / Family / Friends).
  - Dynamic result preview with simulated route cards (e.g. Sula Vineyards → Gangapur Dam → Trimbakeshwar).
  - CTA: "Generate Full Timed Itinerary in the App".

### Section 7: Nashik Experience Categories
- A 6-card interactive grid showcasing the diversity of Nashik:
  1. **Ancient Temples & Jyotirlinga:** Trimbakeshwar, Kalaram Temple, Panchavati, Muktidham.
  2. **Wineries & Vineyards:** Sula, York Winery, Soma Vine Village, Vallonné.
  3. **Sahyadri Hill Forts & Treks:** Harihar Fort (80° rock-cut steps), Anjaneri, Brahmagiri, Salher.
  4. **Monsoon Waterfalls & Lakes:** Someshwar Falls, Dugarwadi, Vaitarna, Gangapur Dam.
  5. **Culinary & Street Food:** Misal Pav trails (Sadhana, Shamsundar), wine dine bistros, grape delicacies.
  6. **Spiritual Ghats & Heritage:** Ramkund, Godavari Aarti, Sita Gumpha, Pandavleni Buddhist Caves.

### Section 8: Spotlight Destination Cards
- Rich cards showcasing sample destination data from `places.json`:
  - Image banner with verified badge and category tag.
  - Title in English and Devanagari script.
  - Star rating, average visit duration, entry fee indicator.
  - Action button: "View in App / Google Maps".

### Section 9: Offline Navigation & Real-Time Weather Engine
- Visual feature block highlighting:
  - **Zero Signal Needed:** Complete offline guide saved to disk via Hive storage.
  - **Live Nashik Weather:** Automated weather feeds warning of monsoon downpours or summer peaks.

### Section 10: Community Reviews & Traveler Testimonials
- Testimonial carousel featuring verified reviews from solo travelers, families, wine connoisseurs, and international pilgrims.

### Section 11: Interactive FAQ Accordion
- 8 to 12 expandable question & answer items addressing tourist doubts, pricing, offline usage, and Android support.

### Section 12: High-Impact Download CTA Banner
- Full-width dark gradient card with:
  - Headline: "Ready to Experience the Soul of Nashik?"
  - Subheading: "Join 50,000+ travelers discovering the sacred sights and vineyards."
  - Google Play Store download button.
  - QR Code for fast mobile scanning from desktop browsers.

### Section 13: Footer
- Brand overview and copyright.
- Quick links (Navigation, Features, Planner).
- Legal compliance links (Privacy Policy, Terms, Cookies, Data Safety).
- Support email (`trivio-support@sooubh.in`), Nashik address, and social links.

---

## 3. Desktop Wireframe Layout (ASCII)

```
+-------------------------------------------------------------------------------+
| [Logo] TRIVIO   About  Features  Screenshots  Categories  Planner  FAQ  Contact  [Theme] [Download App] |
+-------------------------------------------------------------------------------+
|                                                                               |
|  [THE OFFICIAL NASHIK COMPANION APP]               +-----------------------+  |
|                                                    |     [=== Notch ===]   |  |
|  Explore Nashik                                    |                       |  |
|  Like a Local                                      |                       |  |
|                                                    |      Mobile Screen    |  |
|  Navigate sacred temples, world-class vineyards,   |      Screenshot       |  |
|  historic hill forts, and misty waterfalls.        |      (home.png)       |  |
|  Get custom multi-day AI itineraries.              |                       |  |
|                                                    |                       |  |
|  [GET IT ON Google Play]                           |                       |  |
|                                                    +-----------------------+  |
|  4.8 ★ Rating  |  50k+ Downloads  |  100% Verified                            |
|                                                                               |
+-------------------------------------------------------------------------------+
|  FEATURE TABS:  [Discovery]  [AI Planner]  [Offline Maps]  [Wishlists]       |
|                                                                               |
|  +------------------------------+   +---------------------------------------+ |
|  | Interactive Feature List     |   | Dynamic Device Screen Display         | |
|  | [1] Destination Home         |   | Updates immediately upon clicking     | |
|  | [2] Universal Search         |   | any feature card on the left.         | |
|  | [3] AI Itinerary Builder     |   |                                       | |
|  | [4] Custom Wishlist Boards   |   +---------------------------------------+ |
|  +------------------------------+                                             |
+-------------------------------------------------------------------------------+
|  NASHIK CATEGORIES GRID (6 Pillars)                                           |
|  +-------------------+  +-------------------+  +-------------------+          |
|  | Temples & Shrines |  | Vineyards & Wine  |  | Sahyadri Forts    |          |
|  +-------------------+  +-------------------+  +-------------------+          |
|  +-------------------+  +-------------------+  +-------------------+          |
|  | Waterfalls & Lakes|  | Culinary Trails   |  | Historic Ghats    |          |
|  +-------------------+  +-------------------+  +-------------------+          |
+-------------------------------------------------------------------------------+
|  INTERACTIVE AI TRIP PLANNER DEMO (Duration / Budget / Pace selector)         |
+-------------------------------------------------------------------------------+
|  COMMUNITY REVIEWS & FAQ ACCORDION                                            |
+-------------------------------------------------------------------------------+
|  CALL TO ACTION: Download TRIVIO Today [Google Play Button] [QR Code]        |
+-------------------------------------------------------------------------------+
|  FOOTER: Brand Lockup | Sitemap | Legal Links | Contact: trivio-support@sooubh.in |
+-------------------------------------------------------------------------------+
```

---

## 4. Mobile Wireframe Layout (Stacked View)

```
+---------------------------+
| [Logo] TRIVIO      [=] [☼]|
+---------------------------+
| [TAG: Official Guide]     |
| Explore Nashik            |
| Like a Local              |
|                           |
| Subtitle description text |
|                           |
| [Google Play Badge Button]|
|                           |
| 4.8★ | 50k+ | 100% Local  |
|                           |
| +-----------------------+ |
| |     [Phone Frame]     | |
| |   (home.png image)    | |
| +-----------------------+ |
+---------------------------+
| INTERACTIVE FEATURES      |
| [Feature 1 Card]          |
| [Feature 2 Card]          |
| [Feature 3 Card]          |
+---------------------------+
| NASHIK CATEGORIES (Swipe) |
| [Card 1] [Card 2] ...     |
+---------------------------+
| FAQ (Tap to expand)       |
| [?] How does AI plan work |
| [?] Can I use it offline? |
+---------------------------+
| [Download App Sticky Bar] |
+---------------------------+
```
