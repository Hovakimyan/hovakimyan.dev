"use client";

import Icon from "@/app/components/Icon";
import { useIde } from "./IdeContext";

/**
 * Floating button that reveals the integrated terminal when it's hidden.
 * Mirrors VS Code's "open terminal" affordance.
 */
export default function TerminalToggle() {
  const { terminalOpen, openTerminal } = useIde();
  if (terminalOpen) return null;
  return (
    <button
      type="button"
      className="sh-terminal-toggle"
      aria-label="Open terminal"
      onClick={openTerminal}
    >
      <Icon name="terminal" size={14} />
      <span>Open terminal</span>
      <kbd>`</kbd>
    </button>
  );
}
