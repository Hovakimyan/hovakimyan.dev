import type { Metadata } from "next";
import Image from "next/image";
import { SITE, ABOUT_TIMELINE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engineer. Leader. Builder. Story, leadership philosophy, and the git log of a 13-year career.",
};

export default function AboutPage() {
  return (
    <>
      <section className="sh-page-header">
        <div className="sh-container">
          <p className="sh-eyebrow">About</p>
          <h1>
            Engineer. Leader. <em>Builder.</em>
          </h1>
          <p className="sh-lead">{SITE.lead}</p>
        </div>
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-container sh-about">
          <div className="sh-about-content">
            <h2>The story</h2>
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

            <h2>Engineering with AI</h2>
            <p>
              I treat large language models the way I treat a sharp pair-programmer with patchy domain knowledge — fast, generative, occasionally wrong, always best when scoped. My day-to-day blends agent-paired coding for boilerplate and refactors, LLM-driven code review for quality patches, and accessibility audits that surface issues before they ship.
            </p>
            <p>
              Rigor still belongs to the engineer. The agent can suggest; the human owns.
            </p>

            <h2>Career git log</h2>
            <pre className="sh-timeline sh-mono">
              <code>
                {ABOUT_TIMELINE.map((e, i) => (
                  <span
                    key={e.date}
                    className="sh-timeline-line"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {`* ${e.date}  (${e.branch})  ${e.label}\n`}
                  </span>
                ))}
              </code>
            </pre>
          </div>

          <aside className="sh-about-aside">
            <div className="sh-about-portrait">
              <Image
                src="/images/sergey-portrait.jpg"
                alt="Sergey Hovakimyan"
                width={1066}
                height={1600}
                sizes="(max-width: 760px) 80vw, 360px"
              />
            </div>
            <dl className="sh-credentials">
              <dt>Education</dt>
              <dd>
                Bachelor&rsquo;s, Computer Science · Cyber Security · National Polytechnical University of Armenia, 2013–2017
              </dd>
              <dt>Languages</dt>
              <dd>English (Full Pro) · Armenian (Native) · Russian (Full Pro)</dd>
              <dt>Based in</dt>
              <dd>{SITE.location}</dd>
              <dt>Open to</dt>
              <dd>Remote · Engineering leadership · AI-augmented builds</dd>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
