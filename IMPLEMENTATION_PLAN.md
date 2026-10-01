# Cling Infotech Homepage Redesign: Architecture and Implementation Plan

Redesign of the homepage of https://clinginfotech.com/ into a modern technology-company landing page that communicates **capability, credibility and conversion** within the first few seconds.

**Tech stack:** Next.js (App Router) + JavaScript + Tailwind CSS + Framer Motion + Lucide React
**Design sources:** `docs/DESIGN.md` ("Technical Precision Dark") and `docs/screen.png` (full-page design from Stitch)
**Deployment:** GitHub + Vercel
**Build method:** Antigravity agents, one phase at a time, with a review gate after every phase.

---

## 1. Phase overview

| Phase | Name | Main output |
|---|---|---|
| 0 | Project setup + guardrails | Dependencies, fonts, rules file, folder skeleton |
| 1 | Design tokens + global foundation | Tailwind theme, base styles, grid |
| 2 | Reusable UI primitives | Button, Badge, Card, form controls, SectionHeader, Container |
| 3 | Navbar + Footer + layout shell | Site chrome, using clearly marked placeholder data |
| 4 | Content + asset verification | Verified content, content manifest, optimized assets, data files |
| 5 | Hero + Stats + Services | Top of the page |
| 6 | Featured Work + Technology | Proof sections (gated on Phase 4) |
| 7 | About + Evolution + Leadership | Credibility sections |
| 8 | Contact + CTA | Closing CTA, contact section, front-end-only form |
| 9 | Motion + interactions | Framer Motion polish |
| 10 | Responsive + accessibility + performance | Responsive pass, a11y, image optimization check, Lighthouse |
| 11 | Final content / link / visual QA | Accuracy, links and visual match |
| 12 | GitHub + Vercel deployment | Repo, production build, live URL |

---

## 2. Fix these before starting

1. **DESIGN.md contradicts itself.** The YAML frontmatter has one palette (surface `#0f131c`, a pinkish `on-surface-variant`), while the written sections have another (canvas `#0B0F17`, cards `#111827`, text `#94A3B8`). The **written sections are the source of truth**, because they carry explicit hex values and match the near-black look of the screenshot. Agents must ignore the frontmatter colors.
2. **This plan overrides DESIGN.md where they conflict.** DESIGN.md specifies a green "System Active" chip and JetBrains Mono. This plan removes the green badges and uses two fonts by default (see section 3).
3. **The light sections have no tokens.** In the screenshot, Services and Engineering Excellence sit on white or near-white surfaces, but DESIGN.md only defines dark surfaces. Define a small "light surface" token set in Phase 1 (background, card, border, text) so agents don't invent colors.
4. **Don't let agents read content from the screenshot.** It is a downscaled full-page image and the small text is unreliable. Use it only for layout and hierarchy. Real content comes from the verified data files (Phase 4). Cropping the screenshot per section from Stitch also helps.
5. **Don't blindly copy the live website's wording.** Some of it is unusable. For example, the current "Our Story" copy talks about "online education", which does not match an IT-services company. Use the live site as a **fact reference** (names, offices, contact details, years) and write fresh copy.
6. **Homepage only for now.** The Services and Portfolio pages do not exist yet, so nav links and "Learn more" buttons use in-page anchors (`#services`, `#work`, and so on).

---

## 3. Scope decisions (locked in)

| Decision | Rule |
|---|---|
| Folder layout | **No `src/` folder.** Use root-level `app/`, `components/`, `data/`, `lib/`, `public/`. |
| Backend | **No API route initially.** The contact form is front-end only. |
| Styleguide | **No `/styleguide` route** unless a phase genuinely needs it (ask for approval first, and delete it before Phase 10 ends). |
| Badges | **No green badges.** Crimson and neutral variants only. |
| Fonts | **Two fonts:** Plus Jakarta Sans (headings) and Inter (body). Add JetBrains Mono only if a section actually uses monospace text. |
| Copy | **No verbatim copy** from the live website. Facts are verified, wording is rewritten. |
| Portfolio | **Don't implement Featured Work until Phase 4 verification is complete.** |

Kept from the original plan: Next.js App Router, JavaScript, Tailwind, Framer Motion, Lucide, Server Components by default, data-driven repeated content, reusable UI components, phased implementation with review gates, responsive QA, Lighthouse, `next/image`, and Vercel.

---

## 4. Architecture

### Principles for the agents

- App Router, **JavaScript only**, **Server Components by default**. Only parts that need interactivity (Framer Motion wrappers, mobile menu, form, count-up) are `"use client"` leaf components. This keeps the page fast.
- **All design values live in Tailwind theme tokens.** No hardcoded hex values and **no gradients anywhere**.
- **Page content lives in data files**, never inside JSX.
- Sections are composed from **reusable primitives** (Button, Card, Badge and so on), so the page is consistent by construction.
- Depth comes from tonal surface layering and 1px borders, not from soft shadows or gradients.
- All images go through `next/image`.

### Folder structure (no `src/`)

```
docs/                      DESIGN.md, screen.png, section crops,
                           content-manifest.md
app/
  layout.js                fonts, metadata, Navbar + Footer shell
  page.js                  composes the sections in order
  globals.css              Tailwind import + theme tokens
components/
  ui/                      Button, Badge, Card, Input, Textarea,
                           Select, SectionHeader, Container
  layout/                  Navbar, MobileMenu, Footer, WhatsAppButton
  sections/                Hero, StatsStrip, Services, FeaturedWork,
                           TechSpotlight, Excellence, Evolution,
                           Leadership, Contact
  motion/                  FadeUp, Stagger, CountUp (client wrappers)
data/                      services.js, projects.js, stats.js,
                           timeline.js, leadership.js, offices.js, site.js
lib/                       motion.js (shared variants), validators.js
public/images/             optimized project shots, team photos, logo
```

Before Phase 0 starts, check that the scaffold did **not** create a `src/` folder. If it did, stop and tell the user rather than restructuring silently. The `@/*` import alias in `jsconfig.json` should point to the project root.

Also confirm which Tailwind version the scaffold installed. Tailwind v4 defines tokens in CSS with `@theme`, while v3 uses `tailwind.config.js`. Agents should follow whichever is installed.

### Page section order

1. Navbar (sticky, "Let's Talk" CTA)
2. Hero ("Build Digital Products That Move Business Forward.")
3. Stats strip
4. Comprehensive Technology Services (6 cards, light surface)
5. Featured Work
6. Technology Beyond the Ordinary (AI Surveillance and 3D Animation)
7. Engineering Excellence Since 2019 (light surface)
8. Our Evolution (timeline)
9. Meet Our Leadership
10. Have a Project in Mind? (contact form and offices)
11. Footer (with floating WhatsApp button)

---

## 5. Phase plan

Each phase is handled by one agent. After Phase 4, Phases 5 to 7 can run in parallel (Phase 6 only once its content is verified).

### Phase 0: Project setup + guardrails

- [ ] Confirm the scaffold has no `src/` folder and note the Tailwind version.
- [ ] Install `framer-motion` and `lucide-react`.
- [ ] Add two fonts with `next/font`: Plus Jakarta Sans and Inter.
- [ ] Copy DESIGN.md and the screenshot into `docs/`.
- [ ] Write a rules file for the agents: the principles in section 4, the scope decisions in section 3, "no gradients", "tokens only", "JavaScript only", "no green badges", "do not copy live-site wording".
- [ ] Create the empty root-level folder skeleton.

**Review gate:** the dev server runs clean and the fonts load.

### Phase 1: Design tokens + global foundation

- [ ] Put the colors, radii, spacing, font families and type scale from DESIGN.md (written sections) into the Tailwind theme.
- [ ] Add the light-surface tokens (section 2, item 3).
- [ ] Skip the green tertiary tokens unless a later need appears.
- [ ] Add base styles: body, headings, focus ring, selection color, container width (1280px) and the 12-column grid.

**Review gate:** Verify the tokens by temporarily rendering representative elements during development; do not create a committed route/page solely for token inspection.

### Phase 2: Reusable UI primitives

- [ ] Button: primary, secondary, ghost.
- [ ] Badge: **crimson and neutral only**.
- [ ] Card: 1rem radius, 1px border, hover border shift.
- [ ] Input, Textarea, Select.
- [ ] SectionHeader (label plus title) and Container.
- [ ] Verify the primitives by using them in sections, not in a styleguide page.

**Review gate:** every primitive matches DESIGN.md in all its states (default, hover, focus, disabled).

### Phase 3: Navbar + Footer + layout shell

- [ ] Sticky Navbar with a "Let's Talk" CTA, using in-page anchor links.
- [ ] Mobile menu.
- [ ] Footer: offices, link columns, social links, legal links.
- [ ] Flat WhatsApp floating button.
- [ ] Use **clearly marked placeholder data** in `data/site.js` for now. It is replaced with verified data in Phase 4.

**Review gate:** the shell works at 390, 768 and 1280px.

### Phase 4: Content + asset verification

This phase must finish before any portfolio or proof section is built.

**Content verification**
- [ ] Create `docs/content-manifest.md`: one row per content item, with its source and a status of **verified**, **placeholder** or **missing**.
- [ ] Verify with the user: stats (clients, projects, lines of code, years), office addresses, phone, email, WhatsApp and social links, leadership names, roles and photos, timeline events, and service descriptions.
- [ ] For every Featured Work project: confirm it is a real Cling project, that its name and description are accurate, and that images may be used. Anything unconfirmed is marked as a placeholder and approved by the user before use.
- [ ] Write fresh copy grounded in the verified facts. Do not paste text from the live site.
- [ ] Populate `data/`: services, projects, stats, timeline, leadership, offices, site. Replace the Phase 3 placeholders.

**Asset preparation and image optimization**
- [ ] Collect or create the images the sections need: hero mockup, project screenshots, team photos, logo.
- [ ] Compress source images (no multi-MB originals), use consistent aspect ratios and meaningful file names, and place them in `public/images/`.
- [ ] Draft alt text for every image in the data files.
- [ ] Record any missing asset in the manifest instead of inventing one.

**Review gate:** the user signs off on the content manifest. Nothing marked "missing" is needed by a phase that is about to start.

### Phase 5: Hero + Stats + Services

- [ ] Hero (headline, CTAs, dashboard mockup).
- [ ] StatsStrip, using only verified numbers.
- [ ] Services (6-card grid on the light surface).

**Review gate:** the top of the page matches the design and passes the 5-second test (what they do, who it is for, why trust them, what to do next).

### Phase 6: Featured Work + Technology

Only start once the Featured Work content is verified in Phase 4.

- [ ] FeaturedWork: one large card plus the smaller project cards, from verified data.
- [ ] TechSpotlight: AI Surveillance and 3D Animation cards.
- [ ] Use `next/image` with correct dimensions and `sizes`.

**Review gate:** the cards render from data with tags, images and links, and every project shown is verified or approved as a placeholder.

### Phase 7: About + Evolution + Leadership

- [ ] Excellence: pillars and global presence, on the light surface.
- [ ] Evolution: timeline from 2019 onward, using only verified events. Do not invent years/events that aren't verified.
- [ ] Leadership: Ramesh Singh, Ashi Gupta, Akshay Gupta, with verified roles and photos.

**Review gate:** these three sections match the design at all breakpoints.

### Phase 8: Contact + CTA

- [ ] Closing CTA band and the "Have a Project in Mind?" contact section.
- [ ] Form UI: name, email, phone, service or project type, message.
- [ ] Client-side validation, with clear error states and a success state.
- [ ] **No API route and no network request.** The submit handler is a clearly marked placeholder.
- [ ] Office details and direct contact paths (phone, email, WhatsApp) so visitors can still reach the company.

**Review gate:** the form validates properly and its states look right. A backend or email-delivery decision is deferred until after review.

### Phase 9: Motion + interactions

- [ ] Shared Framer Motion variants in `lib/motion.js`.
- [ ] Fade-up on scroll and staggered card reveals.
- [ ] Count-up on the stats.
- [ ] Hover border shift on cards (no scaling transforms, as DESIGN.md specifies).
- [ ] Respect `prefers-reduced-motion`.

**Review gate:** the page feels smooth, and nothing animates when reduced motion is on.

### Phase 10: Responsive + accessibility + performance

- [ ] Responsive pass at 390, 768, 1280 and 1440px.
- [ ] Accessibility: heading order, color contrast, labels on every form field, visible focus states, keyboard navigation, correct ARIA on the mobile menu.
- [ ] Image optimization check: `next/image` everywhere, `priority` only on the hero image, lazy loading elsewhere, correct `sizes`, no oversized images in the network panel, no layout shift.
- [ ] SEO basics: page title and description (written fresh from verified facts), Open Graph tags, favicon.
- [ ] Run Lighthouse (performance, accessibility, best practices, SEO) and fix what it flags.
- [ ] Remove any temporary scratch pages.

**Review gate:** no layout breaks, and Lighthouse scores are healthy.

### Phase 11: Final content / link / visual QA

**Content accuracy**
- [ ] Check every number, name, role, date, address, phone number and email against `docs/content-manifest.md`.
- [ ] Remove all leftover placeholder text and fix typos.

**Link QA**
- [ ] Every in-page anchor scrolls to the right section.
- [ ] External links, social links, `tel:`, `mailto:` and the WhatsApp link all work and go to the right place.

**Visual QA**
- [ ] Compare each section against `docs/screen.png` and DESIGN.md at 390, 768, 1280 and 1440px.
- [ ] Confirm: colors come only from tokens, no gradients, no green, two fonts, consistent radii, hover and focus states present.
- [ ] Browser console is clean.

**Review gate:** the user signs off on the full page.

### Phase 12: GitHub + Vercel deployment

- [ ] Pre-flight: `npm run build` and `npm run lint` pass with no errors.
- [ ] Add a `.gitignore` check (no `.env` or secrets committed) and a README: project overview, stack, how to run, folder structure.
- [ ] Create the GitHub repo, commit with clear messages, and push to `main`.
- [ ] Import the repo into Vercel (framework auto-detected). No environment variables are needed while there is no backend.
- [ ] Review the preview deployment, then promote to production.
- [ ] Set `metadataBase` to the deployed URL and verify the Open Graph tags.
- [ ] Re-run Lighthouse on the live URL and test on a real phone.

Deploy to a Vercel URL only. This is a redesign assignment, so do not touch the company's real domain.

**Review gate:** the live URL works end to end and matches the approved design.

---

## 6. How to run it with Antigravity

- Give each agent **one phase**, and start every prompt with: "Read `docs/DESIGN.md` and the rules file first."
- **Review each phase's result in the browser** before starting the next. This stops errors from compounding.
- If an agent's output drifts (a gradient, a green badge, an off-palette color, copied live-site wording), send it back with a specific fix rather than re-running the whole phase.
- Do not skip ahead: later phases depend on the tokens, primitives and verified data from earlier ones.