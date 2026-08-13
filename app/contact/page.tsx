import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import ContactFile from "@/app/files/ContactFile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a 30-minute call or email directly. Engineering leadership, micro-frontend architecture, accessibility programs and AI-augmented builds.",
};

export default function ContactPage() {
  return (
    <FilePane>
      <ContactFile />
    </FilePane>
  );
}
