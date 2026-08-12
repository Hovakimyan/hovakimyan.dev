import { WRITING } from "@/lib/content";

/**
 * writing.md — published articles, newest first. Sourced from WRITING in
 * lib/content.ts so adding a piece is a one-line change.
 */
export default function WritingFile() {
  return (
    <article className="sh-content sh-md sh-md-rich">
      <h1>
        Writing <em>/</em> published
      </h1>
      <p>
        Articles on engineering practice — patterns, review discipline, and what
        agent-augmented delivery actually costs.
      </p>
      <hr />

      {WRITING.map((piece, i) => (
        <section key={piece.href} id={piece.slug}>
          <h2>
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            {piece.title}
          </h2>
          <p>
            <strong>{piece.publisher}</strong> · {piece.date}
          </p>
          <p>{piece.blurb}</p>
          <p>
            <a href={piece.href} target="_blank" rel="noopener noreferrer">
              Read on {piece.publisher}
            </a>
          </p>
        </section>
      ))}
    </article>
  );
}
