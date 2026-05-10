import { Tok } from "@/app/components/syntax/Code";
import { VENTURES } from "@/lib/content";

export default function VenturesFile() {
  return (
    <article className="sh-content sh-file-ventures">
      <pre className="sh-code">
        <Tok type="punct">{"{"}</Tok>
        {"\n  "}
        <Tok type="string">{'"$schema"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"https://hovakimyan.dev/ventures.schema.json"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"updated"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"2026-05-10"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="string">{'"ventures"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        {"\n"}
        {VENTURES.map((v, i) => (
          <span key={v.name}>
            {"    "}
            <Tok type="punct">{"{"}</Tok>
            {"\n      "}
            <Tok type="string">{'"name"'}</Tok>
            <Tok type="punct">:</Tok>{" "}
            <Tok type="string">{`"${v.name}"`}</Tok>
            <Tok type="punct">,</Tok>
            {"\n      "}
            <Tok type="string">{'"tagline"'}</Tok>
            <Tok type="punct">:</Tok>{" "}
            <Tok type="string">{`"${v.tagline}"`}</Tok>
            <Tok type="punct">,</Tok>
            {"\n      "}
            <Tok type="string">{'"description"'}</Tok>
            <Tok type="punct">:</Tok>{" "}
            <Tok type="string">{`"${v.body}"`}</Tok>
            <Tok type="punct">,</Tok>
            {v.services ? (
              <>
                {"\n      "}
                <Tok type="string">{'"services"'}</Tok>
                <Tok type="punct">:</Tok>{" "}
                <Tok type="punct">[</Tok>
                {"\n"}
                {v.services.map((s, j) => (
                  <span key={s}>
                    {"        "}
                    <Tok type="string">{`"${s}"`}</Tok>
                    {j < v.services!.length - 1 ? (
                      <Tok type="punct">,</Tok>
                    ) : null}
                    {"\n"}
                  </span>
                ))}
                {"      "}
                <Tok type="punct">],</Tok>
              </>
            ) : null}
            {v.stack ? (
              <>
                {"\n      "}
                <Tok type="string">{'"stack"'}</Tok>
                <Tok type="punct">:</Tok>{" "}
                <Tok type="punct">[</Tok>
                {"\n"}
                {v.stack.map((s, j) => (
                  <span key={s}>
                    {"        "}
                    <Tok type="string">{`"${s}"`}</Tok>
                    {j < v.stack!.length - 1 ? (
                      <Tok type="punct">,</Tok>
                    ) : null}
                    {"\n"}
                  </span>
                ))}
                {"      "}
                <Tok type="punct">],</Tok>
              </>
            ) : null}
            {v.urls && v.urls.length > 0 ? (
              <>
                {"\n      "}
                <Tok type="string">{'"urls"'}</Tok>
                <Tok type="punct">:</Tok>{" "}
                <Tok type="punct">[</Tok>
                {"\n"}
                {v.urls.map((u, j) => (
                  <span key={u.href}>
                    {"        "}
                    <a
                      href={u.href}
                      target="_blank"
                      rel="noopener"
                      className="tok-string sh-json-link"
                    >
                      {`"${u.label}"`}
                    </a>
                    {j < v.urls.length - 1 ? <Tok type="punct">,</Tok> : null}
                    {"\n"}
                  </span>
                ))}
                {"      "}
                <Tok type="punct">],</Tok>
              </>
            ) : null}
            {"\n      "}
            <Tok type="string">{'"status"'}</Tok>
            <Tok type="punct">:</Tok>{" "}
            <Tok type="string">{'"active"'}</Tok>
            {"\n    "}
            <Tok type="punct">{"}"}</Tok>
            {i < VENTURES.length - 1 ? <Tok type="punct">,</Tok> : null}
            {"\n"}
          </span>
        ))}
        {"    "}
        <Tok type="punct">{"{"}</Tok>
        {"\n      "}
        <Tok type="string">{'"name"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"(reserved)"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n      "}
        <Tok type="string">{'"status"'}</Tok>
        <Tok type="punct">:</Tok>{" "}
        <Tok type="string">{'"pending"'}</Tok>
        {"\n    "}
        <Tok type="punct">{"}"}</Tok>
        {"\n  "}
        <Tok type="punct">]</Tok>
        {"\n"}
        <Tok type="punct">{"}"}</Tok>
        <span className="cursor" aria-hidden="true" />
      </pre>
    </article>
  );
}
