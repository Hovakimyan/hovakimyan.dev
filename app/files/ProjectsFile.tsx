import Link from "next/link";
import ProjectsOverview from "@/app/components/ProjectsOverview";

/**
 * projects.md — rendered as styled markdown. Heavy linking: internal
 * routes are real <Link>s, external URLs open in new tabs.
 *
 * Ashoon is two distinct apps under the same brand:
 *   - ashoon.com   → the AI customer-messaging SaaS (the product)
 *   - ashoon.online → Ashoon Studio, the web-design agency
 */
export default function ProjectsFile() {
  return (
    <article className="sh-content sh-md sh-md-rich">
      <h1>
        Projects <em>/</em> built on my own time
      </h1>
      <p>
        Things I build outside of my engineering day-job. Two shipped
        products, three agent products in development, a web-design studio,
        and this site.
      </p>
      <ProjectsOverview />

      <hr />

      <h2 id="ashoon">
        <span className="num">01</span>
        Ashoon
      </h2>
      <blockquote>
        AI that instantly replies to your Instagram, Facebook &amp; WhatsApp
        DMs — so you never miss a sale.
      </blockquote>
      <p>
        Ashoon is an AI customer-messaging platform that automates
        conversations across Instagram, Facebook Messenger, WhatsApp, and
        website chat. It learns each business — products, prices, FAQs,
        policies — and replies like the smartest teammate, 24/7, in 30
        languages. It doesn&rsquo;t just chat: it takes orders, books
        appointments, and registers customers right from a DM, with full
        human handover when escalation is needed.
      </p>

      <h3>Built on</h3>
      <p>
        <code>Next.js 16</code> · <code>React 19</code> ·{" "}
        <code>NestJS 11</code> · <code>Prisma + PostgreSQL</code> ·{" "}
        <code>pgvector</code> (RAG) · <code>Redis</code> +{" "}
        <code>BullMQ</code> · <code>Stripe</code> · <code>Socket.io</code>
      </p>

      <h3>Visit</h3>
      <p>
        <a href="https://ashoon.com" target="_blank" rel="noopener noreferrer">
          ashoon.com
        </a>
      </p>

      <hr />

      <h2 id="kamui">
        <span className="num">02</span>
        Kamui
      </h2>
      <blockquote>One POS to run your whole shop.</blockquote>
      <p>
        Kamui is a point-of-sale platform for independent retail, built with a
        co-founder and shipped in 2026. It replaces the stack of disconnected
        tools most shops run — POS and order management (in-store, pickup,
        delivery), delivery dispatch with live driver tracking, QR-based
        inventory, receipt and ticket printing through local printer agents,
        SMS and call tracking, and an AI assistant that answers questions
        about the business. Sold as a subscription per location.
      </p>
      <p>
        The engineering constraint that shaped it: multi-tenant isolation
        enforced at the database layer with Postgres row-level security rather
        than in application code, plus role-based staff access, optional 2FA,
        audit trails, and age-restriction compliance for regulated retail.
        Like Ashoon, it was built end-to-end through agent-assisted
        development.
      </p>

      <h3>Stack</h3>
      <p>
        <code>Next.js</code> · <code>React</code> ·{" "}
        <code>PostgreSQL</code> (row-level security) ·{" "}
        <code>Multi-tenant</code> · <code>Railway</code>
      </p>

      <h3>Visit</h3>
      <p>
        <a
          href="https://kamui.digital"
          target="_blank"
          rel="noopener noreferrer"
        >
          kamui.digital
        </a>
      </p>

      <hr />

      <h2 id="ashoon-assistant">
        <span className="num">03</span>
        Ashoon Assistant <span className="sh-badge is-dev">in development</span>
      </h2>
      <blockquote>
        A company assistant in Slack that only answers with what everyone
        reading is allowed to see.
      </blockquote>
      <p>
        Employees ask in a DM or an approved channel, and it answers from
        connected company sources — Slack, Confluence, GitHub, Jira, reviewed
        docs — with a citation, version and checked time on every claim.
      </p>
      <p>
        The hard part is permissions, not retrieval. Access is re-checked live
        per item for the person asking <em>and</em> for everyone in the channel
        the answer lands in, so a channel only gets audience-safe content and
        the full answer goes to the asker&rsquo;s DM. Any write needs exact
        human approval, and every tenant table has forced Postgres row-level
        security. The whole flow runs against a simulated 40-person company
        with private channels, a guest and restricted pages. Built and tested
        on that simulation; not yet piloted on real accounts.
      </p>

      <h3>Stack</h3>
      <p>
        <code>TypeScript</code> · <code>Fastify</code> ·{" "}
        <code>PostgreSQL</code> (row-level security) · <code>Slack API</code>{" "}
        · <code>Claude API</code> (Bedrock, Vertex, Foundry, OpenAI as
        alternatives) · <code>Zod</code>
      </p>

      <h3>Visit</h3>
      <p>
        <a href="https://ashoon.dev" target="_blank" rel="noopener noreferrer">
          ashoon.dev
        </a>
      </p>

      <hr />

      <h2 id="hivehall">
        <span className="num">04</span>
        HiveHall <span className="sh-badge is-dev">in development</span>
      </h2>
      <blockquote>
        From a ticket to linked, reviewable draft PRs across repositories.
      </blockquote>
      <p>
        HiveHall is a local desktop workspace for company engineering work.
        Enter a ticket key and it resolves the authorized context — issue
        details, linked code, CI, the relevant Slack thread — before anything
        is edited. A coding agent then works inside a brokered runtime with
        bounded file, network, process and account access, each repository is
        edited in its own isolated work area, checks run against the exact
        revision, and linked draft PRs open only after approval.
      </p>
      <p>
        It resumes after a crash by reconciling uncertain external actions
        rather than guessing what happened. Merges, deploys and production
        writes are out of scope by design. Every task goes through the full
        test suite, end-to-end tests and an eval gate before it reaches review.
      </p>

      <h3>Stack</h3>
      <p>
        <code>TypeScript</code> · <code>Electron</code> ·{" "}
        <code>React 19</code> · <code>Node.js</code> (
        <code>node:sqlite</code>) · <code>Vitest</code> ·{" "}
        <code>Playwright</code>
      </p>

      <hr />

      <h2 id="deskmate">
        <span className="num">05</span>
        DeskMate <span className="sh-badge is-dev">in development</span>
      </h2>
      <blockquote>
        An installable AI delivery team. Describe the outcome; a Manager gets
        it built.
      </blockquote>
      <p>
        DeskMate is a desktop app where you describe what you want in chat and
        a Manager agent organizes specialists, makes routine decisions,
        resolves internal problems and verifies the result before handing it
        over. A Board shows which agent owns which task and what is blocked,
        so progress is inspectable without you coordinating the team.
      </p>
      <p>
        The rule the design rests on: the Manager proposes and coordinates;
        deterministic application services authorize, persist, dispatch and
        verify. Completion needs current evidence, not confident prose. It
        runs on the user&rsquo;s own Claude Code CLI and subscription — no API
        key required — and is being built against a 148-task,
        dependency-ordered plan.
      </p>

      <h3>Stack</h3>
      <p>
        <code>TypeScript</code> · <code>Electron</code> ·{" "}
        <code>React 19</code> · <code>SQLite</code> ·{" "}
        <code>Claude Code CLI</code> · <code>Vitest</code> ·{" "}
        <code>Playwright</code>
      </p>

      <hr />

      <h2 id="ashoon-studio">
        <span className="num">06</span>
        Ashoon Studio
      </h2>
      <blockquote>
        Professionally-designed websites for U.S. small service businesses.
      </blockquote>
      <p>
        Ashoon Studio is the web-design studio I run alongside my engineering
        practice. We ship clean brochure sites (3–5 pages) for salons, beauty
        pros, trainers, photographers, dentists, and consultants. Every site
        is mobile-responsive from 375px, integrates the client&rsquo;s
        existing booking tool (Fresha · Square · Acuity · Calendly · etc.),
        and ships static on Cloudflare Pages so it stays fast and cheap to
        host.
      </p>

      <h3>Services</h3>
      <ul>
        <li>
          <strong>Brochure websites (3–5 pages).</strong> Astro + Tailwind,
          mobile-responsive, custom domain + SSL.
        </li>
        <li>
          <strong>Booking integration.</strong> We wire the client&rsquo;s
          existing booking tool — Fresha, Square, Vagaro, Booksy, Acuity,
          Calendly — without locking them in.
        </li>
        <li>
          <strong>Local SEO + reviews.</strong> Google Maps, contact form,
          Instagram/Facebook/Google reviews feed, basic SEO setup.
        </li>
        <li>
          <strong>Engineering-grade quality.</strong> Accessibility-audited
          and AI-augmented from day one. (
          <Link href="/about#leadership">about.md#leadership</Link>)
        </li>
      </ul>

      <h3>Visit</h3>
      <p>
        <a
          href="https://ashoon.online"
          target="_blank"
          rel="noopener noreferrer"
        >
          ashoon.online
        </a>
      </p>

      <hr />

      <h2 id="hovakimyan-dev">
        <span className="num">07</span>
        hovakimyan.dev
      </h2>
      <blockquote>The site you&rsquo;re reading.</blockquote>
      <p>
        Built from scratch as a showcase of the practice. Every file in the
        explorer is a real route. The terminal at the bottom is fully
        functional — try typing <code>help</code>, <code>cd /work</code>, or{" "}
        <code>schedule</code>, or press <code>⌘P</code> to jump to any
        file. The home page opens as a rendered preview; switch it to code
        to read it as the <Link href="/">index.tsx</Link> it really is.
      </p>

      <h3>Stack</h3>
      <p>
        <code>Next.js 16</code> · <code>React 19</code> ·{" "}
        <code>Tailwind v4</code> ·{" "}
        <code>OpenNext</code> · <code>Cloudflare Workers</code> ·{" "}
        <code>react-calendly</code>
      </p>

      <h3>Source</h3>
      <p>
        <a
          href="https://github.com/Hovakimyan/hovakimyan.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/Hovakimyan/hovakimyan.dev
        </a>
      </p>

      <hr />

      <h2 id="bench">In the bench</h2>
      <ul>
        <li>Cross-page LLM agent for project discovery</li>
        <li>An accessibility-audit toolkit (in design)</li>
        <li>More on the way</li>
      </ul>

      <hr />

      <p>
        Want to collaborate?{" "}
        <Link href="/contact">Schedule a conversation</Link> or{" "}
        <a href="mailto:hovakimyan.serg@gmail.com">email directly</a>.
      </p>
    </article>
  );
}
