import Link from "next/link";
import Icon from "@/app/components/Icon";
import { VENTURES } from "@/lib/content";

export default function VenturesPreview() {
  const ashoon = VENTURES[0];
  return (
    <section className="sh-section sh-section--tight">
      <div className="sh-container">
        <article className="sh-ventures-preview">
          <p className="sh-eyebrow">Ventures</p>
          <h2>
            <em>{ashoon.name}</em>
          </h2>
          <p className="sh-lead">{ashoon.tagline}</p>
          <p className="sh-muted sh-ventures-body">{ashoon.body}</p>
          <ul className="sh-ventures-services">
            {ashoon.services?.map((s) => (
              <li key={s}>
                <Icon name="hex" size={14} />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="sh-ventures-actions">
            <Link href="/ventures" className="sh-btn-primary">
              View ventures <Icon name="arrow-right" size={14} />
            </Link>
            {ashoon.urls.length > 0 && ashoon.primaryHref ? (
              <a
                href={ashoon.primaryHref}
                target="_blank"
                rel="noopener"
                className="sh-btn-ghost"
              >
                {ashoon.urls[0].label} <Icon name="external" size={14} />
              </a>
            ) : null}
          </div>
        </article>
      </div>
    </section>
  );
}
