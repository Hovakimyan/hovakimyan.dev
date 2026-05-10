"use client";

import { usePathname } from "next/navigation";
import Icon from "@/app/components/Icon";
import { fileForPath } from "@/lib/files";
import { SITE } from "@/lib/content";

const LANGS: Record<string, string> = {
  tsx: "TypeScript",
  md: "Markdown",
  json: "JSON",
  sh: "Bash",
};

export default function StatusBar() {
  const pathname = usePathname();
  const file = fileForPath(pathname);
  const lang = file ? LANGS[file.ext] || file.ext.toUpperCase() : "TypeScript";

  return (
    <footer className="sh-status" role="contentinfo">
      <span className="item">
        <Icon name="branch" size={12} /> main
      </span>
      <span className="item">{lang}</span>
      <span className="item">UTF-8 · LF</span>
      <span className="sep" />
      <span className="item">
        <span className="pulse" /> Open to engagements
      </span>
      <span className="item">{SITE.location}</span>
      <span className="item">13+ yrs</span>
    </footer>
  );
}
