import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, TECH_STACK } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume — Sergey Hovakimyan, AI-Augmented Software Engineer",
  description:
    "13+ years of software engineering. Plain resume view, print-friendly. " +
    SITE.lead,
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Clean, recruiter-friendly resume — light theme, semantic HTML,
 * print-friendly (use Cmd+P to save as PDF). No IDE chrome.
 */
export default function ResumePage() {
  return (
    <div className="sh-resume">
      <header className="sh-resume-header">
        <div className="sh-resume-id">
          <h1>{SITE.name}</h1>
          <p className="sh-resume-title">{SITE.role}</p>
          <p className="sh-resume-meta">
            {SITE.location} · 13+ years · Open to remote
          </p>
        </div>
        <Image
          src="/images/sergey-portrait.jpg"
          alt={`Portrait of ${SITE.name}`}
          width={180}
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
          <a href={SITE.linkedin} target="_blank" rel="noopener">
            /in/hovakimyanserg
          </a>
        </span>
        <span>
          <strong>Website</strong>
          <a href="https://hovakimyan.dev" target="_blank" rel="noopener">
            hovakimyan.dev
          </a>
        </span>
        <span>
          <strong>Schedule</strong>
          <a
            href="https://calendly.com/hovakimyan-serg/30min"
            target="_blank"
            rel="noopener"
          >
            calendly.com/hovakimyan-serg/30min
          </a>
        </span>
      </nav>

      <section className="sh-resume-section">
        <h2>Summary</h2>
        <p>
          AI-Augmented Software Engineer with 13+ years across JavaScript,
          TypeScript, React, Next.js, Node.js, Redux, and GraphQL.
          Specialises in micro-frontend architectures, accessibility
          (WCAG 2.1 AA), and AI-augmented engineering workflows. Has led
          cross-functional teams of up to 12 engineers and mentored
          numerous engineers into senior roles. Continuous improvement
          advocate (TDD, BDD, CI/CD).
        </p>
      </section>

      <section className="sh-resume-section">
        <h2>Highlights</h2>
        <ul>
          <li>
            <strong>Architect &amp; Innovator —</strong> Spearheaded
            Micro-Frontend Architectures across leading tech companies
            (Renderforest, EPAM clients, BuildOps).
          </li>
          <li>
            <strong>Team Leadership &amp; Development —</strong> Led teams
            of up to 12 engineers; mentored juniors who have since
            advanced to key roles.
          </li>
          <li>
            <strong>Strategic Project Management —</strong> Coordinated
            with Client Management, Design, and Marketing teams from
            concept to deployment.
          </li>
          <li>
            <strong>Continuous Improvement Advocate —</strong> TDD, BDD,
            and CI/CD best practices, ensuring high-quality maintainable
            code.
          </li>
        </ul>
      </section>

      <section className="sh-resume-section">
        <h2>Experience</h2>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>BuildOps — IC5 Software Engineer</h3>
              <p className="sh-resume-loc">
                Los Angeles, California · April 2025 — Present
              </p>
            </div>
          </header>
          <p>
            Vertical SaaS platform for the trades industry. High-leverage
            frontend work across web and mobile-web surfaces, performance
            budgets, and cross-team alignment.
          </p>
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
              Designed a Micro-Frontend Architecture in React / Redux /
              TypeScript — improved modularity, cut code dependencies by
              30%.
            </li>
            <li>
              Led an 8-person front-end team across multiple accounts;
              improved delivery times by 20%.
            </li>
            <li>
              Drove WCAG 2.1 AA compliance, extending project reach to
              15+ countries; boosted international engagement by 30%.
            </li>
            <li>
              Shipped streaming features for a major client 15% ahead of
              schedule.
            </li>
            <li>
              Increased team engagement and productivity by 20%; cut
              onboarding time by 30%; interviewed 15+ candidates.
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
              Led front-end development across multiple projects; project
              delivery speed +15%.
            </li>
            <li>
              Architected a Micro-Frontend system; reduced build times by
              20%.
            </li>
            <li>
              Full WCAG compliance; expanded app reach by 25%; user
              engagement +15%.
            </li>
            <li>
              20+ technical interviews; new-hire onboarding time -30%.
            </li>
            <li>
              Code review + testing; deployment errors -25%.
            </li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>EPAM Systems — Lead Software Engineer</h3>
              <p className="sh-resume-loc">
                Yerevan, Armenia · November 2020 — March 2022
              </p>
            </div>
          </header>
          <ul>
            <li>
              Promoted from Senior to Lead. Delivered tailored solutions
              with a 95% client satisfaction rate.
            </li>
            <li>
              Managed a front-end team; project delivery times +20%;
              productivity +15%.
            </li>
            <li>
              Implemented accessibility and internationalisation
              features; user reach +20%.
            </li>
            <li>Mentored junior developers.</li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>EPAM Systems — Senior Software Engineer</h3>
              <p className="sh-resume-loc">
                Yerevan, Armenia · September 2020 — November 2020
              </p>
            </div>
          </header>
          <ul>
            <li>
              Reusable front-end components within a multicultural Scrum
              team.
            </li>
            <li>
              Toll-road payment system: optimised payment processing
              speed.
            </li>
            <li>Application performance: load times -10%.</li>
          </ul>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>
                Renderforest — Team Lead &amp; Senior Software Engineer
              </h3>
              <p className="sh-resume-loc">
                Yerevan · May 2019 — September 2020
              </p>
            </div>
          </header>
          <ul>
            <li>
              Led a 5-person cross-functional team rewriting the Video
              Maker — 10M+ users, 30M+ projects, +40% performance.
            </li>
            <li>
              Launched a cross-platform Media Library; user workflow
              +25%.
            </li>
            <li>
              Created a shared NPM component library; new-product setup
              time -20%.
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
          <p>
            Front-end development of the EventGeek application; reusable
            core components.
          </p>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>
                apolloBytes — Team Lead &amp; Senior Software Engineer
              </h3>
              <p className="sh-resume-loc">
                Yerevan · December 2016 — December 2018
              </p>
            </div>
          </header>
          <ul>
            <li>
              Cloud Fleet Manager — maritime fleet platform for Maersk,
              Hanseaticsoft, Atlantic Lloyd, Nordic Hamburg.
            </li>
            <li>
              Led the Silverlight → React migration of 10 of 28
              interrelated modules.
            </li>
            <li>
              Established coding, testing, deployment practices for the
              team.
            </li>
            <li>
              Developed cryptoeye.eu (Node.js) — cryptocurrency candles.
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
          <p>&ldquo;MegaMarket&rdquo; product with React / Redux.</p>
        </article>

        <article className="sh-resume-job">
          <header>
            <div>
              <h3>Freelance — Web Developer</h3>
              <p className="sh-resume-loc">
                Remote · December 2013 — July 2016
              </p>
            </div>
          </header>
          <p>
            Responsive web solutions for international clients; remote
            cross-cultural collaboration.
          </p>
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
          <p>&ldquo;Armath&rdquo; product with jQuery.</p>
        </article>
      </section>

      <section className="sh-resume-section">
        <h2>Education</h2>
        <p>
          <strong>National Polytechnical University of Armenia</strong>{" "}
          · 2013 – 2017
          <br />
          Bachelor&rsquo;s degree, Computer Science and Information
          Technology — Cyber Security
        </p>
      </section>

      <section className="sh-resume-section">
        <h2>Technical skills</h2>
        <dl className="sh-resume-skills">
          {Object.entries(TECH_STACK).map(([lane, items]) => (
            <div key={lane}>
              <dt>{lane}</dt>
              <dd>{(items as readonly string[]).join(" · ")}</dd>
            </div>
          ))}
          <div>
            <dt>State / middleware</dt>
            <dd>Redux Thunk · Reselect</dd>
          </div>
          <div>
            <dt>AI / agents</dt>
            <dd>
              Agent-based development · LLM-paired workflows · AI-augmented
              accessibility audits
            </dd>
          </div>
        </dl>
      </section>

      <section className="sh-resume-section">
        <h2>Languages</h2>
        <p>
          English (Full Professional) · Armenian (Native) · Russian (Full
          Professional)
        </p>
      </section>

      <section className="sh-resume-section">
        <h2>Currently open to</h2>
        <p>
          Engineering leadership · Micro-frontend architecture ·
          Accessibility audits &amp; WCAG programs · AI-augmented
          development workflows · Team development &amp; mentorship
        </p>
      </section>

      <footer className="sh-resume-footer">
        <p>
          A live IDE-themed version of this resume lives at{" "}
          <Link href="/">hovakimyan.dev</Link>. Plain-text version at{" "}
          <a href="/resume.txt">/resume.txt</a>.
        </p>
        <p className="print-hint">
          Tip: press <kbd>⌘P</kbd> / <kbd>Ctrl+P</kbd> to save this as a
          PDF.
        </p>
      </footer>
    </div>
  );
}
