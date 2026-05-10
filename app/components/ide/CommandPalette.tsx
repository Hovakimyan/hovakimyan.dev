"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import Icon from "@/app/components/Icon";
import { useIde } from "./IdeContext";

interface CommandResponse {
  /** What the "agent" replies. Rendered as monospace text. */
  text: string;
  /** Optional code-style highlight inside the response. */
  highlight?: string;
}

interface CommandSuggestion {
  /** Query text shown in the list. */
  query: string;
  /** Meta label shown right (file / action). */
  meta: string;
  /** Optional route to navigate to after the response. */
  navigate?: string;
  /** Optional action to fire (e.g. open booking). */
  action?: "openBooking";
  /** The response shown after pick. */
  response: CommandResponse;
}

const SUGGESTIONS: CommandSuggestion[] = [
  {
    query: "show me your leadership work",
    meta: "→ about.md",
    navigate: "/about#leadership",
    response: {
      text: "Routing to ./about.md → #leadership. Twelve engineers led, thirty-plus mentored, twenty percent productivity lift across last three teams.",
    },
  },
  {
    query: "are you available for new engagements?",
    meta: "→ contact.sh",
    navigate: "/contact",
    response: {
      text: "Currently open to engagements. Glendale, CA — remote-friendly. Run ./schedule_call to book a 30-minute conversation.",
      highlight: "true",
    },
  },
  {
    query: "how do you use AI in engineering?",
    meta: "→ about.md",
    navigate: "/about#ai",
    response: {
      text: "Agent-paired coding for refactors + boilerplate, LLM-driven code review, accessibility audits at WCAG 2.1 AA. The agent suggests; the human owns.",
    },
  },
  {
    query: "book a call",
    meta: "@action",
    action: "openBooking",
    response: {
      text: "Opening ./schedule_call · Calendly 30-min slot.",
    },
  },
  {
    query: "what's your stack?",
    meta: "→ index.tsx",
    navigate: "/",
    response: {
      text: "TypeScript + React + Next.js + GraphQL + Node. Micro-frontend architecture, TDD/BDD, CI/CD. See index.tsx → sergey.stack.",
    },
  },
  {
    query: "show me your selected work",
    meta: "→ work.md",
    navigate: "/work",
    response: {
      text: "Four case studies: BuildOps, EPAM micro-frontend, Renderforest Video Maker (10M+ users), Cloud Fleet Manager (Maersk + 3).",
    },
  },
  {
    query: "where are you based?",
    meta: "answer",
    response: {
      text: "Glendale, California. Open to remote across time zones.",
    },
  },
  {
    query: "tell me about Ashoon",
    meta: "→ ventures.json",
    navigate: "/ventures",
    response: {
      text: "Ashoon — the studio I run alongside engineering. Web systems for product-led teams. Accessibility audits. AI-augmented builds.",
    },
  },
];

export default function CommandPalette() {
  const { paletteOpen, closeCommandPalette, openBooking } = useIde();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<CommandResponse | null>(null);
  const [focusIndex, setFocusIndex] = useState(0);
  const [trackedOpen, setTrackedOpen] = useState(paletteOpen);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? SUGGESTIONS.filter((s) =>
        s.query.toLowerCase().includes(query.toLowerCase()),
      )
    : SUGGESTIONS;

  // Reset query/response on open via derive-during-render to avoid the
  // react-hooks/set-state-in-effect lint.
  if (trackedOpen !== paletteOpen) {
    setTrackedOpen(paletteOpen);
    if (paletteOpen) {
      setQuery("");
      setResponse(null);
      setFocusIndex(0);
    }
  }

  useEffect(() => {
    if (paletteOpen) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [paletteOpen]);

  const pick = (s: CommandSuggestion) => {
    setResponse(s.response);
    if (s.action === "openBooking") {
      window.setTimeout(() => {
        closeCommandPalette();
        openBooking();
      }, 600);
      return;
    }
    if (s.navigate) {
      window.setTimeout(() => {
        closeCommandPalette();
        router.push(s.navigate as string);
      }, 700);
    }
  };

  const onKey: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusIndex((i) => Math.min(filtered.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter" && filtered[focusIndex]) {
      e.preventDefault();
      pick(filtered[focusIndex]);
    }
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className={`sh-palette-backdrop${paletteOpen ? " is-open" : ""}`}
      onClick={closeCommandPalette}
      aria-hidden={!paletteOpen}
    >
      <div
        className="sh-palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sh-palette-input">
          <span className="prompt">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask sergey.dev anything — try: show me your leadership work"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setFocusIndex(0);
              setResponse(null);
            }}
            onKeyDown={onKey}
            aria-label="Command query"
          />
        </div>
        <ul className="sh-palette-list" role="listbox">
          {filtered.length === 0 ? (
            <li className="sh-palette-item" style={{ cursor: "default" }}>
              <span className="icon">
                <Icon name="search" size={14} />
              </span>
              <span>No matches. Try clearing the query.</span>
              <span className="meta" />
            </li>
          ) : (
            filtered.map((s, i) => (
              <li
                key={s.query}
                className={`sh-palette-item${i === focusIndex ? " is-focus" : ""}`}
                role="option"
                aria-selected={i === focusIndex}
                onClick={() => pick(s)}
                onMouseEnter={() => setFocusIndex(i)}
              >
                <span className="icon">
                  <Icon name="chevron-right" size={14} />
                </span>
                <span>{s.query}</span>
                <span className="meta">{s.meta}</span>
              </li>
            ))
          )}
        </ul>
        {response ? (
          <div className="sh-palette-response">
            <span className="prompt">&gt;</span> {response.text}
            {response.highlight ? (
              <>
                {" "}
                <code>{response.highlight}</code>
              </>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
