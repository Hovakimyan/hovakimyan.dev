"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import BookCallButton from "./BookCallButton";
import { NAV_ITEMS } from "@/lib/content";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [trackedPath, setTrackedPath] = useState(pathname);

  // Close the mobile menu on navigation (derive-during-render avoids the
  // react-hooks/set-state-in-effect lint).
  if (trackedPath !== pathname) {
    setTrackedPath(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header className={`sh-topbar${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="sh-mark" aria-label="Sergey Hovakimyan home">
          <span>Sergey&nbsp;Hovakimyan</span>
          <span className="sh-mark-rule" aria-hidden="true" />
        </Link>

        <nav className="sh-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={isActive(item.href) ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <span className="sh-mark-meta">Glendale · Open to engagements</span>

        <BookCallButton label="Schedule" className="sh-cta-pill" />

        <button
          type="button"
          className="sh-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="sh-mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`bars${menuOpen ? " is-open" : ""}`}>
            <span></span>
          </span>
        </button>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={NAV_ITEMS}
        currentPath={pathname}
      />
    </>
  );
}
