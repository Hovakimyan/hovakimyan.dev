"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/app/components/Icon";
import { FILES } from "@/lib/files";

export default function Tabs() {
  const pathname = usePathname();
  return (
    <nav className="sh-tabs" aria-label="Open files">
      {FILES.map((f) => {
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
