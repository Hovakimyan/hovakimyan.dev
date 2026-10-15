"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Icon, { type IconName } from "@/app/components/Icon";
import { FILES } from "@/lib/files";
import { SITE } from "@/lib/content";
import { useIde } from "./IdeContext";

interface Command {
  id: string;
  label: string;
  hint: string;
  icon: IconName;
  group: "Files" | "Actions";
  run: () => void;
}

/**
 * Subsequence match, VS Code quick-open style: "prj" finds "projects".
 * Returns a score (lower is better) or -1 when there is no match.
 */
function score(query: string, text: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  const direct = t.indexOf(q);
  if (direct !== -1) return direct;
  let ti = 0;
  let gaps = 0;
  for (const ch of q) {
    const found = t.indexOf(ch, ti);
    if (found === -1) return -1;
    gaps += found - ti;
    ti = found + 1;
  }
  return 100 + gaps;
}

export default function CommandPalette() {
  const router = useRouter();
  const { paletteOpen, closePalette, openBooking, toggleTerminal } = useIde();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const commands = useMemo<Command[]>(
    () => [
      ...FILES.map<Command>((f) => ({
        id: f.href,
        label: f.ext ? `${f.name}.${f.ext}` : f.name,
        hint: f.description,
        icon: f.icon,
        group: "Files",
        run: () => router.push(f.href),
      })),
      {
        id: "schedule",
        label: "Schedule a 30-min call",
        hint: "Opens the Calendly booking",
        icon: "calendar",
        group: "Actions",
        run: openBooking,
      },
      {
        id: "email",
        label: "Copy email address",
        hint: SITE.email,
        icon: "mail",
        group: "Actions",
        run: () => {
          void navigator.clipboard?.writeText(SITE.email);
        },
      },
      {
        id: "resume",
        label: "Open resume",
        hint: "Plain, printable version",
        icon: "doc",
        group: "Actions",
        run: () => window.open("/resume", "_blank", "noopener"),
      },
      {
        id: "terminal",
        label: "Toggle terminal",
        hint: "Shortcut: `",
        icon: "terminal",
        group: "Actions",
        run: toggleTerminal,
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        hint: "linkedin.com/in/hovakimyanserg",
        icon: "linkedin",
        group: "Actions",
        run: () => window.open(SITE.linkedin, "_blank", "noopener"),
      },
      {
        id: "github",
        label: "GitHub",
        hint: "github.com/Hovakimyan",
        icon: "github",
        group: "Actions",
        run: () => window.open(SITE.github, "_blank", "noopener"),
      },
    ],
    [router, openBooking, toggleTerminal],
  );

  const results = useMemo(() => {
    return commands
      .map((c) => ({ c, s: score(query, `${c.label} ${c.hint}`) }))
      .filter((r) => r.s !== -1)
      .sort((a, b) => a.s - b.s)
      .map((r) => r.c);
  }, [commands, query]);

  // Reset on open — derived from the prop change, not an effect.
  const [wasOpen, setWasOpen] = useState(paletteOpen);
  if (wasOpen !== paletteOpen) {
    setWasOpen(paletteOpen);
    if (paletteOpen) {
      setQuery("");
      setActive(0);
      setCopied(false);
    }
  }

  useEffect(() => {
    if (paletteOpen) requestAnimationFrame(() => inputRef.current?.focus());
  }, [paletteOpen]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const execute = (c: Command | undefined) => {
    if (!c) return;
    c.run();
    if (c.id === "email") {
      // Keep the palette up for a beat so the confirmation is visible.
      setCopied(true);
      setTimeout(closePalette, 700);
      return;
    }
    closePalette();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) =>
        results.length ? (i - 1 + results.length) % results.length : 0,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      execute(results[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      closePalette();
    }
  };

  return (
    <div
      className={`sh-palette-backdrop${paletteOpen ? " is-open" : ""}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closePalette();
      }}
      aria-hidden={!paletteOpen}
    >
      <div
        className="sh-palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="sh-palette-input-row">
          <Icon name="search" size={14} />
          <input
            ref={inputRef}
            className="sh-palette-input"
            placeholder="Go to file or command…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            role="combobox"
            aria-expanded="true"
            aria-controls="sh-palette-list"
            aria-activedescendant={
              results[active] ? `sh-palette-${results[active].id}` : undefined
            }
            tabIndex={paletteOpen ? 0 : -1}
            spellCheck={false}
            autoComplete="off"
          />
          <kbd className="sh-palette-kbd">esc</kbd>
        </div>
        <ul
          ref={listRef}
          id="sh-palette-list"
          className="sh-palette-list"
          role="listbox"
        >
          {results.length === 0 ? (
            <li className="sh-palette-empty">No matches for “{query}”</li>
          ) : null}
          {results.map((c, i) => {
            const header = c.group !== results[i - 1]?.group ? c.group : null;
            return (
              <li key={c.id} role="presentation">
                {header ? (
                  <div className="sh-palette-group">{header}</div>
                ) : null}
                <div
                  id={`sh-palette-${c.id}`}
                  data-index={i}
                  role="option"
                  aria-selected={i === active}
                  className={`sh-palette-item${i === active ? " is-active" : ""}`}
                  onMouseMove={() => setActive(i)}
                  onClick={() => execute(c)}
                >
                  <span className="icon">
                    <Icon
                      name={copied && c.id === "email" ? "check" : c.icon}
                      size={14}
                    />
                  </span>
                  <span className="label">
                    {copied && c.id === "email" ? "Copied" : c.label}
                  </span>
                  <span className="hint">{c.hint}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="sh-palette-foot" aria-hidden="true">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> open
          </span>
          <span>
            <kbd>⌘</kbd>
            <kbd>P</kbd> toggle
          </span>
        </div>
      </div>
    </div>
  );
}
