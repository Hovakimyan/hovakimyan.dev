import Link from "next/link";
import { Tok } from "@/app/components/syntax/Code";

/**
 * A playful `package.json` rendering of Sergey himself — keys are real
 * npm fields, values reflect the engineer. Strings that look like
 * routes or URLs are real navigable links.
 */
export default function PackageFile() {
  return (
    <article className="sh-content sh-file-package">
      <pre className="sh-code">
        <Tok type="punct">{"{"}</Tok>
        {"\n  "}
        <Tok type="string">{'"name"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"sergey-hovakimyan"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"version"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"13.5.0"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="comment">{"// years.career-stage.release"}</Tok>
        {"\n  "}
        <Tok type="string">{'"description"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">
          {'"AI-Augmented Software Engineer · 13+ years · Glendale, CA"'}
        </Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"main"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Link href="/" className="tok-string sh-json-link">
          {'"index.tsx"'}
        </Link>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"types"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Link href="/tsconfig" className="tok-string sh-json-link">
          {'"./tsconfig.json"'}
        </Link>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"author"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"Sergey Hovakimyan <'}</Tok>
        <a
          href="mailto:hovakimyan.serg@gmail.com"
          className="tok-string sh-json-link"
        >
          hovakimyan.serg@gmail.com
        </a>
        <Tok type="string">{'>"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"homepage"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <a
          href="https://hovakimyan.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="tok-string sh-json-link"
        >
          {'"https://hovakimyan.dev"'}
        </a>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"repository"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <a
          href="https://github.com/Hovakimyan/hovakimyan.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="tok-string sh-json-link"
        >
          {'"github:Hovakimyan/hovakimyan.dev"'}
        </a>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"profile"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <a
          href="https://www.linkedin.com/in/hovakimyanserg/"
          target="_blank"
          rel="noopener noreferrer"
          className="tok-string sh-json-link"
        >
          {'"linkedin.com/in/hovakimyanserg"'}
        </a>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"keywords"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        <Tok type="string">{'"typescript"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"react"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"leadership"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"micro-frontend"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"accessibility"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"ai-augmented"'}</Tok>
        <Tok type="punct">],</Tok>
        {"\n  "}
        <Tok type="string">{'"topSkills"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        <Tok type="string">{'"Lit"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"Leadership"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"JavaScript"'}</Tok>
        <Tok type="punct">],</Tok>{" "}
        <Tok type="comment">{"// per LinkedIn"}</Tok>
        {"\n  "}
        <Tok type="string">{'"scripts"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="string">{'"ship"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Link href="/work" className="tok-string sh-json-link">
          {'"production --tests=passing --a11y=AA"'}
        </Link>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"lead"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Link
          href="/about#leadership"
          className="tok-string sh-json-link"
        >
          {'"team.run({ cadence: \\"1:1\\", honesty: true })"'}
        </Link>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"mentor"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Link
          href="/about#leadership"
          className="tok-string sh-json-link"
        >
          {'"engineer.grow(other, { patient: true })"'}
        </Link>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"review"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">
          {'"pull-request --thoughtful --kind --rigorous"'}
        </Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"ai-augment"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Link href="/about#ai" className="tok-string sh-json-link">
          {'"agent --pair --review --refactor --audit-a11y"'}
        </Link>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"schedule"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Link href="/contact" className="tok-string sh-json-link">
          {'"calendly --30min --strategic"'}
        </Link>
        {"\n  "}
        <Tok type="punct">{"},"}</Tok>
        {"\n  "}
        <Tok type="string">{'"dependencies"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="string">{'"curiosity"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"*"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="comment">{"// any version"}</Tok>
        {"\n    "}
        <Tok type="string">{'"discipline"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^13.0.0"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"empathy"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^13.0.0"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"rigor"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^13.0.0"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"leadership"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^7.0.0"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="comment">{"// leading teams since 2019"}</Tok>
        {"\n    "}
        <Tok type="string">{'"first-principles-thinking"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^10.0.0"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"@sergey/accessibility"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"WCAG-2.1-AA"'}</Tok>
        {"\n  "}
        <Tok type="punct">{"},"}</Tok>
        {"\n  "}
        <Tok type="string">{'"devDependencies"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="string">{'"coffee"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^∞"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"music"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^lifetime"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"books"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^continuous"'}</Tok>
        {"\n  "}
        <Tok type="punct">{"},"}</Tok>
        {"\n  "}
        <Tok type="string">{'"peerDependencies"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="string">{'"team"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"*"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"users"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"*"'}</Tok>
        {"\n  "}
        <Tok type="punct">{"},"}</Tok>
        {"\n  "}
        <Tok type="string">{'"engines"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="string">{'"human"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'">=1.0"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"agent"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^claude || ^gpt"'}</Tok>
        {"\n  "}
        <Tok type="punct">{"},"}</Tok>
        {"\n  "}
        <Tok type="string">{'"availability"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="string">{'"based"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"Glendale, California"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"remote"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"open"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        <Tok type="string">{'"engineering-leadership"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"micro-frontend"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"ai-augmented-builds"'}</Tok>
        <Tok type="punct">]</Tok>
        {"\n  "}
        <Tok type="punct">{"},"}</Tok>
        {"\n  "}
        <Tok type="string">{'"license"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"MIT — Mentor It Together"'}</Tok>
        {"\n"}
        <Tok type="punct">{"}"}</Tok>
      </pre>
    </article>
  );
}
