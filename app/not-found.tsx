import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/app/components/Icon";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="sh-not-found">
      <div className="sh-container sh-not-found-inner">
        <p className="num">404</p>
        <h1>This route is off the graph.</h1>
        <p>
          The link you followed may be outdated or the page may have moved. Let&rsquo;s get you back on a known path.
        </p>
        <div className="actions">
          <Link href="/" className="sh-btn-primary">
            Return home <Icon name="arrow-right" size={14} />
          </Link>
          <Link href="/work" className="sh-btn-secondary">
            Browse work
          </Link>
        </div>
      </div>
    </section>
  );
}
