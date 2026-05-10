# sergey-hovakimyan Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a 5-page personal site for Sergey Hovakimyan ("AI-Augmented Software Engineer") matching the locked-in `/websites/` Next.js + OpenNext-Cloudflare stack, with a Three.js hex prism in the hero and a Calendly modal on contact.

**Architecture:** Static Next.js 16 (App Router, no `src/`), client components for interactivity (mobile menu, counters, Calendly modal, Three.js canvas). Brand: Sora + DM Sans + Fira Code; Deep Blue / Mist / Emerald palette; class prefix `sh-`. Single `lib/content.ts` as content source of truth. Pages render visually correct without JS (animation is enhancement only). Same URL-agnostic + reduced-motion-safe patterns proven in tamazyan-hovik.

**Tech Stack:** Next.js 16, React 19, TypeScript strict, Tailwind v4 via @theme, three.js 0.170, react-calendly 4.4, OpenNext-Cloudflare, Wrangler 4. Reference site: `/websites/tamazyan-hovik/` (same conventions).

**Spec:** `docs/superpowers/specs/2026-05-10-sergey-hovakimyan-design.md` — read before each task; this plan refers to it for content details.

**Reference site for patterns:** `/Users/sergey/Projects/websites/tamazyan-hovik/` — copy patterns, never re-invent them. Particularly the chrome (SiteHeader, SiteFooter, MobileMenu, Interactivity, ScrollProgress, BookCallButton), the brand tokens system, and the URL-agnostic sitemap/robots.

**Project root for all paths in this plan:** `/Users/sergey/Projects/websites/sergey-hovakimyan/`

**Testing strategy:** Static site, no unit tests. Verification = `npm run lint && npm run build` succeeding cleanly + visual QA in browser at 320 / 375 / 768 / 1024 / 1440 viewport widths. Each task that ships visible UI ends with a Playwright screenshot capture at the specified width and a brief check.

---

## File structure

```
sergey-hovakimyan/
├── app/
│   ├── layout.tsx                         # html shell, fonts, chrome
│   ├── page.tsx                           # home composition
│   ├── globals.css                        # all brand tokens + component styles
│   ├── icon.svg                           # SH hex monogram favicon
│   ├── not-found.tsx                      # branded 404
│   ├── sitemap.ts                         # url-agnostic sitemap
│   ├── robots.ts                          # url-agnostic robots
│   ├── components/
│   │   ├── SiteHeader.tsx                 # client — sticky topbar, mobile toggle
│   │   ├── SiteFooter.tsx                 # server — editorial register
│   │   ├── MobileMenu.tsx                 # client — slide-down panel
│   │   ├── Interactivity.tsx              # client — IO triggers for [data-observe]
│   │   ├── ScrollProgress.tsx             # client — emerald scroll bar at top
│   │   ├── CountUp.tsx                    # client — number counter (skip-if-already-visible)
│   │   ├── BookCallButton.tsx             # client — Calendly modal portal
│   │   ├── CodeTyping.tsx                 # client — typing-on-scroll for code blocks
│   │   ├── HexPrism.tsx                   # client — dynamic wrapper (next/dynamic ssr:false)
│   │   ├── HexPrismCanvas.tsx             # client — actual Three.js scene
│   │   └── Icon.tsx                       # server — inline SVG icons
│   ├── sections/
│   │   ├── Hero.tsx                       # server (renders HexPrism wrapper inside)
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
│   └── content.ts                         # single source of truth: SITE, NAV, EXPERTISE, etc.
├── public/
│   └── images/
│       └── sergey-portrait.jpg            # B&W portrait (provided)
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── open-next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── wrangler.jsonc
```

Note: `docs/` already exists with spec + this plan. `.git/` already initialized on `main` with the spec commit (`8bcaacb`).

---

## Task 1: Scaffold root config files (verbatim from tamazyan-hovik)

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `open-next.config.ts`, `wrangler.jsonc`, `.gitignore`

- [ ] **Step 1: Read the reference files from tamazyan-hovik**

Run:
```bash
ls /Users/sergey/Projects/websites/tamazyan-hovik/
cat /Users/sergey/Projects/websites/tamazyan-hovik/tsconfig.json
cat /Users/sergey/Projects/websites/tamazyan-hovik/next.config.ts
cat /Users/sergey/Projects/websites/tamazyan-hovik/eslint.config.mjs
cat /Users/sergey/Projects/websites/tamazyan-hovik/postcss.config.mjs
cat /Users/sergey/Projects/websites/tamazyan-hovik/open-next.config.ts
cat /Users/sergey/Projects/websites/tamazyan-hovik/.gitignore
```

- [ ] **Step 2: Write `package.json`**

```json
{
  "name": "sergey-hovakimyan",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "node": ">=24.0.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
    "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
    "cf-typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts"
  },
  "dependencies": {
    "next": "^16.2.5",
    "react": "^19.2.4",
    "react-calendly": "^4.4.0",
    "react-dom": "^19.2.4",
    "three": "^0.170.0"
  },
  "devDependencies": {
    "@opennextjs/cloudflare": "^1.19.5",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/three": "^0.170.0",
    "eslint": "^9",
    "eslint-config-next": "^16.2.5",
    "tailwindcss": "^4",
    "typescript": "^5",
    "wrangler": "^4.87.0"
  }
}
```

- [ ] **Step 3: Copy `tsconfig.json` verbatim from tamazyan-hovik**

The file content is identical to `/Users/sergey/Projects/websites/tamazyan-hovik/tsconfig.json`. Strict mode, ES2017 target, paths `@/*` → `./*`.

- [ ] **Step 4: Copy `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `open-next.config.ts`, `.gitignore` verbatim from tamazyan-hovik**

`.gitignore` MUST include `.next/`, `.open-next/`, `.wrangler/`, `cloudflare-env.d.ts`, `node_modules/`, `next-env.d.ts`, `.DS_Store`, `*.tsbuildinfo`, `.env*`.

- [ ] **Step 5: Write `wrangler.jsonc`**

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "sergey-hovakimyan",
  "main": ".open-next/worker.js",
  "compatibility_date": "2025-04-01",
  "compatibility_flags": ["nodejs_compat", "global_fetch_strictly_public"],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  },
  "observability": {
    "enabled": true
  }
}
```

- [ ] **Step 6: Run `npm install`**

```bash
cd /Users/sergey/Projects/websites/sergey-hovakimyan && npm install 2>&1 | tail -10
```

Expected: 600+ packages installed, no peer-dep errors blocking install.

- [ ] **Step 7: Verify clean install with a no-op build attempt**

```bash
cd /Users/sergey/Projects/websites/sergey-hovakimyan && npx tsc --noEmit
```

Expected: errors about missing files (no `app/` yet) — just confirming TypeScript is wired.

- [ ] **Step 8: Commit**

```bash
cd /Users/sergey/Projects/websites/sergey-hovakimyan
git add -A
git commit -m "chore: scaffold root configs (Next.js 16, React 19, Tailwind v4, Three.js, react-calendly)"
```

---

## Task 2: Place the portrait + write `app/icon.svg`

**Files:**
- Create: `public/images/sergey-portrait.jpg`
- Create: `app/icon.svg`

- [ ] **Step 1: Copy the portrait to `public/images/`**

The user provided the B&W portrait. It lives at `/Users/sergey/Downloads/E99A58EB-08A4-4B5C-ADDC-1203F2616437.png` (verify with `ls`). Copy it to the project:

```bash
mkdir -p /Users/sergey/Projects/websites/sergey-hovakimyan/public/images
cp "/Users/sergey/Downloads/E99A58EB-08A4-4B5C-ADDC-1203F2616437.png" /Users/sergey/Projects/websites/sergey-hovakimyan/public/images/sergey-portrait.jpg
file /Users/sergey/Projects/websites/sergey-hovakimyan/public/images/sergey-portrait.jpg
```

If the source is a PNG, the rename to `.jpg` extension is fine for development; the resulting file is still a PNG-encoded image and `next/image` handles it transparently. (Optionally re-encode to actual JPEG with `sips -s format jpeg ... -o ...` if size becomes an issue.)

- [ ] **Step 2: Write `app/icon.svg`** — SH hex monogram

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="10" fill="#102A43"/>
  <path d="M32 12 L48 22 L48 42 L32 52 L16 42 L16 22 Z" fill="none" stroke="#14B8A6" stroke-width="2.4" stroke-linejoin="round"/>
  <text x="32" y="40" text-anchor="middle" font-family="ui-sans-serif, Sora, Arial, sans-serif" font-size="18" font-weight="700" fill="#F5F8FB">SH</text>
</svg>
```

- [ ] **Step 3: Commit**

```bash
git add public/images/sergey-portrait.jpg app/icon.svg
git commit -m "feat(brand): add B&W portrait + SH hex monogram favicon"
```

---

## Task 3: Brand tokens + global styles (`app/globals.css`)

**Files:**
- Create: `app/globals.css`

This is the CSS spine of the whole site. It establishes `@theme` tokens (light/dark color split, fonts, motion easing) plus the foundational primitives (containers, eyebrow, buttons, links, cards, tags). Section-specific styles will be appended in later tasks.

- [ ] **Step 1: Read the tamazyan-hovik CSS for reference**

```bash
head -300 /Users/sergey/Projects/websites/tamazyan-hovik/app/globals.css
```

Note the @theme block, the prefix-based class system, the responsive primitives. Mirror that structure with `sh-` prefix and Sergey's tokens.

- [ ] **Step 2: Write the foundational `app/globals.css`** (tokens + primitives only — sections come later)

Token block at top — colors per spec section 2, fonts via CSS vars supplied by `next/font`:

```css
@import "tailwindcss";

@theme {
  --color-page: #0a1929;
  --color-deep: #102a43;
  --color-charcoal: #243b53;
  --color-mist: #d9e2ec;
  --color-surface-light: #f5f8fb;
  --color-ink: #f5f8fb;
  --color-ink-2: #b7c4d2;
  --color-ink-on-light: #102a43;
  --color-accent: #14b8a6;
  --color-accent-soft: rgba(20, 184, 166, 0.16);
  --color-ocean: #1f5e8c;
  --color-divider: rgba(245, 248, 251, 0.12);
  --color-divider-light: #d9e2ec;
  --font-display: var(--font-sora);
  --font-sans: var(--font-dm-sans);
  --font-mono: var(--font-fira);
}

:root {
  --max-w: 1200px;
  --pad-x: clamp(20px, 4vw, 32px);
  --section-y: clamp(56px, 8vw, 96px);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.18);
  --shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.25);
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
}

* { box-sizing: border-box; }
html { background: var(--color-page); color: var(--color-ink); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility; scroll-behavior: smooth; }
body { margin: 0; font-family: var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: clamp(16px, 1vw, 17px); line-height: 1.65; color: var(--color-ink-2); }
img, svg, video { display: block; max-width: 100%; height: auto; }
a { color: inherit; text-decoration: none; }
a:focus-visible, button:focus-visible { outline: none; box-shadow: 0 0 0 2px var(--color-page), 0 0 0 4px var(--color-accent); border-radius: 6px; }
::selection { background: var(--color-accent); color: var(--color-page); }

/* Skip link */
.sh-skip { position: absolute; left: -9999px; top: 0; z-index: 999; background: var(--color-ink); color: var(--color-page); padding: 10px 14px; font-size: 14px; border-radius: 8px; }
.sh-skip:focus { left: 12px; top: 12px; }

/* Layout primitives */
.sh-container { width: 100%; max-width: var(--max-w); margin: 0 auto; padding-inline: var(--pad-x); }
.sh-section { padding-block: var(--section-y); }
.sh-section--tight { padding-block: clamp(40px, 5vw, 64px); }

/* Eyebrow */
.sh-eyebrow { display: inline-flex; align-items: center; gap: 12px; font-family: var(--font-mono); font-size: 12px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-accent); margin: 0 0 16px; }
.sh-eyebrow::before { content: ">"; color: var(--color-accent); font-weight: 600; }

/* Headings */
h1, h2, h3, h4, .sh-display { font-family: var(--font-display), ui-sans-serif, system-ui, sans-serif; font-weight: 700; color: var(--color-ink); line-height: 1.08; letter-spacing: -0.02em; margin: 0; }
h1 { font-size: clamp(40px, 6vw, 72px); }
h2 { font-size: clamp(28px, 3.5vw, 44px); }
h3 { font-size: clamp(22px, 2vw, 28px); font-weight: 600; }
h4 { font-size: clamp(18px, 1.4vw, 22px); font-weight: 600; }
.sh-display { font-size: clamp(56px, 8vw, 96px); line-height: 1.02; }
.sh-display em, h1 em, h2 em, h3 em, .sh-accent { color: var(--color-accent); font-style: normal; }

/* Body utilities */
.sh-lead { font-family: var(--font-sans); font-size: clamp(16px, 1.2vw, 19px); line-height: 1.6; color: var(--color-ink-2); max-width: 60ch; }
.sh-muted { color: var(--color-ink-2); }
.sh-mono { font-family: var(--font-mono); }

/* Buttons */
.sh-btn-primary, .sh-btn-secondary, .sh-btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 22px; border-radius: var(--radius-md);
  font-family: var(--font-sans); font-size: 14px; font-weight: 600; letter-spacing: 0.01em;
  border: 1px solid transparent; cursor: pointer; white-space: nowrap;
  transition: transform 220ms var(--ease), background 220ms var(--ease), color 220ms var(--ease), border-color 220ms var(--ease);
}
.sh-btn-primary { background: var(--color-accent); color: var(--color-deep); }
.sh-btn-primary:hover { background: #0fa394; transform: translateY(-1px); }
.sh-btn-secondary { background: transparent; color: var(--color-ink); border-color: rgba(245, 248, 251, 0.4); }
.sh-btn-secondary:hover { background: var(--color-ink); color: var(--color-deep); border-color: var(--color-ink); }
.sh-btn-ghost { background: transparent; color: var(--color-ink-2); }
.sh-btn-ghost:hover { color: var(--color-accent); }

/* Arrow link */
.sh-link { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-sans); font-weight: 600; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--color-accent); border-bottom: 1px solid transparent; padding: 12px 4px; min-height: 44px; transition: gap 220ms var(--ease), border-color 220ms var(--ease); }
.sh-link:hover { border-bottom-color: var(--color-accent); gap: 12px; }

/* Tags */
.sh-tag { display: inline-flex; align-items: center; padding: 6px 12px; border-radius: 999px; font-family: var(--font-mono); font-size: 12px; font-weight: 500; background: rgba(245, 248, 251, 0.08); color: var(--color-ink); }
.sh-tag--accent { background: var(--color-accent-soft); color: var(--color-accent); }
.sh-tag--ocean { background: rgba(31, 94, 140, 0.24); color: #4d8ec0; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.001ms !important; animation-delay: 0ms !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
}
```

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat(brand): tokens + foundational CSS primitives"
```

---

## Task 4: Content source of truth (`lib/content.ts`)

**Files:**
- Create: `lib/content.ts`

All site copy lives here. Pages and components import from this single module.

- [ ] **Step 1: Write `lib/content.ts`**

```ts
// Single source of truth for site copy + nav.

export const SITE = {
  name: "Sergey Hovakimyan",
  role: "AI-Augmented Software Engineer",
  pretitle: "AI-Augmented Engineer",
  subline:
    "JavaScript & TypeScript · Agent-Based Development · Accessibility Advocate",
  tagline: "Building scalable, accessible web systems with AI.",
  lead:
    "Thirteen-plus years of engineering across product-led companies. I lead cross-functional teams, ship micro-frontend platforms, and pair with AI agents to deliver accessible web systems that perform.",
  email: "hovakimyan.serg@gmail.com",
  location: "Glendale, California",
  github: "",
  linkedin: "https://www.linkedin.com/in/hovakimyanserg/",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Ventures", href: "/ventures" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const CALENDLY_CONFIG = {
  url: "https://calendly.com/hovakimyan-serg/30min",
  pageSettings: {
    backgroundColor: "F5F8FB",
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: "14B8A6",
    textColor: "102A43",
    hideGdprBanner: true,
  },
  styles: { height: "100%", width: "100%" },
  prefill: {},
  utm: {
    utmCampaign: "Portfolio Website",
    utmSource: "hovakimyan.dev",
    utmMedium: "website",
  },
  iframeTitle: "Schedule a meeting with Sergey Hovakimyan",
} as const;

// 4 verbs from the brand bottom strip
export const VERBS = [
  {
    label: "Building",
    body: "Scalable web systems shipped to global users.",
    icon: "code",
  },
  {
    label: "Leading",
    body: "Cross-functional teams that own outcomes.",
    icon: "users",
  },
  {
    label: "Automating",
    body: "Workflows augmented with AI and agents.",
    icon: "spark",
  },
  {
    label: "Advocating",
    body: "Accessibility-first design and WCAG 2.1 AA.",
    icon: "shield",
  },
] as const;

// Leadership numbers register
export const LEADERSHIP_STATS = [
  { value: 12, suffix: "", label: "Engineers led" },
  { value: 30, suffix: "+", label: "Mentored" },
  { value: 20, suffix: "%", prefix: "+", label: "Productivity boost" },
  { value: 30, suffix: "%", prefix: "−", label: "Onboarding time" },
  { value: 15, suffix: "+", label: "Candidates interviewed" },
] as const;

// Numbers ledger (home, hero adjacent + section)
export const HEADLINE_STATS = [
  { value: 13, suffix: "+", label: "Years engineering" },
  { value: 12, suffix: "", label: "Engineers led" },
  { value: 0, suffix: "", label: "WCAG 2.1 AA", display: "WCAG 2.1 AA" },
  { value: 30, suffix: "+", label: "Countries reached" },
] as const;

export const PRINCIPLES = [
  {
    name: "Leadership",
    body: "Empowering teams and elevating others.",
    icon: "users",
  },
  {
    name: "Scalable",
    body: "Building systems that grow.",
    icon: "stack",
  },
  {
    name: "Reliable",
    body: "Quality, performance, and trust.",
    icon: "shield",
  },
  {
    name: "Accessible",
    body: "Inclusive by design, usable by all.",
    icon: "accessibility",
  },
  {
    name: "Forward-Thinking",
    body: "Embracing AI and emerging tech.",
    icon: "spark",
  },
] as const;

export const TECH_STACK = {
  Languages: ["TypeScript", "JavaScript", "Hack"],
  Frameworks: ["React", "Next.js", "Node.js", "Redux", "GraphQL", "Nest.js"],
  Practices: [
    "TDD",
    "BDD",
    "Micro-Frontend",
    "CI/CD",
    "WCAG",
    "Performance",
  ],
  Tools: ["Git", "Webpack", "Jest", "Tailwind", "PostgreSQL", "MongoDB"],
} as const;

export const WORK = [
  {
    slug: "buildops",
    number: "01",
    company: "BuildOps",
    role: "IC5 Software Engineer",
    period: "April 2025 — Present",
    location: "Los Angeles, California",
    pitch:
      "Senior IC role on a vertical SaaS platform for the trades industry.",
    body: "Joined BuildOps in 2025 to contribute to a platform serving service contractors with a unified field-service-management toolset. Day-to-day: high-leverage frontend work across web and mobile-web surfaces, performance budgets, and cross-team alignment.",
    metrics: [
      { label: "Role", value: "IC5" },
      { label: "Stack", value: "TypeScript · React" },
      { label: "Domain", value: "Field Service" },
    ],
    tags: ["TypeScript", "React", "Performance"],
  },
  {
    slug: "epam",
    number: "02",
    company: "EPAM Systems",
    role: "Software Engineering Team Leader → Lead",
    period: "September 2020 — April 2025",
    location: "Yerevan → Glendale, California",
    pitch:
      "Designed micro-frontend architecture and led an 8-engineer team across global accounts.",
    body: "Across nearly five years at EPAM I went from Senior to Team Leader. I architected a micro-frontend system in React/Redux/TypeScript that cut code dependencies by 30%, led an 8-person front-end team across multiple accounts, and shipped streaming features for a major client 15% ahead of schedule. Drove WCAG 2.1 AA compliance across the projects, extending reach to 15+ countries and lifting international engagement by 30%.",
    metrics: [
      { label: "Team size", value: "8" },
      { label: "Code deps cut", value: "−30%" },
      { label: "Reach", value: "15+ countries" },
      { label: "WCAG", value: "2.1 AA" },
    ],
    tags: ["Micro-Frontend", "React", "Redux", "TypeScript", "WCAG", "i18n"],
  },
  {
    slug: "renderforest",
    number: "03",
    company: "Renderforest",
    role: "Team Lead & Senior Software Engineer",
    period: "May 2019 — September 2020",
    location: "Yerevan",
    pitch:
      "Led a 5-person team rewriting Renderforest's flagship Video Maker — 10M+ users, 30M+ projects.",
    body: "Managed a cross-functional team of 5 (engineers + QA + design) on the rewrite of Video Maker, the company's flagship product. The rewrite boosted product performance by 40% and unlocked advanced features. Also launched a cross-platform Media Library that improved user workflow by 25%, and standardized internal development with a shared NPM component library that cut new-product setup time by 20%.",
    metrics: [
      { label: "Users served", value: "10M+" },
      { label: "Projects created", value: "30M+" },
      { label: "Perf boost", value: "+40%" },
    ],
    tags: ["React", "Video", "Performance", "Component Library"],
  },
  {
    slug: "cloud-fleet-manager",
    number: "04",
    company: "apolloBytes — Cloud Fleet Manager",
    role: "Team Lead & Senior Software Engineer",
    period: "December 2016 — December 2018",
    location: "Yerevan",
    pitch:
      "Led the Silverlight → React migration of 28 modules for Maersk, Atlantic Lloyd, and Hanseaticsoft.",
    body: "Senior IC then Team Lead on Cloud Fleet Manager, a maritime fleet platform serving Maersk, Hanseaticsoft, Atlantic Lloyd, and Nordic Hamburg. Migrated 28 interrelated modules from Silverlight to React, ensuring performance + modern-browser compatibility while the legacy system stayed live. Established best practices for coding, testing, and deployment that the team continued using long after I left.",
    metrics: [
      { label: "Modules migrated", value: "28" },
      { label: "Clients", value: "Maersk + 3" },
      { label: "Team size", value: "5" },
    ],
    tags: ["React", "Migration", "Maritime", "Architecture"],
  },
] as const;

export const VENTURES = [
  {
    name: "Ashoon",
    tagline: "A studio building web systems for product-led teams.",
    body: "Ashoon is the studio I run alongside my engineering work. We build production websites for founders, accessibility-audited and AI-augmented from day one. The /websites portfolio you see across the agency is shipped through this practice.",
    services: [
      "Web systems for product-led teams",
      "Accessibility audits & remediation",
      "AI-augmented builds",
    ],
    urls: [
      { label: "ashoon.online", href: "https://ashoon.online" },
      { label: "ashoon.com", href: "https://ashoon.com" },
    ],
    primaryHref: "https://ashoon.online",
  },
  {
    name: "hovakimyan.dev",
    tagline: "The site you're on.",
    body: "Built from scratch as a showcase of the practice — Sora display + DM Sans body + Fira Code accents, Three.js hex prism in the hero, full WCAG-compliant interactive surfaces. Open-sourced once the codebase settles.",
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind v4",
      "Three.js",
      "OpenNext",
      "Cloudflare Workers",
    ],
    urls: [],
    primaryHref: "",
  },
] as const;

export const ABOUT_TIMELINE = [
  {
    date: "2025-04",
    branch: "HEAD -> main, BuildOps",
    label: "IC5 Software Engineer · Los Angeles",
  },
  {
    date: "2023-11",
    branch: "epam/team-leader",
    label: "Team Leader · 8-engineer front-end team · Glendale",
  },
  {
    date: "2022-03",
    branch: "epam/lead-glendale",
    label: "Lead Software Engineer · Glendale",
  },
  {
    date: "2020-11",
    branch: "epam/lead-yerevan",
    label: "Lead Software Engineer · Yerevan",
  },
  {
    date: "2019-05",
    branch: "renderforest/team-lead",
    label: "Team Lead · Video Maker rewrite · 10M+ users",
  },
  {
    date: "2018-12",
    branch: "eventgeek/senior",
    label: "Senior Software Engineer",
  },
  {
    date: "2017-04",
    branch: "apollobytes/team-lead",
    label: "Team Lead · Cloud Fleet Manager · Maersk",
  },
  {
    date: "2016-12",
    branch: "apollobytes/senior",
    label: "Senior Software Engineer",
  },
  {
    date: "2016-07",
    branch: "cyclop/dev",
    label: "JavaScript Developer · MegaMarket",
  },
  {
    date: "2013-12",
    branch: "freelance",
    label: "Web Developer · Freelance",
  },
  {
    date: "2013-08",
    branch: "instigate/junior",
    label: "Junior Web Developer · Armath",
  },
] as const;

export const CONTACT_TOPICS = [
  {
    title: "Engineering leadership",
    body: "Building & growing the team, hiring rubrics, mentorship rituals.",
  },
  {
    title: "Micro-frontend architecture",
    body: "Module boundaries, shared design systems, build performance.",
  },
  {
    title: "Accessibility audits & WCAG",
    body: "WCAG 2.1 AA programs, audit-to-remediation pipelines.",
  },
  {
    title: "AI-augmented dev workflows",
    body: "Agent-paired engineering, LLM-powered code review, prompt design.",
  },
  {
    title: "Team development & mentorship",
    body: "1:1 cadence, feedback loops, growth ladders that work.",
  },
] as const;
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/sergey/Projects/websites/sergey-hovakimyan && npx tsc --noEmit lib/content.ts
```

Expected: clean (the file has no imports yet, just exports of consts).

- [ ] **Step 3: Commit**

```bash
git add lib/content.ts
git commit -m "feat(content): single source of truth for copy + nav"
```

---

## Task 5: Inline SVG icon library (`app/components/Icon.tsx`)

**Files:**
- Create: `app/components/Icon.tsx`

Server component, single-stroke line icons, ~1.5px stroke. Same shape as tamazyan-hovik's Icon but a different icon set sized for this brand.

- [ ] **Step 1: Read tamazyan-hovik's Icon as a reference**

```bash
cat /Users/sergey/Projects/websites/tamazyan-hovik/app/components/Icon.tsx | head -40
```

- [ ] **Step 2: Write `app/components/Icon.tsx`**

Icons needed (per spec): `code`, `users`, `spark`, `shield`, `stack`, `accessibility`, `arrow-right`, `mail`, `calendar`, `linkedin`, `github`, `external`, `check`, `chevron-right`, `hex`.

```tsx
export type IconName =
  | "code"
  | "users"
  | "spark"
  | "shield"
  | "stack"
  | "accessibility"
  | "arrow-right"
  | "mail"
  | "calendar"
  | "linkedin"
  | "github"
  | "external"
  | "check"
  | "chevron-right"
  | "hex";

interface Props {
  name: IconName;
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
}

export default function Icon({
  name,
  size = 22,
  className,
  "aria-hidden": ariaHidden = true,
}: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={ariaHidden}
    >
      {paths[name]}
    </svg>
  );
}

const paths: Record<IconName, React.ReactNode> = {
  code: (
    <>
      <path d="M9 8l-5 4 5 4M15 8l5 4-5 4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="9" r="3.4" />
      <path d="M3.6 19.4c.4-2.8 3-5 5.6-5s5.2 2.2 5.6 5" />
      <circle cx="17" cy="10" r="2.6" />
      <path d="M14.6 17.6c.4-1.8 2.2-3 4-3 1.5 0 2.8.6 3.4 1.6" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.5l1.7 5 5 1.7-5 1.7-1.7 5-1.7-5-5-1.7 5-1.7L12 3.5z" />
      <path d="M19 16l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3.4v5c0 4.6-3.2 8.6-8 9.6-4.8-1-8-5-8-9.6v-5L12 3z" />
      <path d="M9 12l2.2 2.2L15 10.4" />
    </>
  ),
  stack: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </>
  ),
  accessibility: (
    <>
      <circle cx="12" cy="5" r="1.6" />
      <path d="M5 9h14M9 9v6m6-6v6M9 13h6M9 19l3-4 3 4" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.6 6.4l8.4 6 8.4-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <circle cx="12" cy="14.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <circle cx="8" cy="9" r="1.2" fill="currentColor" stroke="none" />
      <path d="M8 11.5v6M12 11.5v6M12 14.5c0-1.7 1-3 2.6-3s2.4 1.3 2.4 3v3" />
    </>
  ),
  github: (
    <>
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.7c-2.7.6-3.3-1.2-3.3-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5z" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6M20 4l-9 9M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
    </>
  ),
  check: (
    <>
      <path d="M5 12.5l4 4L19 7" />
    </>
  ),
  "chevron-right": (
    <>
      <path d="M9 6l6 6-6 6" />
    </>
  ),
  hex: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    </>
  ),
};
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Icon.tsx
git commit -m "feat(ui): inline SVG icon library"
```

---

## Task 6: Site chrome — Header, Footer, MobileMenu, Interactivity, ScrollProgress

**Files:**
- Create: `app/components/SiteHeader.tsx`, `app/components/SiteFooter.tsx`, `app/components/MobileMenu.tsx`, `app/components/Interactivity.tsx`, `app/components/ScrollProgress.tsx`

These are direct adaptations of the tamazyan-hovik chrome. Copy the patterns; change only the prefix (`tl-` → `sh-`), the brand colors, and the content imports.

- [ ] **Step 1: Read tamazyan-hovik versions**

```bash
cat /Users/sergey/Projects/websites/tamazyan-hovik/app/components/SiteHeader.tsx
cat /Users/sergey/Projects/websites/tamazyan-hovik/app/components/SiteFooter.tsx
cat /Users/sergey/Projects/websites/tamazyan-hovik/app/components/MobileMenu.tsx
cat /Users/sergey/Projects/websites/tamazyan-hovik/app/components/Interactivity.tsx
cat /Users/sergey/Projects/websites/tamazyan-hovik/app/components/ScrollProgress.tsx
```

- [ ] **Step 2: Append topbar / mobile-menu CSS to `app/globals.css`**

The full CSS block is large — copy the topbar + mobile-menu + scroll-progress sections from tamazyan-hovik's globals.css (search for `.ht-topbar`, `.ht-mobile-`, `.ht-progress`), and rewrite with `.sh-` prefix and the new color tokens. Critical adjustments:
- `.sh-topbar` background on scroll: `rgba(10, 25, 41, 0.86)` (page color with alpha)
- `.sh-cta-pill`: emerald background `var(--color-accent)`, ink-on-deep text `var(--color-deep)`, no dot needed (or use emerald dot on deep — keep the dot for consistency with tamazyan-hovik pattern)
- Mobile menu nav numbers: emerald not gold
- The 1fr-auto fix from tamazyan-hovik commit `2e266e4` is essential — toggle must use `justify-self: end` at mobile

- [ ] **Step 3: Write `app/components/SiteHeader.tsx`**

Same shape as tamazyan-hovik's. Brand mark "Sergey Hovakimyan" with emerald hex divider after, NAV_ITEMS imported from `lib/content`, `BookCallButton` reused as the CTA pill so the header opens the modal directly (replace the previous `<Link>` to /contact). The `derive-during-render` pattern for closing the mobile menu on path change is mandatory (avoids the React 19 lint).

- [ ] **Step 4: Write `app/components/SiteFooter.tsx`**

Server component. 4-column editorial register. Add a Fira Code line at the top above the columns:

```tsx
<p className="sh-footer-mono">&gt; engineer.impact(); → BUILDING · LEADING · AUTOMATING · ADVOCATING</p>
```

Footer columns: Brand block (name + role + tagline) · Connect (email, LinkedIn, GitHub if set) · Site (Work, Ventures, About, Contact) · Based In (Glendale, CA · Open to remote). Bottom meta line: copyright + Built by Ashoon link + domain credits.

- [ ] **Step 5: Write `app/components/MobileMenu.tsx`**

Verbatim port from tamazyan-hovik (focus trap, ESC, scroll-lock, numbered prefixes via `data-num`). Tagline at bottom: italic `Sora` "Building scalable, accessible web systems with AI." instead of the Tamazyan tagline.

- [ ] **Step 6: Write `app/components/Interactivity.tsx`**

Same minimal-noop pattern from tamazyan-hovik commit `e1a67a6` after the simplification — the component returns null for now. Reserved as the integration point for any future client-side enhancements.

- [ ] **Step 7: Write `app/components/ScrollProgress.tsx`**

Verbatim port. Updates `.sh-progress-bar` width via rAF based on scroll. Hidden under prefers-reduced-motion. CSS `.sh-progress { background: transparent; height: 2px; position: fixed; top: 0; left: 0; right: 0; z-index: 70; pointer-events: none; }` and `.sh-progress-bar { height: 100%; background: linear-gradient(90deg, var(--color-accent), rgba(20, 184, 166, 0.5)); width: 0%; transition: width 60ms linear; }`.

- [ ] **Step 8: Verify TypeScript across these files**

```bash
cd /Users/sergey/Projects/websites/sergey-hovakimyan && npx tsc --noEmit
```

Expected: errors about missing `app/layout.tsx` and `app/page.tsx` (next task) — but no errors *within* the chrome files themselves.

- [ ] **Step 9: Commit**

```bash
git add app/components/SiteHeader.tsx app/components/SiteFooter.tsx app/components/MobileMenu.tsx app/components/Interactivity.tsx app/components/ScrollProgress.tsx app/globals.css
git commit -m "feat(chrome): SiteHeader, SiteFooter, MobileMenu, Interactivity, ScrollProgress"
```

---

## Task 7: Layout, fonts, root metadata (`app/layout.tsx`)

**Files:**
- Create: `app/layout.tsx`

- [ ] **Step 1: Write `app/layout.tsx`**

```tsx
import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans, Fira_Code } from "next/font/google";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import Interactivity from "@/app/components/Interactivity";
import ScrollProgress from "@/app/components/ScrollProgress";
import { SITE } from "@/lib/content";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: { default: `${SITE.name} — ${SITE.role}`, template: `%s · ${SITE.name}` },
  description: SITE.lead,
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.lead,
    type: "profile",
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image", title: `${SITE.name} — ${SITE.role}`, description: SITE.lead },
};

export const viewport: Viewport = { themeColor: "#0A1929", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} ${firaCode.variable}`}>
      <body>
        <a href="#main" className="sh-skip">Skip to main content</a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Interactivity />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Write a stub `app/page.tsx` so build can run**

```tsx
export default function HomePage() {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <p className="sh-eyebrow">Stub</p>
        <h1>Sergey Hovakimyan</h1>
        <p className="sh-lead">Home content coming next task.</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Build to verify the chrome compiles**

```bash
cd /Users/sergey/Projects/websites/sergey-hovakimyan && npm run build 2>&1 | tail -15
```

Expected: build succeeds. Routes shown should be `/` (static).

- [ ] **Step 4: Run dev + take a screenshot at 1440 + 375**

```bash
PORT=3041 npm run dev > /tmp/sh-dev.log 2>&1 &
echo $! > /tmp/sh-dev.pid
sleep 5
```

Then with Playwright MCP: navigate to `http://localhost:3041/` at 1440×900 and 375×812. Save screenshots. Visually verify: header sticky at top, brand mark visible, navigation visible at desktop, hamburger right-pinned at mobile, footer renders the editorial register.

- [ ] **Step 5: Stop dev**

```bash
kill $(cat /tmp/sh-dev.pid) 2>/dev/null; sleep 1
```

- [ ] **Step 6: Commit**

```bash
git add app/layout.tsx app/page.tsx
git commit -m "feat(layout): root layout with Sora, DM Sans, Fira Code, chrome wired"
```

---

## Task 8: Reusable interactive components — CountUp, BookCallButton, CodeTyping

**Files:**
- Create: `app/components/CountUp.tsx`, `app/components/BookCallButton.tsx`, `app/components/CodeTyping.tsx`

- [ ] **Step 1: Write `app/components/CountUp.tsx`**

Verbatim port from tamazyan-hovik. The "skip-if-already-visible-at-mount" pattern is critical — without it, above-the-fold counters reset to 0 on hydration.

- [ ] **Step 2: Write `app/components/BookCallButton.tsx`**

Verbatim port from tamazyan-hovik with prefix swap (`ht-` → `sh-`). Uses `react-calendly` `InlineWidget`, `createPortal` to `document.body` to escape contextual styles, body scroll-lock, focus trap, ESC to close, focus restored on close.

- [ ] **Step 3: Append modal CSS to `app/globals.css`**

Copy the `.sh-modal-backdrop`, `.sh-modal-content`, `.sh-modal-close`, `.sh-modal-header`, `.sh-modal-meta`, `.sh-modal-widget` rules from tamazyan-hovik's modal section. Update colors:
- Backdrop: `rgba(10, 25, 41, 0.7)` (page color + alpha)
- Content surface: `var(--color-surface-light)` so the white Calendly widget reads on a light card (text contrast is the user's primary concern)
- Header text: `var(--color-ink-on-light)` (since the header is on a light card)
- Close button: `border: 1px solid var(--color-divider-light)`, hover invert to deep-on-mist

- [ ] **Step 4: Write `app/components/CodeTyping.tsx`**

Client component. Renders code text in Fira Code. On scroll-into-view (IntersectionObserver, threshold 0.3, runs once), animates the text by appending one character per ~14ms. Initial DOM state is the FULL code (so SSR / no-JS / fullPage screenshots see the final state); JS resets to empty on mount only when the element is NOT initially in the viewport (mirrors the CountUp pattern).

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  code: string;
  speed?: number;
  className?: string;
}

export default function CodeTyping({ code, speed = 14, className }: Props) {
  const ref = useRef<HTMLPreElement>(null);
  const [display, setDisplay] = useState(code);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const el = ref.current;
    if (!el) return;

    const initialRect = el.getBoundingClientRect();
    const initiallyInView = initialRect.top < window.innerHeight && initialRect.bottom > 0;
    if (initiallyInView) return;

    let started = false;
    let timeoutId: number | undefined;
    const animate = () => {
      let i = 0;
      const tick = () => {
        i += 1;
        setDisplay(code.slice(0, i));
        if (i < code.length) timeoutId = window.setTimeout(tick, speed);
      };
      setDisplay("");
      tick();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [code, speed]);

  return (
    <pre ref={ref} className={className}>
      <code className="sh-mono">{display}</code>
    </pre>
  );
}
```

- [ ] **Step 5: Verify build**

```bash
cd /Users/sergey/Projects/websites/sergey-hovakimyan && npm run build 2>&1 | tail -10
```

Expected: clean.

- [ ] **Step 6: Commit**

```bash
git add app/components/CountUp.tsx app/components/BookCallButton.tsx app/components/CodeTyping.tsx app/globals.css
git commit -m "feat(ui): CountUp, BookCallButton (Calendly modal), CodeTyping primitives"
```

---

## Task 9: Three.js hex prism — `HexPrism` + `HexPrismCanvas`

**Files:**
- Create: `app/components/HexPrism.tsx`, `app/components/HexPrismCanvas.tsx`

`HexPrism.tsx` is a thin client wrapper that dynamically imports the canvas with `next/dynamic({ ssr: false })` so three.js never ships to the server bundle. `HexPrismCanvas.tsx` does the actual scene.

- [ ] **Step 1: Write `app/components/HexPrism.tsx`**

```tsx
"use client";

import dynamic from "next/dynamic";

const HexPrismCanvas = dynamic(() => import("./HexPrismCanvas"), {
  ssr: false,
  loading: () => <div className="sh-hex-placeholder" aria-hidden="true" />,
});

export default function HexPrism() {
  return <HexPrismCanvas />;
}
```

- [ ] **Step 2: Write `app/components/HexPrismCanvas.tsx`**

```tsx
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HexPrismCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geo = new THREE.CylinderGeometry(1, 1, 1.4, 6, 1, true);
    const wireGeo = new THREE.WireframeGeometry(geo);
    const wire = new THREE.LineSegments(
      wireGeo,
      new THREE.LineBasicMaterial({ color: 0x14b8a6, transparent: true, opacity: 0.85 }),
    );
    const fill = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({
        color: 0x102a43,
        transparent: true,
        opacity: 0.08,
        metalness: 0.6,
        roughness: 0.4,
      }),
    );

    const group = new THREE.Group();
    group.add(fill);
    group.add(wire);
    scene.add(group);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dir = new THREE.DirectionalLight(0xffffff, 0.6);
    dir.position.set(3, 5, 3);
    scene.add(dir);

    const target = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      target.x = ny * 0.18;
      target.y = -nx * 0.18;
    };
    container.addEventListener("pointermove", onMove);

    const ro = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(container);

    let rafId = 0;
    let running = !reduceMotion;
    const start = performance.now();
    const loop = () => {
      const t = performance.now() - start;
      group.rotation.y += 0.003;
      group.rotation.x += (target.x + Math.sin(t * 0.0008) * 0.15 - group.rotation.x) * 0.06;
      group.rotation.z += (target.y - group.rotation.z) * 0.04;
      renderer.render(scene, camera);
      if (running) rafId = requestAnimationFrame(loop);
    };
    if (!reduceMotion) {
      rafId = requestAnimationFrame(loop);
    } else {
      // Single static frame
      renderer.render(scene, camera);
    }

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!reduceMotion) {
        running = true;
        rafId = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVis);
      container.removeEventListener("pointermove", onMove);
      ro.disconnect();
      wireGeo.dispose();
      geo.dispose();
      (wire.material as THREE.LineBasicMaterial).dispose();
      (fill.material as THREE.Material).dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="sh-hex-canvas" aria-hidden="true" />;
}
```

- [ ] **Step 3: Append the hero / prism CSS to `app/globals.css`**

```css
.sh-hex-canvas, .sh-hex-placeholder {
  width: 100%;
  height: 100%;
  min-height: 300px;
  pointer-events: auto;
}
.sh-hex-canvas canvas {
  display: block;
  width: 100% !important;
  height: 100% !important;
}
```

- [ ] **Step 4: Build to verify three.js bundles**

```bash
cd /Users/sergey/Projects/websites/sergey-hovakimyan && npm run build 2>&1 | tail -10
```

Expected: clean. The output should show `/` static. Three.js gets bundled into a separate chunk because of `dynamic({ ssr: false })`.

- [ ] **Step 5: Commit**

```bash
git add app/components/HexPrism.tsx app/components/HexPrismCanvas.tsx app/globals.css
git commit -m "feat(hero): Three.js hex prism canvas with parallax + reduced-motion fallback"
```

---

## Task 10: Hero section (`app/sections/Hero.tsx`)

**Files:**
- Create: `app/sections/Hero.tsx`

- [ ] **Step 1: Append hero CSS to `app/globals.css`**

Sections needed: `.sh-hero`, `.sh-hero-grid`, `.sh-hero-pretitle`, `.sh-hero h1` overrides (Sora display sizing + emerald accent), `.sh-hero-subline`, `.sh-hero-tagline`, `.sh-hero-lead`, `.sh-hero-ctas`, `.sh-hero-portrait` (Mist border + emerald rule beneath), `.sh-hero-status` (emerald dot pill), `.sh-hero-prism` (absolute-positioned canvas wrapper behind portrait), `.sh-hero-impact` (Fira Code line beneath the hero).

Mobile (≤760px): single-column grid, prism shrinks to 200px above the portrait.

Desktop hero grid: `grid-template-columns: 1.2fr 1fr; gap: clamp(32px, 5vw, 80px); align-items: center;` Right column is positioned-relative with the prism inside (`position: absolute; inset: 0;`) and the portrait card (`position: relative; z-index: 2;`) on top.

- [ ] **Step 2: Write `app/sections/Hero.tsx`**

```tsx
import Link from "next/link";
import Image from "next/image";
import HexPrism from "@/app/components/HexPrism";
import Icon from "@/app/components/Icon";
import BookCallButton from "@/app/components/BookCallButton";
import { SITE } from "@/lib/content";

export default function Hero() {
  const words = SITE.name.split(" ");
  return (
    <section className="sh-hero">
      <div className="sh-container sh-hero-grid">
        <div>
          <p className="sh-hero-pretitle">{SITE.pretitle.toUpperCase()}</p>
          <h1 className="sh-display">
            {words.map((w, i) => (
              <span key={i}>
                <span className="word">{w}</span>
                {i < words.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <p className="sh-hero-subline">{SITE.subline}</p>
          <p className="sh-hero-tagline">{SITE.tagline}</p>
          <p className="sh-hero-lead">{SITE.lead}</p>
          <div className="sh-hero-ctas">
            <BookCallButton label="Schedule conversation" className="sh-btn-primary" />
            <Link href="/work" className="sh-btn-secondary">
              View work
            </Link>
          </div>
        </div>
        <div className="sh-hero-right">
          <div className="sh-hero-prism" aria-hidden="true">
            <HexPrism />
          </div>
          <div className="sh-hero-portrait">
            <Image
              src="/images/sergey-portrait.jpg"
              alt="Portrait of Sergey Hovakimyan"
              width={853}
              height={1280}
              priority
              sizes="(max-width: 760px) 80vw, 420px"
            />
            <span className="sh-hero-status">
              <span className="dot" /> Open to engagements
            </span>
          </div>
        </div>
      </div>
      <div className="sh-container sh-hero-impact">
        <p className="sh-mono">
          &gt; engineer.impact(); → BUILDING <span className="sep">·</span> LEADING <span className="sep">·</span> AUTOMATING <span className="sep">·</span> ADVOCATING
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Wire Hero into `app/page.tsx` (replace stub)**

```tsx
import Hero from "@/app/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}
```

- [ ] **Step 4: Build + run dev + screenshot at 1440 + 375**

```bash
cd /Users/sergey/Projects/websites/sergey-hovakimyan && npm run build 2>&1 | tail -8
PORT=3041 npm run dev > /tmp/sh-dev.log 2>&1 &
echo $! > /tmp/sh-dev.pid
sleep 5
```

Use Playwright MCP. At 1440 verify: hex prism rotating behind the portrait, Sora display name, emerald CTAs, engineer.impact line. At 375 verify: prism above portrait at 200px size, content stacks single column, no horizontal overflow.

- [ ] **Step 5: Stop dev + commit**

```bash
kill $(cat /tmp/sh-dev.pid) 2>/dev/null; sleep 1
git add app/sections/Hero.tsx app/page.tsx app/globals.css
git commit -m "feat(home): hero section with Three.js prism, portrait, ledger line"
```

---

## Task 11: Home sections — Thesis · WhatIDo · LeadershipPillar · AiPillar

**Files:**
- Create: `app/sections/Thesis.tsx`, `app/sections/WhatIDo.tsx`, `app/sections/LeadershipPillar.tsx`, `app/sections/AiPillar.tsx`

- [ ] **Step 1: Append CSS for all 4 sections to `app/globals.css`**

Required class blocks:
- `.sh-thesis` — Deep Blue panel, Sora display pull-quote, emerald rule, contour watermark
- `.sh-verbs` — 4-tile grid (2x2 → 1col mobile), each `.sh-verb` with hex-frame icon, Sora h3, body, hover lift + emerald underline
- `.sh-leadership` — 2-column dark panel, B&W portrait left, content right with stats register
- `.sh-leadership-stats` — flex row with hairline dividers, each stat: Sora numeral + label
- `.sh-ai-pillar` — Mist-colored panel (light contrast), eyebrow + h2 + body + Charcoal code-card with `.sh-ai-badge` (Fira Code typing) + 3 chip tags + 3 sub-tiles

The light-on-Mist Section needs special treatment for ink colors: inside `.sh-ai-pillar` override `color: var(--color-ink-on-light);` and `h1, h2, h3, h4 { color: var(--color-deep) }`.

- [ ] **Step 2: Write `app/sections/Thesis.tsx`**

```tsx
import { SITE } from "@/lib/content";

export default function Thesis() {
  return (
    <section className="sh-section sh-section--tight">
      <div className="sh-container">
        <article className="sh-thesis">
          <p className="sh-eyebrow">Operating Thesis</p>
          <h2 className="sh-display">
            <em>{SITE.tagline}</em>
          </h2>
          <p className="sh-thesis-meta">{SITE.pretitle} · 13+ years</p>
        </article>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Write `app/sections/WhatIDo.tsx`**

```tsx
import Icon, { type IconName } from "@/app/components/Icon";
import { VERBS } from "@/lib/content";

export default function WhatIDo() {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-section-head">
          <p className="sh-eyebrow">What I do</p>
          <h2>
            Four verbs, <em>one practice.</em>
          </h2>
        </div>
        <div className="sh-verbs">
          {VERBS.map((v) => (
            <article key={v.label} className="sh-verb">
              <span className="sh-verb-icon">
                <Icon name={v.icon as IconName} size={26} />
              </span>
              <h3>{v.label}</h3>
              <p>{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Write `app/sections/LeadershipPillar.tsx`**

```tsx
import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import CountUp from "@/app/components/CountUp";
import { LEADERSHIP_STATS } from "@/lib/content";

export default function LeadershipPillar() {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-leadership">
          <div className="sh-leadership-portrait">
            <Image
              src="/images/sergey-portrait.jpg"
              alt="Sergey Hovakimyan"
              width={500}
              height={750}
              sizes="(max-width: 760px) 80vw, 420px"
            />
          </div>
          <div className="sh-leadership-body">
            <p className="sh-eyebrow">Leadership</p>
            <h2>
              Leading teams <em>that ship.</em>
            </h2>
            <p className="sh-lead">
              Thirteen years in, leadership for me means clearing the path so engineers can do their best work — and being the one accountable when the path was wrong. I&rsquo;ve led teams from 5 to 12, mentored juniors into senior roles, and run hiring loops that keep teams cohesive across continents.
            </p>
            <ul className="sh-leadership-stats">
              {LEADERSHIP_STATS.map((s) => (
                <li key={s.label}>
                  <span className="figure">
                    {("prefix" in s ? s.prefix : "") as string}
                    <CountUp value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="label">{s.label}</span>
                </li>
              ))}
            </ul>
            <Link href="/about#leadership" className="sh-link">
              Read the leadership philosophy <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Write `app/sections/AiPillar.tsx`**

```tsx
import CodeTyping from "@/app/components/CodeTyping";

const ENGINEER_CODE = `const engineer = {
  focus: ["AI-Augmented", "Web Systems", "DX"],
  languages: ["TypeScript", "JavaScript"],
  practice: "Agent-based development",
  mindset: "Ship with impact",
};`;

const SUBTILES = [
  { title: "Agent-based development", body: "Autonomous + semi-autonomous agents that ship code with humans in the loop." },
  { title: "LLM-paired workflows", body: "Code review, refactor, and architecture brainstorming paired with frontier models." },
  { title: "Accessibility-by-default with AI", body: "WCAG 2.1 AA programs scaled with AI-augmented audits and fixes." },
] as const;

export default function AiPillar() {
  return (
    <section className="sh-section sh-ai-pillar">
      <div className="sh-container">
        <div className="sh-section-head">
          <p className="sh-eyebrow">AI-Augmented Engineering</p>
          <h2>
            Engineering, <em>augmented.</em>
          </h2>
          <p className="sh-lead sh-muted">
            I pair daily build work with LLMs and agent systems — for code review, architecture sketches, accessibility audits, and the long-tail of repetitive engineering work that humans shouldn&rsquo;t spend time on. Rigor, ownership, and judgment stay with the engineer.
          </p>
        </div>
        <div className="sh-ai-badge">
          <CodeTyping code={ENGINEER_CODE} className="sh-ai-code" />
          <div className="sh-ai-tags">
            <span className="sh-tag sh-tag--accent">AI-AUGMENTED</span>
            <span className="sh-tag">TYPESCRIPT</span>
            <span className="sh-tag sh-tag--ocean">ACCESSIBLE</span>
          </div>
        </div>
        <div className="sh-ai-subtiles">
          {SUBTILES.map((t) => (
            <article key={t.title}>
              <h4>{t.title}</h4>
              <p>{t.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Compose into `app/page.tsx`**

```tsx
import Hero from "@/app/sections/Hero";
import Thesis from "@/app/sections/Thesis";
import WhatIDo from "@/app/sections/WhatIDo";
import LeadershipPillar from "@/app/sections/LeadershipPillar";
import AiPillar from "@/app/sections/AiPillar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Thesis />
      <WhatIDo />
      <LeadershipPillar />
      <AiPillar />
    </>
  );
}
```

- [ ] **Step 7: Build + visual QA at 1440 and 375**

Same pattern as Task 7 step 4. Verify:
- Thesis: Sora display pull-quote on Deep Blue
- WhatIDo: 2x2 grid with emerald icon hex frames
- LeadershipPillar: portrait left, content+stats right (single column on mobile, portrait above content)
- AiPillar: Mist background, ink-on-light text, code typing animation, 3 chip badges, 3 sub-tiles

- [ ] **Step 8: Commit**

```bash
git add app/sections/Thesis.tsx app/sections/WhatIDo.tsx app/sections/LeadershipPillar.tsx app/sections/AiPillar.tsx app/page.tsx app/globals.css
git commit -m "feat(home): thesis, what-i-do, leadership, AI pillars"
```

---

## Task 12: Home sections — TechStack · SelectedImpact · VenturesPreview · NumbersLedger · Principles · CtaBanner

**Files:**
- Create: `app/sections/TechStack.tsx`, `app/sections/SelectedImpact.tsx`, `app/sections/VenturesPreview.tsx`, `app/sections/NumbersLedger.tsx`, `app/sections/Principles.tsx`, `app/sections/CtaBanner.tsx`

- [ ] **Step 1: Append CSS for all 6 sections to `app/globals.css`**

Required class blocks:
- `.sh-tech` — section wrapper. `.sh-tech-lane` — row with label-on-left + hexagonal grid on right
- `.sh-tech-grid` — flex-wrap row of `.sh-tech-cell` (hex-shaped — use `clip-path: polygon(...)` or just rounded-corner rectangle with hexagon icon left)
- `.sh-impact-cards` — 3-card grid (1col mobile)
- `.sh-impact-card` — Charcoal bg, company name (Sora), period, metric anchors, link
- `.sh-ventures-preview` — single wide card on Charcoal with hex pattern bg
- `.sh-numbers` — 4-stat grid, big Sora numerals
- `.sh-principles` — 5-cell register on Mist background (override colors for light surface)
- `.sh-cta-banner` — Deep Blue panel with primary + outline buttons

- [ ] **Step 2: Write `app/sections/TechStack.tsx`**

```tsx
import { TECH_STACK } from "@/lib/content";

export default function TechStack() {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-section-head">
          <p className="sh-eyebrow">Tech stack</p>
          <h2>
            Tools <em>that ship.</em>
          </h2>
        </div>
        <div className="sh-tech">
          {(Object.entries(TECH_STACK) as [keyof typeof TECH_STACK, readonly string[]][]).map(([lane, items]) => (
            <div key={lane} className="sh-tech-lane">
              <p className="sh-tech-lane-label">{lane}</p>
              <ul className="sh-tech-grid">
                {items.map((t) => (
                  <li key={t} className="sh-tech-cell">
                    <span className="sh-mono">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Write `app/sections/SelectedImpact.tsx`**

```tsx
import Link from "next/link";
import Icon from "@/app/components/Icon";
import { WORK } from "@/lib/content";

export default function SelectedImpact() {
  // Show only 3 of the 4 (skip BuildOps which is current/private)
  const featured = WORK.filter((w) => w.slug !== "buildops");
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-section-head">
          <p className="sh-eyebrow">Selected impact</p>
          <h2>
            Numbers, <em>shipped.</em>
          </h2>
        </div>
        <div className="sh-impact-cards">
          {featured.map((w) => (
            <article key={w.slug} className="sh-impact-card">
              <p className="sh-mono sh-impact-num">{w.number}</p>
              <h3>{w.company}</h3>
              <p className="sh-impact-period">{w.period}</p>
              <p className="sh-impact-pitch">{w.pitch}</p>
              <ul className="sh-impact-metrics">
                {w.metrics.slice(0, 3).map((m) => (
                  <li key={m.label}>
                    <span className="label">{m.label}</span>
                    <span className="value">{m.value}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/work#${w.slug}`} className="sh-link">
                Read case study <Icon name="arrow-right" size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Write `app/sections/VenturesPreview.tsx`**

```tsx
import Link from "next/link";
import Icon from "@/app/components/Icon";
import { VENTURES } from "@/lib/content";

export default function VenturesPreview() {
  const ashoon = VENTURES[0];
  return (
    <section className="sh-section sh-section--tight">
      <div className="sh-container">
        <article className="sh-ventures-preview">
          <p className="sh-eyebrow">Ventures</p>
          <h2>
            <em>{ashoon.name}</em> · {ashoon.tagline}
          </h2>
          <p className="sh-lead sh-muted">{ashoon.body}</p>
          <ul className="sh-ventures-services">
            {ashoon.services?.map((s) => (
              <li key={s}>
                <Icon name="hex" size={14} /> {s}
              </li>
            ))}
          </ul>
          <div className="sh-ventures-actions">
            <Link href="/ventures" className="sh-btn-primary">
              View ventures <Icon name="arrow-right" size={14} />
            </Link>
            <a href={ashoon.primaryHref} target="_blank" rel="noopener" className="sh-btn-ghost">
              {ashoon.urls?.[0]?.label} <Icon name="external" size={14} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Write `app/sections/NumbersLedger.tsx`**

```tsx
import CountUp from "@/app/components/CountUp";
import { HEADLINE_STATS } from "@/lib/content";

export default function NumbersLedger() {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-section-head">
          <p className="sh-eyebrow">By the numbers</p>
          <h2>
            Receipts <em>that compound.</em>
          </h2>
        </div>
        <div className="sh-numbers">
          {HEADLINE_STATS.map((s) => (
            <article key={s.label} className="sh-number">
              <span className="sh-number-figure">
                {"display" in s && s.display ? s.display : <CountUp value={s.value} suffix={s.suffix} />}
              </span>
              <span className="sh-number-label">{s.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Write `app/sections/Principles.tsx`**

```tsx
import Icon, { type IconName } from "@/app/components/Icon";
import { PRINCIPLES } from "@/lib/content";

export default function Principles() {
  return (
    <section className="sh-section sh-principles-bg">
      <div className="sh-container">
        <div className="sh-section-head">
          <p className="sh-eyebrow">Principles</p>
          <h2>
            How the work <em>gets made.</em>
          </h2>
        </div>
        <ul className="sh-principles">
          {PRINCIPLES.map((p, i) => (
            <li key={p.name} className="sh-principle">
              <span className="sh-principle-num">{`0${i + 1}`}</span>
              <span className="sh-principle-icon">
                <Icon name={p.icon as IconName} size={26} />
              </span>
              <h4>{p.name}</h4>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Write `app/sections/CtaBanner.tsx`**

```tsx
import Link from "next/link";
import Icon from "@/app/components/Icon";
import BookCallButton from "@/app/components/BookCallButton";
import { SITE } from "@/lib/content";

export default function CtaBanner() {
  return (
    <section className="sh-section sh-section--tight">
      <div className="sh-container">
        <div className="sh-cta-banner">
          <div>
            <h2>
              Let&rsquo;s build <em>something together.</em>
            </h2>
            <p>
              Engineering leadership, micro-frontend architecture, AI-augmented builds — bring the question worth answering.
            </p>
          </div>
          <div className="sh-cta-banner-actions">
            <BookCallButton label="Schedule conversation" className="sh-btn-primary" />
            {SITE.linkedin ? (
              <Link href={SITE.linkedin} target="_blank" rel="noopener" className="sh-btn-secondary sh-btn-on-dark">
                LinkedIn <Icon name="external" size={14} />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 8: Compose all sections into `app/page.tsx`**

```tsx
import Hero from "@/app/sections/Hero";
import Thesis from "@/app/sections/Thesis";
import WhatIDo from "@/app/sections/WhatIDo";
import LeadershipPillar from "@/app/sections/LeadershipPillar";
import AiPillar from "@/app/sections/AiPillar";
import TechStack from "@/app/sections/TechStack";
import SelectedImpact from "@/app/sections/SelectedImpact";
import VenturesPreview from "@/app/sections/VenturesPreview";
import NumbersLedger from "@/app/sections/NumbersLedger";
import Principles from "@/app/sections/Principles";
import CtaBanner from "@/app/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Thesis />
      <WhatIDo />
      <LeadershipPillar />
      <AiPillar />
      <TechStack />
      <SelectedImpact />
      <VenturesPreview />
      <NumbersLedger />
      <Principles />
      <CtaBanner />
    </>
  );
}
```

- [ ] **Step 9: Build + visual QA at 1440 / 768 / 375**

Verify each section renders, no horizontal overflow, the page reads top-to-bottom as intended.

- [ ] **Step 10: Commit**

```bash
git add app/sections/TechStack.tsx app/sections/SelectedImpact.tsx app/sections/VenturesPreview.tsx app/sections/NumbersLedger.tsx app/sections/Principles.tsx app/sections/CtaBanner.tsx app/page.tsx app/globals.css
git commit -m "feat(home): tech stack, impact cards, ventures preview, numbers, principles, CTA"
```

---

## Task 13: Inner page — `/work`

**Files:**
- Create: `app/work/page.tsx`

- [ ] **Step 1: Append work-page CSS to `app/globals.css`**

Class blocks: `.sh-page-header` (large eyebrow + h1 + lead), `.sh-monographs` (vertical list), `.sh-monograph` (numbered editorial monograph with sticky meta sidebar at desktop), `.sh-monograph-meta`, `.sh-monograph-body`, `.sh-evidence` (Fira Code pull-quote card).

The sticky-meta pattern: `position: sticky; top: 100px;` on the meta sidebar at ≥760px; static stack on mobile.

- [ ] **Step 2: Write `app/work/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import { WORK } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies — BuildOps, EPAM, Renderforest, Cloud Fleet Manager.",
};

const EVIDENCE: Record<string, string> = {
  epam: `// Micro-Frontend boundary
// shared module-federation contract
const remotes = {
  shell: "shell@/remoteEntry.js",
  cms: "cms@/remoteEntry.js",
  player: "player@/remoteEntry.js",
};`,
  renderforest: `// Video Maker render pipeline (excerpt)
const render = composer
  .scene(timeline)
  .pipe(applyEffects)
  .pipe(encode({ format: "mp4", crf: 18 }));`,
  "cloud-fleet-manager": `// Migration adapter — Silverlight → React
const adapter = createSilverlightBridge({
  module: "FleetGrid",
  bidirectional: true,
});`,
};

export default function WorkPage() {
  return (
    <>
      <section className="sh-page-header">
        <div className="sh-container">
          <p className="sh-eyebrow">Work</p>
          <h1>
            Work that <em>ships.</em>
          </h1>
          <p className="sh-lead">
            Four case studies across product-led teams. Architecture, leadership, and accessibility consistently treated as first-class engineering work.
          </p>
        </div>
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-container">
          <div className="sh-monographs">
            {WORK.map((w) => (
              <article key={w.slug} id={w.slug} className="sh-monograph">
                <div className="sh-monograph-meta">
                  <p className="sh-mono sh-monograph-num">{w.number}</p>
                  <p className="sh-mono sh-monograph-period">{w.period}</p>
                  <h3>{w.role}</h3>
                  <p className="sh-monograph-location">{w.location}</p>
                  <ul className="sh-monograph-tags">
                    {w.tags.map((t) => (
                      <li key={t}><span className="sh-tag">{t}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="sh-monograph-body">
                  <h2>{w.company}</h2>
                  <p className="sh-monograph-pitch">{w.pitch}</p>
                  <p className="sh-monograph-text">{w.body}</p>
                  <ul className="sh-monograph-metrics">
                    {w.metrics.map((m) => (
                      <li key={m.label}>
                        <span className="label">{m.label}</span>
                        <span className="value">{m.value}</span>
                      </li>
                    ))}
                  </ul>
                  {EVIDENCE[w.slug] ? (
                    <pre className="sh-evidence sh-mono"><code>{EVIDENCE[w.slug]}</code></pre>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-container">
          <div className="sh-cta-banner">
            <div>
              <h2>Discuss your <em>product.</em></h2>
              <p>Roadmap to sharpen, launch to plan, team to grow? Let&rsquo;s talk.</p>
            </div>
            <Link href="/contact" className="sh-btn-primary">
              Start a conversation <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Build + screenshot at 1440 / 768 / 375**

- [ ] **Step 4: Commit**

```bash
git add app/work/page.tsx app/globals.css
git commit -m "feat(work): /work page with 4 numbered monographs + Fira Code evidence pulls"
```

---

## Task 14: Inner page — `/ventures`

**Files:**
- Create: `app/ventures/page.tsx`

- [ ] **Step 1: Append ventures-page CSS to `app/globals.css`**

Class blocks: `.sh-ventures-page`, `.sh-ventures-card` (full-width Charcoal card per venture, with optional emerald-on-dark variant for the featured Ashoon entry), `.sh-ventures-services` (3-col flex-wrap), `.sh-ventures-stack` (Fira Code chip list), `.sh-ventures-future` (placeholder dashed-border card).

- [ ] **Step 2: Write `app/ventures/page.tsx`**

```tsx
import type { Metadata } from "next";
import Icon from "@/app/components/Icon";
import { VENTURES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ventures",
  description: "Personal projects — the Ashoon studio and this site.",
};

export default function VenturesPage() {
  const [ashoon, dotdev] = VENTURES;
  return (
    <>
      <section className="sh-page-header">
        <div className="sh-container">
          <p className="sh-eyebrow">Ventures</p>
          <h1>
            Things I build <em>outside of work.</em>
          </h1>
          <p className="sh-lead">
            Ventures the engineering practice keeps alive — a studio, this site, and whatever lives next on the bench.
          </p>
        </div>
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-container">
          <article className="sh-ventures-card sh-ventures-card--featured">
            <p className="sh-eyebrow">Featured</p>
            <h2>{ashoon.name}</h2>
            <p className="sh-lead">{ashoon.tagline}</p>
            <p className="sh-muted">{ashoon.body}</p>
            <ul className="sh-ventures-services">
              {ashoon.services?.map((s) => (
                <li key={s}>
                  <Icon name="hex" size={14} /> {s}
                </li>
              ))}
            </ul>
            <div className="sh-ventures-actions">
              {ashoon.urls.map((u) => (
                <a key={u.href} href={u.href} target="_blank" rel="noopener" className="sh-tag sh-tag--accent sh-mono">
                  {u.label} <Icon name="external" size={12} />
                </a>
              ))}
            </div>
            <a href={ashoon.primaryHref} target="_blank" rel="noopener" className="sh-btn-primary">
              Visit Ashoon <Icon name="arrow-right" size={14} />
            </a>
          </article>

          <article className="sh-ventures-card">
            <h3>{dotdev.name}</h3>
            <p className="sh-muted">{dotdev.tagline}</p>
            <p>{dotdev.body}</p>
            <ul className="sh-ventures-stack">
              {dotdev.stack?.map((s) => (
                <li key={s} className="sh-mono">{s}</li>
              ))}
            </ul>
          </article>

          <article className="sh-ventures-future">
            <p className="sh-mono">// More coming.</p>
          </article>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Build + screenshot 1440 / 375**

- [ ] **Step 4: Commit**

```bash
git add app/ventures/page.tsx app/globals.css
git commit -m "feat(ventures): /ventures page featuring Ashoon + this site"
```

---

## Task 15: Inner page — `/about`

**Files:**
- Create: `app/about/page.tsx`

- [ ] **Step 1: Append about-page CSS to `app/globals.css`**

Class blocks: `.sh-about` (2-column desktop / single mobile), `.sh-about-content` (left text), `.sh-about-aside` (right sticky panel with portrait + credentials), `.sh-about-portrait` (full B&W image with thin emerald rule), `.sh-credentials` (definition-list style register), `.sh-timeline` (Fira Code git-log block), `.sh-timeline-line` (single git log entry, fades in sequentially via CSS @keyframes with staggered animation-delay).

The git-log auto-play animation pattern (proven safe in tamazyan-hovik): default state is fully visible; CSS animation fades from `opacity: 0; transform: translateX(-12px)` to `opacity: 1; transform: none` with `animation-fill-mode: forwards` and staggered delays per index.

- [ ] **Step 2: Write `app/about/page.tsx`**

```tsx
import type { Metadata } from "next";
import Image from "next/image";
import { SITE, ABOUT_TIMELINE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Engineer. Leader. Builder. Story, leadership philosophy, and the git log of a 13-year career.",
};

export default function AboutPage() {
  return (
    <>
      <section className="sh-page-header">
        <div className="sh-container">
          <p className="sh-eyebrow">About</p>
          <h1>
            Engineer. Leader. <em>Builder.</em>
          </h1>
          <p className="sh-lead">{SITE.lead}</p>
        </div>
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-container sh-about">
          <div className="sh-about-content">
            <h2>The story</h2>
            <p>
              I started building for the web in 2013 in Yerevan, Armenia. jQuery first, then React early — I was rewriting Silverlight modules to React in 2017, the same year Hooks were a year out. By 2019 I was leading a 5-person team rewriting Renderforest&rsquo;s Video Maker, a product that has since served 10M+ users and produced 30M+ projects.
            </p>
            <p>
              In 2020 I joined EPAM. Over four-and-a-half years there I went from Senior to Team Leader, architecting micro-frontend systems, running an 8-engineer front-end team, and shipping streaming features for a major client 15% ahead of schedule. WCAG 2.1 AA was a constant theme — I cared about accessibility long before it was an LLM punch-list item.
            </p>
            <p>
              In April 2025 I joined BuildOps in Los Angeles as IC5. Same engineering rigor, new domain (vertical SaaS for the trades), and an AI-augmented practice that&rsquo;s been quietly compounding the leverage on every line of code I touch.
            </p>

            <h2 id="leadership">Leadership philosophy</h2>
            <p>
              The most useful question I can ask an engineer on my team is, &ldquo;What&rsquo;s the version of you that you want to be?&rdquo; My job is to clear the path to that version — through 1:1s, code reviews, and the sometimes-uncomfortable conversation about scope or quality. I&rsquo;ve mentored 30+ engineers; the ones I&rsquo;m proudest of all share the same trait — they&rsquo;ve since taught their own teams.
            </p>
            <p>
              On hiring: 15+ candidates interviewed across loops, with onboarding cut by 30%. The trick is hiring for the team you want, not the one you have. That means fewer rockstars and more compound interest.
            </p>

            <h2>Engineering with AI</h2>
            <p>
              I treat large language models the way I treat a sharp pair-programmer with patchy domain knowledge — fast, generative, occasionally wrong, always best when scoped. My day-to-day blends agent-paired coding for boilerplate and refactors, LLM-driven code review for quality patches, and accessibility audits that surface issues before they ship.
            </p>
            <p>
              Rigor still belongs to the engineer. The agent can suggest; the human owns.
            </p>

            <h2>Career git log</h2>
            <pre className="sh-timeline sh-mono">
              <code>
                {ABOUT_TIMELINE.map((e, i) => (
                  <span key={e.date} className="sh-timeline-line" style={{ animationDelay: `${i * 60}ms` }}>
                    {`* ${e.date}  (${e.branch})  ${e.label}\n`}
                  </span>
                ))}
              </code>
            </pre>
          </div>

          <aside className="sh-about-aside">
            <div className="sh-about-portrait">
              <Image
                src="/images/sergey-portrait.jpg"
                alt="Sergey Hovakimyan"
                width={853}
                height={1280}
                sizes="(max-width: 760px) 80vw, 360px"
              />
            </div>
            <dl className="sh-credentials">
              <dt>Education</dt>
              <dd>Bachelor&rsquo;s, Computer Science · Cyber Security · National Polytechnical University of Armenia, 2013–2017</dd>
              <dt>Languages</dt>
              <dd>English (Full Pro) · Armenian (Native) · Russian (Full Pro)</dd>
              <dt>Based in</dt>
              <dd>{SITE.location}</dd>
              <dt>Open to</dt>
              <dd>Remote · Engineering leadership · AI-augmented builds</dd>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Build + screenshot 1440 / 768 / 375**

- [ ] **Step 4: Commit**

```bash
git add app/about/page.tsx app/globals.css
git commit -m "feat(about): /about page with story, leadership, AI, and git-log timeline"
```

---

## Task 16: Inner page — `/contact`

**Files:**
- Create: `app/contact/page.tsx`

- [ ] **Step 1: Append contact-page CSS to `app/globals.css`**

Class blocks: `.sh-contact-grid` (2-col → 1-col mobile), `.sh-contact-card` and `.sh-contact-card--dark` variant, `.sh-engagement` (light card listing engagement areas), `.sh-engagement-list` (numbered list).

- [ ] **Step 2: Write `app/contact/page.tsx`**

```tsx
import type { Metadata } from "next";
import Icon from "@/app/components/Icon";
import BookCallButton from "@/app/components/BookCallButton";
import { SITE, CONTACT_TOPICS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Schedule a 30-minute strategic conversation with Sergey Hovakimyan.",
};

export default function ContactPage() {
  return (
    <>
      <section className="sh-page-header">
        <div className="sh-container">
          <p className="sh-eyebrow">Get in touch</p>
          <h1>
            A 30-minute <em>conversation.</em>
          </h1>
          <p className="sh-lead">
            Engineering leadership, micro-frontend architecture, accessibility programs, AI-augmented builds. Bring the question worth answering — we&rsquo;ll figure out the rest.
          </p>
        </div>
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-container">
          <div className="sh-contact-grid">
            <article id="book" className="sh-contact-card sh-contact-card--dark">
              <h3>Schedule a conversation</h3>
              <p className="description">
                Thirty minutes, focused. I&rsquo;ll come prepared.
              </p>
              <BookCallButton label="Book the call" className="sh-btn-primary" />
            </article>

            <article className="sh-contact-card">
              <h3>Email directly</h3>
              <p className="description">
                Prefer writing first? I reply within 24 hours on weekdays.
              </p>
              <a href={`mailto:${SITE.email}`} className="email-link sh-mono">
                {SITE.email}
              </a>
            </article>
          </div>

          <div className="sh-engagement">
            <p className="sh-eyebrow">Engagement areas</p>
            <h3>What we can build together</h3>
            <ul className="sh-engagement-list">
              {CONTACT_TOPICS.map((t, i) => (
                <li key={t.title}>
                  <span className="num sh-mono">{`0${i + 1}`}</span>
                  <div>
                    <h4>{t.title}</h4>
                    <p>{t.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <span className="sh-contact-meta">
              <span className="dot" /> {SITE.location} · Open to remote
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Build + screenshot 1440 / 375 + click "Book the call" to verify Calendly modal**

Use Playwright MCP to:
1. Navigate to `/contact`
2. Click `.sh-contact-card--dark .sh-btn-primary`
3. Wait 3s for Calendly to load
4. Screenshot — verify modal renders, calendar loads, ESC closes it

- [ ] **Step 4: Commit**

```bash
git add app/contact/page.tsx app/globals.css
git commit -m "feat(contact): /contact page with Calendly modal + engagement areas"
```

---

## Task 17: not-found, sitemap, robots

**Files:**
- Create: `app/not-found.tsx`, `app/sitemap.ts`, `app/robots.ts`

- [ ] **Step 1: Append not-found CSS to `app/globals.css`**

```css
.sh-not-found { min-height: 70vh; display: flex; align-items: center; justify-content: center; text-align: center; padding-top: 120px; }
.sh-not-found-inner { max-width: 540px; }
.sh-not-found .num { font-family: var(--font-mono); font-size: clamp(80px, 14vw, 168px); font-weight: 600; line-height: 0.9; color: var(--color-accent); margin: 0; letter-spacing: -0.02em; }
.sh-not-found h1 { margin-top: 16px; font-size: clamp(28px, 3vw, 40px); }
.sh-not-found p { margin: 16px auto 28px; color: var(--color-ink-2); max-width: 44ch; }
.sh-not-found .actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
```

- [ ] **Step 2: Write `app/not-found.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/app/components/Icon";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="sh-not-found">
      <div className="sh-container sh-not-found-inner">
        <p className="num">404</p>
        <h1>This route is off the graph.</h1>
        <p>
          The link you followed may be outdated or the page may have moved. Let&rsquo;s get you back on a known path.
        </p>
        <div className="actions">
          <Link href="/" className="sh-btn-primary">
            Return home <Icon name="arrow-right" size={14} />
          </Link>
          <Link href="/work" className="sh-btn-secondary">
            Browse work
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Write `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const h = await headers();
  const host = h.get("host") ?? "hovakimyan.dev";
  const proto = h.get("x-forwarded-proto") ?? "https";
  const base = `${proto}://${host}`;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ventures`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
```

- [ ] **Step 4: Write `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const h = await headers();
  const host = h.get("host") ?? "hovakimyan.dev";
  const proto = h.get("x-forwarded-proto") ?? "https";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${proto}://${host}/sitemap.xml`,
  };
}
```

- [ ] **Step 5: Build + verify routes table**

```bash
cd /Users/sergey/Projects/websites/sergey-hovakimyan && npm run build 2>&1 | tail -20
```

Expected: `/`, `/_not-found`, `/about`, `/contact`, `/icon.svg`, `/ventures`, `/work` static; `/robots.txt` and `/sitemap.xml` dynamic.

- [ ] **Step 6: Commit**

```bash
git add app/not-found.tsx app/sitemap.ts app/robots.ts app/globals.css
git commit -m "feat(seo): not-found, url-agnostic sitemap, robots"
```

---

## Task 18: Multi-breakpoint responsive audit + fixes

**Files:**
- Modify: `app/globals.css` and any sections that need tightening based on findings

- [ ] **Step 1: Run dev**

```bash
PORT=3041 npm run dev > /tmp/sh-dev.log 2>&1 &
echo $! > /tmp/sh-dev.pid
sleep 5
```

- [ ] **Step 2: Sweep breakpoints with Playwright MCP**

For each viewport in `[320, 375, 414, 600, 720, 768, 1024, 1280, 1440]`:
- Navigate to `/` and `/work`, `/ventures`, `/about`, `/contact`
- Run a probe script:
  ```js
  () => {
    const overflow = document.body.scrollWidth - window.innerWidth;
    const small = [];
    document.querySelectorAll('a, button').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && r.height < 36) {
        small.push({ text: (el.textContent || '').trim().slice(0, 30), h: Math.round(r.height) });
      }
    });
    return { width: window.innerWidth, overflow, smallTargets: small.slice(0, 8) };
  }
  ```
- Take a fullPage screenshot at 320 / 768 / 1440 for each route

Document findings inline in this task.

- [ ] **Step 3: Fix any issues found**

Common things to check (lessons from tamazyan-hovik audit):
- Hero CTAs full-width below 480px (already in primitives via earlier media query — verify)
- Footer link tap targets ≥44px
- No horizontal overflow at any breakpoint
- Mobile menu burger pinned right (`justify-self: end`)
- Tech stack cells wrap nicely at 320
- Numbers ledger reflows to 2x2 below 720
- Career timeline (Fira Code block) fits at 320 without horizontal scroll inside the `<pre>` (might need `white-space: pre-wrap` or `overflow-x: auto`)

- [ ] **Step 4: Build + lint**

```bash
cd /Users/sergey/Projects/websites/sergey-hovakimyan && npm run lint 2>&1 | tail -5 && npm run build 2>&1 | tail -10
```

Expected: clean.

- [ ] **Step 5: Stop dev**

```bash
kill $(cat /tmp/sh-dev.pid) 2>/dev/null; sleep 1
```

- [ ] **Step 6: Commit fixes (if any)**

```bash
git add app/globals.css [+ any section files modified]
git commit -m "fix(responsive): mobile-first audit fixes — [list specific issues]"
```

---

## Task 19: Final QA pass — Calendly modal, animations, no console errors

**Files:**
- No file changes expected; verification only.

- [ ] **Step 1: Run dev + visit each page**

Same as Task 18, but on the final state. Verify:
- No console errors at `/`, `/work`, `/ventures`, `/about`, `/contact`
- Calendly modal opens from contact page AND from header CTA pill
- ESC closes the modal
- Backdrop click closes the modal
- Body scroll-locked while modal open
- Three.js prism renders + rotates on hero
- CountUp animates when scrolling into the leadership stats / numbers ledger
- Code typing animates on AI pillar when scrolling into view (after refresh)
- Mobile menu (under 920px) opens with focus inside, ESC closes, items numbered

- [ ] **Step 2: Lighthouse mobile spot-check**

In Chrome DevTools, run Lighthouse on `/` mobile. Expected:
- Performance ≥ 90
- Accessibility ≥ 95
- SEO ≥ 95
- Best Practices ≥ 95

Document scores. If any score < target, fix the lowest-hanging item and re-run before commit.

- [ ] **Step 3: Stop dev + final lint + build**

```bash
kill $(cat /tmp/sh-dev.pid) 2>/dev/null
cd /Users/sergey/Projects/websites/sergey-hovakimyan && npm run lint 2>&1 | tail -5 && npm run build 2>&1 | tail -15
```

Expected: clean.

- [ ] **Step 4: Clean up QA artifacts**

```bash
rm -f /Users/sergey/Projects/websites/qa*.jpeg /tmp/sh-dev.log /tmp/sh-dev.pid
rm -rf /Users/sergey/Projects/websites/.playwright-mcp /Users/sergey/Projects/websites/sergey-hovakimyan/.playwright-mcp
ls /Users/sergey/Projects/websites/
```

Expected output: only `gharibyan_photo`, `khachatryans`, `README.md`, `sergey-hovakimyan`, `tamazyan-hovik`, `travel-with-liana`.

- [ ] **Step 5: Commit anything from QA fixes**

If there were any small fixes during QA:
```bash
git add -A
git commit -m "chore(qa): final pass — [describe]"
```

---

## Task 20: Update `/websites/README.md` portfolio table

**Files:**
- Modify: `/Users/sergey/Projects/websites/README.md`

- [ ] **Step 1: Read current table**

```bash
grep -n "tamazyan-hovik" /Users/sergey/Projects/websites/README.md | head -3
```

- [ ] **Step 2: Add the new row to the "Current sites" table**

Add immediately after the `tamazyan-hovik` row:

```markdown
| `sergey-hovakimyan/` | https://sergey-hovakimyan.ashoon.online (custom: `hovakimyan.dev`) | Next.js 16 + OpenNext + Three.js | scaffolded |
```

The "Three.js" addition flags this site as having a 3D dependency — useful for future maintainers.

- [ ] **Step 3: This README is in the parent /websites/ folder which is NOT itself a git repo, so no commit needed here.**

---

## Task 21: Wire GitHub repo + push

**Files:**
- No file changes — git remote setup + push only.

- [ ] **Step 1: Verify the repo exists on GitHub**

```bash
gh repo view Hovakimyan/website-sergey-hovakimyan --json url,visibility 2>&1 | head -3
```

If it doesn't exist, create it:
```bash
gh repo create Hovakimyan/website-sergey-hovakimyan --private --source=/Users/sergey/Projects/websites/sergey-hovakimyan --remote=origin
```

If it exists, add remote:
```bash
cd /Users/sergey/Projects/websites/sergey-hovakimyan && git remote add origin git@github.com:Hovakimyan/website-sergey-hovakimyan.git
```

- [ ] **Step 2: Push main**

```bash
git -C /Users/sergey/Projects/websites/sergey-hovakimyan push -u origin main 2>&1 | tail -5
```

Expected: branch `main` set up to track `origin/main`, X commits pushed.

- [ ] **Step 3: Confirm with the user before declaring done**

Repo URL + visibility status surfaced to the user. They wire Cloudflare Workers Builds + custom domain afterward (those are deferred per the spec).

---

## Self-review notes

(Performed inline before handoff)

**Spec coverage check:**
- Spec §2 brand tokens → Task 3 ✓
- Spec §3 IA / 5 routes → Tasks 7, 13–17 ✓
- Spec §4.1 Hero with Three.js → Tasks 9, 10 ✓
- Spec §4.1 11 home sections → Tasks 10, 11, 12 ✓
- Spec §4.1.4 Leadership pillar → Task 11 ✓
- Spec §4.1.5 AI pillar → Task 11 ✓
- Spec §4.1.8 Ventures preview → Task 12 ✓
- Spec §4.2 Work monographs → Task 13 ✓
- Spec §4.3 Ventures page → Task 14 ✓
- Spec §4.4 About + git-log → Task 15 ✓
- Spec §4.5 Contact + Calendly → Task 16 ✓
- Spec §5 Three.js scene specifics → Task 9 ✓
- Spec §6 animation plan → Tasks 8, 9, 11, 15 ✓
- Spec §7 file structure → Task 1 (configs), Tasks 5–17 (files) ✓
- Spec §8 a11y / perf → Tasks 18, 19 ✓
- Spec §9 SEO → Task 17 ✓
- Spec §10 build sequence ordering → mirrored across all 21 tasks
- Spec §11 acceptance criteria → Task 19 (final QA) ✓

**Placeholder scan:** No "TBD" / "TODO" remain in the plan. The `Calendly URL` is concrete. The `EVIDENCE` snippets in Task 13 are explicit. The `git log` entries in Task 4 content are dated and labeled.

**Type consistency:** `LEADERSHIP_STATS` items have an optional `prefix` field — Task 11 step 4 reads it via `("prefix" in s ? s.prefix : "")`. `HEADLINE_STATS` items have an optional `display` field — Task 12 step 5 reads it via `"display" in s && s.display`. `WORK[].metrics` has `label` and `value` — both pages consume those identically. `VENTURES[].services` and `.stack` and `.urls` are all optional and conditionally rendered.

**Scope check:** This is a single, well-bounded implementation plan for one site mirroring an existing convention. No decomposition needed.

---

## Execution

Plan complete and saved to `docs/superpowers/plans/2026-05-10-sergey-hovakimyan-build.md`.
