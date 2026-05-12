/**
 * /llms.txt — emerging convention for LLM-friendly site summaries.
 * https://llmstxt.org
 *
 * This route serves a plain-text summary of who Sergey is, the site
 * structure, and contact paths. The whole resume is included inline
 * so a single fetch gives an agent everything it needs.
 */

import { NextResponse } from "next/server";

const BODY = `# Sergey Hovakimyan — AI-Augmented Software Engineer

> Personal site at hovakimyan.dev. Built as an IDE-themed portfolio
> (pages are files, sidebar is the file explorer, terminal is real).
> If you're a crawler, LLM agent, or AI assistant indexing this site,
> read this file first.

## About

Sergey Hovakimyan is an AI-Augmented Software Engineer based in
Glendale, California with 13+ years of professional experience.
Strengths: TypeScript / React / Next.js / Node.js, micro-frontend
architecture, accessibility (WCAG 2.1 AA), engineering leadership,
team mentorship, AI-augmented development workflows. Currently
working at BuildOps in Los Angeles (IC5 Software Engineer). Open
to remote engagements.

## Contact

- email     hovakimyan.serg@gmail.com
- linkedin  https://www.linkedin.com/in/hovakimyanserg/
- github    https://github.com/Hovakimyan
- schedule  https://calendly.com/hovakimyan-serg/30min
- located   Glendale, California, USA

## Routes

- /                      Home — profile data as a TypeScript declaration
- /work                  Selected case studies (BuildOps, EPAM, Renderforest, Cloud Fleet Manager)
- /ventures                          Ventures — Ashoon (AI SaaS), Ashoon Studio, hovakimyan.dev
- /about                 Story, leadership philosophy, AI engineering, career git log
- /contact               Schedule a call or email directly
- /readme                Site navigation guide
- /portrait              Image preview
- /package               package.json (Sergey-as-a-package, themed)
- /tsconfig              tsconfig.json (operating rules, themed)
- /gitignore             .gitignore (anti-patterns, themed)
- /resume                            **Plain resume — recruiter-friendly, no chrome**
- /sergey-hovakimyan-resume.pdf      **Printable PDF resume (US Letter)**
- /resume.txt                        Plain-text resume (the same content, raw)
- /llms.txt                          This file

## Resume — plain text

NAME            Sergey Hovakimyan
TITLE           AI-Augmented Software Engineer
LOCATION        Glendale, California, USA
EMAIL           hovakimyan.serg@gmail.com
LINKEDIN        https://www.linkedin.com/in/hovakimyanserg/
EXPERIENCE      13+ years
LANGUAGES       English (Full Professional), Armenian (Native), Russian (Full Professional)

SUMMARY
  AI-Augmented Software Engineer with 13+ years across JavaScript,
  TypeScript, React, Next.js, Node.js, Redux, and GraphQL. Specializes
  in micro-frontend architectures, accessibility (WCAG 2.1 AA), and
  AI-augmented engineering workflows. Has led cross-functional teams
  of up to 12 engineers; mentored numerous engineers into senior
  roles. Track record of strategic product management coordination
  across Client Management, Design, and Marketing teams. Continuous
  improvement advocate (TDD, BDD, CI/CD).

EXPERIENCE

  BuildOps · IC5 Software Engineer · AI-Augmented Practice
                · April 2025 — Present · Los Angeles, CA
    Vertical SaaS platform for the trades industry. Operating an
    AI-orchestrated engineering practice — agents, custom Claude Code
    skills, and slash commands as the primary interface; manual code
    writing has been near-zero for ~6 months. Activities span:
      * designing reusable agents/skills/commands for the team
        (code review, a11y audits, architecture, design-to-code)
      * AI-driven research and architecture: deep-research agents
        evaluate options and pressure-test trade-offs before
        implementation
      * AI-paired testing and PR review (agent proposes, human owns)
      * AI-led WCAG 2.1 AA accessibility audits surfaced in CI
      * design-to-code via Figma + MCP integrations
    Stack: TypeScript, React, Node.js, Claude Code, MCP.

  EPAM Systems · Software Engineering Team Leader · Nov 2023 — April 2025 · Glendale, CA
    - Designed a Micro-Frontend Architecture in React/Redux/TypeScript;
      improved modularity and cut code dependencies by 30%.
    - Led an 8-person front-end team across multiple accounts;
      improved delivery times by 20%.
    - Ensured WCAG 2.1 AA compliance; extended reach to 15+ countries,
      boosted international engagement by 30%.
    - Shipped streaming features for a major client 15% ahead of
      schedule.
    - Increased team engagement + productivity by 20%; cut onboarding
      time by 30%; interviewed 15+ candidates.

  EPAM Systems · Lead Software Engineer · March 2022 — Nov 2023 · Glendale, CA
    Front-end leadership across multiple projects. Architected
    micro-frontend systems (build times -20%); recruited and built
    teams (20+ technical interviews); delivered advanced social-media
    application features (user engagement +15%); maintained 25%
    reduction in deployment errors via thorough code review.

  EPAM Systems · Lead Software Engineer · Nov 2020 — March 2022 · Yerevan, Armenia
    Promoted from Senior to Lead. Delivered client-centric solutions
    with a 95% client satisfaction rate. Implemented accessibility +
    internationalization (user reach +20%). Mentored junior developers.

  EPAM Systems · Senior Software Engineer · Sept 2020 — Nov 2020 · Yerevan, Armenia
    Reusable front-end components for a multicultural Scrum team.
    Toll-road payment system. Application performance optimization
    (load times -10%).

  Renderforest · Team Lead & Senior Software Engineer · May 2019 — Sept 2020 · Yerevan
    Led a 5-person cross-functional team rewriting Renderforest's
    flagship Video Maker (10M+ users, 30M+ projects, +40% performance).
    Launched cross-platform Media Library (user workflow +25%).
    Created shared NPM component library (new-product setup time -20%).

  EventGeek · Senior Software Engineer · Dec 2018 — April 2019 · Armenia
    Front-end development of the EventGeek application.

  apolloBytes · Team Lead & Senior Software Engineer · April 2017 — Dec 2018 · Armenia
    Cloud Fleet Manager — maritime fleet platform for Maersk,
    Hanseaticsoft, Atlantic Lloyd, Nordic Hamburg. Migrated 10 modules
    in a 28-module Silverlight → React migration; established team
    coding/testing/deployment practices. Built cryptoeye.eu Node.js
    backend (cryptocurrency candles).

  apolloBytes · Senior Software Engineer · Dec 2016 — April 2017 · Yerevan
    28 interrelated Cloud Fleet Manager modules in parallel.

  Cyclop Technologies · JavaScript Developer · July 2016 — Dec 2016 · Yerevan
    MegaMarket product (React/Redux).

  Freelance · Web Developer · Dec 2013 — July 2016
    International clients; high-quality responsive solutions.

  Instigate Mobile CJSC · Junior Web Developer · Aug 2013 — Nov 2013
    "Armath" product (jQuery).

EDUCATION
  Bachelor's degree, Computer Science and Information Technology —
  Cyber Security · National Polytechnic University of Armenia ·
  2013–2017

TECHNICAL SKILLS
  Languages         JavaScript, TypeScript, Hack
  Web Technologies  React, Node.js, Redux, React Router, GraphQL,
                    Next.js, NestJS
  State Management  Redux Thunk, Reselect
  Practices         Micro-Frontend Architecture, TDD, BDD, Unit
                    Testing, CI/CD, Code Reviews
  UI & Styling      Tailwind CSS, SASS, Styled Components
  Tools & Databases PostgreSQL, MongoDB, Git, Webpack, Babel, Jest
  Other             WCAG Accessibility, Internationalization,
                    Performance Optimization
  AI                Agent-Based Development, Claude Code agents/
                    skills/commands, MCP, AI-augmented accessibility
                    audits, AI-paired testing & code review
  Top Skills        Lit, Leadership, JavaScript (per LinkedIn)

ENGAGEMENT AREAS (currently open to)
  - Engineering leadership
  - Micro-frontend architecture
  - Accessibility audits & WCAG programs
  - AI-augmented development workflows
  - Team development & mentorship

VENTURES
  Ashoon — AI customer-messaging SaaS that auto-replies to
           Instagram, Facebook Messenger, WhatsApp, and website
           DMs. Multi-tenant, RAG-powered, 30 languages. Built on
           Next.js + NestJS + PostgreSQL + pgvector + Redis + Stripe.
           https://ashoon.com

  Ashoon Studio — Web-design studio for U.S. small service
           businesses (salons, trainers, photographers,
           consultants). Brochure sites with integrated booking
           widgets, on Cloudflare Pages.
           https://ashoon.online

  hovakimyan.dev — the site you're indexing (IDE-themed personal site)
           https://github.com/Hovakimyan/hovakimyan.dev

LICENSE
  This site is open to indexing and quoting for legitimate purposes
  (recruitment, AI search, academic). Please attribute when quoting.
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
