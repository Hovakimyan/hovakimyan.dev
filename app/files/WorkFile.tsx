import { Tok } from "@/app/components/syntax/Code";
import { WORK } from "@/lib/content";

const COMMITS: Record<string, string[]> = {
  buildops: [
    "* a92f47c (HEAD -> main) feat(agent): a11y-audit skill — WCAG 2.1 AA in CI",
    "* 7b9d104                 chore(commands): /architecture-review slash cmd",
    "* 5e1b083                 perf: agent-paired LCP cut · −240ms",
    "* 2f8e16a                 docs: design-to-code MCP recipe (Figma → React)",
  ],
  epam: [
    "* 8b2f1a9 (epam/streaming) feat: streaming player v2 · 15% ahead",
    "* 3c4d5e2                  refactor: micro-frontend boundary · −30% deps",
    "* a3c4d5e (epam/a11y)      fix(a11y): WCAG focus traps on modal",
  ],
  renderforest: [
    "* 4e1f8c2 (rf/video-maker) feat: pipeline rewrite v2 · +40% perf",
    "* 7d9a1c4                  feat: cross-platform media library · +25% workflow",
  ],
  "cloud-fleet-manager": [
    "* 1a2b3c4 (cfm/migration) feat: FleetGrid → React",
    "* 9d8e7f6                 chore: 28 modules migrated · last Silverlight removed",
  ],
};

export default function WorkFile() {
  return (
    <article className="sh-content sh-md">
      <h1>
        Selected <em>work.</em>
      </h1>
      <p>
        Four case studies from a 13-year career. Architecture, leadership, and accessibility consistently treated as first-class engineering work.
      </p>
      <hr />

      {WORK.map((w) => (
        <section key={w.slug} id={w.slug}>
          <h2>
            <span className="num">{w.number}</span>
            {w.company}
          </h2>
          <p>
            <strong>{w.role}</strong> · {w.period} · {w.location}
          </p>
          <blockquote>{w.pitch}</blockquote>
          <p>{w.body}</p>
          <p>
            {w.metrics.map((m) => (
              <span key={m.label} className="sh-md-metric">
                {m.label}: {m.value}
              </span>
            ))}
          </p>

          {COMMITS[w.slug] ? (
            <pre>
              <code>
                {COMMITS[w.slug].map((line, i) => {
                  // Split the git log line so the hash gets its own color.
                  const match = line.match(/^(\*\s+)([a-f0-9]+)(\s+)(\([^)]+\))?(.*)$/);
                  if (!match) return <span key={i}>{line}{"\n"}</span>;
                  const [, star, hash, sp, branch, rest] = match;
                  return (
                    <span key={i}>
                      <Tok type="punct">{star}</Tok>
                      <Tok type="number">{hash}</Tok>
                      {sp}
                      {branch ? <Tok type="comment">{branch} </Tok> : null}
                      <Tok type="prop">{rest}</Tok>
                      {"\n"}
                    </span>
                  );
                })}
              </code>
            </pre>
          ) : null}

          <p>
            <code>tags:</code>{" "}
            {w.tags.map((t, i) => (
              <span key={t}>
                <code>{t}</code>
                {i < w.tags.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </section>
      ))}
    </article>
  );
}
