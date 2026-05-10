import Link from "next/link";
import Icon from "./Icon";
import { NAV_ITEMS, SITE } from "@/lib/content";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="sh-footer">
      <p className="sh-footer-mono sh-mono">
        &gt; engineer.impact(); → BUILDING <span className="sep">·</span>{" "}
        LEADING <span className="sep">·</span> AUTOMATING{" "}
        <span className="sep">·</span> ADVOCATING
      </p>
      <div className="sh-footer-inner">
        <div>
          <p className="mark">{SITE.name}</p>
          <p className="role">{SITE.role}</p>
          <p className="blurb">{SITE.tagline}</p>
        </div>
        <div>
          <h5>Connect</h5>
          <ul>
            <li>
              <a href={`mailto:${SITE.email}`}>
                <Icon name="mail" size={14} /> Email
              </a>
            </li>
            {SITE.linkedin ? (
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noopener">
                  <Icon name="linkedin" size={14} /> LinkedIn
                </a>
              </li>
            ) : null}
            {SITE.github ? (
              <li>
                <a href={SITE.github} target="_blank" rel="noopener">
                  <Icon name="github" size={14} /> GitHub
                </a>
              </li>
            ) : null}
            <li>
              <Link href="/contact">
                <Icon name="calendar" size={14} /> Schedule
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Site</h5>
          <ul>
            {NAV_ITEMS.filter((n) => n.href !== "/").map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Based in</h5>
          <ul>
            <li>{SITE.location}</li>
            <li>Open to remote</li>
          </ul>
        </div>
      </div>
      <div className="sh-footer-meta">
        <span>© {year} {SITE.name}. All rights reserved.</span>
        <span>
          Built by{" "}
          <a href="https://ashoon.online" target="_blank" rel="noopener">
            Ashoon
          </a>
        </span>
        <span>hovakimyan.dev</span>
      </div>
    </footer>
  );
}
