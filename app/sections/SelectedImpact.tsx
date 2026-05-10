import Link from "next/link";
import Icon from "@/app/components/Icon";
import { WORK } from "@/lib/content";

export default function SelectedImpact() {
  // Featured = the 3 case studies with the strongest public metrics.
  const featured = WORK.filter((w) => w.slug !== "buildops");
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-section-head">
          <p className="sh-eyebrow">Selected impact</p>
          <h2>
            Numbers, <em>shipped.</em>
          </h2>
        </div>
        <div className="sh-impact-cards">
          {featured.map((w) => (
            <article key={w.slug} className="sh-impact-card">
              <p className="sh-mono sh-impact-num">{w.number}</p>
              <h3>{w.company}</h3>
              <p className="sh-impact-period">{w.period}</p>
              <p className="sh-impact-pitch">{w.pitch}</p>
              <ul className="sh-impact-metrics">
                {w.metrics.slice(0, 3).map((m) => (
                  <li key={m.label}>
                    <span className="label">{m.label}</span>
                    <span className="value">{m.value}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/work#${w.slug}`} className="sh-link">
                Read case study <Icon name="arrow-right" size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
