"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";
import Titlebar from "./Titlebar";
import StatusBar from "./StatusBar";
import Inspector from "./Inspector";
import Terminal from "./Terminal";
import TerminalToggle from "./TerminalToggle";
import { IdeProvider } from "./IdeContext";

const BookingModal = dynamic(() => import("./BookingModal"), { ssr: false });

/**
 * Routes that render without the IDE chrome. /resume gets the plain
 * recruiter-friendly view; this list can grow if more "out of chrome"
 * pages are added later.
 */
const PLAIN_ROUTES = new Set<string>(["/resume"]);

export default function IdeShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (PLAIN_ROUTES.has(pathname)) {
    return <>{children}</>;
  }
  return (
    <IdeProvider>
      <div className="sh-ide">
        <Titlebar />
        <Sidebar />
        <Tabs />
        <section className="sh-main" id="main" aria-label="Open file">
          {children}
        </section>
        <Inspector />
        <Terminal />
        <StatusBar />
      </div>
      <TerminalToggle />
      <BookingModal />
    </IdeProvider>
  );
}
