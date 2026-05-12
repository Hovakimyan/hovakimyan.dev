import Link from "next/link";

/**
 * ventures.md — rendered as styled markdown. Heavy linking: internal
 * routes are real <Link>s, external URLs open in new tabs.
 *
 * Ashoon is two distinct apps under the same brand:
 *   - ashoon.com   → the AI customer-messaging SaaS (the product)
 *   - ashoon.online → Ashoon Studio, the web-design agency
 */
export default function VenturesFile() {
  return (
    <article className="sh-content sh-md sh-md-rich">
      <h1>
        Ventures <em>/</em> personal work
      </h1>
      <p>
        Things I build outside of my engineering day-job. An AI platform, a
        web-design studio, this site, and whatever lives next on the bench.
      </p>
      <hr />

      <h2>
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

      <h2>
        <span className="num">02</span>
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

      <h2>
        <span className="num">03</span>
        hovakimyan.dev
      </h2>
      <blockquote>The site you&rsquo;re reading.</blockquote>
      <p>
        Built from scratch as a showcase of the practice. Every file in the
        explorer is a real route. The terminal at the bottom is fully
        functional — try typing <code>help</code>, <code>cd /work</code>, or{" "}
        <code>schedule</code>. The hex prism in the inspector pane (on{" "}
        <Link href="/">index.tsx</Link>) is a live Three.js scene with
        mouse-parallax.
      </p>

      <h3>Stack</h3>
      <p>
        <code>Next.js 16</code> · <code>React 19</code> ·{" "}
        <code>Tailwind v4</code> · <code>Three.js</code> ·{" "}
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

      <h2>
        <span className="num">04</span>
        cryptoeye.eu <span style={{ opacity: 0.5 }}>· archived</span>
      </h2>
      <blockquote>Cryptocurrency candles for traders.</blockquote>
      <p>
        Built the Node.js layer that produced the OHLC candle data behind the
        cryptoeye.eu dashboard. Shipped alongside the Cloud Fleet Manager
        work at apolloBytes (2017–2018).
      </p>

      <hr />

      <h2>In the bench</h2>
      <ul>
        <li>Cross-page LLM agent for project discovery</li>
        <li>An accessibility-audit toolkit (in design)</li>
        <li>More ventures coming</li>
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
