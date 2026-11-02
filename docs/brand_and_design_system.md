# Brand Identity & Design System Specification 🎨

This document defines the visual identity, brand voice, design tokens, and UI component standards for the **TRIVIO** landing page website.

---

## 1. Brand Core & Positioning

### Brand Name
- **Primary Public Name:** `TRIVIO`
- **Full Tagged Name:** `TRIVIO - The Ultimate Nashik Travel Guide`
- **Package / Codebase Name:** `NashikExplore` (`com.nashikexplore.app`)

### Brand Mission
> "To transform how travelers, wine enthusiasts, pilgrims, and explorers experience Nashik by combining local verified cultural intelligence with an adaptive, deterministic AI itinerary engine."

### Positioning Statement
Unlike generic map applications that only offer uncurated point-to-point routing, TRIVIO is an intelligent local travel companion crafted specifically for the historic city and wine capital of India. It understands temple sanctum timings, vineyard harvest seasons, monsoon waterfall conditions, and provides verified offline travel navigation.

### Core Brand Pillars
1. **Authentic Cultural Heritage:** Grounded in ancient history (Panchavati, Trimbakeshwar, Jyotirlinga, Godavari River, Hemadpanthi architecture).
2. **Contemporary Wine Capital Luxury:** Modern, sophisticated vineyard tours, wine tastings, lakeside villas, and gourmet dining.
3. **Intelligent Deterministic Planning:** No random hallucinations; route optimization powered by opening hours, distance, and pacing.
4. **Reliability in the Wild:** Uncompromised offline access for remote Sahyadri ghats and fort treks.

---

## 2. Design Tokens: Color Palette

The color system is derived from the official Flutter mobile app design tokens (`AppDesignTokens`) and expanded for responsive web UI.

### 2.1 Primary & Brand Palette

| Token Name | HEX | RGB | Use Case |
| :--- | :--- | :--- | :--- |
| `brand-blue` (Primary) | `#006398` | `rgb(0, 99, 152)` | Primary CTA buttons, brand headlines, main logos, navigation highlights |
| `brand-secondary` (Ocean) | `#16658A` | `rgb(22, 101, 138)` | Button hover states, secondary accents, active navigation indicators |
| `brand-sky` (Accent) | `#2C9EE8` | `rgb(44, 158, 232)` | Gradient stops, subtle badge borders, glow highlights, icons |
| `brand-light` (Tint) | `#93D4FE` | `rgb(147, 212, 254)` | Dark mode primary accents, text highlights on dark backgrounds |
| `brand-deep` | `#003E61` | `rgb(0, 62, 97)` | Dark mode borders, deep shadows, high-contrast text |

### 2.2 Neutral Light Theme Palette

| Token Name | HEX | RGB | Use Case |
| :--- | :--- | :--- | :--- |
| `bg-light` | `#F9F9F9` | `rgb(249, 249, 249)` | Default website page background |
| `surface-light` | `#FFFFFF` | `rgb(255, 255, 255)` | Cards, dialogs, dropdowns, floating elements |
| `container-light` | `#F3F3F4` | `rgb(243, 243, 244)` | Feature cards, input backgrounds, subtle dividers |
| `text-primary-light` | `#1A1C1C` | `rgb(26, 28, 28)` | Headings, main body text |
| `text-secondary-light`| `#6F7882` | `rgb(111, 120, 130)`| Subheadings, timestamps, secondary captions |
| `border-light` | `#E2E4E9` | `rgb(226, 228, 233)`| Card outlines, navbar border, table dividers |

### 2.3 Neutral Dark Theme Palette

| Token Name | HEX | RGB | Use Case |
| :--- | :--- | :--- | :--- |
| `bg-dark` | `#0B0E11` | `rgb(11, 14, 17)` | Root dark mode background |
| `surface-dark` | `#12161A` | `rgb(18, 22, 26)` | Dark mode elevated cards, sticky navbar |
| `container-dark` | `#1A2026` | `rgb(26, 32, 38)` | Interactive item backgrounds, input fields |
| `surface-hover-dark` | `#222B32` | `rgb(34, 43, 50)` | Hover states for list items & buttons |
| `text-primary-dark` | `#F0F4F2` | `rgb(240, 244, 242)`| High contrast headings and titles |
| `text-secondary-dark`| `#9BA5A0` | `rgb(155, 165, 160)`| Secondary descriptions, helper text |
| `border-dark` | `#222D35` | `rgb(34, 45, 53)` | Subtle card outlines in dark mode |

### 2.4 Semantic Feedback Colors

| Token Name | HEX | Light / Dark Usage |
| :--- | :--- | :--- |
| `success` | `#0A5C43` / `#10B981` | Open now indicators, verified badges, rating stars |
| `warning` | `#D97706` / `#F59E0B` | Entry pass alerts, closing soon, weather advisories |
| `error` | `#BA1A1A` / `#EF4444` | Closed destinations, strict prohibitions, error notices |
| `info` | `#0284C7` / `#38BDF8` | Distance tags, travel time badges, category chips |

### 2.5 Tailwind CSS Configuration Snippet

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#006398',
          secondary: '#16658A',
          sky: '#2C9EE8',
          light: '#93D4FE',
          deep: '#003E61',
        },
        surface: {
          light: '#FFFFFF',
          containerLight: '#F3F3F4',
          dark: '#12161A',
          containerDark: '#1A2026',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    }
  }
}
```

---

## 3. Typography Hierarchy

The brand employs a modern, warm, sans-serif aesthetic with crisp geometric structure.

### Font Families
- **Primary Body & Interface:** `Plus Jakarta Sans` (Google Fonts: 400, 500, 600, 700, 800)
- **Display Headings & Numbers:** `Outfit` (Google Fonts: 600, 700, 800)
- **Editorial & Heritage Accents:** `Playfair Display` (Optional italic accents for vineyard / temple quotes)

### Type Scale Specification

| Role | Font Size (px / rem) | Line Height | Weight | Letter Spacing | CSS / Tailwind Equivalent |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `56px – 64px / 3.5rem – 4rem` | `1.1` | 800 (Extrabold) | `-0.025em` | `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight` |
| **Section Title (H2)**| `36px – 40px / 2.25rem – 2.5rem`| `1.2` | 700 (Bold) | `-0.02em` | `text-3xl sm:text-4xl font-bold tracking-tight` |
| **Card Title (H3)** | `20px – 24px / 1.25rem – 1.5rem`| `1.3` | 700 (Bold) | `-0.01em` | `text-xl sm:text-2xl font-bold` |
| **Subsection (H4)** | `18px / 1.125rem` | `1.4` | 600 (Semibold) | `normal` | `text-lg font-semibold` |
| **Lead / Intro Body**| `18px – 20px / 1.125rem – 1.25rem`| `1.6` | 400 / 500 | `normal` | `text-lg sm:text-xl leading-relaxed` |
| **Standard Body** | `16px / 1rem` | `1.6` | 400 (Regular) | `normal` | `text-base leading-relaxed` |
| **Caption / Meta** | `13px – 14px / 0.8125rem – 0.875rem`| `1.4` | 500 (Medium) | `+0.01em` | `text-sm font-medium` |
| **Eyebrow / Badge** | `11px – 12px / 0.6875rem – 0.75rem`| `1.2` | 700 (Bold) | `+0.08em` | `text-xs uppercase font-extrabold tracking-wider` |

---

## 4. Spacing System (8-Point Grid)

Adhere strictly to 8-point increments for layout padding, gutters, and card stacking:

- `space-1` (4px): Micro gaps, inline badge spacing
- `space-2` (8px): Icon-to-label gaps, chip padding
- `space-3` (12px): Compact button padding, input margins
- `space-4` (16px): Standard mobile gutters, internal card padding
- `space-6` (24px): Standard desktop card padding, section gap
- `space-8` (32px): Sub-section separators
- `space-12` (48px): Minor section margins
- `space-16` (64px): Standard desktop section padding (Y-axis)
- `space-24` (96px): Hero and major feature section padding

---

## 5. Border Radii & Elevation Tokens

### Border Radii
- **Subtle / Form inputs:** `12px` (`rounded-xl`)
- **Cards & Banners:** `20px – 24px` (`rounded-2xl` / `rounded-3xl`)
- **Device Frames & Hero Cards:** `32px – 40px` (`rounded-[32px]` / `rounded-[40px]`)
- **Pills, Badges, CTA buttons:** `9999px` (`rounded-full`)

### Shadows & Depth (Elevation)

```css
/* Level 1: Subtle card rest state */
.shadow-card-sm {
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.02);
}

/* Level 2: Card hover state / floating bar */
.shadow-card-md {
  box-shadow: 0 12px 24px -6px rgba(0, 99, 152, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04);
}

/* Level 3: Modal dialog / Phone frame */
.shadow-phone-mockup {
  box-shadow: 0 25px 60px -15px rgba(0, 30, 60, 0.35), 0 0 40px -10px rgba(44, 158, 232, 0.25);
}

/* Ambient Blue Glow */
.glow-brand {
  box-shadow: 0 0 50px -10px rgba(0, 99, 152, 0.35);
}
```

---

## 6. Glassmorphism & Surface Materials

For sticky headers, navigation drawers, and floating indicator cards:

```css
/* Light Mode Frosted Glass */
.glass-panel-light {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

/* Dark Mode Frosted Glass */
.glass-panel-dark {
  background: rgba(18, 22, 26, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

---

## 7. Iconography Guidelines

- **Recommended Icon Library:** **Lucide Icons** (Web) or **HugeIcons** (Matching Flutter app)
- **Style:** 2.0px stroke width, rounded caps and joins.
- **Sizes:**
  - Micro (inline with text): `14px` – `16px`
  - Standard (buttons, list markers): `18px` – `20px`
  - Feature highlights (card avatars): `24px` – `32px`

---

## 8. Brand Voice & Tone of Voice

| Dimension | Our Voice | What to Avoid |
| :--- | :--- | :--- |
| **Tone** | Inviting, knowledgeable, culturally respectful, energetic | Dry, overly academic, slangy, tourist-trap hype |
| **Accuracy** | Precise (exact distances in km, fees in ₹, hours) | Vague assertions ("somewhere close by", "cheap") |
| **Cultural Respect** | Revering spiritual sites (sanctum rules, holy Godavari, Jyotirlinga sanctity) | Treating sacred temples as casual photo spots |
| **Tech Positioning**| Deterministic AI companion that saves time and money | Generic buzzwords ("ChatGPT for Nashik", "Mindblowing AI") |
