"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon, { type IconName } from "@/app/components/Icon";
import { FILES } from "@/lib/files";
import { useIde } from "./IdeContext";

interface FolderProps {
  label: string;
  defaultOpen?: boolean;
  depth?: number;
  children: React.ReactNode;
  /** Optional list of routes inside this folder — if any is active the
   *  folder forces itself open (like real IDEs auto-reveal the active
   *  file). */
  containsRoute?: readonly string[];
}

function Folder({
  label,
  defaultOpen = false,
  depth = 0,
  children,
  containsRoute = [],
}: FolderProps) {
  const pathname = usePathname();
  const forceOpen = containsRoute.includes(pathname);
  const [open, setOpen] = useState<boolean>(defaultOpen || forceOpen);
  const isOpen = open || forceOpen;

  return (
    <li className="sh-tree-folder">
      <button
        type="button"
        className="sh-tree-row sh-tree-row--folder"
        style={{ paddingLeft: 8 + depth * 12 }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={isOpen}
      >
        <span className={`chev${isOpen ? " is-open" : ""}`} aria-hidden="true">
          <Icon name="chevron-right" size={11} />
        </span>
        <span className="icon">
          <Icon name="folder" size={13} />
        </span>
        <span className="name">{label}</span>
      </button>
      {isOpen ? (
        <ul className="sh-tree-children" style={{ "--depth": depth } as React.CSSProperties}>
          {children}
        </ul>
      ) : null}
    </li>
  );
}

interface FileRowProps {
  href: string;
  icon: IconName;
  name: string;
  ext: string;
  active: boolean;
  depth?: number;
}

function FileRow({ href, icon, name, ext, active, depth = 0 }: FileRowProps) {
  return (
    <li>
      <Link
        href={href}
        className={`sh-tree-row sh-tree-row--file${active ? " is-active" : ""}`}
        style={{ paddingLeft: 8 + depth * 12 + 16 }}
        aria-current={active ? "page" : undefined}
      >
        <span className="icon">
          <Icon name={icon} size={13} />
        </span>
        <span className="name">
          {name}
          {ext ? <span className="ext">.{ext}</span> : null}
        </span>
      </Link>
    </li>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, closeSidebar } = useIde();

  const srcFiles = FILES.filter((f) => f.group === "src");
  const publicFiles = FILES.filter((f) => f.group === "public");
  const rootFiles = FILES.filter((f) => f.group === "root");

  return (
    <>
      <div
        className={`sh-sidebar-backdrop${sidebarOpen ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={closeSidebar}
      />
      <aside
        className={`sh-sidebar${sidebarOpen ? " is-open" : ""}`}
        aria-label="File tree"
      >
        <p className="sh-sidebar-header">Explorer</p>
        <ul className="sh-tree">
          <Folder label="sergey-hovakimyan" defaultOpen depth={0}>
            <Folder
              label="src"
              defaultOpen
              depth={1}
              containsRoute={srcFiles.map((f) => f.href)}
            >
              {srcFiles.map((f) => (
                <FileRow
                  key={f.href}
                  href={f.href}
                  icon={f.icon}
                  name={f.name}
                  ext={f.ext}
                  active={pathname === f.href}
                  depth={2}
                />
              ))}
            </Folder>

            <Folder
              label="public"
              depth={1}
              containsRoute={publicFiles.map((f) => f.href)}
            >
              {publicFiles.map((f) => (
                <FileRow
                  key={f.href}
                  href={f.href}
                  icon={f.icon}
                  name={f.name}
                  ext={f.ext}
                  active={pathname === f.href}
                  depth={2}
                />
              ))}
            </Folder>

            {/* Workspace-level files (rendered flat at depth=1) */}
            {rootFiles.map((f) => (
              <FileRow
                key={f.href}
                href={f.href}
                icon={f.icon}
                name={f.name}
                ext={f.ext}
                active={pathname === f.href}
                depth={1}
              />
            ))}
          </Folder>
        </ul>

        <div className="sh-sidebar-meta">
          <strong>SH</strong>
          Engineer · Leader · Builder
        </div>
      </aside>
    </>
  );
}
