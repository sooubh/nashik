# App Features & Destination Data Catalog 📱🏛️

This document catalogs the technical capabilities, architecture, all 36 application screens, and verified destination records of the **TRIVIO** (NashikExplore) ecosystem.

---

## 1. Complete Mobile Application Screen Catalog (36 Screens)

The mobile application is structured into 7 distinct functional modules:

### 1. Startup & Authentication Module (4 Screens)
| Screen Name | Route / Identifier | Key Features |
| :--- | :--- | :--- |
| **Splash Screen** | `/splash` | Dynamic branding animation, network check, auth state resolution. |
| **Onboarding & Login** | `/login` | High-impact photography carousel, Google Sign-In, Email/Password auth, Guest mode. |
| **Email Verification** | `/verify-email` | OTP & link-based verification, resend timer, anti-abuse throttling. |
| **Preferences Setup** | `/preferences` | Onboarding questionnaire: Travel pace, interests (Temples, Wine, Treks, Food), diet options. |

### 2. Destination Discovery & Search Module (7 Screens)
| Screen Name | Route / Identifier | Key Features |
| :--- | :--- | :--- |
| **Home Screen** | `/home` | Seasonal spotlight banner, weather pill, categories grid, popular spots carousel. |
| **Place Detail Screen** | `/place/:id` | 240px curved hero image, live open/closed status, distance, 360° virtual tour link, VIP pass info. |
| **Place Image Gallery** | `/place/:id/gallery` | Fullscreen zoomable photo gallery with high-resolution Cloudflare R2 images. |
| **Category Detail Screen**| `/category/:id` | Dual-view toggle (list vs grid), sorting by rating or distance, subcategory filter chips. |
| **All Categories Screen** | `/categories` | Visual directory of all 15+ tourism hubs with custom cover photography. |
| **Curated Collections** | `/curated-lists` | Themed guides: "Top 5 Rainy Day Treks", "Romantic Wine Trail", "Spiritual Panchavati". |
| **Universal Search** | `/search` | Live debounced search across tags, Devanagari titles, and location landmarks. |

### 3. Trip Planner Module (4 Screens)
| Screen Name | Route / Identifier | Key Features |
| :--- | :--- | :--- |
| **Planner Home Screen** | `/trip-planner` | Saved itineraries carousel, recent plan summaries, "Create New Trip" hero card. |
| **Trip Preferences Form** | `/trip-planner/form` | Inputs: Trip duration (1-5 days), pacing, budget tier (budget/balanced/luxury), pet/family toggles. |
| **Trip Plan Result** | `/trip-planner/result`| Visual timeline by day: transit durations, distance, lunch & dinner slots, interactive map view. |
| **Saved Trips Screen** | `/saved-trips` | Historical itineraries archived locally in Hive and synced with Cloud Firestore. |

### 4. Wishlist & Custom Boards Module (2 Screens)
| Screen Name | Route / Identifier | Key Features |
| :--- | :--- | :--- |
| **Saved Screen** | `/saved` | Tabbed overview of bookmarked places and custom themed boards. |
| **Board Detail Screen** | `/saved/board/:id` | Board management: re-order spots, add notes, calculate total route distance. |

### 5. Community Reviews & Moderation (2 Screens)
| Screen Name | Route / Identifier | Key Features |
| :--- | :--- | :--- |
| **Place Reviews Screen** | `/place/:id/reviews` | Verified traveler reviews, star ratings, photo attachments, helpful vote counters. |
| **Report Issue Screen** | `/place/:id/report` | User correction form: incorrect timings, wrong GPS pin, closed for maintenance. |

### 6. User Profile & Settings Module (4 Screens)
| Screen Name | Route / Identifier | Key Features |
| :--- | :--- | :--- |
| **Profile Screen** | `/profile` | User avatar, explorer badges, contribution count, offline guide download toggle. |
| **About Nashik Screen** | `/about-nashik` | Cultural chronicle: Mythology of River Godavari, Kumbh Mela history, Maratha forts. |
| **Notifications Screen** | `/notifications` | Travel advisories, seasonal festival alerts, weather warnings. |
| **Security & Privacy** | `/security-privacy` | Account deletion, data export request, consent preferences. |

### 7. Administrative Console Suite (11 Screens)
*(Restricted to verified admin & moderator roles via Firebase Custom Claims)*
- **Admin Dashboard:** System metrics, active users, pending reports, R2 storage usage.
- **Admin Users Screen:** User role manager (Explorer, Moderator, Admin).
- **Admin Places Screen:** Real-time CMS for drafting, verifying, and publishing destinations.
- **Admin Reviews Screen:** Moderation queue for user-submitted reviews and photos.
- **Admin Locations & Categories:** Geographical node manager and category hierarchy editor.
- **Spotlight & Banners Screen:** Schedule home screen hero promotions.
- **Reports Reviewer:** Triage user-submitted error reports.
- **Maintenance & Force Update:** Remote feature flags and app update enforcement.

---

## 2. Technical Stack & Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                        FLUTTER CLIENT APP                              │
│  State: Riverpod 2.x (code-gen)  │ Routing: GoRouter                   │
│  Local Storage: Hive disk boxes  │ Styling: Material 3 + Google Fonts  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTPS / gRPC
         ┌──────────────────────────┴──────────────────────────┐
         ▼                                                     ▼
┌──────────────────────────────┐              ┌──────────────────────────────┐
│       FIREBASE BACKEND       │              │    CLOUDFLARE EDGE WORKER    │
│ • Firebase Auth (Google/OTP) │              │ • V8 Edge compute runtime    │
│ • Cloud Firestore (Database) │              │ • R2 Object Storage (CDN)    │
│ • App Check Token Security   │              │ • AI Itinerary Microservice  │
│ • Security Rules v2 Hardened │              │ • Magic Bytes Image Validate │
└──────────────────────────────┘              └──────────────────────────────┘
```

---

## 3. The 8 Deterministic AI Trip Engines

TRIVIO does not rely on open-ended LLM hallucinations. It runs a proprietary suite of 8 domain engines:

1. **`TripCandidateEngine`:** Filters 150+ places against hard user constraints (wheelchair access, pets, family, closed days) and scores relevance to select 15–25 optimal candidates.
2. **`TripScoringEngine`:** Deterministic scoring combining interest match (+30), place tier (+20), and review rating (+15).
3. **`TripRouteEngine`:** Haversine distance calculator with speed profiles (Car 30 km/h, Bike 35 km/h, Bus 20 km/h, Walk 4.5 km/h) and nearest-neighbor route ordering.
4. **`TripTimeEngine`:** Parses opening/closing hours, day-of-week exceptions, visit durations, and buffer times.
5. **`TripBudgetEngine`:** Computes daily budget feasibility across entry fees, transport, and dining tiers.
6. **`TripFoodEngine`:** Automatically injects verified lunch (12:30–14:30) and dinner (19:30–21:30) slots near your scheduled stops.
7. **`TripActivityEngine`:** Enforces pacing rules (Relaxed: 2–3 stops, Moderate: 4–5 stops, Packed: 6–7 stops).
8. **`TripValidationEngine`:** Client-side repair guaranteeing zero duplicate stops, correct chronology, and physical transit feasibility.

---

## 4. Destination Data Catalog (Key Places from `places.json`)

### 1. Trimbakeshwar Shiva Temple
- **ID:** `trimbakeshwar_shiva_temple`
- **Category:** `temples` | **Subcategory:** `Jyotirlinga & Heritage`
- **Coordinates:** `19.9324° N, 73.5306° E`
- **Distance from Nashik:** `28 km (approx. 45 mins)`
- **Timings:** `05:30 AM – 09:00 PM`
- **Entry Fee:** `Free (VIP Darshan Pass ₹200)`
- **Key Highlights:**
  - Three-faced Tridev Lingam representing Brahma, Vishnu, and Shiva.
  - Ancient Hemadpanthi black basalt stone masonry built by Peshwa Balaji Baji Rao.
  - Kushavarta Kund: sacred pond where Kumbh Mela holy baths occur.
- **Facilities:** Footwear counter (Gate 2), Cloakroom lockers, Wheelchair ramp at North gate.
- **Special Tips:** Traditional dress mandatory for inner sanctum; phones prohibited inside garbhagriha.

### 2. Sula Vineyards
- **ID:** `sula_vineyards`
- **Category:** `vineyards` | **Subcategory:** `Winery Tour & Tasting`
- **Coordinates:** `19.9975° N, 73.6888° E`
- **Distance from Nashik:** `14 km (approx. 25 mins)`
- **Timings:** `11:30 AM – 10:00 PM (Tours every 45 mins)`
- **Entry Fee:** `₹400 – ₹1,000 (Includes wine tasting session)`
- **Key Highlights:**
  - Guided barrel room & oak cellar tours.
  - Wine tasting sessions guided by certified sommeliers.
  - Open-air amphitheater with lake and vineyard views.
- **Facilities:** Valet parking, multi-cuisine restaurants (Little Italy, The Tasting Room), boutique resort.
- **Special Tips:** Book weekend tasting slots before 4:00 PM to catch the sunset over Gangapur Lake.

### 3. Harihar Fort (Harishgad)
- **ID:** `harihar_fort`
- **Category:** `forts` | **Subcategory:** `Sahyadri Adventure Trek`
- **Coordinates:** `19.9022° N, 73.4731° E`
- **Distance from Nashik:** `42 km (approx. 1 hr 15 mins via Trimbak)`
- **Timings:** `06:00 AM – 06:00 PM (Daylight only)`
- **Entry Fee:** `Free Entry`
- **Key Highlights:**
  - Iconic 80-degree near-vertical rock-cut stairs with carved hand-notches.
  - Summit plateau with Lord Shiva and Hanuman shrines and water cisterns.
  - Panoramic views of Basgad Fort, Utwad Fort, and Vaitarna backwaters.
- **Facilities:** Base village pay-and-park; tea and lemon water stalls in Harshewadi.
- **Special Tips:** Sturdy trekking footwear essential; avoid ascents during heavy torrential monsoon storms.

### 4. Someshwar Waterfall (Dudhsagar)
- **ID:** `someshwar_waterfall`
- **Category:** `waterfalls` | **Subcategory:** `Monsoon Scenic Spot`
- **Coordinates:** `19.9882° N, 73.7441° E`
- **Distance from Nashik:** `8 km from city center (15 mins)`
- **Timings:** `06:00 AM – 07:00 PM`
- **Entry Fee:** `Free Entry`
- **Key Highlights:**
  - Cascading 10-meter natural waterfall on the Godavari River.
  - Adjacent ancient Someshwar Mahadev Temple.
  - Lush family picnic gardens and children's play area.
- **Facilities:** Street parking, local street food stalls (roasted corn, tea).
- **Special Tips:** Best visited between July and October when water volumes are at their peak.

### 5. Pandavleni Caves (Trirashmi Caves)
- **ID:** `pandavleni_caves`
- **Category:** `heritage` | **Subcategory:** `Ancient Buddhist Rock-Cut Caves`
- **Coordinates:** `19.9575° N, 73.7538° E`
- **Distance from Nashik:** `9 km (on Nashik-Mumbai highway NH3)`
- **Timings:** `08:00 AM – 05:30 PM`
- **Entry Fee:** `₹25 (Indians), ₹300 (Foreigners)`
- **Key Highlights:**
  - Group of 24 rock-cut Hinayana Buddhist caves dating from the 1st century BCE to 3rd century CE.
  - Intricate viharas, chaityagrihas, and ancient Brahmi inscriptions.
  - Panoramic elevated viewpoint overlooking Nashik city skyline.
- **Facilities:** ASI ticket counter, stone steps with handrails, Dadasaheb Phalke Smarak at the base.
- **Special Tips:** Involves climbing approximately 250 stone steps; carry water and visit in early morning.
