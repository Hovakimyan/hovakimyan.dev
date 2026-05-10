import Icon, { type IconName } from "@/app/components/Icon";
import { PRINCIPLES } from "@/lib/content";

export default function Principles() {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-section-head">
          <p className="sh-eyebrow">Principles</p>
          <h2>
            How the work <em>gets made.</em>
          </h2>
        </div>
        <ul className="sh-principles">
          {PRINCIPLES.map((p, i) => (
            <li key={p.name} className="sh-principle">
              <span className="sh-principle-num">0{i + 1}</span>
              <span className="sh-principle-icon">
                <Icon name={p.icon as IconName} size={26} />
              </span>
              <h4>{p.name}</h4>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
