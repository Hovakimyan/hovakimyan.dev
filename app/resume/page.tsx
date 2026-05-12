import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/content";
import PrintButton from "./PrintButton";

const RESUME_TITLE = `Resume · ${SITE.name} — ${SITE.role}`;
const RESUME_DESCRIPTION =
  "13+ years of software engineering. Plain, print-friendly resume — JavaScript, TypeScript, React, Next.js, Node.js, micro-frontend architecture, WCAG 2.1 AA, AI-augmented workflows. Currently IC5 Software Engineer at BuildOps in Los Angeles.";

export const metadata: Metadata = {
  title: RESUME_TITLE,
  description: RESUME_DESCRIPTION,
  alternates: { canonical: "/resume" },
  robots: { index: true, follow: true },
  openGraph: {
    title: RESUME_TITLE,
    description: RESUME_DESCRIPTION,
    type: "profile",
    url: "https://hovakimyan.dev/resume",
    images: [
      {
        url: "/images/sergey-portrait.jpg",
        width: 1200,
        height: 1200,
        alt: `${SITE.name} — ${SITE.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: RESUME_TITLE,
    description: RESUME_DESCRIPTION,
    images: ["/images/sergey-portrait.jpg"],
  },
};

/**
 * Plain resume view — bypasses the IDE chrome, light theme,
 * print-friendly. Every section transcribed from the LinkedIn /
 * resume PDF (no fabricated bullets). BuildOps has a single IC
 * engineering line — the source CV has no bullets for that role
 * and Sergey is an individual contributor there, not a lead.
 */
export default function ResumePage() {
  return (
    <div className="sh-resume">
      <div className="sh-resume-toolbar" role="toolbar" aria-label="Resume actions">
        <Link href="/" className="sh-resume-back">
          ← Back to hovakimyan.dev
        </Link>
        <div className="sh-resume-actions">
          <PrintButton />
          <a className="sh-resume-action" href="/resume.txt">
            View .txt
          </a>
        </div>
      </div>
      <header className="sh-resume-header">
        <div className="sh-resume-id">
          <h1>{SITE.name}</h1>
          <p className="sh-resume-title">
            AI-Augmented Software Engineer
          </p>
          <p className="sh-resume-meta">
            {SITE.location} · 13+ years · JavaScript &amp; TypeScript ·
            Agent-Based Development · Accessibility (WCAG) Advocate
          </p>
        </div>
        <Image
          src="/images/sergey-portrait.jpg"
          alt={`Portrait of ${SITE.name}`}
          width={240}
          height={240}
          className="sh-resume-portrait"
          priority
        />
      </header>

      <nav className="sh-resume-contact" aria-label="Contact">
        <span>
          <strong>Email</strong>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </span>
        <span>
          <strong>LinkedIn</strong>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            /in/hovakimyanserg
          </a>
        </span>
        <span>
          <strong>Website</strong>
          <a href="https://hovakimyan.dev" target="_blank" rel="noopener noreferrer">
            hovakimyan.dev
          </a>
        </span>
        <span>
          <strong>Languages</strong>
          English · Armenian · Russian
        </span>
      </nav>

      <section className="sh-resume-section">
        <h2>Summary</h2>
        <p>
          13+ years of experience in software engineering. I specialise
          in building scalable, high-performance applications that meet
          global standards. My expertise spans JavaScript, React, Redux,
          Node, and TypeScript, where I&rsquo;ve consistently delivered
          cutting-edge solutions in both entrepreneurial and corporate
          settings. I have a proven track record of leading diverse,
          cross-functional teams, with a focus on Micro-Frontend
          Architecture, accessibility, and internationalisation — ensuring
          that the products I develop are both robust and user-centric.
        </p>
      </section>

      <section className="sh-resume-section">
        <h2>Key Highlights</h2>
        <ul>
          <li>
            <strong>Architect &amp; Innovator —</strong> Spearheaded the
            design and implementation of Micro-Frontend Architectures,
            enhancing scalability and modularity across various projects
            for leading tech companies.
          </li>
          <li>
            <strong>Team Leadership &amp; Development —</strong> Led teams
            of up to 12 engineers, fostering a culture of collaboration,
            continuous improvement, and high-quality deliverables.
            Mentored numerous junior developers who have since advanced
            to key roles in the industry.
          </li>
          <li>
            <strong>Strategic Project Management —</strong> Coordinated
            with Client Management, Design, and Marketing teams to ensure
            seamless integration and project success, from concept to
            deployment.
          </li>
          <li>
            <strong>Continuous Improvement Advocate —</strong> Implemented
            best practices such as TDD, BDD, and CI/CD, ensuring
            high-quality, maintainable code that meets user requirements
            and business goals.
          </li>
        </ul>
      </section>

      <section className="sh-resume-section">
        <h2>Experience</h2>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>BuildOps — IC5 Software Engineer · AI-Augmented Practice</h3>
              <p className="sh-resume-loc">
                Los Angeles, California · April 2025 — Present
              </p>
            </div>
          </header>
          <ul>
            <li>
              <strong>AI-Orchestrated Engineering:</strong> Operating
              full-stack frontend work on BuildOps&rsquo; vertical SaaS
              platform through AI-augmented workflows for the past ~6
              months. Orchestrating coding agents, custom skills, and
              slash commands rather than writing implementation by hand.
            </li>
            <li>
              <strong>Agents, Skills &amp; Commands:</strong> Designed
              and shipped reusable Claude Code agents, skills, and slash
              commands for the team — covering code review, accessibility
              audits, architecture analysis, design-to-code translation,
              and repo conventions. Captured team practice as durable
              tooling so quality scales with headcount.
            </li>
            <li>
              <strong>AI-Driven Architecture &amp; Research:</strong> Use
              deep-research and design-review agents to evaluate options
              and pressure-test trade-offs before any implementation
              lands. Reduces wasted refactors; keeps architectural
              decisions auditable and reviewable.
            </li>
            <li>
              <strong>AI-Paired Testing &amp; Code Review:</strong> Tests,
              refactors, and PR reviews are agent-paired by default — the
              agent proposes, the human owns the merge. Maintains rigor
              while compressing the test-and-review loop.
            </li>
            <li>
              <strong>Accessibility (WCAG 2.1 AA) at CI Quality:</strong>{" "}
              Built AI-led audit workflows that surface a11y issues
              before they ship — bringing audit-grade scrutiny into
              every feature, not just compliance cycles.
            </li>
            <li>
              <strong>Design-to-Code via MCP:</strong> Wired Figma and
              design-system integrations through MCP, turning design
              hand-offs into production components without manual
              boilerplate.
            </li>
            <li>
              <strong>Stack:</strong> TypeScript · React · Node.js ·
              Claude Code · MCP · custom agents/skills/commands.
            </li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>EPAM Systems — Software Engineering Team Leader</h3>
              <p className="sh-resume-loc">
                Glendale, California · November 2023 — April 2025
              </p>
            </div>
          </header>
          <ul>
            <li>
              <strong>Built Scalable Micro-Frontend Architecture:</strong>{" "}
              Designed a Micro-Frontend system using React, Redux, and
              TypeScript. Improved modularity and cut code dependencies
              by 30%, leading to faster builds and easier integrations.
            </li>
            <li>
              <strong>Led a Cross-Functional Team:</strong> Managed an
              8-person front-end team across EPAM Systems projects.
              Improved delivery times by 20% through streamlined
              workflows and close collaboration with other teams.
            </li>
            <li>
              <strong>Improved Accessibility and Internationalisation:</strong>{" "}
              Ensured compliance with WCAG 2.1 AA and global standards.
              This extended our project reach to 15+ countries, boosting
              international engagement by 30%.
            </li>
            <li>
              <strong>Developed Streaming Features for Major Client:</strong>{" "}
              Contributed to feature development and performance
              improvements for a streaming platform. Helped deliver key
              milestones 15% ahead of schedule, supporting client demand
              during peak times.
            </li>
            <li>
              <strong>Created a Productive Team Culture:</strong> Held
              regular team meetings and 1:1s to set goals and give
              feedback. Increased team engagement and productivity by
              20% through a focus on continuous improvement.
            </li>
            <li>
              <strong>Interviewed and Onboarded Talent:</strong>{" "}
              Interviewed 15+ candidates for technical and cultural fit.
              Mentored new hires, cutting onboarding time by 30% and
              improving team retention.
            </li>
            <li>
              <strong>Contributed to Business Development:</strong>{" "}
              Assisted in creating project proposals and presenting to
              clients. Helped secure one major account, expanding the
              project pipeline by 20%.
            </li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>EPAM Systems — Lead Software Engineer</h3>
              <p className="sh-resume-loc">
                Glendale, California · March 2022 — November 2023
              </p>
            </div>
          </header>
          <ul>
            <li>
              <strong>Led Front-End Projects:</strong> Directed front-end
              development on multiple projects, collaborating with
              cross-functional teams. Improved project delivery speed by
              15% through effective coordination and streamlined
              workflows.
            </li>
            <li>
              <strong>Architected and Integrated Micro-Frontend Systems:</strong>{" "}
              Designed and implemented a scalable Micro-Frontend
              Architecture, reducing build times by 20% and simplifying
              future development across teams.
            </li>
            <li>
              <strong>Enhanced Accessibility and Global Standards:</strong>{" "}
              Improved accessibility and internationalisation, achieving
              full WCAG compliance. This expanded the app&rsquo;s reach
              by 25%, increasing accessibility for global users.
            </li>
            <li>
              <strong>Cultivated a Growth-Oriented Team Culture:</strong>{" "}
              Organised regular check-ins and 1:1s, increasing team
              productivity by 20% by focusing on progress tracking and
              goal setting.
            </li>
            <li>
              <strong>Recruited and Built Strong Teams:</strong>{" "}
              Conducted 20+ technical interviews, leading to a 30%
              reduction in new-hire onboarding time by focusing on both
              technical and cultural fit.
            </li>
            <li>
              <strong>Developed Advanced Social Media Application Features:</strong>{" "}
              Delivered complex features and optimisations for major
              social media applications, boosting user engagement by
              15%.
            </li>
            <li>
              <strong>Ensured Code Quality and Reliability:</strong>{" "}
              Performed code reviews and testing, reducing deployment
              errors by 25% and maintaining high standards of quality.
            </li>
            <li>
              <strong>Mentored and Developed Junior Talent:</strong>{" "}
              Mentored junior developers, resulting in a 30% improvement
              in their performance and skill levels, strengthening
              overall team capabilities.
            </li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>EPAM Systems — Lead Software Engineer</h3>
              <p className="sh-resume-loc">
                Armenia · November 2020 — March 2022
              </p>
            </div>
          </header>
          <ul>
            <li>
              <strong>Promoted to Lead Role:</strong> Transitioned from
              Senior Software Engineer to Lead, expanding responsibilities
              to include team leadership and project management on
              high-stakes client projects.
            </li>
            <li>
              <strong>Delivered Client-Centric Solutions:</strong>{" "}
              Collaborated with multiple EPAM Systems clients to deliver
              tailored software solutions, resulting in a 95% client
              satisfaction rate through high-quality, customised
              deliverables.
            </li>
            <li>
              <strong>Led Front-End Development:</strong> Managed a
              front-end team across several projects, ensuring alignment
              with client goals. Improved project delivery times by 20%
              through structured planning and close cross-functional
              collaboration.
            </li>
            <li>
              <strong>Fostered a Culture of Continuous Improvement:</strong>{" "}
              Held regular team meetings and 1:1 sessions, boosting team
              productivity by 15% by tracking progress, setting clear
              goals, and providing feedback.
            </li>
            <li>
              <strong>Enhanced Accessibility and International Reach:</strong>{" "}
              Implemented accessibility and internationalisation
              features, increasing user reach by 20% and achieving full
              compliance with global standards.
            </li>
            <li>
              <strong>Mentored Junior Developers:</strong> Provided
              guidance and support for junior team members, improving
              team capability by 30% and reducing onboarding time for
              new hires.
            </li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>EPAM Systems — Senior Software Engineer</h3>
              <p className="sh-resume-loc">
                Armenia · September 2020 — November 2020
              </p>
            </div>
          </header>
          <ul>
            <li>
              <strong>Developed Reusable Components:</strong> Contributed
              to engineering reusable front-end components within a
              multicultural Scrum team, enhancing product efficiency and
              streamlining development.
            </li>
            <li>
              <strong>Enhanced Toll Road Payment System:</strong> Assisted
              in designing a toll-road payment system, optimising payment
              processing speed and improving user satisfaction.
            </li>
            <li>
              <strong>Participated in Recruitment:</strong> Supported the
              interview process for project-specific roles, helping to
              select top candidates and reduce time-to-hire by 10%.
            </li>
            <li>
              <strong>Improved Application Performance:</strong>{" "}
              Contributed to application optimisation, achieving a 10%
              reduction in load times, enhancing user experience.
            </li>
            <li>
              <strong>Maintained Code Quality:</strong> Conducted code
              reviews and testing to ensure high code standards, reducing
              potential deployment issues by 15%.
            </li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>
                Renderforest — Team Lead and Senior Software Engineer
              </h3>
              <p className="sh-resume-loc">
                Armenia · May 2019 — September 2020
              </p>
            </div>
          </header>
          <ul>
            <li>
              <strong>Led Product Overhaul for Video Maker:</strong>{" "}
              Managed a cross-functional team of 5 engineers, QA, and
              designers to rewrite Renderforest&rsquo;s flagship Video
              Maker product, boosting product performance by 40% and
              enhancing user engagement through advanced new features.
            </li>
            <li>
              <strong>Enhanced a Widely-Used Product:</strong> Contributed
              to the Video Maker&rsquo;s success, which serves over 10
              million users and has generated 30 million+ projects,
              making it the company&rsquo;s most popular tool.
            </li>
            <li>
              <strong>Launched a Cross-Platform Media Library:</strong>{" "}
              Developed and launched a Media Library, enabling efficient
              user media management across all Renderforest products,
              which improved user workflow by 25%.
            </li>
            <li>
              <strong>Standardised Development with NPM Module:</strong>{" "}
              Created a shared component library as an NPM module, which
              improved code consistency and reduced development time on
              new products by 20%.
            </li>
            <li>
              <strong>Optimised Agile Workflows:</strong> Supported the
              team in Agile practices, leading to a 15% increase in
              on-time deliverables and consistently high-quality outputs.
            </li>
            <li>
              <strong>Mentored Junior Developers:</strong> Guided junior
              team members, resulting in a 30% improvement in their
              project contributions and overall team capabilities.
            </li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>EventGeek — Senior Software Engineer</h3>
              <p className="sh-resume-loc">
                Armenia · December 2018 — April 2019
              </p>
            </div>
          </header>
          <ul>
            <li>
              Collaborated with an agile team to achieve daily, weekly,
              and monthly development targets, ensuring timely and
              efficient project completion.
            </li>
            <li>
              Focused primarily on the Front-End development of the
              EventGeek application, contributing to its user interface
              and user experience enhancements.
            </li>
            <li>
              Created several core components that were utilised across
              different parts of the product, improving consistency and
              reusability.
            </li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>
                apolloBytes — Team Lead and Senior Software Engineer
              </h3>
              <p className="sh-resume-loc">
                Armenia · April 2017 — December 2018
              </p>
            </div>
          </header>
          <ul>
            <li>
              Led the Cloud Fleet Manager project as a Team Leader and
              Senior Software Engineer, managing a team of up to 5
              people.
            </li>
            <li>
              Rewrote 10 modules of Cloud Fleet Manager into React,
              achieving a significant performance improvement over the
              previous Silverlight application.
            </li>
            <li>
              Mentored team members by sharing resources, expertise,
              values, skills, perspectives, attitudes, and proficiencies,
              facilitating their professional growth.
            </li>
            <li>
              Established best practices for coding, testing, and
              deployment, ensuring high-quality deliverables and
              streamlined processes.
            </li>
            <li>
              Conducted regular team meetings and one-on-one sessions to
              track progress, set goals, and provide constructive
              feedback.
            </li>
            <li>
              Developed the cryptoeye.eu product as a Node.js developer,
              focusing on creating cryptocurrency candles.
            </li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>apolloBytes — Senior Software Engineer</h3>
              <p className="sh-resume-loc">
                Yerevan, Armenia · December 2016 — April 2017
              </p>
            </div>
          </header>
          <ul>
            <li>
              Worked as a Senior Software Engineer at ApolloBytes, a
              company specialising in large-scale web applications.
            </li>
            <li>
              Collaborated with a team of software engineers on the main
              product: Cloud Fleet Manager, serving prominent clients
              such as Hanseaticsoft, Maersk, Atlantic Lloyd, and Nordic
              Hamburg.
            </li>
            <li>
              Developed and maintained 28 interrelated modules of Cloud
              Fleet Manager in parallel, with at least 5 modules in
              development at any given time.
            </li>
            <li>
              Rewrote several modules of Cloud Fleet Manager from
              Silverlight into React, ensuring compatibility with modern
              browsers and enhancing performance.
            </li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>Cyclop Technologies — JavaScript Developer</h3>
              <p className="sh-resume-loc">
                Yerevan · July 2016 — December 2016
              </p>
            </div>
          </header>
          <ul>
            <li>
              Collaborated with a team of developers on the
              &ldquo;MegaMarket&rdquo; product, tailored for the local
              market, enhancing its user experience and functionality.
            </li>
            <li>
              Utilised JavaScript (React/Redux) to improve the front-end
              development, ensuring high performance and responsiveness
              of the &ldquo;MegaMarket&rdquo; product.
            </li>
            <li>
              Contributed to the development of innovative websites,
              implementing best practices for code quality and
              performance.
            </li>
            <li>
              Participated in team meetings to discuss project progress,
              address challenges, and devise effective solutions.
            </li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>Freelance, self-employed — Web Developer</h3>
              <p className="sh-resume-loc">
                Remote · December 2013 — July 2016
              </p>
            </div>
          </header>
          <ul>
            <li>
              Created and developed various web projects for
              international clients, ensuring requirements were met and
              projects were delivered on time.
            </li>
            <li>
              Communicated directly with clients from around the world to
              understand their needs and provide tailored web solutions.
            </li>
            <li>
              Gained extensive experience in remote work, effectively
              collaborating with teammates from different countries.
            </li>
            <li>
              Delivered high-quality, responsive, and user-friendly web
              solutions, adhering to best practices in web development.
            </li>
            <li>
              Ensured projects followed best practices in web
              development, including security and performance
              optimisation.
            </li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>Instigate Mobile CJSC — Junior Web Developer</h3>
              <p className="sh-resume-loc">
                Armenia · August 2013 — November 2013
              </p>
            </div>
          </header>
          <ul>
            <li>
              Collaborated with a team on the &ldquo;Armath&rdquo;
              product, primarily utilising jQuery to enhance functionality
              and user interface.
            </li>
            <li>
              Assisted in the development and maintenance of the
              &ldquo;Armath&rdquo; product, contributing to its overall
              improvement and user experience.
            </li>
            <li>
              Participated in code reviews, helping to improve coding
              standards and ensure high-quality code.
            </li>
          </ul>
        </article>
      </section>

      <section className="sh-resume-section">
        <h2>Education</h2>
        <p>
          <strong>National Polytechnic University of Armenia</strong>{" "}
          · 2013 – 2017
          <br />
          Bachelor&rsquo;s degree, Computer Science and Information
          Technology — Cyber Security
        </p>
      </section>

      <section className="sh-resume-section">
        <h2>Technical Skills</h2>
        <dl className="sh-resume-skills">
          <div>
            <dt>Languages</dt>
            <dd>JavaScript · TypeScript · Hack</dd>
          </div>
          <div>
            <dt>Web Technologies</dt>
            <dd>
              React.js · Node.js · Redux · React-Router · GraphQL ·
              Next.js · Nest.js · SASS · Styled-components · Tailwind CSS
            </dd>
          </div>
          <div>
            <dt>State Management &amp; Middleware</dt>
            <dd>Redux Thunk · Reselect</dd>
          </div>
          <div>
            <dt>Development Practices</dt>
            <dd>
              Micro-Frontend Architecture · TDD · BDD · Unit Testing ·
              Algorithms · Code Reviews · Scrum · CI/CD · Performance
              Optimisation
            </dd>
          </div>
          <div>
            <dt>Tools &amp; Databases</dt>
            <dd>
              PostgreSQL · MongoDB · Git · Webpack · Gulp · Babel · Jest
            </dd>
          </div>
          <div>
            <dt>Top Skills (LinkedIn)</dt>
            <dd>Lit · Leadership · JavaScript</dd>
          </div>
        </dl>
      </section>

      <section className="sh-resume-section">
        <h2>Languages</h2>
        <p>
          <strong>English</strong> (Full Professional) ·{" "}
          <strong>Armenian</strong> (Native or Bilingual) ·{" "}
          <strong>Russian</strong> (Full Professional)
        </p>
      </section>

      <footer className="sh-resume-footer">
        <p>
          A live IDE-themed version of this resume lives at{" "}
          <Link href="/">hovakimyan.dev</Link>. Plain-text version at{" "}
          <a href="/resume.txt">/resume.txt</a>.
        </p>
        <p className="print-hint">
          Tip: the <strong>Download PDF</strong> button above gives you the
          cleanest file — no browser headers or footers. If you prefer{" "}
          <kbd>⌘P</kbd> / <kbd>Ctrl+P</kbd>, uncheck{" "}
          <em>&ldquo;Headers and footers&rdquo;</em> in the print
          dialog&rsquo;s <em>More settings</em>.
        </p>
      </footer>
    </div>
  );
}
