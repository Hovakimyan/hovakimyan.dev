"use client";

import dynamic from "next/dynamic";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";
import Titlebar from "./Titlebar";
import StatusBar from "./StatusBar";
import Inspector from "./Inspector";
import Terminal from "./Terminal";
import TerminalToggle from "./TerminalToggle";
import { IdeProvider } from "./IdeContext";

const BookingModal = dynamic(() => import("./BookingModal"), { ssr: false });

export default function IdeShell({
  children,
}: {
  children: React.ReactNode;
}) {
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
