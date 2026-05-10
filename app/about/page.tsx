import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import AboutFile from "@/app/files/AboutFile";

export const metadata: Metadata = {
  title: "About",
  description: "Story, leadership philosophy, AI engineering, and the git log of a 13-year career.",
};

export default function AboutPage() {
  return (
    <FilePane>
      <AboutFile />
    </FilePane>
  );
}
