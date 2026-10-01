# Cling Infotech Redesign — Agent Rules & Project Guardrails

These rules are locked and govern all AI agent tasks across all phases of the Cling Infotech homepage redesign. Every agent must read and adhere strictly to these constraints.

---

## 1. Architecture & Technology Stack

- **JavaScript Only**: All code must be standard JavaScript (`.js`, `.jsx`). Do not introduce TypeScript.
- **Next.js App Router**: Build exclusively within the App Router (`app/`).
- **No `src/` Directory**: Keep the flat root structure:
  - `app/` — Routing, layout, metadata
  - `components/` (`ui/`, `layout/`, `sections/`, `motion/`)
  - `data/` — Data files driving all section content
  - `lib/` — Utilities, motion variants, helpers
  - `public/` — Static assets and optimized images (`public/images/`)
  - `docs/` — Design specs (`DESIGN.md`), reference mockup (`screen.png`), and content manifest
- **Server Components by Default**:
  - Keep all page layouts and section containers as React Server Components.
  - Mark only interactive leaf components (mobile navigation drawer, Framer Motion motion wrappers, form controls, count-up animations) with `"use client"`.
- **Image Optimization**:
  - Always use `next/image` for image rendering with defined dimensions, responsive `sizes`, and descriptive `alt` attributes.
  - Set `priority` only on the above-the-fold hero image.

---

## 2. Design System & Aesthetic Guardrails

- **Strictly No Gradients**:
  - No CSS linear, radial, conic, or mesh gradients anywhere on the site.
  - All backgrounds, cards, and buttons must use solid, opaque colors.
  - Depth is created strictly through multi-tiered tonal surface layering and crisp 1px borders.
- **Palette Discipline (Black, White, Crimson Red)**:
  - Canvas: High-contrast technical dark canvas (`#0B0F17`) for dark sections; crisp light surfaces for designated service/excellence sections.
  - Containers / Cards: Solid dark slate containers (`#111827`, `#1E293B`, `#0F172A`).
  - Text: White (`#FFFFFF`) for primary headings, Slate Gray (`#94A3B8`) for body/supporting copy.
  - Accent Punch: Crimson Red (`#E11D48`) reserved exclusively for primary conversions, active links, and key terminal indicators.
- **No Green Badges**:
  - Badges and status pills must use Crimson or Neutral variants only.
  - Green status chips/badges are prohibited.
- **Tokens Only — No Hardcoded Hex Codes**:
  - All component styles must reference Tailwind theme tokens.
  - Never introduce ad-hoc hex values directly inside component JSX or inline styles.
- **Source of Truth for Colors**:
  - The written sections of `docs/DESIGN.md` are the source of truth for color values (ignore the YAML frontmatter colors).
- **Typography**:
  - **Plus Jakarta Sans** for headings and high-impact titles.
  - **Inter** for body text, navigation, and UI controls.
  - Do not add JetBrains Mono unless a specific section genuinely requires code/monospace rendering.

---

## 3. Content, Data & Asset Rules

- **Data-Driven Architecture**:
  - Content must NEVER be hardcoded inside JSX templates.
  - All copy, project lists, team members, statistics, and links must live in `data/*.js`.
- **No Verbatim Copying from Live Website**:
  - Do not copy-paste copy from the live website (`clinginfotech.com`).
  - Use the live site purely as a factual reference (names, years, locations, contact info).
  - Copy must be rewritten for modern technical credibility, capability, and conversion.
- **Use Verified Content Only**:
  - All metrics, case studies, and client proof must be verified against `docs/content-manifest.md`.
  - Unverified items must be flagged as placeholders and approved before implementation.
- **No Screenshot Guessing**:
  - Do not guess or OCR small text from `docs/screen.png`. Use the screenshot solely for visual layout, density, and hierarchy guidance.

---

## 4. Phase-by-Phase Process & Review Gates

- **Strict Phase Execution**:
  - Follow `IMPLEMENTATION_PLAN.md` phase-by-phase.
  - Do not implement components or sections belonging to future phases.
- **Mandatory Review Gate**:
  - **STOP after completing the assigned phase.**
  - Test development server, build, and lint cleanly.
  - Present a concise completion summary and request user review and approval before proceeding to any subsequent phase.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
