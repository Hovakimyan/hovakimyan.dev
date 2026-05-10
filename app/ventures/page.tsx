import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import VenturesFile from "@/app/files/VenturesFile";

export const metadata: Metadata = {
  title: "Ventures",
  description: "Personal projects — Ashoon studio and hovakimyan.dev.",
};

export default function VenturesPage() {
  return (
    <FilePane>
      <VenturesFile />
    </FilePane>
  );
}
