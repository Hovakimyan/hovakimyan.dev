/**
 * /resume.txt — plain-text resume, no formatting, no JS. Same content
 * as the /resume page but optimised for grep, ATS pipelines, and
 * agent fetching.
 */

import { NextResponse } from "next/server";

const BODY = `SERGEY HOVAKIMYAN
AI-Augmented Software Engineer · 13+ years
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
AI-Augmented Software Engineer with 13+ years across JavaScript,
TypeScript, React, Next.js, Node.js, Redux, and GraphQL. Specialises
in micro-frontend architectures, accessibility (WCAG 2.1 AA), and
AI-augmented engineering workflows. Has led cross-functional teams
of up to 12 engineers; mentored numerous engineers into senior
roles. Track record of strategic project management across Client
Management, Design, and Marketing teams. Continuous improvement
advocate (TDD, BDD, CI/CD).

================================================================
EXPERIENCE
================================================================

BuildOps                                              Apr 2025 - Present
IC5 Software Engineer                       Los Angeles, California, US
  - Vertical SaaS platform for the trades industry; high-leverage
    frontend work across web and mobile-web surfaces.
  - Stack: TypeScript, React, performance optimisation.

EPAM Systems                                                4y 8mo total

Software Engineering Team Leader                  Nov 2023 - Apr 2025
                                              Glendale, California, US
  - Designed a Micro-Frontend Architecture in React/Redux/TypeScript;
    improved modularity and cut code dependencies by 30%.
  - Led an 8-person front-end team across multiple accounts;
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
National Polytechnical University of Armenia              2013 - 2017
Bachelor's degree, Computer Science and Information Technology —
Cyber Security

================================================================
TECHNICAL SKILLS
================================================================
LANGUAGES        JavaScript, TypeScript, Hack
FRAMEWORKS       React.js, Next.js, Node.js, Lit, Redux, GraphQL,
                 Nest.js, React-Router, SASS, Styled-components,
                 Tailwind CSS
STATE / MIDDLEWARE  Redux Thunk, Reselect
PRACTICES        Micro-Frontend Architecture, TDD, BDD, CI/CD, Unit
                 Testing, Code Reviews, Scrum, Performance
                 Optimisation, WCAG 2.1 AA, i18n
TOOLS            Git, Webpack, Gulp, Babel, Jest, Tailwind CSS,
                 PostgreSQL, MongoDB
AI / AGENTS      Agent-Based Development, LLM-paired workflows,
                 AI-augmented accessibility audits

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

================================================================
OPEN TO
================================================================
- Engineering leadership
- Micro-frontend architecture
- Accessibility audits & WCAG programs
- AI-augmented development workflows
- Team development & mentorship
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
