import { ABOUT_TIMELINE, SITE } from "@/lib/content";
import { Tok } from "@/app/components/syntax/Code";

export default function AboutFile() {
  return (
    <article className="sh-content sh-md">
      <h1>
        Engineer. Leader. <em>Builder.</em>
      </h1>
      <p>{SITE.lead}</p>
      <hr />

      <h2 id="story">The story</h2>
      <p>
        I started building for the web in 2013 in Yerevan, Armenia. jQuery first, then React early — I was rewriting Silverlight modules to React in 2017, the same year Hooks were a year out. By 2019 I was leading a 5-person team rewriting Renderforest&rsquo;s Video Maker, a product that has since served 10M+ users and produced 30M+ projects.
      </p>
      <p>
        In 2020 I joined EPAM. Over four-and-a-half years there I went from Senior to Team Leader, architecting micro-frontend systems, running an 8-engineer front-end team, and shipping streaming features for a major client 15% ahead of schedule. WCAG 2.1 AA was a constant theme — I cared about accessibility long before it was a punch-list item for AI tools.
      </p>
      <p>
        In April 2025 I joined BuildOps in Los Angeles as IC5. Same engineering rigor, new domain (vertical SaaS for the trades), and an AI-augmented practice that&rsquo;s been quietly compounding the leverage on every line of code I touch.
      </p>

      <h2 id="leadership">Leadership philosophy</h2>
      <p>
        The most useful question I can ask an engineer on my team is, &ldquo;What&rsquo;s the version of you that you want to be?&rdquo; My job is to clear the path to that version — through 1:1s, code reviews, and the sometimes-uncomfortable conversation about scope or quality. I&rsquo;ve mentored 30+ engineers; the ones I&rsquo;m proudest of all share the same trait — they&rsquo;ve since taught their own teams.
      </p>
      <p>
        On hiring: 15+ candidates interviewed across loops, with onboarding cut by 30%. The trick is hiring for the team you want, not the one you have. That means fewer rockstars and more compound interest.
      </p>

      <h2 id="ai">Engineering with AI</h2>
      <p>
        At BuildOps the practice has compounded into something concrete: I haven&rsquo;t hand-written implementation code in roughly six months. The day is spent orchestrating coding agents, custom <code>skills</code>, and slash commands rather than typing the work myself. Higher throughput, more consistent architectural choices, audit-grade tests and accessibility by default.
      </p>
      <p>
        What that looks like in practice:
      </p>
      <ul>
        <li>
          <strong>Agents, skills &amp; commands —</strong> reusable Claude Code agents and slash commands for code review, a11y audits, architecture analysis, and design-to-code translation. Team conventions captured as durable tooling.
        </li>
        <li>
          <strong>AI-driven research &amp; architecture —</strong> deep-research agents pressure-test trade-offs before any code is written. Decisions stay auditable.
        </li>
        <li>
          <strong>AI-paired testing and code review —</strong> tests, refactors, and PR reviews are agent-paired by default. The agent proposes; the human owns the merge.
        </li>
        <li>
          <strong>WCAG 2.1 AA at CI quality —</strong> AI-led audit workflows surface a11y issues before they ship, not at the end of a compliance cycle.
        </li>
        <li>
          <strong>Design-to-code via MCP —</strong> Figma + design-system integrations turn hand-offs into production components without boilerplate.
        </li>
      </ul>
      <p>
        Rigor still belongs to the engineer. The agent suggests; the human owns.
      </p>

      <h2 id="git-log">Career git log</h2>
      <pre>
        <code>
          {ABOUT_TIMELINE.map((e) => (
            <span key={e.date}>
              <Tok type="punct">* </Tok>
              <Tok type="number">{e.date}</Tok>{" "}
              <Tok type="comment">{`(${e.branch})`}</Tok>{" "}
              <Tok type="prop">{e.label}</Tok>
              {"\n"}
            </span>
          ))}
        </code>
      </pre>

      <hr />

      <h2>Credentials</h2>
      <ul>
        <li>
          <strong>Education:</strong> Bachelor&rsquo;s, Computer Science · Cyber Security · National Polytechnic University of Armenia · 2013–2017
        </li>
        <li>
          <strong>Languages:</strong> English (Full Pro) · Armenian (Native) · Russian (Full Pro)
        </li>
        <li>
          <strong>Based in:</strong> {SITE.location}
        </li>
        <li>
          <strong>Open to:</strong> Remote · Engineering leadership · AI-augmented builds
        </li>
      </ul>
    </article>
  );
}
