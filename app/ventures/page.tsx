import type { Metadata } from "next";
import Icon from "@/app/components/Icon";
import { VENTURES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ventures",
  description: "Personal projects — the Ashoon studio and this site.",
};

export default function VenturesPage() {
  const ashoon = VENTURES[0];
  const dotdev = VENTURES[1];
  return (
    <>
      <section className="sh-page-header">
        <div className="sh-container">
          <p className="sh-eyebrow">Ventures</p>
          <h1>
            Things I build <em>outside of work.</em>
          </h1>
          <p className="sh-lead">
            Ventures the engineering practice keeps alive — a studio, this site, and whatever lives next on the bench.
          </p>
        </div>
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-container">
          <article className="sh-ventures-card sh-ventures-card--featured">
            <p className="sh-eyebrow">Featured</p>
            <h2>{ashoon.name}</h2>
            <p className="sh-lead">{ashoon.tagline}</p>
            <p className="sh-muted sh-ventures-body">{ashoon.body}</p>
            <ul className="sh-ventures-services">
              {ashoon.services?.map((s) => (
                <li key={s}>
                  <Icon name="hex" size={14} /> <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="sh-ventures-actions">
              {ashoon.urls.map((u) => (
                <a
                  key={u.href}
                  href={u.href}
                  target="_blank"
                  rel="noopener"
                  className="sh-tag sh-tag--accent sh-mono"
                >
                  {u.label} <Icon name="external" size={12} />
                </a>
              ))}
            </div>
            <a
              href={ashoon.primaryHref}
              target="_blank"
              rel="noopener"
              className="sh-btn-primary"
            >
              Visit Ashoon <Icon name="arrow-right" size={14} />
            </a>
          </article>

          <article className="sh-ventures-card">
            <h3>{dotdev.name}</h3>
            <p className="sh-muted">{dotdev.tagline}</p>
            <p>{dotdev.body}</p>
            <ul className="sh-ventures-stack">
              {dotdev.stack?.map((s) => (
                <li key={s} className="sh-mono">
                  {s}
                </li>
              ))}
            </ul>
          </article>

          <article className="sh-ventures-future">
            <p className="sh-mono">{"// More coming."}</p>
          </article>
        </div>
      </section>
    </>
  );
}
