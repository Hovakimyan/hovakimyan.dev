"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/app/components/Icon";
import { FILES } from "@/lib/files";

export default function Tabs() {
  const pathname = usePathname();
  // Tab strip always shows the canonical src/ files; non-src files
  // (README, portrait) get a tab inserted to the right when active so
  // navigation always reflects the open file.
  const activeFile = FILES.find((f) => f.href === pathname);
  const srcFiles = FILES.filter((f) => f.group === "src");
  const visible = [
    ...srcFiles,
    ...(activeFile && activeFile.group !== "src" ? [activeFile] : []),
  ];
  return (
    <nav className="sh-tabs" aria-label="Open files">
      {visible.map((f) => {
        const active = pathname === f.href;
        return (
          <Link
            key={f.href}
            href={f.href}
            className={`sh-tab${active ? " is-active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <span className="icon">
              <Icon name={f.icon} size={13} />
            </span>
            <span>
              {f.name}
              <span className="ext">.{f.ext}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
