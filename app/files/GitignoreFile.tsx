import Link from "next/link";
import { Tok } from "@/app/components/syntax/Code";

/**
 * Reframed as the things Sergey *ignores* — anti-patterns kept out of
 * his daily practice. Real .gitignore syntax, metaphorical paths.
 */
export default function GitignoreFile() {
  return (
    <article className="sh-content sh-file-gitignore">
      <pre className="sh-code">
        <Tok type="comment">
          {"# Things I keep out of the workspace."}
        </Tok>
        {"\n"}
        <Tok type="comment">
          {"# Open issues filed against any of these patterns."}
        </Tok>
        {"\n\n"}
        <Tok type="comment">{"# politics & status"}</Tok>
        {"\n"}
        <Tok type="prop">office-politics/</Tok>
        {"\n"}
        <Tok type="prop">status-games/</Tok>
        {"\n"}
        <Tok type="prop">credit-grabbing</Tok>
        {"\n\n"}
        <Tok type="comment">{"# noise"}</Tok>
        {"\n"}
        <Tok type="prop">notification-overload</Tok>
        {"\n"}
        <Tok type="prop">gossip</Tok>
        {"\n"}
        <Tok type="prop">unfounded-criticism</Tok>
        {"\n"}
        <Tok type="prop">meetings-that-could-be-async</Tok>
        {"\n\n"}
        <Tok type="comment">{"# bad practices"}</Tok>
        {"\n"}
        <Tok type="prop">copy-paste-without-understanding</Tok>
        {"\n"}
        <Tok type="prop">silent-disagreement</Tok>
        {"\n"}
        <Tok type="prop">late-night-deploys</Tok>
        {"\n"}
        <Tok type="prop">last-minute-merges</Tok>
        {"\n"}
        <Tok type="prop">tests-as-an-afterthought</Tok>
        {"\n\n"}
        <Tok type="comment">{"# team culture"}</Tok>
        {"\n"}
        <Tok type="prop">toxic-positivity</Tok>
        {"\n"}
        <Tok type="prop">hero-culture</Tok>
        {"\n"}
        <Tok type="prop">blame</Tok>
        {"\n"}
        <Tok type="prop">not-invented-here</Tok>
        {"\n"}
        <Tok type="prop">condescension</Tok>
        {"\n\n"}
        <Tok type="comment">{"# tech debt I refuse to ship"}</Tok>
        {"\n"}
        <Tok type="prop">abandonware/</Tok>
        {"\n"}
        <Tok type="prop">unmaintained-deps</Tok>
        {"\n"}
        <Tok type="prop">silver-bullets</Tok>
        {"\n"}
        <Tok type="prop">premature-optimization</Tok>
        {"\n"}
        <Tok type="prop">resume-driven-architecture</Tok>
        {"\n\n"}
        <Tok type="comment">{"# accessibility regressions"}</Tok>
        {"\n"}
        <Tok type="prop">missing-alt-text</Tok>
        {"\n"}
        <Tok type="prop">focus-traps</Tok>
        {"\n"}
        <Tok type="prop">click-only-handlers</Tok>
        {"\n"}
        <Tok type="prop">color-as-only-affordance</Tok>
        {"\n"}
        <Tok type="prop">wcag-2.1-aa-violations</Tok>
        {"\n\n"}
        <Tok type="comment">
          {"# AI anti-patterns (the agent can suggest; the human owns)"}
        </Tok>
        {"\n"}
        <Tok type="prop">unverified-output</Tok>
        {"\n"}
        <Tok type="prop">blind-merges-of-llm-diffs</Tok>
        {"\n"}
        <Tok type="prop">prompt-without-context</Tok>
        {"\n\n"}
        <Tok type="comment">
          {"# See also: "}
        </Tok>
        <Link
          href="/about#leadership"
          className="tok-comment sh-json-link"
          style={{ textDecoration: "underline dotted" }}
        >
          about.md#leadership
        </Link>
        {"\n"}
      </pre>
    </article>
  );
}
