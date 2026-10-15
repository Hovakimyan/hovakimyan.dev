"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import CountUp from "@/app/components/CountUp";
import { useIde } from "@/app/components/ide/IdeContext";
import { HEADLINE_STATS, SITE, VERBS, WORK } from "@/lib/content";

type Mode = "code" | "preview";
const STORAGE_KEY = "sh-home-view";

/**
 * index.tsx has two faces, like a markdown file in VS Code: a rendered
 * preview (the default, so a first-time visitor sees who this is in
 * seconds) and the TypeScript source (the site's signature, one click
 * away). The choice is remembered.
 */
export default function HomeView({ code }: { code: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("preview");

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "code") {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time restore of a saved preference after hydration
        setMode("code");
      }
    } catch {
      // Storage blocked: stay on the default.
    }
  }, []);

  const choose = (m: Mode) => {
    setMode(m);
    try {
      localStorage.setItem(STORAGE_KEY, m);
    } catch {
      // Not persisted; the switch still works for this visit.
    }
  };

  return (
    <div className="sh-homeview">
      <div className="sh-viewswitch" role="group" aria-label="View">
        <button
          type="button"
          aria-pressed={mode === "code"}
          onClick={() => choose("code")}
        >
          <Icon name="code" size={12} /> Code
        </button>
        <button
          type="button"
          aria-pressed={mode === "preview"}
          onClick={() => choose("preview")}
        >
          <Icon name="play" size={12} /> Preview
        </button>
        <span
          className="sh-viewswitch-pill"
          data-mode={mode}
          aria-hidden="true"
        />
      </div>
      {mode === "code" ? code : <HomePreview />}
    </div>
  );
}

function HomePreview() {
  const { openBooking } = useIde();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <article className="sh-content sh-preview">
      <p className="sh-preview-eyebrow">
        <span className="sh-preview-live" aria-hidden="true" />
        Now at BuildOps · {SITE.location}
      </p>
      <h1 className="sh-preview-name">{SITE.name}</h1>
      <p className="sh-preview-role">{SITE.role}</p>
      <p className="sh-preview-tagline">{SITE.tagline}</p>
      <p className="sh-preview-lead">{SITE.lead}</p>

      <div className="sh-preview-cta">
        <button type="button" className="sh-btn is-primary" onClick={openBooking}>
          <Icon name="calendar" size={14} /> Book a 30-min call
        </button>
        <Link href="/work" className="sh-btn">
          See the work →
        </Link>
        <button
          type="button"
          className="sh-copychip"
          onClick={copyEmail}
          aria-label={`Copy email address ${SITE.email}`}
        >
          <span className="sh-copychip-text">{SITE.email}</span>
          <Icon name={copied ? "check" : "doc"} size={13} />
          <span className="sh-copychip-toast" role="status">
            {copied ? "Copied" : ""}
          </span>
        </button>
      </div>

      <ul className="sh-preview-stats">
        {HEADLINE_STATS.map((s) => (
          <li key={s.label}>
            <span className={`v${s.display ? " is-text" : ""}`}>
              {s.display ?? (
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
              )}
            </span>
            <span className="k">{s.label}</span>
          </li>
        ))}
      </ul>

      <h2 className="sh-preview-h">What I do</h2>
      <ul className="sh-preview-verbs">
        {VERBS.map((v) => (
          <li key={v.label}>
            <Icon name={v.icon} size={16} />
            <strong>{v.label}</strong>
            <span>{v.body}</span>
          </li>
        ))}
      </ul>

      <h2 className="sh-preview-h">Where</h2>
      <ol className="sh-preview-timeline">
        {WORK.map((w) => (
          <li key={w.slug}>
            <Link href={`/work#${w.slug}`}>
              <span className="co">{w.company}</span>
              <span className="role">{w.role}</span>
              <span className="when">{w.period}</span>
            </Link>
          </li>
        ))}
      </ol>
    </article>
  );
}
