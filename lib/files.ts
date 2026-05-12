// Single source of truth for the file tree + routing map.

import type { IconName } from "@/app/components/Icon";

export interface FileEntry {
  /** display name shown in the sidebar/tab. */
  name: string;
  /** language ext shown faintly after the name. */
  ext: string;
  /** route href. */
  href: string;
  /** sidebar / tab icon. */
  icon: IconName;
  /** descriptive tooltip / aria label. */
  description: string;
  /** which group / folder this file belongs to. */
  group: "src" | "public" | "root";
}

export const FILES: readonly FileEntry[] = [
  // src/
  {
    name: "index",
    ext: "tsx",
    href: "/",
    icon: "code",
    description: "Home — the engineer as a TypeScript declaration.",
    group: "src",
  },
  {
    name: "work",
    ext: "md",
    href: "/work",
    icon: "doc",
    description: "Selected work — case studies in markdown.",
    group: "src",
  },
  {
    name: "ventures",
    ext: "md",
    href: "/ventures",
    icon: "doc",
    description: "Personal projects — Ashoon AI, Ashoon Studio, and this site.",
    group: "src",
  },
  {
    name: "about",
    ext: "md",
    href: "/about",
    icon: "doc",
    description: "Story, leadership, career git log.",
    group: "src",
  },
  {
    name: "contact",
    ext: "sh",
    href: "/contact",
    icon: "terminal",
    description: "Bash script — run schedule_call or send_email.",
    group: "src",
  },
  // public/
  {
    name: "portrait",
    ext: "jpg",
    href: "/portrait",
    icon: "image",
    description: "B&W portrait — image preview.",
    group: "public",
  },
  // root files (workspace-level)
  {
    name: "README",
    ext: "md",
    href: "/readme",
    icon: "doc",
    description: "How to navigate this site.",
    group: "root",
  },
  {
    name: "package",
    ext: "json",
    href: "/package",
    icon: "braces",
    description: "npm dependencies and scripts.",
    group: "root",
  },
  {
    name: "tsconfig",
    ext: "json",
    href: "/tsconfig",
    icon: "braces",
    description: "TypeScript compiler config.",
    group: "root",
  },
  {
    name: ".gitignore",
    ext: "",
    href: "/gitignore",
    icon: "doc",
    description: "Files git should ignore.",
    group: "root",
  },
] as const;

/** Files that get a tab strip entry — only the src/ files. */
export const TAB_FILES = FILES.filter((f) => f.group === "src");

export function fileForPath(pathname: string): FileEntry | undefined {
  return FILES.find((f) => f.href === pathname);
}
