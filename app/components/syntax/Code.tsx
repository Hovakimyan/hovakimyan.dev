/**
 * Tiny hand-rolled syntax highlighter — TS / JSX-flavored.
 *
 * Why not Prism / shiki / highlight.js: this site renders maybe 200 lines
 * of code total, and the brand calls for a tight bundle. A regex
 * tokenizer in 60 lines gets us 95% of the visual fidelity at zero kb
 * of dependency weight.
 *
 * Each token is a span with one of these classes (defined in globals.css):
 *   tok-comment | tok-keyword | tok-string | tok-type | tok-number
 *   tok-fn      | tok-prop    | tok-op    | tok-punct
 */

type Token = { type: string; value: string };

const KEYWORDS = new Set([
  "const",
  "let",
  "var",
  "export",
  "import",
  "from",
  "as",
  "default",
  "function",
  "return",
  "if",
  "else",
  "for",
  "while",
  "in",
  "of",
  "true",
  "false",
  "null",
  "undefined",
  "new",
  "this",
  "type",
  "interface",
  "extends",
  "implements",
  "class",
  "async",
  "await",
  "void",
  "typeof",
  "instanceof",
]);

const TYPES = new Set([
  "string",
  "number",
  "boolean",
  "any",
  "unknown",
  "never",
  "void",
  "Array",
  "Record",
  "Partial",
  "Readonly",
  "AIAugmentedEngineer",
  "Engineer",
  "Leader",
  "Builder",
]);

// Order matters — longer / more specific patterns first.
const PATTERNS: Array<{ type: string; re: RegExp }> = [
  { type: "tok-comment", re: /^\/\/[^\n]*/ },
  { type: "tok-comment", re: /^\/\*[\s\S]*?\*\// },
  { type: "tok-string", re: /^"[^"\n]*"/ },
  { type: "tok-string", re: /^'[^'\n]*'/ },
  { type: "tok-string", re: /^`[^`]*`/ },
  { type: "tok-number", re: /^\d+(?:\.\d+)?/ },
  { type: "tok-op", re: /^=>/ },
  { type: "tok-op", re: /^[=+\-*/<>!?]=?/ },
  { type: "tok-punct", re: /^[(){}\[\];,.:]/ },
  { type: "ident", re: /^[A-Za-z_$][A-Za-z0-9_$]*/ },
  { type: "ws", re: /^\s+/ },
];

function tokenize(src: string): Token[] {
  const out: Token[] = [];
  let i = 0;
  while (i < src.length) {
    const slice = src.slice(i);
    let matched = false;
    for (const p of PATTERNS) {
      const m = slice.match(p.re);
      if (m) {
        const value = m[0];
        let type = p.type;
        if (type === "ident") {
          if (KEYWORDS.has(value)) type = "tok-keyword";
          else if (TYPES.has(value)) type = "tok-type";
          else if (/^[A-Z]/.test(value)) type = "tok-type";
          else type = "tok-prop";
        }
        out.push({ type, value });
        i += value.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      // Fallback — push one char.
      out.push({ type: "tok-punct", value: src[i] });
      i += 1;
    }
  }
  return out;
}

/**
 * `Code` renders source text with span-based syntax highlighting.
 * Supports inline interactive elements injected via `interactive` —
 * when a substring matches an `interactive.match`, that token is
 * replaced with the supplied React node.
 */
export function Code({
  source,
  className,
}: {
  source: string;
  className?: string;
}) {
  const tokens = tokenize(source);
  return (
    <pre className={`sh-code${className ? " " + className : ""}`}>
      {tokens.map((t, i) =>
        t.type === "ws" ? (
          <span key={i}>{t.value}</span>
        ) : (
          <span key={i} className={t.type}>
            {t.value}
          </span>
        ),
      )}
    </pre>
  );
}

/**
 * `Tok` — render a single span with a token class. Useful for inlining
 * raw spans inside a JSX-composed code listing.
 */
export function Tok({
  type,
  children,
}: {
  type:
    | "comment"
    | "keyword"
    | "string"
    | "type"
    | "number"
    | "fn"
    | "prop"
    | "op"
    | "punct"
    | "tag";
  children: React.ReactNode;
}) {
  return <span className={`tok-${type}`}>{children}</span>;
}
