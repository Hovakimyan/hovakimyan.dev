# sergey-hovakimyan — Design Spec

**Date:** 2026-05-10
**Project:** Personal site for Sergey Hovakimyan, AI-Augmented Software Engineer
**Profile source:** Resume PDF (Profile (1).pdf) + Brand kit "Sergey Hovakimyan – Brand Overview" + B&W portrait
**Target deploy:** `sergey-hovakimyan.ashoon.online` (initial Cloudflare Worker subdomain) + custom domain `hovakimyan.dev`
**Repo:** `Hovakimyan/website-sergey-hovakimyan`
**Folder:** `/websites/sergey-hovakimyan/`

---

## 1. Goal

Build Sergey's primary personal site under the "AI-Augmented Software Engineer" brand. Position him as a technical leader: 13+ years of engineering, multi-team management, accessibility advocacy, AI-augmented practice, and a Yerevan→Glendale story. Match the locked-in `/websites/` convention so deploy + tooling stay identical to the four siblings already shipped.

**Out of scope this iteration:**
- A blog / writing route (deferred — content can come later)
- Multi-language (English only)
- A CMS (content lives in code in `lib/content.ts`)
- E-commerce, lead-gen forms, or auth-gated routes

---

## 2. Brand system

Sourced verbatim from the brand kit "Sergey Hovakimyan – Brand Overview".

### Concept
**AI-Augmented Software Engineer.** Building scalable, accessible web systems with AI.

### Voice
Confident, precise, technical, but human. First-person ("I lead", "I build", "I ship"). Code-fluent — comfortable showing snippets and technical decisions in copy.

### Typography
| Role | Font | Weights | Source |
|---|---|---|---|
| Display / headings | **Sora** | 600, 700 | `next/font/google` |
| Body / UI | **DM Sans** | 400, 500, 600 | `next/font/google` |
| Code / technical | **Fira Code** | 400, 500, 600 | `next/font/google` |

Type scale (fluid via `clamp`):
- `display` 56→96px Sora 700, tracking tight
- `h1` 40→72px Sora 700, tracking tight
- `h2` 28→44px Sora 600
- `h3` 22→28px Sora 600
- Body 15→17px DM Sans 400, line-height 1.65
- Eyebrow 11→12px DM Sans 600 uppercase, tracking 0.16em
- Code 13→15px Fira Code 400/500

### Colors
| Token | Hex | Use |
|---|---|---|
| `--bg-page` | `#0A1929` | Default page bg (deeper than Deep Blue for richer contrast) |
| `--bg-deep` | `#102A43` | Brand Deep Blue — section panels |
| `--bg-charcoal` | `#243B53` | Brand Charcoal — surface variant |
| `--bg-mist` | `#D9E2EC` | Brand Mist — light contrast section |
| `--bg-surface-light` | `#F5F8FB` | Subtle off-white for light cards |
| `--ink` | `#F5F8FB` | Primary text on dark bg |
| `--ink-2` | `#B7C4D2` | Secondary text on dark bg |
| `--ink-on-light` | `#102A43` | Primary text on Mist sections |
| `--accent` | `#14B8A6` | Brand Emerald — CTAs, code highlights, signals |
| `--accent-soft` | `rgba(20, 184, 166, 0.16)` | Emerald glow / tints |
| `--ocean` | `#1F5E8C` | Brand Ocean — secondary accents, hairlines |
| `--divider` | `rgba(245, 248, 251, 0.12)` | Hairline on dark |
| `--divider-light` | `#D9E2EC` | Hairline on light (Mist section) |

Class prefix: `sh-` (after the SH hex monogram).

### Iconography
- Single-stroke line icons, ~1.5px stroke width
- Inline SVG (no extra dep)
- Hexagonal motif accents on bullet points and section dividers

### Imagery
- B&W portrait (Sergey, arms folded) on Deep Blue / Mist backgrounds. Same image reused across hero (tight crop), leadership pillar (medium crop), about page (full)
- No stock photography
- Geometric / line motifs — hexagonal grid, subtle topographic contour lines as section watermarks

---

## 3. Information architecture

```
/                  Home — overview compressed
/work              Professional case studies
/ventures          Personal projects (Ashoon agency, this site, future builds)
/about             Story, leadership philosophy, career timeline (git log)
/contact           Email + Calendly modal
```

**SiteHeader nav:** Home · Work · Ventures · About · Contact + emerald "Schedule conversation" CTA pill (opens Calendly modal directly from header).

**SiteFooter:** Editorial register — name + role · brand essence quote · `engineer.impact()` Fira Code line `> BUILDING · LEADING · AUTOMATING · ADVOCATING` · Connect (email, GitHub, LinkedIn) · Site (Work, Ventures, About) · Based in (Glendale, CA · Open to remote) · meta line.

---

## 4. Page-by-page composition

### 4.1 Home `/`

**Section 1 — Hero**
- Two-column on desktop, single-column on mobile
- Left: eyebrow `> AI-AUGMENTED ENGINEER` (Fira Code, emerald), display `Sergey Hovakimyan` (Sora 700) — word-by-word reveal on load (60ms stagger), brand sub-line `JavaScript & TypeScript · Agent-Based Development · Accessibility Advocate` in DM Sans 500, tagline (italic) `Building scalable, accessible web systems with AI.`, lead paragraph (1–2 sentences from profile summary), primary "Schedule conversation →" + outline "View work"
- Right: a stacked composition. Behind: the Three.js `<HexPrism />` Canvas takes the FULL right column (~480×480px on desktop) — slowly rotating wireframe hexagonal prism (Cylinder geometry, 6-sided), Emerald edges with soft outer glow. Mouse parallax ≤10°. `prefers-reduced-motion` → static frame. Above the prism (z-index higher), positioned with a slight offset so the prism is partially visible behind it: the B&W portrait card (tight crop, head-to-shoulders) on Deep Blue background, 1px Mist border + thin Emerald rule beneath. Status pill bottom-right of the portrait: emerald dot + "OPEN TO ENGAGEMENTS".
- On mobile (≤760px): the right column collapses below the headline. The hex prism either renders smaller (160×160px) above the portrait, OR is dropped entirely on small screens to save the 150KB three payload (decision: keep it but smaller, lazy-loaded only when in viewport via IntersectionObserver).
- Below the hero copy spans full width: a thin Fira Code line `> engineer.impact(); → BUILDING · LEADING · AUTOMATING · ADVOCATING` with each verb separated by hexagon glyph

**Section 2 — Thesis**
- Full-width Deep Blue panel. Single Sora display pull-quote: `"Building scalable, accessible web systems with AI."` Emerald hairline beneath. Brand mark in the corner. Subtle topographic contour watermark.

**Section 3 — What I do (4 verbs)**
- 4-tile grid (2x2 → 1 col on mobile)
- Each tile: hex-frame icon (emerald), Sora h3 verb, DM Sans 1-sentence pitch, hover effect: 4px lift + emerald hairline draw beneath title
- Verbs: `BUILDING` scalable web systems · `LEADING` cross-functional teams · `AUTOMATING` workflows with AI · `ADVOCATING` for accessibility

**Section 4 — Leadership pillar (NEW per user feedback)**
- Two-column dark Deep Blue section
- Left: B&W portrait (medium crop), thin emerald rule beneath, hexagonal frame motif
- Right: eyebrow `LEADERSHIP`, Sora h2 `Leading teams that ship.`, lead paragraph (~3 sentences) on management philosophy. Then a numbers register: `12 engineers led` · `30+ mentored` · `+20% productivity` · `−30% onboarding` · `15+ candidates interviewed`
- Optional pull-quote in italic: about mentorship growth (e.g., "I mentor for the version of an engineer they want to be.")
- "Read the leadership philosophy →" link to `/about#leadership`

**Section 5 — AI-augmented engineering pillar (NEW per user feedback)**
- Mist-colored panel (light contrast moment after the dark sections above)
- Eyebrow `AI-AUGMENTED ENGINEERING`, Sora h2 `Engineering, augmented.`, framing paragraph (~3 sentences) on how Sergey integrates LLMs / agents into daily build workflow without sacrificing rigor
- The **live data badge** (Fira Code in a Charcoal card, code typing animation on scroll-into-view):
  ```
  const engineer = {
    focus: ["AI-Augmented", "Web Systems", "DX"],
    languages: ["TypeScript", "JavaScript"],
    mindset: "Ship with impact"
  };
  ```
- Below the badge: 3 chip badges `AI-AUGMENTED` · `TYPESCRIPT` · `ACCESSIBLE` (emerald soft, ocean soft, mist)
- 3 sub-tiles: `Agent-based development` · `LLM-paired workflows` · `Accessibility-by-default with AI`

**Section 6 — Tech stack**
- Hexagonal grid (4 lanes by row): Languages · Frameworks · Practices · Tools
- Each cell: hex outline + tech name (Fira Code 13px) + small icon
- Languages: TypeScript, JavaScript, Hack
- Frameworks: React, Next.js, Node.js, Redux, GraphQL, Nest.js
- Practices: TDD, BDD, Micro-Frontend, CI/CD, WCAG, Performance
- Tools: Git, Webpack, Jest, Tailwind CSS, PostgreSQL, MongoDB
- Hover: emerald glow + 1.03 scale

**Section 7 — Selected impact (3 case-study cards)**
- 3 cards on Deep Blue background:
  1. `Renderforest · Video Maker` — `10M+ users · 30M+ projects · +40% perf`
  2. `Cloud Fleet Manager` — `Maersk · Atlantic Lloyd · Hanseaticsoft · 28 modules migrated Silverlight → React`
  3. `EPAM · Micro-Frontend Architecture` — `−30% code dependencies · 15+ countries · WCAG 2.1 AA`
- Each card: company logo placeholder (text mark), period, tags, "Read case study →" link to `/work#<slug>`

**Section 8 — Ventures preview (NEW per user feedback)**
- Single wide card, Charcoal bg with hex pattern
- Sora h3 `Ashoon · A studio building web systems for product-led teams.`
- Brief description, services list (web systems · accessibility audits · AI-augmented builds)
- Live URL chips: `ashoon.online` `ashoon.com`
- "View ventures →" link to `/ventures`

**Section 9 — Numbers ledger**
- 4 stats (CountUp on scroll-into-view, but skip animation if already visible at mount per the proven pattern from tamazyan-hovik):
  - `13+` years engineering
  - `12` engineers led
  - `WCAG 2.1 AA` standards shipped
  - `30+` countries reached
- Sora h1 numerals, emerald accents on suffixes

**Section 10 — Principles**
- 5 in a clean register (Mist surface): `LEADERSHIP` · `SCALABLE` · `RELIABLE` · `ACCESSIBLE` · `FORWARD-THINKING`
- Thin-line icon + 1-sentence body verbatim from brand kit:
  - LEADERSHIP — Empowering teams and elevating others.
  - SCALABLE — Building systems that grow.
  - RELIABLE — Quality, performance, and trust.
  - ACCESSIBLE — Inclusive by design, usable by all.
  - FORWARD-THINKING — Embracing AI and emerging tech.

**Section 11 — CTA banner**
- Deep Blue panel, emerald "Schedule conversation →" primary + outline "View on LinkedIn"
- Sora h2 `Let's build something together.`

### 4.2 Work `/work`

**Page header:** eyebrow `WORK`, h1 `Work that ships.`, lead paragraph
**Body:** 4 numbered editorial monographs (01–04). Each:
- Sticky meta sidebar: number + role + company + period + tags
- Right column: company name (h2), context / challenge / approach / outcome paragraphs, metric anchors (3-4 key numbers), tech tags
- One Fira Code "evidence" pull — a short architectural decision snippet (required for at least 2 of the 4 case studies; placeholder ASCII or pseudocode is acceptable while real code is gathered)
- Featured projects:
  1. **BuildOps** — IC5 Software Engineer, vertical SaaS for trades, current role
  2. **EPAM Streaming + Micro-Frontend** — Lead/Team Leader, micro-frontend, 15+ countries, WCAG 2.1 AA, streaming features for major client
  3. **Renderforest Video Maker** — Team Lead at Renderforest, 10M+ users, 30M+ projects, +40% perf rewrite
  4. **Cloud Fleet Manager (apolloBytes)** — Team Lead, Maersk + Atlantic Lloyd + Hanseaticsoft + Nordic Hamburg, 28 modules Silverlight→React migration

### 4.3 Ventures `/ventures` (NEW)

**Page header:** eyebrow `VENTURES`, h1 `Things I build outside of work.`, lead paragraph

**Featured — Ashoon (full-width card):**
- Sora h2 `Ashoon`
- Editorial subtitle: A small studio building web systems for product-led teams
- Service pillars (3 columns): Web systems for product-led teams · Accessibility audits & remediation · AI-augmented builds
- Live URL row: `ashoon.online` `ashoon.com`
- "Visit Ashoon →" primary button (links to ashoon.online)
- Optional B&W small portrait of the agency mark (or just typographic)

**Sub-feature — `hovakimyan.dev` (this site):**
- Card: "*The site you're on.*"
- Stack snippet (Fira Code): `Next.js 16 · React 19 · Tailwind v4 · Three.js · OpenNext · Cloudflare Workers`
- "View source on GitHub →" link (when repo is public)

**Future builds placeholder:**
- Empty card pattern with text "More coming." Removable when filled.

### 4.4 About `/about`

**Page header:** eyebrow `ABOUT`, h1 `Engineer. Leader. Builder.`, lead from profile summary
**Layout:** Two-column editorial — left content stream, right sticky panel (credentials register + portrait)

**Content blocks (left):**
1. **Story** (3-4 paragraphs): Yerevan → Glendale. Started with jQuery in '13, learned React early, led teams since '17, joined EPAM in 2020 covering streaming/micro-frontend/accessibility, joined BuildOps in 2025 as IC5 in LA. AI-augmented now.
2. **Leadership philosophy** (h2 + 3 paragraphs anchored at `#leadership`)
3. **Engineering philosophy with AI** (h2 + 3 paragraphs)
4. **Career timeline (git log)** — rendered as a Fira Code block styled like `git log --oneline --decorate`. Each commit line:
   ```
   * 2026-04 (HEAD -> main, BuildOps)        IC5 Software Engineer
   * 2023-11 (epam/team-leader)              Team Leader · 8-engineer front-end team
   * 2022-03 (epam/lead-glendale)            Lead Software Engineer · Glendale, CA
   * 2020-11 (epam/lead-yerevan)             Lead Software Engineer · Yerevan
   * 2019-05 (renderforest/team-lead)        Team Lead · Video Maker rewrite (10M+ users)
   * 2017-04 (apollobytes/team-lead)         Team Lead · Cloud Fleet Manager
   * 2013-08 (instigate/junior)              Junior Web Developer
   * 2013-12 (freelance)                     Web Developer · Freelance
   ```
   Each line fades in sequentially as the section enters viewport (one-time animation).

**Sticky right panel:**
- B&W portrait (full image)
- Credentials register:
  - Education: Bachelor's, Computer Science (Cyber Security), National Polytechnical University of Armenia, 2013-2017
  - Languages: English (Full Pro) · Armenian (Native) · Russian (Full Pro)
  - Based in: Glendale, California
  - Open to: Remote · Engineering leadership · AI-augmented builds

### 4.5 Contact `/contact`

Same pattern as `tamazyan-hovik`, restyled for emerald-on-navy.
- Page header: eyebrow `GET IN TOUCH`, h1 `A 30-minute conversation.`, lead
- Two cards:
  - **Schedule** (Deep Blue) — `BookCallButton` opens Calendly modal (URL: `https://calendly.com/hovakimyan-serg/30min`, primary color emerald, text Deep Blue)
  - **Email** (Mist) — `hovakimyan.serg@gmail.com` mailto with emerald underline
- "What we can build together" register beneath: 5 topics (Engineering leadership · Micro-frontend architecture · Accessibility audits & WCAG · AI-augmented dev workflows · Team development & mentorship)
- Footer-adjacent location chip: `Glendale, CA · Open to remote`

### 4.6 not-found `/404`

Short branded page, navy background, `404` Sora display, "This route is off the graph." (or similar engineering-flavored copy), emerald CTA back home.

---

## 5. Three.js hex prism (hero)

**Goal:** A subtle, premium 3D moment that mirrors the SH hexagon brand mark, runs at 60fps on mid-tier hardware, and degrades gracefully.

**Geometry:**
- `THREE.CylinderGeometry(1, 1, 1.4, 6, 1, true)` — 6-sided, slightly elongated
- Wireframe via `THREE.WireframeGeometry` rendered with `LineSegments` + `LineBasicMaterial({ color: 0x14B8A6, transparent: true, opacity: 0.85 })`
- A second pass: a faint volume hint via the same `CylinderGeometry` rendered with `MeshStandardMaterial({ color: 0x102A43, transparent: true, opacity: 0.08, metalness: 0.6, roughness: 0.4 })`

**Lighting:**
- `AmbientLight(0xffffff, 0.4)`
- One `DirectionalLight(0xffffff, 0.6)` at (3, 5, 3) for rim catch on the wireframe edges

**Camera:**
- `PerspectiveCamera(45, aspect, 0.1, 100)` at (0, 0, 5), looking at origin

**Animation loop (rAF):**
- Y rotation: +0.003 rad / frame (constant)
- X axis: gentle sine bob `Math.sin(elapsed * 0.0008) * 0.15` for tilt
- Mouse parallax: lerp current rotation toward target derived from `pointermove` event, capped at ±0.18 rad on each axis

**Performance:**
- Single mesh + 1 wireframe mesh = 2 draw calls
- DPR cap at 2 (`renderer.setPixelRatio(Math.min(2, devicePixelRatio))`)
- Resize listener via ResizeObserver on the canvas container
- Pause loop when document is hidden (`visibilitychange`)
- `prefers-reduced-motion` → render single frame, never start the loop
- Mobile (≤640px): smaller container (160px), DPR cap at 1.5

**Bundle:**
- Import only what we need: `three/src/...` core or use the standard `three` and let tree-shaking handle it
- Lazy-load via `next/dynamic` with `ssr: false` so the canvas component doesn't ship to the server
- Expected payload: ~150KB gz for three core (acceptable; only on home page)

**Component:**
- `app/components/HexPrism.tsx` — client component
- Accepts no props (single static config)
- Cleans up loop, listeners, geometry, materials on unmount

---

## 6. Animation plan

| Effect | Where | Tech |
|---|---|---|
| Word-by-word headline reveal | Hero | CSS @keyframes, staggered animation-delay |
| Portrait clip-path wipe | Hero, About | CSS @keyframes |
| Hex prism rotation + bob + parallax | Hero only | Three.js |
| Eyebrow gold rule line-draw | Various sections | CSS @keyframes width: 0 → 56px |
| Live data badge typing | AI pillar | Custom React effect with IntersectionObserver, runs once |
| Stats CountUp (0 → final) | Numbers ledger, Leadership pillar | Reused `CountUp.tsx` from tamazyan-hovik (skip-if-visible-at-mount pattern) |
| Tech-stack hex hover | Tech grid | CSS hover (transform scale + emerald glow shadow) |
| Card hover lift | Tiles, ventures, work cards | CSS transform + box-shadow transitions |
| Career timeline git-log line reveal | About | CSS @keyframes, staggered delays, one-time auto-play |
| Scroll progress bar (emerald) | Top of viewport | rAF-driven (reused pattern from tamazyan-hovik) |
| All ease curve | Everywhere | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| Reduced-motion fallback | All animations | `@media (prefers-reduced-motion: reduce)` overrides |

---

## 7. Technical architecture

### Project layout (mirrors `/websites/tamazyan-hovik/`)

```
sergey-hovakimyan/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── icon.svg
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── components/
│   │   ├── SiteHeader.tsx          (client)
│   │   ├── SiteFooter.tsx          (server)
│   │   ├── MobileMenu.tsx          (client)
│   │   ├── Interactivity.tsx       (client)
│   │   ├── ScrollProgress.tsx      (client)
│   │   ├── CountUp.tsx             (client)
│   │   ├── BookCallButton.tsx      (client, opens Calendly modal)
│   │   ├── HexPrism.tsx            (client, dynamic-import wrapper for the Three.js canvas)
│   │   ├── HexPrismCanvas.tsx      (client, the actual Three.js scene)
│   │   ├── CodeTyping.tsx          (client, typing-on-scroll for the data badge)
│   │   └── Icon.tsx                (server, inline SVG icon library)
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Thesis.tsx
│   │   ├── WhatIDo.tsx
│   │   ├── LeadershipPillar.tsx
│   │   ├── AiPillar.tsx
│   │   ├── TechStack.tsx
│   │   ├── SelectedImpact.tsx
│   │   ├── VenturesPreview.tsx
│   │   ├── NumbersLedger.tsx
│   │   ├── Principles.tsx
│   │   └── CtaBanner.tsx
│   ├── work/page.tsx
│   ├── ventures/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── lib/
│   └── content.ts                  (single source of truth)
├── public/
│   └── images/
│       └── sergey-portrait.jpg     (B&W image provided by user)
├── docs/
│   └── superpowers/specs/2026-05-10-sergey-hovakimyan-design.md
└── (root configs identical to tamazyan-hovik)
```

### Stack pinning (matches `/websites/tamazyan-hovik/package.json` + new deps)

```json
"next": "^16.2.5",
"react": "^19.2.4",
"react-dom": "^19.2.4",
"react-calendly": "^4.4.0",
"three": "^0.170.0"
```
DevDeps add `@types/three`. Engines: `node >=24`. Same OpenNext / Wrangler / Tailwind pins as tamazyan-hovik.

### Tailwind v4 tokens (`globals.css @theme`)

All brand color, font, and spacing tokens live in `@theme { … }`. Class prefix `sh-`. Section spacing `clamp(56px, 8vw, 96px)` (same as tamazyan-hovik). Container max-width 1200px, page padding `clamp(20px, 4vw, 32px)`.

### Cloudflare wrangler.jsonc

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "sergey-hovakimyan",
  "main": ".open-next/worker.js",
  "compatibility_date": "2025-04-01",
  "compatibility_flags": ["nodejs_compat", "global_fetch_strictly_public"],
  "assets": { "directory": ".open-next/assets", "binding": "ASSETS" },
  "observability": { "enabled": true }
}
```

### URL-agnostic constraint

Same pattern as tamazyan-hovik. `sitemap.ts` and `robots.ts` derive base URL from request `host` header. No hardcoded domain in user-visible content. `metadata.metadataBase` not set (Next falls back to relative OG URLs).

---

## 8. Accessibility & performance

- All interactive elements ≥ 44×44 hit target on mobile (lesson learned from tamazyan-hovik audit)
- Color contrast: All ink-on-bg combos meet WCAG AA. Emerald on Deep Blue verified at 14px+ DM Sans 600
- Focus rings: 2px emerald outline with 2px offset
- Mobile menu: focus trap, body scroll-lock, ESC to close, restore focus on close
- Three.js canvas: `aria-hidden="true"` (decorative), full reduced-motion fallback
- All `data-reveal` / counter / line-draw elements render with their final visual state in SSR. JS only re-applies the animation on mount
- Images: `next/image` with `priority` on hero, `sizes` attribute everywhere, B&W portrait optimized to ~150KB
- LCP target: < 1.8s on Cloudflare edge
- Lighthouse: Mobile Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 (matching tamazyan-hovik)
- All animations honor `prefers-reduced-motion`

---

## 9. SEO

- `metadata` per page (title + description + OG)
- Site title: `Sergey Hovakimyan — AI-Augmented Software Engineer`
- Per-page descriptions in `lib/seo.ts` or inline in each `page.tsx`
- `sitemap.ts` enumerates 5 routes, derives base URL from request `host`
- `robots.ts` allows all, points at sitemap
- One OG image at `/public/og.png` (1200×630 — Sora display name on Deep Blue + emerald accent + portrait crop)

---

## 10. Build sequence

1. Scaffold root files mirroring tamazyan-hovik (package.json, tsconfig, next.config, postcss, eslint, open-next, wrangler, .gitignore). Update `name` fields. Add `react-calendly` and `three` deps.
2. `npm install`
3. Place B&W portrait at `public/images/sergey-portrait.jpg`
4. `app/layout.tsx` (Sora + DM Sans + Fira Code, ScrollProgress, SiteHeader, SiteFooter, Interactivity)
5. `app/globals.css` with brand tokens + section styles
6. `app/icon.svg` (hex SH monogram)
7. `lib/content.ts` (full content, all sections, all routes)
8. Reusable primitives: `Icon`, `CountUp`, `ScrollProgress`, `Interactivity`, `BookCallButton`
9. Three.js scene: `HexPrism` (dynamic wrapper) + `HexPrismCanvas` (the actual scene)
10. Code-typing component: `CodeTyping`
11. Home sections in `app/sections/`
12. `app/page.tsx` composes Home
13. `/work`, `/ventures`, `/about`, `/contact`, `/not-found`
14. `sitemap.ts`, `robots.ts`
15. `npm run build` — type-check + Next compile
16. `npm run dev` — visual QA at 320 / 375 / 768 / 1024 / 1440 (same breakpoints as tamazyan-hovik audit)
17. `git init`, initial commit
18. (Deferred to user) `gh repo create Hovakimyan/website-sergey-hovakimyan --source=. --private --push`
19. (Deferred to user) Cloudflare Workers Builds setup + `hovakimyan.dev` custom domain
20. (Deferred to user) Add to `ashoon-online` `DEMOS` portfolio

---

## 11. Acceptance criteria

- [ ] All 5 pages render with no console errors / no hydration warnings
- [ ] `npm run build` succeeds with TypeScript strict
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- [ ] No hardcoded production hostname appears in source — same build serves any host
- [ ] Three.js canvas hits ≥45fps on mid-tier mobile, pauses on visibility change, fully reduced-motion safe
- [ ] Mobile menu traps focus and locks scroll
- [ ] Calendly modal opens from contact page AND header CTA pill, traps focus, ESC to close, body scroll-lock, focus restored to trigger
- [ ] All copy from profile preserved (no facts lost; voice nudged to brand)
- [ ] Email link `mailto:hovakimyan.serg@gmail.com`
- [ ] Calendly URL set to `https://calendly.com/hovakimyan-serg/30min`
- [ ] All breakpoints clean: 320, 375, 414, 600, 720, 768, 1024, 1280, 1440 — no horizontal overflow
- [ ] All tap targets ≥ 44px on mobile

---

## 12. Open items / deferred

- Real Ashoon hero screenshot for the ventures page (for now: typographic-only card)
- Future side-project entries on `/ventures` (cards add as data, no schema change)
- Optional `/writing` page (deferred — content not provided)
- LinkedIn URL constant: `https://www.linkedin.com/in/hovakimyanserg/` (provided in profile)
- GitHub URL: TBD (will ask if needed when wiring footer)
- Real OG image render — placeholder for v1
