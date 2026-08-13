import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import ReadmeFile from "@/app/files/ReadmeFile";

export const metadata: Metadata = {
  title: "README",
  description:
    "How to navigate hovakimyan.dev — the file explorer, the tab strip, the working terminal, and the keyboard shortcuts that drive them.",
};

export default function ReadmePage() {
  return (
    <FilePane>
      <ReadmeFile />
    </FilePane>
  );
}
