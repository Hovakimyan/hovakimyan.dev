import { SITE } from "./content";

/**
 * schema.org/Person structured data injected into every page's head.
 * Gives Google, AI bots, and LLM agents an explicit, machine-readable
 * profile they can index reliably regardless of the IDE chrome.
 *
 * Reference: https://schema.org/Person
 *            https://developers.google.com/search/docs/appearance/structured-data
 */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    givenName: "Sergey",
    familyName: "Hovakimyan",
    jobTitle: SITE.role,
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
      "https://ashoon.online",
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
    ],
    knowsLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Armenian", alternateName: "hy" },
      { "@type": "Language", name: "Russian", alternateName: "ru" },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National Polytechnical University of Armenia",
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
        name: "IC5 Software Engineer",
        occupationLocation: {
          "@type": "City",
          name: "Los Angeles, California",
        },
        skills:
          "TypeScript, React, Next.js, Node.js, Micro-Frontend Architecture, WCAG 2.1 AA Accessibility, AI-Augmented Development",
      },
    ],
    seeks: {
      "@type": "Demand",
      name: "Engineering leadership, micro-frontend architecture, AI-augmented builds, accessibility programs",
    },
  } as const;
}
