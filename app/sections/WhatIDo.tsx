import Icon, { type IconName } from "@/app/components/Icon";
import { VERBS } from "@/lib/content";

export default function WhatIDo() {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-section-head">
          <p className="sh-eyebrow">What I do</p>
          <h2>
            Four verbs, <em>one practice.</em>
          </h2>
        </div>
        <div className="sh-verbs">
          {VERBS.map((v) => (
            <article key={v.label} className="sh-verb">
              <span className="sh-verb-icon">
                <Icon name={v.icon as IconName} size={26} />
              </span>
              <h3>{v.label}</h3>
              <p>{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
