# Evntiqa — Design System & Aesthetic Guidelines

> **Style Direction**: Premium editorial minimalism with Swiss-inspired grid layouts, oversized typography, expressive italic serif accents, warm textured backgrounds, bold geometric visuals, and subtle neo-brutalist details.

---

## 1. Typography Hierarchy

| Role | Font Family | Weights / Style | Letter-spacing | Usage |
|---|---|---|---|---|
| **Headlines** | `Plus Jakarta Sans` | ExtraBold (800) | `-0.03em` (tight) | Primary section headers, massive hero titles, impact statements |
| **Accent Words** | `Playfair Display` | Italic (400 / 600) | Normal / expressive | High-contrast callout words embedded inside headlines (e.g., *pipeline*) |
| **Body & Buttons** | `Inter` | Regular (400), Medium (500) | Normal | Paragraph copy, descriptions, buttons, tooltips |
| **Labels & Kickers** | `Montserrat` | SemiBold (600) | `0.15em` to `0.2em` (wide) | Uppercase category kickers, sub-labels, metadata markers |
| **Handwritten Annotations** | `Caveat` | Medium (500) | Normal, slight tilt | Sticky notes, editorial margins, handwritten stickers & commentary |

---

## 2. Color Palette

### Base & Backgrounds
- **Warm Editorial Canvas:** `#FAF8F5` / `#F7F5F0` (light warm cream background with subtle paper/editorial grain)
- **Primary Ink / Contrast Dark:** `#111111` / `#0D0D0D` (deep editorial charcoal/black for text & brutalist borders)
- **Secondary Ink / Slate:** `#55534E` / `#6B6860` (refined muted gray for body descriptions and secondary metadata)
- **Border / Divider Rule:** `#E7E3DA` / `#DDD7CB` (fine Swiss architectural grid lines)

### Accent Colors
- **Vibrant Orange / Coral:** `#FF5A1F` / `#F2542D` (energetic focal accent for geometry circles, highlights, and accent words)
- **Forest Green / Sage Accent:** `#3B7E63` / `#A5C4B5` (tape accents, subtle badges)
- **Editorial Pink / Masking Tape:** `#F8A5C2` (masking tape overlays, editorial tags)
- **Sticky Note Canary:** `#FBF2D5` / `#F7EBBF` (editorial sticky note cutout paper)

---

## 3. Layout & Architectural Principles

1. **Swiss Grid Discipline:**
   - Strict alignment to mathematical column guides and horizontal dividing rules.
   - Visible delicate crosshairs (`+`), grid coordinates, and hairline dividers for technical precision.
2. **Oversized Typography:**
   - Dominant, commanding headline scales (`clamp(2.75rem, 6vw, 5.5rem)`).
   - Dynamic rhythm between massive sans-serif forms and flowing editorial serif italics.
3. **Collage & Layering (Subtle Neo-Brutalism):**
   - Mixed media aesthetics: high-contrast monochrome photography layered over bold geometric shapes (e.g. sharp orange discs, city skyline cutouts).
   - Physicality cues: semi-transparent tape strips, tilted sticky notes with drop-shadows, paper textures.
4. **Interactive Micro-Interactions:**
   - Magnetic or smooth hover transitions on buttons and interactive elements.
   - Circular rotating badges with monospace/uppercase text rings.
   - Smooth continuous logo marquee tickers with graceful pause-on-hover.

---

## 4. Accessibility & Performance Standards

- **Reduced Motion:** All ticker strips, rotating badges, and animations must respect `prefers-reduced-motion: reduce`.
- **Contrast & Legibility:** Minimum 4.5:1 contrast ratio across all copy; font sizes scaled appropriately for mobile.
- **Semantic Structure:** Single logical `<h1>`, hierarchical heading tiers (`<h2>`, `<h3>`), descriptive alt text for informative imagery, `alt="" aria-hidden="true"` for decorative collage graphics.
- **Asset Optimization:** WebP/responsive picture formats, preloaded web fonts to eliminate layout shifts (CLS).
