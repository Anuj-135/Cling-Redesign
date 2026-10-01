# Cling Infotech — Homepage Redesign

A production-grade, modern landing page redesign for **Cling Infotech** (`clinginfotech.com`), built with Next.js App Router, Tailwind CSS v4, and standard JavaScript.

## Project Purpose

Transform the existing Cling Infotech web presence into a technical, high-performance landing page representing the company's enterprise software engineering, custom cloud/web/mobile application architecture, AI surveillance intelligence, and 3D visual computing capabilities. All content is strictly grounded in verified facts from the company manifest (`docs/content-manifest.md`).

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: JavaScript (ES6+ / React 19)
- **Styling**: Tailwind CSS v4 (Design tokens defined in `app/globals.css`)
- **Typography**: Plus Jakarta Sans (Headings) & Inter (Body / UI) via `next/font/google`
- **Iconography**: Lucide React
- **Animations / Utilities**: Framer Motion, standard CSS transitions

## Architecture & Project Structure

The project uses a flat root structure without `src/`:

```
homepage-redesign/
├── app/                  # Next.js App Router (layout, page, metadata, globals.css)
├── components/
│   ├── layout/          # Navbar, MobileMenu, Footer, WhatsAppButton
│   ├── sections/        # Homepage sections (Hero, Stats, Services, FeaturedWork,
│   │                    # TechSpotlight, Excellence, Evolution, Leadership, Contact)
│   └── ui/              # Reusable primitives (Button, Badge, Card, Input, Textarea,
│                        # Select, SectionHeader, Container)
├── data/                # Data-driven content sources (projects, services, stats,
│                        # timeline, leadership, offices, site)
├── docs/                # Design specifications, content manifest, reference mockups
├── lib/                 # Shared utilities and client-side validators
├── public/              # Static assets and verified images (`public/images/`)
├── AGENTS.md            # Locked agent rules and guardrails
└── IMPLEMENTATION_PLAN.md # Phased execution plan
```

## Design Constraints & System Rules

- **Zero Gradients**: Strictly solid, opaque surfaces. Depth is established exclusively through multi-tiered tonal surface layering (`#0B0F17`, `#111827`, `#1E293B`, `#0F172A`) and crisp 1px borders.
- **Palette Discipline**: High-contrast Dark Canvas with Slate typography and high-chroma Crimson Red (`#E11D48`) accent. No green, blue, cyan, purple, or orange badges.
- **Alternating Visual Rhythm**: Dark Hero/Stats → Light Services → Dark Featured Work/Tech Spotlight → Light Excellence → Dark Evolution/Leadership/Contact.
- **Data-Driven & Verified**: No content is hardcoded in JSX; all copy originates from verified data modules matching `docs/content-manifest.md`. No synthetic testimonials or fabricated metrics.
- **Server Components by Default**: Client interactivity (`"use client"`) is restricted to leaf components (forms, navigation drawer).

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linter
npm run lint

# Build for production (Turbopack)
npm run build

# Start production server locally
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

## Deployment Target

Configured for zero-config production deployment on the **Vercel Platform**:
- Framework Preset: Next.js
- Build Command: `next build`
- Output Directory: `.next`
- Node.js Runtime: 20.x / 22.x
