import Link from "next/link";

/**
 * ventures.md — rendered as styled markdown. Heavy linking: internal
 * routes are real <Link>s, external URLs open in new tabs.
 */
export default function VenturesFile() {
  return (
    <article className="sh-content sh-md sh-md-rich">
      <h1>
        Ventures <em>/</em> personal work
      </h1>
      <p>
        Things I build outside of my engineering day-job. A studio, this
        site, and whatever lives next on the bench.
      </p>
      <hr />

      <h2>
        <span className="num">01</span>
        Ashoon
      </h2>
      <blockquote>A studio building web systems for product-led teams.</blockquote>
      <p>
        Ashoon is the studio I run alongside my engineering work. We
        build production-grade websites for founders — accessibility-audited and AI-augmented from day one. The portfolio of client sites lives at <a href="https://ashoon.online" target="_blank" rel="noopener noreferrer">ashoon.online</a>.
      </p>

      <h3>Services</h3>
      <ul>
        <li>
          <strong>Web systems for product-led teams.</strong> Next.js + OpenNext on Cloudflare Workers; same conventions across every build.
        </li>
        <li>
          <strong>Accessibility audits &amp; remediation.</strong> WCAG 2.1 AA programs end-to-end — audit, prioritize, remediate, prevent.
        </li>
        <li>
          <strong>AI-augmented builds.</strong> Agents pair-programming with the team; humans own the merge.
        </li>
        <li>
          <strong>Engineering leadership advisory.</strong> Team operating model, hiring rubrics, mentorship cadence. (
          <Link href="/about#leadership">about.md#leadership</Link>)
        </li>
      </ul>

      <h3>Visit</h3>
      <p>
        <a href="https://ashoon.online" target="_blank" rel="noopener noreferrer">
          ashoon.online
        </a>{" "}
        ·{" "}
        <a href="https://ashoon.com" target="_blank" rel="noopener noreferrer">
          ashoon.com
        </a>
      </p>
      <p>
        <Link href="/contact">Schedule a call →</Link> if you want to talk about a build.
      </p>

      <hr />

      <h2>
        <span className="num">02</span>
        hovakimyan.dev
      </h2>
      <blockquote>The site you&rsquo;re reading.</blockquote>
      <p>
        Built from scratch as a showcase of the practice. Every file in the explorer is a real route. The terminal at the bottom is fully functional — try typing <code>help</code>, <code>cd /work</code>, or <code>schedule</code>. The hex prism in the inspector pane (on{" "}
        <Link href="/">index.tsx</Link>) is a live Three.js scene with mouse-parallax.
      </p>

      <h3>Stack</h3>
      <p>
        <code>Next.js 16</code> · <code>React 19</code> · <code>Tailwind v4</code> · <code>Three.js</code> · <code>OpenNext</code> · <code>Cloudflare Workers</code> · <code>react-calendly</code>
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
        <span className="num">03</span>
        cryptoeye.eu <span style={{ opacity: 0.5 }}>· archived</span>
      </h2>
      <blockquote>Cryptocurrency candles for traders.</blockquote>
      <p>
        Built the Node.js layer that produced the OHLC candle data behind the cryptoeye.eu dashboard. Shipped alongside the Cloud Fleet Manager work at apolloBytes (2017–2018).
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
        Want to collaborate? <Link href="/contact">Schedule a conversation</Link> or{" "}
        <a href="mailto:hovakimyan.serg@gmail.com">email directly</a>.
      </p>
    </article>
  );
}
