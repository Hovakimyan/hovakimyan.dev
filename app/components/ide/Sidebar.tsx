"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/app/components/Icon";
import { FILES } from "@/lib/files";
import { useIde } from "./IdeContext";

export default function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, closeSidebar } = useIde();

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
        <ul className="sh-sidebar-tree">
          <li className="group">
            <Icon name="chevron-down" size={12} className="chev" />
            <Icon name="folder" size={13} />
            sergey-hovakimyan
          </li>
          <li>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className="group">
                <Icon name="chevron-down" size={12} className="chev" />
                <Icon name="folder" size={13} />
                src
              </li>
              <li>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {FILES.map((f) => {
                    const active = pathname === f.href;
                    return (
                      <li key={f.href}>
                        <Link
                          href={f.href}
                          className={`file${active ? " is-active" : ""}`}
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
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="group" style={{ paddingTop: 8 }}>
                <Icon name="chevron-right" size={12} className="chev" />
                <Icon name="folder" size={13} />
                .git
              </li>
              <li className="group">
                <Icon name="chevron-right" size={12} className="chev" />
                <Icon name="folder" size={13} />
                public
              </li>
              <li>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li>
                    <span className="file" aria-disabled style={{ opacity: 0.6 }}>
                      <span className="icon">
                        <Icon name="doc" size={13} />
                      </span>
                      <span>
                        README<span className="ext">.md</span>
                      </span>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div className="sh-sidebar-meta">
          <strong>SH</strong>
          Engineer · Leader · Builder
        </div>
      </aside>
    </>
  );
}
