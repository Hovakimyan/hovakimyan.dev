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
  terminalOpen: boolean;
  toggleTerminal: () => void;
  openTerminal: () => void;
  closeTerminal: () => void;
  bookingOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
}

const IdeContext = createContext<IdeState | null>(null);

export function IdeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeFile = fileForPath(pathname);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [trackedPath, setTrackedPath] = useState(pathname);

  // Close mobile sidebar on navigation (derive-during-render).
  if (trackedPath !== pathname) {
    setTrackedPath(pathname);
    if (sidebarOpen) setSidebarOpen(false);
  }

  // ⌘K + ` shortcuts.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
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
        setTerminalOpen((o) => !o);
      } else if (e.key === "Escape") {
        setBookingOpen(false);
        setSidebarOpen(false);
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
    toggleTerminal: useCallback(() => setTerminalOpen((o) => !o), []),
    openTerminal: useCallback(() => setTerminalOpen(true), []),
    closeTerminal: useCallback(() => setTerminalOpen(false), []),
    bookingOpen,
    openBooking: useCallback(() => setBookingOpen(true), []),
    closeBooking: useCallback(() => setBookingOpen(false), []),
  };

  return <IdeContext.Provider value={value}>{children}</IdeContext.Provider>;
}

export function useIde(): IdeState {
  const ctx = useContext(IdeContext);
  if (!ctx) throw new Error("useIde must be used inside IdeProvider");
  return ctx;
}
