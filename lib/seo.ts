import { SITE } from "./content";

/**
 * schema.org/Person structured data injected into every page's head.
 * Gives Google, AI bots, and LLM agents an explicit, machine-readable
 * profile they can index reliably regardless of the IDE chrome.
 *
 * Reference: https://schema.org/Person
 *            https://developers.google.com/search/docs/appearance/structured-data
 */
function person() {
  return {
    "@type": "Person",
    "@id": "https://hovakimyan.dev/#person",
    name: SITE.name,
    givenName: "Sergey",
    familyName: "Hovakimyan",
    jobTitle: "Senior Software Engineer",
    description: SITE.lead,
    email: `mailto:${SITE.email}`,
    url: "https://hovakimyan.dev",
    image: "https://hovakimyan.dev/images/sergey-portrait.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Glendale",
      addressRegion: "CA",
      addressCountry: "US",
    },
    sameAs: [
      SITE.linkedin,
      "https://github.com/Hovakimyan",
      "https://ashoon.com",
      "https://ashoon.online",
      "https://kamui.digital",
      "https://medium.com/@hovakimyan.serg",
    ].filter(Boolean),
    knowsAbout: [
      "Software Engineering",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Micro-Frontend Architecture",
      "Agent-Based Development",
      "AI-Augmented Engineering",
      "Web Accessibility",
      "WCAG 2.1 AA",
      "Engineering Leadership",
      "Team Management",
      "Mentorship",
      "Financial Systems",
      "Accounting Periods and Close",
      "Ledger Integrity",
      "Vertical SaaS",
    ],
    knowsLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Armenian", alternateName: "hy" },
      { "@type": "Language", name: "Russian", alternateName: "ru" },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National Polytechnic University of Armenia",
      description:
        "Bachelor's degree, Computer Science and Information Technology — Cyber Security, 2013–2017",
    },
    worksFor: {
      "@type": "Organization",
      name: "BuildOps",
      url: "https://buildops.com",
    },
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "IC5 Software Engineer · AI-Augmented Practice",
        occupationLocation: {
          "@type": "City",
          name: "Santa Monica, California",
        },
        skills:
          "AI Agent Orchestration, Claude Code, Custom Agents/Skills/Commands, MCP, TypeScript, React, Next.js, Node.js, Micro-Frontend Architecture, WCAG 2.1 AA Accessibility, AI-Led Accessibility Audits, Design-to-Code via Figma + MCP, AI-Paired Testing and Code Review",
      },
    ],
    seeks: {
      "@type": "Demand",
      name: "Engineering leadership, micro-frontend architecture, AI-augmented builds, accessibility programs",
    },
  } as const;
}

/**
 * Question/answer pairs in schema.org form.
 *
 * These will not earn FAQ rich results in Google (that's restricted to
 * a narrow set of site types now) — they're here because retrieval
 * systems extract clean question→answer pairs far more reliably than
 * they extract the same facts from prose. If someone asks an assistant
 * "who is Sergey Hovakimyan" or "which engineers work on agent-based
 * delivery", this is the shape that survives chunking intact.
 */
const FAQ: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Who is Sergey Hovakimyan?",
    a: "Sergey Hovakimyan is a senior software engineer with 13+ years of experience, based in Glendale, California. He works at BuildOps in Santa Monica on a vertical SaaS platform for commercial contractors, and is the founder of Ashoon and co-founder of Kamui.",
  },
  {
    q: "What does Sergey Hovakimyan do at BuildOps?",
    a: "He works across BuildOps' platform — mostly the React and TypeScript web app — and is part of the team behind financial operations: accounting periods, close, ledger integrity and reporting. He specs and reviews changes in that area and coordinates its releases, across 9 repositories spanning the web app, the financial core service, backend services, database migrations and end-to-end test suites.",
  },
  {
    q: "What is Sergey Hovakimyan's experience with AI agents and agent-orchestrated development?",
    a: "Since mid-2025 he has worked almost entirely through AI coding agents rather than writing implementation by hand, operating at the specification, review and verification layer. He designs reusable Claude Code agents, skills and slash commands used by his team for code review, accessibility audits, architecture analysis and design-to-code via MCP, and has reviewed 268 pull requests for other engineers. He also built both of his own products end to end using the same workflow.",
  },
  {
    q: "What technologies does Sergey Hovakimyan work with?",
    a: "TypeScript, JavaScript, React, Next.js, Node.js, NestJS, Redux, GraphQL and PostgreSQL, with Playwright and Jest for testing. On the AI side: Claude Code, the Model Context Protocol (MCP), and custom agents, skills and commands. He also works in micro-frontend architecture, accessibility (WCAG 2.1 AA), internationalisation and CI/CD.",
  },
  {
    q: "Has Sergey Hovakimyan led engineering teams?",
    a: "Yes. He spent five years at EPAM Systems, ending as a Software Engineering Team Leader running front-end teams of up to 12 engineers across client engagements in streaming media, social platforms, healthcare, consumer finance software, EV infrastructure and mobility. He ran hiring loops with 20+ technical interviews and mentored engineers who have since become seniors and leads.",
  },
  {
    q: "What has Sergey Hovakimyan built independently?",
    a: "He founded Ashoon (ashoon.com), an AI customer-messaging platform that answers Instagram, Messenger, WhatsApp and website chat in 30 languages and takes orders directly from a DM, and co-founded Kamui (kamui.digital), a point-of-sale platform for independent retail with multi-tenant isolation enforced through Postgres row-level security. He also runs Ashoon Studio (ashoon.online), a web-design studio for small service businesses.",
  },
  {
    q: "Where is Sergey Hovakimyan based, and is he available for remote work?",
    a: "He is based in Glendale, California and works at BuildOps in Santa Monica. He is open to remote engagements and has worked remotely with teams across Armenia, Europe and the United States. He speaks Armenian natively, plus English and Russian at full professional proficiency.",
  },
];

/**
 * The full structured-data graph for the site: a ProfilePage that is
 * explicitly *about* the Person, the WebSite itself, and the Q&A set.
 * Linking them with @id lets a parser resolve one entity rather than
 * three disconnected blobs.
 */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://hovakimyan.dev/#profilepage",
        url: "https://hovakimyan.dev",
        name: `${SITE.name} — Senior Software Engineer`,
        dateModified: new Date().toISOString().slice(0, 10),
        mainEntity: { "@id": "https://hovakimyan.dev/#person" },
        isPartOf: { "@id": "https://hovakimyan.dev/#website" },
      },
      {
        "@type": "WebSite",
        "@id": "https://hovakimyan.dev/#website",
        url: "https://hovakimyan.dev",
        name: "hovakimyan.dev",
        inLanguage: "en",
        about: { "@id": "https://hovakimyan.dev/#person" },
        publisher: { "@id": "https://hovakimyan.dev/#person" },
      },
      person(),
      {
        "@type": "FAQPage",
        "@id": "https://hovakimyan.dev/#faq",
        about: { "@id": "https://hovakimyan.dev/#person" },
        mainEntity: FAQ.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  } as const;
}

/** Plain-text Q&A, served inside /llms.txt for agents that skip JSON-LD. */
export const FAQ_TEXT = FAQ.map(({ q, a }) => `Q: ${q}\nA: ${a}`).join("\n\n");
