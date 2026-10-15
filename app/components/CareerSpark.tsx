import Link from "next/link";
import { ABOUT_TIMELINE } from "@/lib/content";

/**
 * Inspector panel: the whole career as one continuous bar built from
 * ABOUT_TIMELINE (the same data as the git log on /about). Each segment
 * runs from one entry to the next; its brightness steps up with the
 * level of the role, so the bar reads as growth, left to right.
 *
 * "Now" is the build date (next.config env), not the visitor's clock,
 * so server and client render the same markup.
 */
type Level = 1 | 2 | 3 | 4;

const LEVEL_LABEL: Record<Level, string> = {
  1: "Developer",
  2: "Senior",
  3: "Lead",
  4: "Team leader / IC5",
};

function levelOf(branch: string, label: string): Level {
  if (/team-leader|IC5/i.test(`${branch} ${label}`)) return 4;
  if (/lead/i.test(branch)) return 3;
  if (/senior/i.test(branch)) return 2;
  return 1;
}

const month = (iso: string) => {
  const [y, m] = iso.split("-").map(Number);
  return y * 12 + (m - 1);
};

// The recent stints get a line each; earlier ones live in the bar.
const RECENT = [
  { name: "BuildOps", role: "IC5 · AI-augmented", from: "2025-04", to: null },
  { name: "EPAM", role: "Senior → Lead → Team Leader", from: "2020-09", to: "2025-04" },
  { name: "Renderforest", role: "Team lead · Video Maker", from: "2019-05", to: "2020-09" },
] as const;

function span(months: number) {
  const y = months / 12;
  return y < 1 ? `${months} mo` : `${Math.round(y * 10) / 10} yrs`;
}

export default function CareerSpark() {
  const now = new Date(process.env.BUILD_DATE ?? "2026-10-01");
  const nowM = now.getFullYear() * 12 + now.getMonth();

  const entries = [...ABOUT_TIMELINE].reverse(); // oldest first
  const startM = month(entries[0].date);
  const total = nowM - startM;
  const segments = entries.map((e, i) => {
    const a = month(e.date);
    const b = i + 1 < entries.length ? month(entries[i + 1].date) : nowM;
    return {
      key: e.date,
      level: levelOf(e.branch, e.label),
      left: ((a - startM) / total) * 100,
      width: ((b - a) / total) * 100,
      title: `${e.date} · ${e.label}`,
      now: i === entries.length - 1,
    };
  });

  // Employers, not branches: EPAM's three promotions count once, and
  // freelance work isn't a team.
  const teams = new Set(
    ABOUT_TIMELINE.map((e) => e.branch.replace("HEAD -> main, ", "").split("/")[0].toLowerCase()),
  );
  teams.delete("freelance");
  const firstLead = entries.find((e) => levelOf(e.branch, e.label) >= 3);

  return (
    <figure className="sh-career">
      <figcaption className="sh-career-head">
        <span className="sh-career-total">{Math.floor(total / 12)}+ years</span>
        <span className="sh-career-label">
          building for the web · since {entries[0].date.slice(0, 4)}
        </span>
      </figcaption>

      <div className="sh-career-track" aria-hidden="true">
        {segments.map((s, i) => (
          <span
            key={s.key}
            className={`sh-career-seg lv-${s.level}${s.now ? " is-now" : ""}`}
            style={{ left: `${s.left}%`, width: `${s.width}%`, "--i": i } as React.CSSProperties}
            title={s.title}
          />
        ))}
      </div>
      <div className="sh-career-axis" aria-hidden="true">
        <span>{entries[0].date.slice(0, 4)}</span>
        <span>{now.getFullYear()}</span>
      </div>
      <ul className="sh-career-legend" aria-hidden="true">
        {([1, 2, 3, 4] as Level[]).map((l) => (
          <li key={l}>
            <span className={`sw lv-${l}`} />
            {LEVEL_LABEL[l]}
          </li>
        ))}
      </ul>

      <dl className="sh-career-facts">
        <div>
          <dt>Teams</dt>
          <dd>{teams.size}</dd>
        </div>
        <div>
          <dt>Lead since</dt>
          <dd>{firstLead?.date.slice(0, 4)}</dd>
        </div>
      </dl>

      <ol className="sh-career-list">
        {RECENT.map((r) => (
          <li key={r.name} className={r.to === null ? "is-now" : undefined}>
            <span className="dot" aria-hidden="true" />
            <span className="name">{r.name}</span>
            <span className="len">{span((r.to ? month(r.to) : nowM) - month(r.from))}</span>
            <span className="role">{r.role}</span>
          </li>
        ))}
      </ol>

      <Link href="/about#git-log" className="sh-career-link">
        Full career git log →
      </Link>
    </figure>
  );
}
