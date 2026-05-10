import { Tok } from "@/app/components/syntax/Code";

export default function ReadmeFile() {
  return (
    <article className="sh-content sh-md">
      <h1>
        sergey-hovakimyan <em>/</em> hovakimyan.dev
      </h1>
      <p>
        A personal site shaped like an IDE. You navigate by clicking files in the explorer (left), tabs (top), or by typing into the integrated terminal (bottom).
      </p>

      <h2>How to navigate</h2>
      <ul>
        <li>
          <code>index.tsx</code> — home, written as a TypeScript declaration. Click array items to jump into related case studies.
        </li>
        <li>
          <code>work.md</code> — four selected case studies, each with metrics + a snippet of architectural decisions as a git-log.
        </li>
        <li>
          <code>ventures.json</code> — personal projects. The URLs are real links.
        </li>
        <li>
          <code>about.md</code> — story, leadership philosophy, AI engineering, career git log.
        </li>
        <li>
          <code>contact.sh</code> — runnable lines: <code>$ schedule_call</code>, <code>$ send_email</code>, <code>$ open_linkedin</code>.
        </li>
        <li>
          <code>portrait.jpg</code> — image preview.
        </li>
      </ul>

      <h2>Terminal</h2>
      <p>
        Toggle the bottom terminal with the backtick key (<code>`</code>). Useful commands:
      </p>
      <pre>
        <code>
          <Tok type="comment">{"# Navigation"}</Tok>
          {"\n"}
          <Tok type="prop">cd /work</Tok>
          {"\n"}
          <Tok type="prop">open about</Tok>
          {"\n"}
          <Tok type="prop">cat ventures.json</Tok>
          {"\n\n"}
          <Tok type="comment">{"# Actions"}</Tok>
          {"\n"}
          <Tok type="prop">schedule</Tok>
          <Tok type="comment">{"     # opens Calendly"}</Tok>
          {"\n"}
          <Tok type="prop">email</Tok>
          <Tok type="comment">{"        # opens mailto"}</Tok>
          {"\n"}
          <Tok type="prop">linkedin</Tok>
          <Tok type="comment">{"     # opens profile"}</Tok>
          {"\n\n"}
          <Tok type="comment">{"# Knowledge"}</Tok>
          {"\n"}
          <Tok type="prop">whoami</Tok>
          {"\n"}
          <Tok type="prop">stack</Tok>
          {"\n"}
          <Tok type="prop">ai</Tok>
          {"\n"}
          <Tok type="prop">help</Tok>
          <Tok type="comment">{"         # full command list"}</Tok>
        </code>
      </pre>

      <h2>Keyboard shortcuts</h2>
      <ul>
        <li>
          <code>⌘K</code> — focus the terminal input
        </li>
        <li>
          <code>`</code> — toggle the terminal
        </li>
        <li>
          <code>↑</code> / <code>↓</code> — cycle terminal command history
        </li>
        <li>
          <code>⌘L</code> — clear terminal
        </li>
        <li>
          <code>Esc</code> — close modals
        </li>
      </ul>

      <h2>Built with</h2>
      <p>
        Next.js 16 (App Router) · React 19 · Tailwind v4 · Three.js · OpenNext for Cloudflare Workers · react-calendly · hand-rolled syntax highlighter.
      </p>
    </article>
  );
}
