import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import WritingFile from "@/app/files/WritingFile";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Published articles on engineering practice — coding patterns, review discipline, and agent-augmented delivery.",
};

export default function WritingPage() {
  return (
    <FilePane>
      <WritingFile />
    </FilePane>
  );
}
