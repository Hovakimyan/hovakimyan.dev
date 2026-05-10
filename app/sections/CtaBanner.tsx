import Link from "next/link";
import Icon from "@/app/components/Icon";
import BookCallButton from "@/app/components/BookCallButton";
import { SITE } from "@/lib/content";

export default function CtaBanner() {
  return (
    <section className="sh-section sh-section--tight">
      <div className="sh-container">
        <div className="sh-cta-banner">
          <div>
            <h2>
              Let&rsquo;s build <em>something together.</em>
            </h2>
            <p>
              Engineering leadership, micro-frontend architecture, AI-augmented builds — bring the question worth answering.
            </p>
          </div>
          <div className="sh-cta-banner-actions">
            <BookCallButton
              label="Schedule conversation"
              className="sh-btn-primary"
            />
            {SITE.linkedin ? (
              <Link
                href={SITE.linkedin}
                target="_blank"
                rel="noopener"
                className="sh-btn-secondary sh-btn-on-dark"
              >
                LinkedIn <Icon name="external" size={14} />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
