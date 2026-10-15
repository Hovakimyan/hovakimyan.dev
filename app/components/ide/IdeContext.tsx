"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { fileForPath, type FileEntry } from "@/lib/files";

interface IdeState {
  activeFile: FileEntry | undefined;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  /** null = not chosen yet; CSS opens it on desktop, hides it on phones. */
  terminalOpen: boolean | null;
  toggleTerminal: () => void;
  openTerminal: () => void;
  closeTerminal: () => void;
  bookingOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
  paletteOpen: boolean;
  openPalette: () => void;
  closePalette: () => void;
}

const IdeContext = createContext<IdeState | null>(null);

/** Mirrors the breakpoint in globals.css (.sh-terminal.is-auto). */
function isDesktop() {
  return window.matchMedia("(min-width: 768px)").matches;
}

export function IdeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeFile = fileForPath(pathname);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Terminal defaults to open on desktop, closed on phones — it eats
  // ~40% of a 375px-tall viewport otherwise. Users can still toggle
  // with backtick, ⌘K, or the title-bar terminal button.
  // Until the visitor chooses, the terminal is "auto": the same markup
  // on server and client (hydration-safe), with a media query deciding
  // open on desktop and closed on phones, where it eats ~40% of a
  // 375px-tall viewport. Backtick, ⌘K or the title-bar button choose.
  const [terminalOpen, setTerminalOpen] = useState<boolean | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [trackedPath, setTrackedPath] = useState(pathname);

  // Close mobile sidebar on navigation. React 19's recommended pattern
  // for state derived from a prop/route change — explicitly preferred
  // over useEffect (which lint flags as cascading renders).
  if (trackedPath !== pathname) {
    setTrackedPath(pathname);
    if (sidebarOpen) setSidebarOpen(false);
  }

  // ⌘P (quick open), ⌘K + ` shortcuts.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;
      if ((e.key === "p" || e.key === "P") && (e.metaKey || e.ctrlKey)) {
        // Overrides the browser's print dialog, as in VS Code on the web.
        e.preventDefault();
        setPaletteOpen((o) => !o);
      } else if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setTerminalOpen(true);
        // Move focus to the terminal input on the next frame.
        requestAnimationFrame(() => {
          document
            .querySelector<HTMLInputElement>(".sh-terminal-input")
            ?.focus();
        });
      } else if (e.key === "`" && !isInput) {
        e.preventDefault();
        setTerminalOpen((o) => !(o ?? isDesktop()));
      } else if (e.key === "Escape") {
        setBookingOpen(false);
        setSidebarOpen(false);
        setPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Body scroll lock for booking modal only — the IDE shell already
  // handles the rest (overflow: hidden on html/body).
  useEffect(() => {
    if (!bookingOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [bookingOpen]);

  const value: IdeState = {
    activeFile,
    sidebarOpen,
    toggleSidebar: useCallback(() => setSidebarOpen((o) => !o), []),
    closeSidebar: useCallback(() => setSidebarOpen(false), []),
    terminalOpen,
    toggleTerminal: useCallback(
      () => setTerminalOpen((o) => !(o ?? isDesktop())),
      [],
    ),
    openTerminal: useCallback(() => setTerminalOpen(true), []),
    closeTerminal: useCallback(() => setTerminalOpen(false), []),
    bookingOpen,
    openBooking: useCallback(() => setBookingOpen(true), []),
    closeBooking: useCallback(() => setBookingOpen(false), []),
    paletteOpen,
    openPalette: useCallback(() => setPaletteOpen(true), []),
    closePalette: useCallback(() => setPaletteOpen(false), []),
  };

  return <IdeContext.Provider value={value}>{children}</IdeContext.Provider>;
}

export function useIde(): IdeState {
  const ctx = useContext(IdeContext);
  if (!ctx) throw new Error("useIde must be used inside IdeProvider");
  return ctx;
}
