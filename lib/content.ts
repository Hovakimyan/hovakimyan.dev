// Single source of truth for site copy + nav.

export const SITE = {
  name: "Sergey Hovakimyan",
  role: "AI-Augmented Software Engineer",
  pretitle: "AI-Augmented Engineer",
  subline:
    "TypeScript & React · Agent-Orchestrated Delivery · Financial Systems",
  tagline: "I spec it and review it. The agents write it.",
  lead:
    "Thirteen years building for the web. These days I write less of the code than I used to — agents handle most of the implementation, and my job moved to deciding what should happen, reviewing what comes back, and proving it holds. Senior engineer at BuildOps on financial systems; founder of two products built the same way.",
  email: "hovakimyan.serg@gmail.com",
  location: "Glendale, California",
  github: "https://github.com/Hovakimyan",
  linkedin: "https://www.linkedin.com/in/hovakimyanserg/",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Ventures", href: "/ventures" },
  { label: "Writing", href: "/writing" },
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

// 4 verbs from the brand bottom strip.
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
    icon: "accessibility",
  },
] as const;

// Leadership numbers register.
export const LEADERSHIP_STATS = [
  { value: 12, prefix: "", suffix: "", label: "Engineers led" },
  { value: 30, prefix: "", suffix: "+", label: "Mentored" },
  { value: 20, prefix: "+", suffix: "%", label: "Productivity" },
  { value: 30, prefix: "−", suffix: "%", label: "Onboarding time" },
  { value: 15, prefix: "", suffix: "+", label: "Interviews run" },
] as const;

// Numbers ledger (home).
export const HEADLINE_STATS = [
  {
    value: 13,
    prefix: "",
    suffix: "+",
    label: "Years engineering",
    display: null,
  },
  {
    value: 12,
    prefix: "",
    suffix: "",
    label: "Engineers led",
    display: null,
  },
  {
    value: 0,
    prefix: "",
    suffix: "",
    label: "Standards shipped",
    display: "WCAG 2.1 AA",
  },
  {
    value: 15,
    prefix: "",
    suffix: "+",
    label: "Countries reached",
    display: null,
  },
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
    "Micro-Frontend",
    "TDD",
    "BDD",
    "Unit Testing",
    "Code Reviews",
    "CI/CD",
    "WCAG",
    "Performance",
  ],
  Tools: ["Git", "Jest", "Playwright", "Tailwind", "PostgreSQL", "MongoDB"],
  Agents: ["Claude Code", "MCP", "Custom skills & commands", "Agent orchestration"],
} as const;

export const WORK = [
  {
    slug: "buildops",
    number: "01",
    company: "BuildOps",
    role: "IC5 Software Engineer · AI-Augmented Practice",
    period: "April 2025 — Present",
    location: "Santa Monica, California",
    pitch:
      "Engineering a vertical SaaS platform through an AI-orchestrated workflow — agents write nearly all the implementation; my work is specification, review, and verification. 160+ merged pull requests across 9 repositories in 16 months.",
    body: "Joined BuildOps as IC5 on a vertical SaaS platform for the trades industry, working across the stack in the financial-operations domain. I came in from a front-end background and had to learn the domain from scratch — accounting periods and close semantics, enforcement rules that hold across object types and fiscal years, ledger integrity, and the reporting layer on top — before I could be trusted to change any of it. I now spec and review changes in that area and coordinate its releases. That turned out to be the part agents can't do for you: the judgment about what should happen lives in understanding the domain, not in writing the code. Since mid-2025 I've operated almost entirely through AI-augmented workflows — orchestrating coding agents, custom skills, and slash commands instead of typing implementation by hand. Day-to-day spans agent design (Claude Code skills/commands/hooks for the team), AI-driven research and architecture (deep-research agents to evaluate trade-offs before writing a line), AI-paired testing and code review, AI-led accessibility audits aligned to WCAG 2.1 AA, and design-to-code translation via Figma/MCP integrations. The measurable result: sustained monthly merge throughput up roughly 7× over my own first-year baseline, while every change stayed human-reviewed before merge — 268 pull requests reviewed for other engineers over the same period. What it cost is worth naming: the hard part moved from writing code to reviewing structural decisions fast enough to keep pace, which forced explicit verification gates I never needed when I typed everything myself.",
    metrics: [
      { label: "Merged PRs", value: "160+ / 9 repos" },
      { label: "Throughput", value: "≈ 7× / month" },
      { label: "Reviews given", value: "268" },
      { label: "Domain", value: "Financial operations" },
      { label: "Hand-written code", value: "≈ 0 — spec, review, verify" },
      { label: "Stack", value: "Agents · MCP · TS · React" },
    ],
    tags: [
      "AI-Augmented",
      "Agent Orchestration",
      "Claude Code",
      "MCP",
      "TypeScript",
      "React",
      "Financial Systems",
      "WCAG 2.1 AA",
    ],
  },
  {
    slug: "epam",
    number: "02",
    company: "EPAM Systems",
    role: "Software Engineering Team Leader → Lead",
    period: "September 2020 — April 2025",
    location: "Yerevan → Glendale, California",
    pitch:
      "Designed micro-frontend architecture and led a 12-engineer team across global accounts.",
    body: "Across nearly five years at EPAM I went from Senior to Team Leader. I architected a micro-frontend system in React/Redux/TypeScript that cut code dependencies by 30%, led a 12-person front-end team across multiple accounts, and shipped streaming features for a major client 15% ahead of schedule. Drove WCAG 2.1 AA compliance across the projects, extending reach to 15+ countries and lifting international engagement by 30%.",
    metrics: [
      { label: "Team size", value: "12" },
      { label: "Code deps cut", value: "−30%" },
      { label: "Reach", value: "15+ countries" },
      { label: "Standards", value: "WCAG 2.1 AA" },
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
      { label: "Users", value: "10M+" },
      { label: "Projects", value: "30M+" },
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
      "Led the Silverlight → React migration of 10 modules in a 28-module maritime platform for Maersk + 3.",
    body: "Senior IC then Team Lead on Cloud Fleet Manager — a maritime fleet platform serving Maersk, Hanseaticsoft, Atlantic Lloyd, and Nordic Hamburg. Owned 10 of the platform's 28 interrelated modules through the Silverlight → React migration, ensuring performance and modern-browser compatibility while the legacy system stayed live. Established the team's coding, testing, and deployment practices that survived long after I left. Also contributed to cryptoeye.eu on the Node.js side, building cryptocurrency candles.",
    metrics: [
      { label: "Modules migrated", value: "10 / 28" },
      { label: "Clients", value: "Maersk + 3" },
      { label: "Team size", value: "5" },
    ],
    tags: ["React", "Migration", "Maritime", "Architecture", "Node.js"],
  },
] as const;

// Delivery record at BuildOps. Sourced from merged-PR history in the BuildOps
// GitHub org (author + reviewer queries), April 2025 — August 2026.
export const DELIVERY = {
  caption:
    "Merged pull requests I authored in the BuildOps org, by month — April 2025 to July 2026.",
  totals: [
    { value: "160+", label: "Merged PRs" },
    { value: "9", label: "Repositories" },
    { value: "268", label: "PRs reviewed for others" },
    { value: "≈ 7×", label: "Throughput vs. first-year baseline" },
  ],
  monthly: [
    { month: "Apr", year: "25", count: 2 },
    { month: "May", year: "", count: 6 },
    { month: "Jun", year: "", count: 10 },
    { month: "Jul", year: "", count: 3 },
    { month: "Aug", year: "", count: 6 },
    { month: "Sep", year: "", count: 14 },
    { month: "Oct", year: "", count: 9 },
    { month: "Nov", year: "", count: 2 },
    { month: "Dec", year: "", count: 6 },
    { month: "Jan", year: "26", count: 4 },
    { month: "Feb", year: "", count: 5 },
    { month: "Mar", year: "", count: 0 },
    { month: "Apr", year: "", count: 11 },
    { month: "May", year: "", count: 8 },
    { month: "Jun", year: "", count: 30 },
    { month: "Jul", year: "", count: 44 },
  ],
} as const;

export const WRITING = [
  {
    slug: "two-pointer",
    title: "Coding Pattern — Two Pointer",
    publisher: "Medium",
    date: "July 2024",
    href: "https://medium.com/@hovakimyan.serg/coding-pattern-two-pointer-cb490fedeec1",
    blurb:
      "The two-pointer technique for arrays and linked lists — when it applies, why it beats the nested loop, and how to recognise the shape of the problem.",
  },
  {
    slug: "sliding-window",
    title: "Coding Pattern — Sliding Window",
    publisher: "Medium",
    date: "August 2021",
    href: "https://medium.com/@hovakimyan.serg/coding-pattern-sliding-window-e085c433f598",
    blurb:
      "Sliding window as a general-purpose pattern: the fixed and variable variants, and the class of problems it collapses from quadratic to linear.",
  },
] as const;

export const VENTURES = [
  {
    name: "Ashoon",
    tagline:
      "AI that instantly replies to your Instagram, Facebook & WhatsApp DMs — so you never miss a sale.",
    body:
      "Ashoon is an AI customer-messaging platform that automates conversations across Instagram, Facebook Messenger, WhatsApp, and website chat. It learns each business — products, prices, FAQs, policies — and replies like the smartest teammate, 24/7, in 30 languages. It doesn't just chat: it takes orders, books appointments, and registers customers right from a DM, with full team handover when humans need to step in.",
    services: null,
    stack: [
      "Next.js 16",
      "React 19",
      "NestJS 11",
      "Prisma + PostgreSQL",
      "pgvector (RAG)",
      "Redis + BullMQ",
      "Stripe",
      "Socket.io",
    ],
    urls: [{ label: "ashoon.com", href: "https://ashoon.com" }],
    primaryHref: "https://ashoon.com",
  },
  {
    name: "Kamui",
    tagline: "One POS to run your whole shop.",
    body:
      "Kamui is a point-of-sale platform for independent retail, built with a co-founder and shipped in 2026. It replaces the stack of disconnected tools most shops run: POS and order management across in-store, pickup and delivery; delivery dispatch with live driver tracking; QR-based inventory; receipt and ticket printing through local printer agents; SMS and call tracking; and an AI assistant that answers questions about the business. Multi-tenant isolation is enforced at the database layer with Postgres row-level security rather than in application code, alongside role-based staff access, optional 2FA, audit trails, and age-restriction compliance for regulated retail. Built end-to-end through agent-assisted development.",
    services: null,
    stack: [
      "Next.js",
      "React",
      "PostgreSQL (row-level security)",
      "Multi-tenant",
      "Railway",
    ],
    urls: [{ label: "kamui.digital", href: "https://kamui.digital" }],
    primaryHref: "https://kamui.digital",
  },
  {
    name: "Ashoon Studio",
    tagline:
      "Professionally-designed websites for U.S. small service businesses.",
    body:
      "Ashoon Studio is the web-design studio I run alongside my engineering work. We ship clean brochure sites (3–5 pages) for salons, beauty pros, trainers, photographers, dentists, and consultants. Every site is mobile-responsive from 375px, integrates the client's existing booking tool (Fresha · Square · Acuity · Calendly · etc.), and ships static on Cloudflare Pages so it stays fast and cheap to host.",
    services: [
      "Brochure websites (3–5 pages)",
      "Custom domain + SSL + mobile-responsive design",
      "Booking-widget integration with the client's existing tool",
      "Basic SEO, Google Maps, contact form, reviews feed",
    ],
    stack: ["Astro", "Tailwind v4", "TypeScript", "Cloudflare Pages"],
    urls: [{ label: "ashoon.online", href: "https://ashoon.online" }],
    primaryHref: "https://ashoon.online",
  },
  {
    name: "hovakimyan.dev",
    tagline: "The site you're on.",
    body: "Built from scratch as a showcase of the practice — Sora display + DM Sans body + Fira Code accents, Three.js hex prism in the hero, full WCAG-compliant interactive surfaces. Source is public on GitHub.",
    services: null,
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind v4",
      "Three.js",
      "OpenNext",
      "Cloudflare Workers",
    ],
    urls: [
      {
        label: "github.com/Hovakimyan/hovakimyan.dev",
        href: "https://github.com/Hovakimyan/hovakimyan.dev",
      },
    ],
    primaryHref: "https://github.com/Hovakimyan/hovakimyan.dev",
  },
] as const;

export const ABOUT_TIMELINE = [
  {
    date: "2025-04",
    branch: "HEAD -> main, BuildOps",
    label: "IC5 Software Engineer · Santa Monica",
  },
  {
    date: "2023-11",
    branch: "epam/team-leader",
    label: "Team Leader · 12-engineer front-end team · Glendale",
  },
  {
    date: "2022-03",
    branch: "epam/lead-glendale",
    label: "Lead Software Engineer · Glendale",
  },
  {
    date: "2020-11",
    branch: "epam/lead-yerevan",
    label: "Lead Software Engineer · promoted · Yerevan",
  },
  {
    date: "2020-09",
    branch: "epam/senior",
    label: "Senior Software Engineer · joined EPAM · Armenia",
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
