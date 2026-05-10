"use client";

import dynamic from "next/dynamic";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";
import Titlebar from "./Titlebar";
import StatusBar from "./StatusBar";
import Inspector from "./Inspector";
import AskFab from "./AskFab";
import { IdeProvider } from "./IdeContext";

const CommandPalette = dynamic(() => import("./CommandPalette"), {
  ssr: false,
});
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
        <main className="sh-main" id="main">
          {children}
        </main>
        <Inspector />
        <StatusBar />
      </div>
      <AskFab />
      <CommandPalette />
      <BookingModal />
    </IdeProvider>
  );
}
