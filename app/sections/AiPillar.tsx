import CodeTyping from "@/app/components/CodeTyping";

const ENGINEER_CODE = `const engineer = {
  focus: ["AI-Augmented", "Web Systems", "DX"],
  languages: ["TypeScript", "JavaScript"],
  practice: "Agent-based development",
  mindset: "Ship with impact",
};`;

const SUBTILES = [
  {
    title: "Agent-based development",
    body: "Autonomous + semi-autonomous agents that ship code with humans in the loop.",
  },
  {
    title: "LLM-paired workflows",
    body: "Code review, refactor, and architecture brainstorming paired with frontier models.",
  },
  {
    title: "Accessibility-by-default with AI",
    body: "WCAG 2.1 AA programs scaled with AI-augmented audits and fixes.",
  },
] as const;

export default function AiPillar() {
  return (
    <section className="sh-section sh-ai-pillar">
      <div className="sh-container">
        <div className="sh-section-head">
          <p className="sh-eyebrow">AI-Augmented engineering</p>
          <h2>
            Engineering, <em>augmented.</em>
          </h2>
          <p className="sh-lead">
            I pair daily build work with LLMs and agent systems — for code review, architecture sketches, accessibility audits, and the long-tail of repetitive engineering work that humans shouldn&rsquo;t spend time on. Rigor, ownership, and judgment stay with the engineer.
          </p>
        </div>
        <div className="sh-ai-badge">
          <CodeTyping code={ENGINEER_CODE} className="sh-ai-code sh-mono" />
          <div className="sh-ai-tags">
            <span className="sh-tag sh-tag--accent">AI-AUGMENTED</span>
            <span className="sh-tag">TYPESCRIPT</span>
            <span className="sh-tag sh-tag--ocean">ACCESSIBLE</span>
          </div>
        </div>
        <div className="sh-ai-subtiles">
          {SUBTILES.map((t) => (
            <article key={t.title}>
              <h4>{t.title}</h4>
              <p>{t.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
