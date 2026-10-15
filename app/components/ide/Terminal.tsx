"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/app/components/Icon";
import { SITE } from "@/lib/content";
import { useIde } from "./IdeContext";

type LineKind = "stdout" | "stderr" | "system" | "prompt";

interface TermLine {
  id: number;
  kind: LineKind;
  text: string;
}

const HELP_LINES = [
  "Available commands:",
  "  help                Show this help",
  "  whoami              Brief bio",
  "  ls                  List files in the workspace",
  "  cat <file>          Print a file (try: cat about.md)",
  "  cd <route>          Navigate to a route (try: cd /work)",
  "  open <route>        Same as cd",
  "  work | projects | about | contact | readme | portrait",
  "  schedule            Open the Calendly modal",
  "  email               Compose an email",
  "  linkedin            Open LinkedIn in a new tab",
  "  github              Open the source for this site",
  "  stack               Show the tech stack",
  "  ai                  How Sergey uses AI in engineering",
  "  clear               Clear the terminal",
  "  exit                Hide this terminal (toggle with `)",
];

const FILE_ROUTES: Record<string, string> = {
  "about.md": "/about",
  "work.md": "/work",
  "projects.md": "/projects",
  "contact.sh": "/contact",
  "index.tsx": "/",
  "readme.md": "/readme",
  "portrait.jpg": "/portrait",
};

const NAV_ALIASES: Record<string, string> = {
  home: "/",
  index: "/",
  work: "/work",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
  readme: "/readme",
  portrait: "/portrait",
};

const MIN_H = 96;

export default function Terminal() {
  const router = useRouter();
  const { terminalOpen, closeTerminal, openBooking } = useIde();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(3);
  const id = () => ++nextIdRef.current;
  const [lines, setLines] = useState<TermLine[]>(() => [
    { id: 1, kind: "system", text: "sergey.terminal v1.0 · type `help` to start" },
    { id: 2, kind: "stdout", text: `welcome, ${" ".repeat(0)}engineer.` },
    { id: 3, kind: "stdout", text: "press ⌘K to focus me · backtick (\\`) to toggle" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number | null>(null);

  // Drag-to-resize, VS Code style. Height lives in a CSS custom
  // property written straight to the element (no React state, so no
  // hydration mismatch and no re-render per pointer move).
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    try {
      const saved = Number(localStorage.getItem("sh-terminal-h"));
      if (saved >= MIN_H) panelRef.current?.style.setProperty("--term-h", `${saved}px`);
    } catch {
      // Storage blocked (private mode, previews): keep the CSS default.
    }
  }, []);

  const onSashDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    if (!panel) return;
    e.preventDefault();
    const startY = e.clientY;
    const startH = panel.getBoundingClientRect().height;
    const maxH = window.innerHeight * 0.7;
    let h = startH;
    panel.classList.add("is-dragging");
    const move = (ev: PointerEvent) => {
      h = Math.min(maxH, startH + (startY - ev.clientY));
      panel.style.setProperty("--term-h", `${Math.max(h, 40)}px`);
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      panel.classList.remove("is-dragging");
      if (h < MIN_H) {
        // Dragged past the floor: collapse, and reopen at the old size.
        panel.style.setProperty("--term-h", `${startH}px`);
        closeTerminal();
        return;
      }
      try {
        localStorage.setItem("sh-terminal-h", String(Math.round(h)));
      } catch {
        // Not persisted; the size still applies for this visit.
      }
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  // Autoscroll to bottom on new lines.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const push = (kind: LineKind, text: string) => {
    setLines((prev) => [...prev, { id: id(), kind, text }]);
  };

  const run = (raw: string) => {
    const cmd = raw.trim();
    if (!cmd) return;

    // Echo as a prompt line.
    push("prompt", `~/sergey-hovakimyan main > ${cmd}`);
    setHistory((h) => [...h, cmd]);
    setHistoryIdx(null);

    const [head, ...rest] = cmd.split(/\s+/);
    const arg = rest.join(" ").trim();

    switch (head) {
      case "help":
      case "?":
        HELP_LINES.forEach((l) => push("stdout", l));
        return;
      case "clear":
        setLines([]);
        return;
      case "exit":
        closeTerminal();
        return;
      case "whoami":
        push("stdout", `${SITE.name} — ${SITE.role}`);
        push("stdout", `13+ years · ${SITE.location} · open to remote`);
        return;
      case "ls":
        push("stdout", "src/");
        push(
          "stdout",
          "  index.tsx  work.md  projects.md  about.md  contact.sh",
        );
        push("stdout", "public/");
        push("stdout", "  portrait.jpg");
        push("stdout", "README.md");
        return;
      case "cat": {
        if (!arg) {
          push("stderr", "cat: missing operand (try: cat about.md)");
          return;
        }
        const route = FILE_ROUTES[arg.toLowerCase()];
        if (!route) {
          push("stderr", `cat: ${arg}: no such file`);
          return;
        }
        push("stdout", `opening ${arg}…`);
        window.setTimeout(() => router.push(route), 240);
        return;
      }
      case "cd":
      case "open": {
        if (!arg) {
          push("stderr", `${head}: missing operand`);
          return;
        }
        const cleaned = arg.replace(/^\//, "").toLowerCase();
        const route =
          NAV_ALIASES[cleaned] ||
          (arg.startsWith("/") ? arg.toLowerCase() : null);
        if (!route) {
          push("stderr", `${head}: ${arg}: no such route`);
          return;
        }
        push("stdout", `→ ${route}`);
        window.setTimeout(() => router.push(route), 200);
        return;
      }
      case "home":
      case "work":
      case "about":
      case "projects":
      case "contact":
      case "readme":
      case "portrait": {
        const route = NAV_ALIASES[head];
        push("stdout", `→ ${route}`);
        window.setTimeout(() => router.push(route), 200);
        return;
      }
      case "schedule":
      case "book":
      case "call": {
        push("stdout", "opening Calendly · 30-minute slot…");
        window.setTimeout(() => openBooking(), 200);
        return;
      }
      case "email":
      case "mail":
        push("stdout", `mailto:${SITE.email}`);
        window.setTimeout(() => {
          window.location.href = `mailto:${SITE.email}`;
        }, 200);
        return;
      case "linkedin":
        push("stdout", "opening LinkedIn…");
        window.setTimeout(() => window.open(SITE.linkedin, "_blank"), 200);
        return;
      case "github":
        push("stdout", "github.com/Hovakimyan/hovakimyan.dev");
        window.setTimeout(
          () =>
            window.open("https://github.com/Hovakimyan/hovakimyan.dev", "_blank"),
          200,
        );
        return;
      case "stack":
        push("stdout", "languages:  TypeScript · JavaScript");
        push("stdout", "frameworks: React · Next.js · Node.js · GraphQL");
        push("stdout", "practices:  Micro-Frontend · TDD · BDD · CI/CD · WCAG");
        push("stdout", "tools:      Git · Jest · Playwright · Tailwind v4");
        push("stdout", "agents:     Claude Code · MCP · custom skills");
        return;
      case "ai":
        push("stdout", "agent-paired coding for boilerplate + refactors");
        push("stdout", "LLM-driven code review for quality patches");
        push("stdout", "accessibility audits at WCAG 2.1 AA");
        push("stdout", "the agent suggests; the human owns.");
        return;
      case "echo":
        push("stdout", arg);
        return;
      default:
        push("stderr", `command not found: ${head}. type \`help\` for the list.`);
    }
  };

  const onKey: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = historyIdx === null ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(next);
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.length === 0 || historyIdx === null) return;
      const next = historyIdx + 1;
      if (next >= history.length) {
        setHistoryIdx(null);
        setInput("");
      } else {
        setHistoryIdx(next);
        setInput(history[next]);
      }
    } else if (e.key === "l" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div
      ref={panelRef}
      className={`sh-terminal${
        terminalOpen === null ? " is-auto" : terminalOpen ? " is-open" : " is-closed"
      }`}
      aria-label="Integrated terminal"
    >
      <div
        className="sh-terminal-sash"
        onPointerDown={onSashDown}
        aria-hidden="true"
        title="Drag to resize"
      />
      <div className="sh-terminal-head">
        <span className="sh-terminal-tab is-active">
          <Icon name="terminal" size={12} />
          zsh
        </span>
        <span className="sh-terminal-spacer" />
        <span className="sh-terminal-meta">⌘K to focus · ` to toggle</span>
        <button
          type="button"
          className="sh-terminal-close"
          aria-label="Hide terminal"
          onClick={closeTerminal}
        >
          <Icon name="chevron-down" size={14} />
        </button>
      </div>
      <div ref={scrollRef} className="sh-terminal-body">
        {lines.map((l) => (
          <div key={l.id} className={`sh-terminal-line is-${l.kind}`}>
            {l.text}
          </div>
        ))}
        <form
          className="sh-terminal-prompt"
          onSubmit={(e) => {
            e.preventDefault();
            run(input);
            setInput("");
          }}
        >
          <span className="sh-terminal-cwd">~/sergey-hovakimyan</span>{" "}
          <span className="sh-terminal-branch">main</span>{" "}
          <span className="sh-terminal-caret">{">"}</span>
          <input
            ref={inputRef}
            className="sh-terminal-input"
            type="text"
            autoComplete="off"
            spellCheck={false}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            aria-label="Terminal input"
          />
        </form>
      </div>
    </div>
  );
}
