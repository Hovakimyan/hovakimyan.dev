import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import GitignoreFile from "@/app/files/GitignoreFile";

export const metadata: Metadata = {
  title: ".gitignore",
  description: "Files git should ignore.",
};

export default function GitignorePage() {
  return (
    <FilePane>
      <GitignoreFile />
    </FilePane>
  );
}
