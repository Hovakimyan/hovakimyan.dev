import Link from "next/link";
import { Tok } from "@/app/components/syntax/Code";

/**
 * tsconfig.json reframed as a "type system" for how Sergey operates.
 * Real TypeScript compiler-option keys, metaphorical values.
 */
export default function TsconfigFile() {
  return (
    <article className="sh-content sh-file-tsconfig">
      <pre className="sh-code">
        <Tok type="punct">{"{"}</Tok>
        {"\n  "}
        <Tok type="string">{'"compilerOptions"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="string">{'"target"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"ESNext"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="comment">{"// always learning the next thing"}</Tok>
        {"\n    "}
        <Tok type="string">{'"lib"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        <Tok type="string">{'"humans"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"agents"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"teams"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"products"'}</Tok>
        <Tok type="punct">],</Tok>
        {"\n    "}
        <Tok type="string">{'"strict"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="comment">{"// no nulls, no silent bugs, no shortcuts"}</Tok>
        {"\n    "}
        <Tok type="string">{'"alwaysStrict"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="comment">{"// honesty is the default"}</Tok>
        {"\n    "}
        <Tok type="string">{'"noImplicitAny"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="comment">{"// say what you mean"}</Tok>
        {"\n    "}
        <Tok type="string">{'"noUnusedLocals"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="comment">{"// ship only what matters"}</Tok>
        {"\n    "}
        <Tok type="string">{'"noUnusedParameters"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"exactOptionalPropertyTypes"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"esModuleInterop"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="comment">{"// collaboration > silos"}</Tok>
        {"\n    "}
        <Tok type="string">{'"skipLibCheck"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">false</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="comment">{"// verify before trust"}</Tok>
        {"\n    "}
        <Tok type="string">{'"experimentalDecorators"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">false</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="comment">{"// boring tech wins"}</Tok>
        {"\n    "}
        <Tok type="string">{'"moduleResolution"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"first-principles"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"incremental"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="comment">{"// progress compounds"}</Tok>
        {"\n    "}
        <Tok type="string">{'"paths"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n      "}
        <Tok type="string">{'"@me/*"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        <Link href="/" className="tok-string sh-json-link">
          {'"./index.tsx"'}
        </Link>
        <Tok type="punct">],</Tok>
        {"\n      "}
        <Tok type="string">{'"@work/*"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        <Link href="/work" className="tok-string sh-json-link">
          {'"./work.md"'}
        </Link>
        <Tok type="punct">],</Tok>
        {"\n      "}
        <Tok type="string">{'"@ventures/*"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        <Link href="/ventures" className="tok-string sh-json-link">
          {'"./ventures.md"'}
        </Link>
        <Tok type="punct">]</Tok>
        {"\n    "}
        <Tok type="punct">{"}"}</Tok>
        {"\n  "}
        <Tok type="punct">{"},"}</Tok>
        {"\n  "}
        <Tok type="string">{'"values"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="string">{'"leadership"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"by-example"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"communication"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"clear-and-direct"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"ownership"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"end-to-end"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"growth"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"compound"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"a11y"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"first-class"'}</Tok>
        {"\n  "}
        <Tok type="punct">{"},"}</Tok>
        {"\n  "}
        <Tok type="string">{'"include"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        {"\n    "}
        <Tok type="string">{'"humans/**"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"teams/**"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"agents/**"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"products/**"'}</Tok>
        {"\n  "}
        <Tok type="punct">],</Tok>
        {"\n  "}
        <Tok type="string">{'"exclude"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        {"\n    "}
        <Tok type="string">{'"node_modules/ego"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Link href="/gitignore" className="tok-string sh-json-link">
          {'"**/gitignored"'}
        </Link>
        {"\n  "}
        <Tok type="punct">]</Tok>
        {"\n"}
        <Tok type="punct">{"}"}</Tok>
      </pre>
    </article>
  );
}
