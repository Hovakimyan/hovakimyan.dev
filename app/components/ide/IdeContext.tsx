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
  paletteOpen: boolean;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  bookingOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
}

const IdeContext = createContext<IdeState | null>(null);

export function IdeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeFile = fileForPath(pathname);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [trackedPath, setTrackedPath] = useState(pathname);

  // Close mobile sidebar on navigation (derive-during-render).
  if (trackedPath !== pathname) {
    setTrackedPath(pathname);
    if (sidebarOpen) setSidebarOpen(false);
  }

  // Cmd/Ctrl+K to toggle palette.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      } else if (e.key === "Escape") {
        setPaletteOpen(false);
        setBookingOpen(false);
        setSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Body scroll lock when any modal is open.
  useEffect(() => {
    const anyOpen = paletteOpen || bookingOpen;
    if (!anyOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [paletteOpen, bookingOpen]);

  const value: IdeState = {
    activeFile,
    sidebarOpen,
    toggleSidebar: useCallback(() => setSidebarOpen((o) => !o), []),
    closeSidebar: useCallback(() => setSidebarOpen(false), []),
    paletteOpen,
    openCommandPalette: useCallback(() => setPaletteOpen(true), []),
    closeCommandPalette: useCallback(() => setPaletteOpen(false), []),
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
