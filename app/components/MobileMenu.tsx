"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface NavItem {
  readonly label: string;
  readonly href: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  items: readonly NavItem[];
  currentPath: string;
}

export default function MobileMenu({
  open,
  onClose,
  items,
  currentPath,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    });
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath === href || currentPath.startsWith(href + "/");
  };

  return (
    <>
      <div
        className={`sh-mobile-backdrop${open ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        id="sh-mobile-menu"
        className={`sh-mobile-menu${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal={open}
        aria-label="Site navigation"
        aria-hidden={!open}
      >
        <nav className="sh-mobile-nav" aria-label="Primary mobile">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              data-num={`0${i + 1}`}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={isActive(item.href) ? "is-active" : undefined}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="sh-mobile-tagline">
          Building scalable, accessible web systems <em>with AI.</em>
        </p>
      </div>
    </>
  );
}
