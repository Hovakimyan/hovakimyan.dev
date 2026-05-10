import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import { WORK } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies — BuildOps, EPAM, Renderforest, Cloud Fleet Manager.",
};

const EVIDENCE: Record<string, string> = {
  epam: `// Micro-frontend module-federation contract (excerpt)
const remotes = {
  shell:  "shell@/remoteEntry.js",
  cms:    "cms@/remoteEntry.js",
  player: "player@/remoteEntry.js",
};`,
  renderforest: `// Video Maker render pipeline (excerpt)
const render = composer
  .scene(timeline)
  .pipe(applyEffects)
  .pipe(encode({ format: "mp4", crf: 18 }));`,
  "cloud-fleet-manager": `// Migration adapter — Silverlight → React
const adapter = createSilverlightBridge({
  module: "FleetGrid",
  bidirectional: true,
});`,
};

export default function WorkPage() {
  return (
    <>
      <section className="sh-page-header">
        <div className="sh-container">
          <p className="sh-eyebrow">Work</p>
          <h1>
            Work that <em>ships.</em>
          </h1>
          <p className="sh-lead">
            Four case studies across product-led teams. Architecture, leadership, and accessibility consistently treated as first-class engineering work.
          </p>
        </div>
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-container">
          <div className="sh-monographs">
            {WORK.map((w) => (
              <article key={w.slug} id={w.slug} className="sh-monograph">
                <div className="sh-monograph-meta">
                  <p className="sh-mono sh-monograph-num">{w.number}</p>
                  <p className="sh-mono sh-monograph-period">{w.period}</p>
                  <h3>{w.role}</h3>
                  <p className="sh-monograph-location">{w.location}</p>
                  <ul className="sh-monograph-tags">
                    {w.tags.map((t) => (
                      <li key={t}>
                        <span className="sh-tag">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sh-monograph-body">
                  <h2>{w.company}</h2>
                  <p className="sh-monograph-pitch">{w.pitch}</p>
                  <p className="sh-monograph-text">{w.body}</p>
                  <ul className="sh-monograph-metrics">
                    {w.metrics.map((m) => (
                      <li key={m.label}>
                        <span className="label">{m.label}</span>
                        <span className="value">{m.value}</span>
                      </li>
                    ))}
                  </ul>
                  {EVIDENCE[w.slug] ? (
                    <pre className="sh-evidence sh-mono">
                      <code>{EVIDENCE[w.slug]}</code>
                    </pre>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-container">
          <div className="sh-cta-banner">
            <div>
              <h2>
                Discuss your <em>product.</em>
              </h2>
              <p>
                Roadmap to sharpen, launch to plan, team to grow? Let&rsquo;s talk.
              </p>
            </div>
            <div className="sh-cta-banner-actions">
              <Link href="/contact" className="sh-btn-primary">
                Start a conversation <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
