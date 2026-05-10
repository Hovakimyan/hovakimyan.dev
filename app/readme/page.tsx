import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import ReadmeFile from "@/app/files/ReadmeFile";

export const metadata: Metadata = {
  title: "README",
  description: "How to navigate the site.",
};

export default function ReadmePage() {
  return (
    <FilePane>
      <ReadmeFile />
    </FilePane>
  );
}
