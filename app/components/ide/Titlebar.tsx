"use client";

import Icon from "@/app/components/Icon";
import { useIde } from "./IdeContext";

export default function Titlebar() {
  const { activeFile, openBooking, toggleSidebar, toggleTerminal } = useIde();

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
        <span className="part">
          {activeFile?.group === "public" ? "public" : activeFile?.group === "root" ? "" : "src"}
        </span>
        {activeFile?.group !== "root" ? <span className="sep">/</span> : null}
        <span className="current">
          {activeFile
            ? `${activeFile.name}.${activeFile.ext}`
            : "index.tsx"}
        </span>
      </span>
      <span className="sh-titlebar-actions">
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="sh-titlebar-resume"
          title="Open the plain resume in a new tab (recruiter-friendly, print as PDF)"
        >
          <Icon name="doc" size={13} />
          <span>Resume</span>
        </a>
        <button
          type="button"
          className="sh-titlebar-icon-btn"
          aria-label="Toggle terminal"
          title="Toggle terminal (`)"
          onClick={toggleTerminal}
        >
          <Icon name="terminal" size={14} />
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
