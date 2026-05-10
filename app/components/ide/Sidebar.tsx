"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon, { type IconName } from "@/app/components/Icon";
import { FILES } from "@/lib/files";
import { useIde } from "./IdeContext";

interface RowProps {
  href: string;
  icon: IconName;
  name: string;
  ext: string;
  active: boolean;
  indent?: number;
}

function FileRow({ href, icon, name, ext, active, indent = 32 }: RowProps) {
  return (
    <Link
      href={href}
      className={`file${active ? " is-active" : ""}`}
      style={{ paddingLeft: indent }}
      aria-current={active ? "page" : undefined}
    >
      <span className="icon">
        <Icon name={icon} size={13} />
      </span>
      <span>
        {name}
        <span className="ext">.{ext}</span>
      </span>
    </Link>
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
                  {srcFiles.map((f) => (
                    <li key={f.href}>
                      <FileRow
                        href={f.href}
                        icon={f.icon}
                        name={f.name}
                        ext={f.ext}
                        active={pathname === f.href}
                      />
                    </li>
                  ))}
                </ul>
              </li>

              <li className="group" style={{ paddingTop: 4 }}>
                <Icon name="chevron-down" size={12} className="chev" />
                <Icon name="folder" size={13} />
                public
              </li>
              <li>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {publicFiles.map((f) => (
                    <li key={f.href}>
                      <FileRow
                        href={f.href}
                        icon={f.icon}
                        name={f.name}
                        ext={f.ext}
                        active={pathname === f.href}
                      />
                    </li>
                  ))}
                </ul>
              </li>

              {rootFiles.map((f) => (
                <li key={f.href} style={{ paddingTop: 2 }}>
                  <FileRow
                    href={f.href}
                    icon={f.icon}
                    name={f.name}
                    ext={f.ext}
                    active={pathname === f.href}
                    indent={16}
                  />
                </li>
              ))}
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
