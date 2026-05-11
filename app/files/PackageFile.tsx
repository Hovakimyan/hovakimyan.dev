import { Tok } from "@/app/components/syntax/Code";

/**
 * Renders the project's package.json as a styled, viewer-only file.
 * Content matches the live package.json — keep them in sync when deps
 * change. (We hand-render the JSON instead of importing it so the
 * syntax theme is consistent with the other files.)
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
        <Tok type="string">{'"0.1.0"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"private"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"engines"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="string">{'"node"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'">=24.0.0"'}</Tok>
        {"\n  "}
        <Tok type="punct">{"}"}</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"scripts"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="string">{'"dev"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"next dev"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"build"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"next build"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"start"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"next start"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"lint"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"eslint"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"preview"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"opennextjs-cloudflare build && opennextjs-cloudflare preview"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"deploy"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"opennextjs-cloudflare build && opennextjs-cloudflare deploy"'}</Tok>
        {"\n  "}
        <Tok type="punct">{"}"}</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"dependencies"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="string">{'"next"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^16.2.5"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"react"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^19.2.4"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"react-calendly"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^4.4.0"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"react-dom"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^19.2.4"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"three"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^0.170.0"'}</Tok>
        {"\n  "}
        <Tok type="punct">{"}"}</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"devDependencies"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="string">{'"@opennextjs/cloudflare"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^1.19.5"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"@tailwindcss/postcss"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^4"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"@types/three"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^0.170.0"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"eslint"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^9"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"tailwindcss"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^4"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"typescript"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^5"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"wrangler"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"^4.87.0"'}</Tok>
        {"\n  "}
        <Tok type="punct">{"}"}</Tok>
        {"\n"}
        <Tok type="punct">{"}"}</Tok>
      </pre>
    </article>
  );
}
