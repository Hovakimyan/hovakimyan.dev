import type { Metadata } from "next";
import BookCallButton from "@/app/components/BookCallButton";
import { SITE, CONTACT_TOPICS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a 30-minute strategic conversation with Sergey Hovakimyan.",
};

export default function ContactPage() {
  return (
    <>
      <section className="sh-page-header">
        <div className="sh-container">
          <p className="sh-eyebrow">Get in touch</p>
          <h1>
            A 30-minute <em>conversation.</em>
          </h1>
          <p className="sh-lead">
            Engineering leadership, micro-frontend architecture, accessibility programs, AI-augmented builds. Bring the question worth answering — we&rsquo;ll figure out the rest.
          </p>
        </div>
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-container">
          <div className="sh-contact-grid">
            <article id="book" className="sh-contact-card sh-contact-card--dark">
              <h3>Schedule a conversation</h3>
              <p className="description">
                Thirty minutes, focused. I&rsquo;ll come prepared.
              </p>
              <BookCallButton label="Book the call" className="sh-btn-primary" />
            </article>

            <article className="sh-contact-card">
              <h3>Email directly</h3>
              <p className="description">
                Prefer writing first? I reply within 24 hours on weekdays.
              </p>
              <a href={`mailto:${SITE.email}`} className="sh-mono email-link">
                {SITE.email}
              </a>
            </article>
          </div>

          <div className="sh-engagement">
            <p className="sh-eyebrow">Engagement areas</p>
            <h3>What we can build together</h3>
            <ul className="sh-engagement-list">
              {CONTACT_TOPICS.map((t, i) => (
                <li key={t.title}>
                  <span className="num sh-mono">0{i + 1}</span>
                  <div>
                    <h4>{t.title}</h4>
                    <p>{t.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <span className="sh-contact-meta">
              <span className="dot" /> {SITE.location} · Open to remote
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
