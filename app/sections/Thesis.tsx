import { SITE } from "@/lib/content";

export default function Thesis() {
  return (
    <section className="sh-section sh-section--tight">
      <div className="sh-container">
        <article className="sh-thesis">
          <p className="sh-eyebrow">Operating thesis</p>
          <h2 className="sh-display sh-thesis-quote">
            {SITE.tagline.replace(/\.$/, "")}
            <span className="sh-thesis-period">.</span>
          </h2>
          <p className="sh-thesis-meta">
            {SITE.pretitle} · 13+ years · Glendale, CA
          </p>
        </article>
      </div>
    </section>
  );
}
