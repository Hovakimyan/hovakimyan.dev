import { Tok } from "@/app/components/syntax/Code";

/**
 * Gitignore — patterns rendered as comments + paths. Visual treatment
 * matches the bash file: section comments slate-italic, patterns mist.
 */
export default function GitignoreFile() {
  const lines: Array<["comment" | "prop", string]> = [
    ["comment", "# dependencies"],
    ["prop", "/node_modules"],
    ["prop", "/.pnp"],
    ["prop", ".pnp.*"],
    ["prop", ".yarn/*"],
    ["comment", ""],
    ["comment", "# next.js"],
    ["prop", "/.next/"],
    ["prop", "/out/"],
    ["comment", ""],
    ["comment", "# production"],
    ["prop", "/build"],
    ["comment", ""],
    ["comment", "# misc"],
    ["prop", ".DS_Store"],
    ["prop", "*.pem"],
    ["comment", ""],
    ["comment", "# debug"],
    ["prop", "npm-debug.log*"],
    ["prop", "yarn-debug.log*"],
    ["prop", "yarn-error.log*"],
    ["prop", ".pnpm-debug.log*"],
    ["comment", ""],
    ["comment", "# env files (can opt-in for committing if needed)"],
    ["prop", ".env*"],
    ["comment", ""],
    ["comment", "# vercel"],
    ["prop", ".vercel"],
    ["comment", ""],
    ["comment", "# typescript"],
    ["prop", "*.tsbuildinfo"],
    ["prop", "next-env.d.ts"],
    ["comment", ""],
    ["comment", "# cloudflare"],
    ["prop", ".open-next/"],
    ["prop", ".wrangler/"],
    ["prop", "cloudflare-env.d.ts"],
  ];

  return (
    <article className="sh-content sh-file-gitignore">
      <pre className="sh-code">
        {lines.map((line, i) => {
          const [type, text] = line;
          return (
            <span key={i}>
              {text === "" ? null : <Tok type={type}>{text}</Tok>}
              {"\n"}
            </span>
          );
        })}
      </pre>
    </article>
  );
}
