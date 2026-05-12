import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import VenturesFile from "@/app/files/VenturesFile";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Personal projects — Ashoon (AI customer-messaging SaaS at ashoon.com), Ashoon Studio (web-design agency at ashoon.online), and hovakimyan.dev.",
};

export default function VenturesPage() {
  return (
    <FilePane>
      <VenturesFile />
    </FilePane>
  );
}
