import type { Metadata } from "next";
import Link from "next/link";
import FilePane from "@/app/components/ide/FilePane";
import { Tok } from "@/app/components/syntax/Code";

export const metadata: Metadata = { title: "404 — file not found" };

export default function NotFound() {
  return (
    <FilePane>
      <article className="sh-content">
        <pre className="sh-code">
          <Tok type="comment">{"// ENOENT — no such file or directory"}</Tok>
          {"\n\n"}
          <Tok type="keyword">throw new</Tok>{" "}
          <Tok type="type">Error</Tok>
          <Tok type="punct">(</Tok>
          <Tok type="string">{'"404 · this route is off the graph"'}</Tok>
          <Tok type="punct">);</Tok>
          {"\n\n"}
          <Tok type="comment">{"// Try one of these routes:"}</Tok>
          {"\n"}
          <Tok type="punct">[</Tok>
          {"\n  "}
          <Link href="/" className="tok-string sh-json-link">{'"/"'}</Link>
          <Tok type="punct">,</Tok>{" "}
          <Tok type="comment">{"// index.tsx"}</Tok>
          {"\n  "}
          <Link href="/work" className="tok-string sh-json-link">{'"/work"'}</Link>
          <Tok type="punct">,</Tok>{" "}
          <Tok type="comment">{"// work.md"}</Tok>
          {"\n  "}
          <Link href="/ventures" className="tok-string sh-json-link">{'"/ventures"'}</Link>
          <Tok type="punct">,</Tok>{" "}
          <Tok type="comment">{"// ventures.json"}</Tok>
          {"\n  "}
          <Link href="/about" className="tok-string sh-json-link">{'"/about"'}</Link>
          <Tok type="punct">,</Tok>{" "}
          <Tok type="comment">{"// about.md"}</Tok>
          {"\n  "}
          <Link href="/contact" className="tok-string sh-json-link">{'"/contact"'}</Link>
          <Tok type="punct">,</Tok>{" "}
          <Tok type="comment">{"// contact.sh"}</Tok>
          {"\n"}
          <Tok type="punct">]</Tok>
          <span className="cursor" aria-hidden="true" />
        </pre>
      </article>
    </FilePane>
  );
}
