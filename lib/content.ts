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
  Tools: ["Git", "Webpack", "Babel", "Jest", "Tailwind", "PostgreSQL", "MongoDB"],
} as const;

export const WORK = [
  {
    slug: "buildops",
    number: "01",
    company: "BuildOps",
    role: "IC5 Software Engineer · AI-Augmented Practice",
    period: "April 2025 — Present",
    location: "Los Angeles, California",
    pitch:
      "Engineering a vertical SaaS platform through an AI-orchestrated workflow — agents and skills as the primary tool, no manual code for ~6 months.",
    body: "Joined BuildOps as IC5 on a vertical SaaS platform for the trades industry. Since mid-2025 I've operated almost entirely through AI-augmented workflows — orchestrating coding agents, custom skills, and slash commands instead of typing implementation by hand. Day-to-day spans agent design (Claude Code skills/commands/hooks for the team), AI-driven research and architecture (deep-research agents to evaluate trade-offs before writing a line), AI-paired testing and code review, AI-led accessibility audits aligned to WCAG 2.1 AA, and design-to-code translation via Figma/MCP integrations. The result: higher throughput, more consistent architectural choices, and audit-grade quality on accessibility and tests by default.",
    metrics: [
      { label: "Practice", value: "AI-Orchestrated" },
      { label: "Hand-written code", value: "≈ 0 in 6mo" },
      { label: "Domain", value: "Field Service SaaS" },
      { label: "Stack", value: "Agents · MCP · TS · React" },
    ],
    tags: [
      "AI-Augmented",
      "Agent Orchestration",
      "Claude Code",
      "MCP",
      "TypeScript",
      "React",
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
      "Designed micro-frontend architecture and led an 8-engineer team across global accounts.",
    body: "Across nearly five years at EPAM I went from Senior to Team Leader. I architected a micro-frontend system in React/Redux/TypeScript that cut code dependencies by 30%, led an 8-person front-end team across multiple accounts, and shipped streaming features for a major client 15% ahead of schedule. Drove WCAG 2.1 AA compliance across the projects, extending reach to 15+ countries and lifting international engagement by 30%.",
    metrics: [
      { label: "Team size", value: "8" },
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
    stack: null,
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
