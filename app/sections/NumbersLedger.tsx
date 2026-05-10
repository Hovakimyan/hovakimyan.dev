import CountUp from "@/app/components/CountUp";
import { HEADLINE_STATS } from "@/lib/content";

export default function NumbersLedger() {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-section-head">
          <p className="sh-eyebrow">By the numbers</p>
          <h2>
            Receipts <em>that compound.</em>
          </h2>
        </div>
        <div className="sh-numbers">
          {HEADLINE_STATS.map((s) => (
            <article key={s.label} className="sh-number">
              <span className="sh-number-figure">
                {s.display ? (
                  s.display
                ) : (
                  <CountUp
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                )}
              </span>
              <span className="sh-number-label">{s.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
