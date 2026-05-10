"use client";

import Icon from "@/app/components/Icon";
import { useIde } from "./IdeContext";

export default function Titlebar() {
  const { activeFile, openCommandPalette, openBooking, toggleSidebar } = useIde();

  return (
    <div className="sh-titlebar" role="banner">
      <button
        type="button"
        className="sh-titlebar-hamburger"
        aria-label="Toggle file tree"
        onClick={toggleSidebar}
      >
        <Icon name="menu" size={18} />
      </button>
      <span className="sh-titlebar-dots" aria-hidden="true">
        <span className="sh-titlebar-dot red" />
        <span className="sh-titlebar-dot yellow" />
        <span className="sh-titlebar-dot green" />
      </span>
      <span className="sh-titlebar-crumb">
        <span className="part">sergey-hovakimyan</span>
        <span className="sep">/</span>
        <span className="part">src</span>
        <span className="sep">/</span>
        <span className="current">
          {activeFile ? `${activeFile.name}.${activeFile.ext}` : "index.tsx"}
        </span>
      </span>
      <span className="sh-titlebar-actions">
        <button
          type="button"
          className="sh-cmd-trigger"
          onClick={openCommandPalette}
          aria-label="Open command palette"
        >
          <Icon name="search" size={14} />
          <span>Ask sergey.dev</span>
          <kbd>⌘K</kbd>
        </button>
        <button
          type="button"
          className="sh-titlebar-schedule"
          onClick={openBooking}
        >
          <Icon name="calendar" size={13} />
          <span>Schedule</span>
        </button>
      </span>
    </div>
  );
}
