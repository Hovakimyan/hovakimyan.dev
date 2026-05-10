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
}

export const FILES: readonly FileEntry[] = [
  {
    name: "index",
    ext: "tsx",
    href: "/",
    icon: "code",
    description: "Home — the engineer as a TypeScript declaration.",
  },
  {
    name: "work",
    ext: "md",
    href: "/work",
    icon: "doc",
    description: "Selected work — case studies in markdown.",
  },
  {
    name: "ventures",
    ext: "json",
    href: "/ventures",
    icon: "braces",
    description: "Personal projects (Ashoon + this site) as JSON.",
  },
  {
    name: "about",
    ext: "md",
    href: "/about",
    icon: "doc",
    description: "Story, leadership, career git log.",
  },
  {
    name: "contact",
    ext: "sh",
    href: "/contact",
    icon: "terminal",
    description: "Bash script — run schedule_call or send_email.",
  },
] as const;

export function fileForPath(pathname: string): FileEntry | undefined {
  return FILES.find((f) => f.href === pathname);
}
