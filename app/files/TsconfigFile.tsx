import { Tok } from "@/app/components/syntax/Code";

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
        <Tok type="string">{'"ES2017"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"lib"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        <Tok type="string">{'"dom"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"dom.iterable"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"esnext"'}</Tok>
        <Tok type="punct">],</Tok>
        {"\n    "}
        <Tok type="string">{'"strict"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"noEmit"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"esModuleInterop"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"module"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"esnext"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"moduleResolution"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"bundler"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"resolveJsonModule"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"isolatedModules"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="keyword">true</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"jsx"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"react-jsx"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"plugins"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[{"{"}</Tok>{" "}
        <Tok type="string">{'"name"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"next"'}</Tok>{" "}
        <Tok type="punct">{"}"}],</Tok>
        {"\n    "}
        <Tok type="string">{'"paths"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>{" "}
        <Tok type="string">{'"@/*"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        <Tok type="string">{'"./*"'}</Tok>
        <Tok type="punct">]</Tok>{" "}
        <Tok type="punct">{"}"}</Tok>
        {"\n  "}
        <Tok type="punct">{"}"}</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"include"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        <Tok type="string">{'"next-env.d.ts"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"**/*.ts"'}</Tok>
        <Tok type="punct">,</Tok>{" "}
        <Tok type="string">{'"**/*.tsx"'}</Tok>
        <Tok type="punct">],</Tok>
        {"\n  "}
        <Tok type="string">{'"exclude"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        <Tok type="string">{'"node_modules"'}</Tok>
        <Tok type="punct">]</Tok>
        {"\n"}
        <Tok type="punct">{"}"}</Tok>
      </pre>
    </article>
  );
}
