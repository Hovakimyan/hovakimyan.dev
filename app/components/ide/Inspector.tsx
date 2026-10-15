"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CareerSpark from "@/app/components/CareerSpark";
import Icon from "@/app/components/Icon";

interface OutlineEntry {
  level: 1 | 2 | 3;
  label: string;
  href?: string;
}

const OUTLINES: Record<string, OutlineEntry[]> = {
  "/work": [
    { level: 2, label: "01 BuildOps", href: "#buildops" },
    { level: 2, label: "02 EPAM Systems", href: "#epam" },
    { level: 2, label: "03 Renderforest", href: "#renderforest" },
    { level: 2, label: "04 Cloud Fleet Manager", href: "#cloud-fleet-manager" },
  ],
  "/about": [
    { level: 1, label: "Engineer. Leader. Builder." },
    { level: 2, label: "The story", href: "#story" },
    { level: 2, label: "Leadership philosophy", href: "#leadership" },
    { level: 2, label: "Engineering with AI", href: "#ai" },
    { level: 2, label: "Career git log", href: "#git-log" },
  ],
  "/contact": [
    { level: 2, label: "ENGAGEMENT_AREAS" },
    { level: 2, label: "schedule_call()" },
    { level: 2, label: "send_email()" },
  ],
  "/projects": [
    { level: 2, label: "01 Ashoon", href: "#ashoon" },
    { level: 2, label: "02 Kamui", href: "#kamui" },
    { level: 2, label: "03 Ashoon Assistant", href: "#ashoon-assistant" },
    { level: 2, label: "04 HiveHall", href: "#hivehall" },
    { level: 2, label: "05 DeskMate", href: "#deskmate" },
    { level: 2, label: "06 Ashoon Studio", href: "#ashoon-studio" },
    { level: 2, label: "07 hovakimyan.dev", href: "#hovakimyan-dev" },
    { level: 2, label: "In the bench", href: "#bench" },
  ],
};

export default function Inspector() {
  const pathname = usePathname();
  const isIndex = pathname === "/";

  if (isIndex) {
    return (
      <aside className="sh-inspector" aria-label="Preview pane">
        <div className="sh-inspector-head">
          <span className="dot" />
          Career · since 2013
        </div>
        <div className="sh-inspector-body">
          <CareerSpark />
          <div className="sh-inspector-id">
            <Image
              src="/images/sergey-portrait-160.jpg"
              alt="Sergey Hovakimyan portrait"
              width={56}
              height={56}
              className="sh-inspector-portrait"
            />
            <div className="sh-inspector-id-text">
              <p className="sh-inspector-name">Sergey Hovakimyan</p>
              <p className="sh-inspector-role">AI-Augmented Engineer</p>
              <p className="sh-inspector-now">
                <span className="sh-inspector-now-dot" aria-hidden="true" />
                Now @ <strong>BuildOps</strong>
              </p>
              <Link href="/resume" className="sh-inspector-resume-link">
                View resume →
              </Link>
            </div>
          </div>
          <ul className="sh-inspector-stats" aria-label="Engineer impact metrics">
            <li>
              <span className="key">yearsEngineering:</span>
              <span className="val">13+</span>
            </li>
            <li>
              <span className="key">engineersLed:</span>
              <span className="val">12</span>
            </li>
            <li>
              <span className="key">productivity:</span>
              <span className="val">+20%</span>
            </li>
            <li>
              <span className="key">onboardingCut:</span>
              <span className="val">−30%</span>
            </li>
            <li>
              <span className="key">clientSat:</span>
              <span className="val">95%</span>
            </li>
            <li>
              <span className="key">countries:</span>
              <span className="val">15+</span>
            </li>
            <li>
              <span className="key">standards:</span>
              <span className="val">WCAG 2.1 AA</span>
            </li>
          </ul>
        </div>
      </aside>
    );
  }

  return <Outline key={pathname} entries={OUTLINES[pathname] || []} />;
}

/**
 * Outline with scroll-spy: the section currently at the top of the
 * editor pane is highlighted, the way VS Code's outline follows the
 * cursor. Keyed by route so the active entry resets on navigation.
 */
function Outline({ entries: outline }: { entries: OutlineEntry[] }) {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const root = document.getElementById("main");
    const ids = outline
      .map((e) => e.href?.slice(1))
      .filter((id): id is string => !!id);
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!root || targets.length === 0) return;

    const onScroll = () => {
      // Active = last heading that has crossed the top third of the pane.
      const line = root.getBoundingClientRect().top + root.clientHeight / 3;
      let current: string | null = null;
      for (const el of targets) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      // At the very bottom, the last section wins even if it is short.
      if (root.scrollTop + root.clientHeight >= root.scrollHeight - 4) {
        current = targets[targets.length - 1].id;
      }
      setActiveHref(current ? `#${current}` : null);
    };
    onScroll();
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, [outline]);

  return (
    <aside className="sh-inspector" aria-label="Outline">
      <div className="sh-inspector-head">
        <Icon name="stack" size={12} /> Outline
      </div>
      <div className="sh-inspector-body">
        <ul className="sh-inspector-outline">
          {outline.map((e) => (
            <li
              key={e.label}
              style={{ paddingLeft: (e.level - 1) * 12 }}
            >
              {e.href ? (
                <a
                  href={e.href}
                  className={activeHref === e.href ? "is-active" : undefined}
                  aria-current={activeHref === e.href ? "location" : undefined}
                  onClick={(ev) => {
                    const el = document.getElementById(e.href!.slice(1));
                    if (!el) return;
                    ev.preventDefault();
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.replaceState(null, "", e.href);
                  }}
                >
                  <span className="hash">#</span>
                  {e.label}
                </a>
              ) : (
                <span>
                  <span className="hash">#</span>
                  {e.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
