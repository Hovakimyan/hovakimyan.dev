"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import HexPrism from "@/app/components/HexPrism";
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
  "/ventures": [
    { level: 2, label: "01 Ashoon" },
    { level: 2, label: "02 hovakimyan.dev" },
    { level: 2, label: "03 cryptoeye.eu" },
    { level: 2, label: "In the bench" },
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
          Preview · hexPrism()
        </div>
        <div className="sh-inspector-body">
          <div className="sh-inspector-preview">
            <span className="corner">@render</span>
            <HexPrism />
          </div>
          <div className="sh-inspector-id">
            <Image
              src="/images/sergey-portrait.jpg"
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

  const outline = OUTLINES[pathname] || [];
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
                <a href={e.href}>
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
