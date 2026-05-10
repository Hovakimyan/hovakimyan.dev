import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import ContactFile from "@/app/files/ContactFile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Schedule a 30-minute strategic conversation with Sergey Hovakimyan.",
};

export default function ContactPage() {
  return (
    <FilePane>
      <ContactFile />
    </FilePane>
  );
}
