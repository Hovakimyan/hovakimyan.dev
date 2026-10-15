"use client";

type Status = "live" | "dev" | "archived";

const ITEMS: {
  id: string;
  num: string;
  name: string;
  kind: string;
  line: string;
  status: Status;
}[] = [
  { id: "ashoon", num: "01", name: "Ashoon", kind: "AI messaging SaaS", line: "Answers Instagram, Facebook & WhatsApp DMs, takes orders, books.", status: "live" },
  { id: "kamui", num: "02", name: "Kamui", kind: "Retail POS", line: "One POS to run your whole shop. Co-founded, shipped 2026.", status: "live" },
  { id: "ashoon-assistant", num: "03", name: "Ashoon Assistant", kind: "Slack agent", line: "Company answers that only show what every reader may see.", status: "dev" },
  { id: "hivehall", num: "04", name: "HiveHall", kind: "Desktop · Electron", line: "From a ticket to linked, reviewable draft PRs across repos.", status: "dev" },
  { id: "deskmate", num: "05", name: "DeskMate", kind: "Desktop · Electron", line: "Describe an outcome; a Manager agent gets it built.", status: "dev" },
  { id: "ashoon-studio", num: "06", name: "Ashoon Studio", kind: "Web-design studio", line: "Fast brochure sites for U.S. small service businesses.", status: "live" },
  { id: "hovakimyan-dev", num: "07", name: "hovakimyan.dev", kind: "This site", line: "An IDE you can read. Next.js on Cloudflare Workers.", status: "live" },
];

const STATUS_LABEL: Record<Status, string> = {
  live: "live",
  dev: "in development",
  archived: "archived",
};

/**
 * At-a-glance index of every project, above the long-form sections.
 * The cursor-following spotlight is a CSS radial gradient fed by two
 * custom properties, so pointer moves never trigger a React render.
 */
export default function ProjectsOverview() {
  const onPointerMove = (e: React.PointerEvent) => {
    const card = (e.target as HTMLElement).closest<HTMLElement>(".sh-vcard");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <nav aria-label="Projects overview">
      <div className="sh-vgrid" onPointerMove={onPointerMove}>
        {ITEMS.map((v) => (
          <a
            key={v.id}
            href={`#${v.id}`}
            className={`sh-vcard is-${v.status}`}
            onClick={(e) => {
              const target = document.getElementById(v.id);
              if (!target) return;
              e.preventDefault();
              target.scrollIntoView({ behavior: "smooth", block: "start" });
              history.replaceState(null, "", `#${v.id}`);
            }}
          >
            <span className="sh-vcard-top">
              <span className="sh-vcard-num">{v.num}</span>
              <span className={`sh-badge is-${v.status}`}>
                {STATUS_LABEL[v.status]}
              </span>
            </span>
            <span className="sh-vcard-name">{v.name}</span>
            <span className="sh-vcard-kind">{v.kind}</span>
            <span className="sh-vcard-line">{v.line}</span>
            <span className="sh-vcard-go" aria-hidden="true">
              read →
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
