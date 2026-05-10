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
  /** is this file in src/ (shows up in tabs) or under a different group? */
  group: "src" | "public" | "root";
}

export const FILES: readonly FileEntry[] = [
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
    ext: "json",
    href: "/ventures",
    icon: "braces",
    description: "Personal projects (Ashoon + this site) as JSON.",
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
  {
    name: "portrait",
    ext: "jpg",
    href: "/portrait",
    icon: "image",
    description: "B&W portrait — image preview.",
    group: "public",
  },
  {
    name: "README",
    ext: "md",
    href: "/readme",
    icon: "doc",
    description: "How to navigate this site.",
    group: "root",
  },
] as const;

/** Files that get a tab strip entry — only the src/ files. */
export const TAB_FILES = FILES.filter((f) => f.group === "src");

export function fileForPath(pathname: string): FileEntry | undefined {
  return FILES.find((f) => f.href === pathname);
}
