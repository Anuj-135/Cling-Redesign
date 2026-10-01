---
name: Technical Precision Dark
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#e5bdbe'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#ac8889'
  outline-variant: '#5c3f40'
  surface-tint: '#ffb3b6'
  primary: '#ffb3b6'
  on-primary: '#68001a'
  primary-container: '#e11d48'
  on-primary-container: '#fffaf9'
  inverse-primary: '#be0037'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00845a'
  on-tertiary-container: '#eefff3'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b6'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#920028'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
---

## Brand & Style

This design system expresses high-velocity software engineering rigor, architectural dependability, and advanced technical precision. Developed for enterprise clients, engineering leads, and digital product decision-makers, the interface eliminates decorative fluff in favor of razor-sharp hierarchy, structural clarity, and purposeful interaction design.

The aesthetic fuses **Modern Technical Corporate** with **High-Contrast Dark Minimalism**:
- **Non-gradient discipline**: Strictly solid, opaque surfaces avoiding distracting mesh or iridescent gradients.
- **Architectural depth**: Multi-tiered dark slate containers nested purposefully to communicate functional grouping.
- **Controlled accent punch**: Primary crimson red derived from the brand logo applied surgically to highlight system status, primary conversions, active code triggers, and vital metrics.
- **Engineering focus**: Monoline iconography, balanced negative space, crisp technical typography, and modular data representations.

## Colors

The color architecture is built around deep, absorption-grade slate neutrals paired with a razor-sharp crimson accent and technical status indicators.

### Palette Architecture
- **Primary (`#E11D48`)**: High-chroma technical crimson. Reserved strictly for primary calls-to-action, key terminal cursor anchors, highlighted tags, and active navigation states. Hover states step down to `#BE123C`, and active clicks press into `#9F1239`.
- **Secondary (`#38BDF8`)**: Electric technical cyan. Used for code syntax tokens, diagnostic hints, live network throughput counters, and subtle informational callouts.
- **Tertiary (`#10B981`)**: Emerald operational green. Denotes passing CI/CD pipelines, API uptime metrics, and healthy deployment health indicators.
- **Neutral Canvas (`#0B0F17`)**: Base background canvas. A deep, non-pure black that preserves OLED contrast while eliminating eye fatigue.

### Surface System
- **Surface Level 0 (Canvas)**: `#0B0F17` — Primary viewport canvas.
- **Surface Level 1 (Card / Container)**: `#111827` — Base structural cards, data modules, and table headers.
- **Surface Level 2 (Elevated Container / Popover)**: `#1E293B` — Dropdowns, modals, code blocks, and interactive hover cards.
- **Surface Level 3 (Input / Inset)**: `#0F172A` — Recessed text fields, search bars, and read-only data viewports.

### Borders & Delimiters
- **Subtle Structural Border**: `rgba(255, 255, 255, 0.08)` or `#1E293B` on `#0B0F17`.
- **Active / Focus Border**: `#E11D48` with an outer glow of `0 0 0 2px rgba(225, 29, 72, 0.25)`.
- **Interactive Hover Border**: `rgba(255, 255, 255, 0.18)` or `#334155`.

### Text Hierarchy
- **Primary Text**: `#FFFFFF` — 100% white for titles, numerical metrics, and active menu labels.
- **Secondary / Supporting Text**: `#94A3B8` — Cool slate gray for body descriptions, metadata, and form labels.
- **Tertiary / Disabled Text**: `#64748B` — De-emphasized timestamps, inactive shortcuts, and placeholder text.

## Typography

The typography system pairs **Plus Jakarta Sans** for expressive, high-impact headings with **Inter** for dense, ultra-legible body text and dashboard metrics.

- **Plus Jakarta Sans** delivers modern geometric authority to page titles, hero headers, section dividers, and stat figures. Letter-spacing is intentionally tightened on headings larger than 24px (`-0.02em` to `-0.03em`) to mimic executive product software branding.
- **Inter** handles high-volume body content, form field inputs, data tables, and navigation labels. Its neutral geometry and open counters maintain maximum scan speeds under low-light dark mode conditions.
- **JetBrains Mono** is utilized for telemetry metrics, SHA hashes, environment variables, code snippets, and API endpoint paths.
- **Mobile Readability**: All headline sizes above 32px collapse down cleanly on small screens (`<768px`) to prevent awkward line breaks and orphan words.

## Layout & Spacing

The layout is governed by an 8pt architectural rhythm set into a responsive 12-column grid.

### Grid & Canvas Structure
- **Desktop (1280px and above)**: 12-column grid with a maximum content container width of `1280px`. Gutters are fixed at `2rem` (`space-xl`), and screen margins sit at `4rem` (`margin-lg`).
- **Tablet (768px - 1279px)**: 8-column grid with `1.5rem` (`gutter`) and `2rem` outer margins (`margin`).
- **Mobile (Below 768px)**: 4-column fluid grid with `1rem` gutters (`gutter-sm`) and `1rem` outer canvas padding (`margin-sm`).

### Section & Component Spacing
- Structural dashboard grids use `space-lg` (`1.5rem`) for inter-card distances.
- Compact data tables and code modules compress element gaps down to `space-xs` (`0.5rem`) and `space-sm` (`0.75rem`).
- Major marketing landing sections maintain strict breathing room using `space-3xl` (`4rem`) to `6rem` vertical padding.

## Elevation & Depth

Visual hierarchy does not rely on soft multi-colored drop shadows or artificial background light gradients. Instead, depth is established strictly through **Tonal Surface Layering** and **Low-Contrast Structural Borders**.

### Depth Layers
- **Base Ground (Level 0)**: `#0B0F17`. Flat background with zero elevation.
- **Card Tier (Level 1)**: `#111827` surface framed with a 1px solid border (`rgba(255, 255, 255, 0.08)`). No drop shadow on static state.
- **Hover Tier (Level 1.5)**: On hover, the border shifts to `rgba(255, 255, 255, 0.18)` or `#334155`, accompanied by a subtle ambient shadow: `0 12px 32px -8px rgba(0, 0, 0, 0.6)`.
- **Floating Overlays & Modals (Level 2)**: `#1E293B` background, a 1px perimeter border of `rgba(255, 255, 255, 0.12)`, and a focused structural drop shadow: `0 24px 48px -12px rgba(0, 0, 0, 0.75)`.
- **Inset / Recessed Wells**: `#0F172A` background with a subtle inset shadow (`inset 0 2px 4px rgba(0, 0, 0, 0.4)`) to visually push text inputs, search fields, and code terminal areas behind the primary card plane.

## Shapes

The design system employs a **Rounded** shape language, leaning into generous `1rem` (`rounded-2xl` equivalent) radii for main card containers to deliver a refined modern product feel, while keeping inner controls tight and functional.

### Radius Scale
- **Cards & Modules**: `1rem` (`16px`) corner radius creates friendly, modern technical frames.
- **Buttons & Form Fields**: `0.5rem` (`8px`) corner radius to preserve tight structural alignment across rows and toolbars.
- **Pills & Status Chips**: `9999px` (Full rounded) for compact system indicators, badge counters, and category pills.
- **Nested Ratio Rule**: Inner elements nested inside a `1rem` container must use a `0.5rem` radius to preserve geometric concentricity.

## Components

### Buttons
- **Primary Button**: Solid Crimson `#E11D48` background, `#FFFFFF` bold text, `0.5rem` radius, 1px transparent border. Hover shifts to `#BE123C`. Focus applies `0 0 0 2px rgba(225, 29, 72, 0.35)`.
- **Secondary Button**: `#1E293B` slate surface, 1px border `rgba(255, 255, 255, 0.12)`, `#FFFFFF` text. Hover shifts background to `#334155` and brightens the border to `rgba(255, 255, 255, 0.25)`.
- **Ghost / Tertiary Button**: Transparent background, `#94A3B8` text. Hover shifts text to `#FFFFFF` with a background fill of `rgba(255, 255, 255, 0.05)`.

### Cards & Technical Containers
- Built on `#111827` solid fill with a 1px border in `rgba(255, 255, 255, 0.08)`.
- Corner radius is `1rem` (`rounded-2xl`).
- Padding is unified at `1.5rem` (`space-lg`) for standard cards and `2rem` (`space-xl`) for hero service overviews.
- Interactive cards feature a smooth 150ms border highlight to `rgba(255, 255, 255, 0.2)` on pointer hover without scaling transforms.

### Input Fields & Controls
- Base input fill: `#0F172A` with a 1px solid border of `#334155`.
- Text is `#FFFFFF`, placeholder is `#64748B`.
- Radius is `0.5rem`. Height is standardized at `42px` for normal inputs and `36px` for compact table filters.
- Active focus state: border shifts immediately to `#E11D48` with a crisp outer focus ring (`0 0 0 1px #E11D48`).

### Status Badges & Chips
- Fully rounded pills (`9999px`) with padding of `0.25rem 0.75rem`.
- **Crimson Badge (Active/Hot)**: Background `rgba(225, 29, 72, 0.12)`, text `#FB7185`, border `1px solid rgba(225, 29, 72, 0.3)`.
- **System Active Chip**: Background `rgba(16, 185, 129, 0.12)`, text `#34D399`, border `1px solid rgba(16, 185, 129, 0.25)`.
- **Neutral Tech Tag**: Background `#1E293B`, text `#94A3B8`, border `1px solid rgba(255, 255, 255, 0.06)`.

### Checkboxes & Radios
- Box dimensions: `18px × 18px` with a `4px` radius (checkbox) or circular (radio).
- Default state: `#0F172A` fill with a `1px` border of `#475569`.
- Checked state: `#E11D48` solid crimson fill with a crisp `#FFFFFF` checkmark or center pip.

### Code Blocks & Architecture Viewports
- Dedicated dark container utilizing `#080C14` background with a prominent top navigation header (tab title, copy button, status dot).
- Syntax highlighting uses the secondary palette: `#38BDF8` (functions/keys), `#F43F5E` (tags/strings), `#34D399` (success outputs), and `#94A3B8` (comments).