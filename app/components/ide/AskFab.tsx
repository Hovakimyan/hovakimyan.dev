"use client";

import Icon from "@/app/components/Icon";
import { useIde } from "./IdeContext";

export default function AskFab() {
  const { openCommandPalette } = useIde();
  return (
    <button
      type="button"
      className="sh-ask-fab"
      aria-label="Open command palette"
      onClick={openCommandPalette}
    >
      <Icon name="command" size={14} /> Ask
    </button>
  );
}
