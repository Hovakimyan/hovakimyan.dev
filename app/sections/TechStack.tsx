import { TECH_STACK } from "@/lib/content";

export default function TechStack() {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-section-head">
          <p className="sh-eyebrow">Tech stack</p>
          <h2>
            Tools <em>that ship.</em>
          </h2>
        </div>
        <div className="sh-tech">
          {(Object.entries(TECH_STACK) as [keyof typeof TECH_STACK, readonly string[]][]).map(
            ([lane, items]) => (
              <div key={lane} className="sh-tech-lane">
                <p className="sh-tech-lane-label">{lane}</p>
                <ul className="sh-tech-grid">
                  {items.map((t) => (
                    <li key={t} className="sh-tech-cell">
                      <span className="sh-mono">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
