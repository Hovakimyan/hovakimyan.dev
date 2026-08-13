/**
 * /resume.txt — plain-text resume, no formatting, no JS. Same content
 * as the /resume page but optimised for grep, ATS pipelines, and
 * agent fetching.
 */

import { NextResponse } from "next/server";

const BODY = `SERGEY HOVAKIMYAN
Senior Software Engineer · AI-Augmented Practice · 13+ years
Glendale, California · Open to remote

CONTACT
  Email      hovakimyan.serg@gmail.com
  LinkedIn   https://www.linkedin.com/in/hovakimyanserg/
  Website    https://hovakimyan.dev
  GitHub     https://github.com/Hovakimyan
  Schedule   https://calendly.com/hovakimyan-serg/30min

LANGUAGES
  English (Full Professional) · Armenian (Native) · Russian (Full Professional)

================================================================
SUMMARY
================================================================
Senior software engineer, 13+ years across JavaScript, TypeScript,
React, Next.js, Node.js, NestJS, Redux, GraphQL and PostgreSQL.
Currently at BuildOps (Santa Monica) on financial operations —
accounting periods, close, ledger integrity, reporting. New domain,
learned properly and now owned: specs and reviews changes there,
coordinates the area's releases.

Works through agent-assisted development: specifies and reviews
rather than typing implementation, owns release coordination for the
financial-operations area, and has reviewed 268 pull requests for
other engineers across 9 repositories. Every change human-reviewed
before merge.

Also: micro-frontend architecture, accessibility (WCAG 2.1 AA),
internationalisation, TDD/BDD, CI/CD, Playwright end-to-end testing,
release management. Led a 12-engineer front-end team at EPAM.
Founder of Ashoon (AI customer-messaging platform) and co-founder of
Kamui (retail point-of-sale platform), both built end to end with
agents.

================================================================
EXPERIENCE
================================================================

BuildOps                                              Apr 2025 - Present
IC5 Software Engineer · AI-Augmented Practice
                                            Santa Monica, California, US
  - Breadth, then depth: most of my work is in the React/TypeScript
    web app across the wider product; more recently joined the team
    behind financial operations — accounting periods and close
    semantics, enforcement across object types and fiscal years,
    ledger integrity, reporting. New domain, learned properly; now
    spec and review changes there and coordinate the area's releases.
  - AI-Orchestrated Engineering: operating frontend work on a vertical
    SaaS platform almost entirely through AI-augmented workflows since
    mid-2025. Orchestrate agents, custom skills, and slash commands
    instead of writing implementation by hand.
  - Agents, Skills & Commands: designed and shipped reusable Claude
    Code agents, skills, and slash commands for the team — code review,
    a11y audits, architecture analysis, design-to-code translation,
    repo conventions. Team practice captured as durable tooling.
  - AI-Driven Architecture & Research: deep-research and design-review
    agents evaluate options and pressure-test trade-offs before any
    implementation lands. Less wasted refactor work; decisions stay
    auditable.
  - AI-Paired Testing & Code Review: tests, refactors, and PR reviews
    are agent-paired by default — agent proposes, human owns the merge.
  - Accessibility (WCAG 2.1 AA) at CI quality: AI-led audit workflows
    surface issues before they ship.
  - Design-to-Code via MCP: Figma + design-system integrations turn
    hand-offs into production components without boilerplate.
  - Review and release ownership: reviewed 268 pull requests for other
    engineers; own release coordination for financial operations —
    cutting releases, verifying candidates, tracking behaviour through
    to production. Every change human-reviewed before merge.
  - Across the stack: work spans 9 repositories — the React/TypeScript
    web app, the financial core service, backend services, database
    migrations and end-to-end test suites. AWS SDK migration verified
    against a local emulator; cross-repo full-stack changes shipped as
    single units of work.
  - Stack: TypeScript, React, Node.js, PostgreSQL, Playwright, Claude
    Code, MCP, custom agents/skills/commands.

Independent                                       Apr 2021 - Present

Founder & Freelance Engineer (part-time)                       Remote
  - Ashoon (founder): AI customer-messaging platform replying across
    Instagram, Messenger, WhatsApp and web chat in 30 languages;
    takes orders and books appointments from a DM. Next.js, NestJS,
    Prisma/PostgreSQL, pgvector (RAG), Redis/BullMQ, Stripe.
    https://ashoon.com
  - Kamui (co-founder): POS platform for independent retail — orders
    across in-store/pickup/delivery, dispatch with live tracking, QR
    inventory, local printer agents, AI assistant. Multi-tenant
    isolation via Postgres row-level security. https://kamui.digital
  - Ashoon Studio: web-design studio shipping brochure sites with
    booking integration and local SEO. Astro, Tailwind, Cloudflare
    Pages. https://ashoon.online
  - Toptal Network: member since 2021; intermittent part-time client
    engagements alongside full-time work.
  - Both products were built end-to-end through agent-assisted
    development.

EPAM Systems                                                4y 8mo total

Software Engineering Team Leader                  Nov 2023 - Apr 2025
                                              Glendale, California, US
  - Designed a Micro-Frontend Architecture in React/Redux/TypeScript;
    improved modularity and cut code dependencies by 30%.
  - Led a 12-person front-end team across multiple accounts;
    improved delivery times by 20%.
  - Ensured WCAG 2.1 AA compliance; extended reach to 15+ countries,
    boosted international engagement by 30%.
  - Shipped streaming features for a major client 15% ahead of
    schedule.
  - Increased team engagement and productivity by 20%; cut
    onboarding time by 30%.
  - Interviewed 15+ candidates for technical and cultural fit.
  - Contributed to business development; helped secure one major
    account, expanding the project pipeline by 20%.

Lead Software Engineer                          Mar 2022 - Nov 2023
                                              Glendale, California, US
  - Led front-end development on multiple projects; improved project
    delivery speed by 15%.
  - Architected and integrated a Micro-Frontend system; reduced build
    times by 20%.
  - Enhanced accessibility and internationalisation, achieving full
    WCAG compliance; expanded app reach by 25%.
  - Conducted 20+ technical interviews; reduced new-hire onboarding
    time by 30%.
  - Delivered advanced features for major social media applications;
    user engagement +15%.
  - Performed code reviews and testing; reduced deployment errors
    by 25%.
  - Mentored junior developers; 30% improvement in their performance
    and skill levels.

Lead Software Engineer                          Nov 2020 - Mar 2022
                                                              Armenia
  - Promoted from Senior to Lead role; expanded responsibilities to
    include team leadership and project management.
  - Delivered tailored solutions for multiple EPAM clients; 95%
    client satisfaction rate.
  - Managed a front-end team across several projects; project
    delivery times +20%.
  - Implemented accessibility and internationalisation features;
    user reach +20%.

Senior Software Engineer                        Sep 2020 - Nov 2020
                                                              Armenia
  - Reusable front-end components within a multicultural Scrum team.
  - Toll-road payment system: optimised payment processing speed and
    improved user satisfaction.
  - Application performance: 10% reduction in load times.

Renderforest                                          May 2019 - Sep 2020
Team Lead and Senior Software Engineer                       1y 5mo · Armenia
  - Managed a cross-functional team of 5 (engineers, QA, design) on
    Renderforest's flagship Video Maker rewrite.
  - Product serves 10M+ users and has generated 30M+ projects;
    rewrite boosted performance by 40%.
  - Launched a Cross-Platform Media Library; user workflow +25%.
  - Created a shared NPM component library; new-product development
    time -20%.

EventGeek                                             Dec 2018 - Apr 2019
Senior Software Engineer                                      5mo · Armenia
  - Front-end development of the EventGeek application.
  - Created reusable core components used across the product.

apolloBytes                                                 2y 1mo total

Team Lead and Senior Software Engineer            Apr 2017 - Dec 2018
                                                              Armenia
  - Led the Cloud Fleet Manager project (team of 5) — maritime fleet
    platform serving Maersk, Hanseaticsoft, Atlantic Lloyd, Nordic
    Hamburg.
  - Rewrote 10 modules of Cloud Fleet Manager from Silverlight to
    React.
  - Established best practices for coding, testing, and deployment.
  - Developed the cryptoeye.eu product (Node.js) — cryptocurrency
    candles.

Senior Software Engineer                        Dec 2016 - Apr 2017
                                                       Yerevan, Armenia
  - Developed and maintained 28 interrelated modules of Cloud Fleet
    Manager in parallel.
  - Rewrote modules from Silverlight to React.

Cyclop Technologies                                   Jul 2016 - Dec 2016
JavaScript Developer                                      6mo · Yerevan
  - "MegaMarket" product with React/Redux.

Freelance, self-employed                                  Dec 2013 - Jul 2016
Web Developer                                              2y 8mo · Remote
  - Web projects for international clients; remote collaboration
    across countries.

Instigate Mobile CJSC                                Aug 2013 - Nov 2013
Junior Web Developer                                              4mo
  - "Armath" product with jQuery.

================================================================
EDUCATION
================================================================
National Polytechnic University of Armenia               2013 - 2017
Bachelor's degree, Computer Science and Information Technology —
Cyber Security

================================================================
TECHNICAL SKILLS
================================================================
LANGUAGES        JavaScript, TypeScript, Hack
WEB TECH         React, Node.js, Redux, React Router, GraphQL,
                 Next.js, NestJS
STATE / MIDDLEWARE  Redux Thunk, Reselect
PRACTICES        Micro-Frontend Architecture, TDD, BDD, Unit Testing,
                 CI/CD, Code Reviews
UI / STYLING     Tailwind CSS, SASS, Styled Components
TOOLS / DBs      PostgreSQL, MongoDB, Git, Jest, Playwright, Webpack,
                 Babel
AGENTS           Claude Code, MCP, custom skills/commands, agent
                 orchestration
OTHER            WCAG Accessibility, Internationalization,
                 Performance Optimization
AI / AGENTS      Claude Code agents, custom skills + slash commands,
                 MCP, AI-paired testing & code review, AI-augmented
                 accessibility audits
TOP SKILLS       Lit, Leadership, JavaScript (per LinkedIn)

================================================================
HIGHLIGHTS
================================================================
- Architect & Innovator: Spearheaded the design and implementation
  of Micro-Frontend Architectures for leading tech companies.
- Team Leadership & Development: Led teams of up to 12 engineers,
  mentored numerous junior developers who have since advanced to
  key roles.
- Strategic Project Management: Coordinated with Client Management,
  Design, and Marketing teams to ensure seamless integration from
  concept to deployment.
- Continuous Improvement Advocate: Implemented TDD, BDD, and CI/CD
  best practices, ensuring high-quality, maintainable code.

`;

export const dynamic = "force-static";

export function GET() {
  return new NextResponse(BODY, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
