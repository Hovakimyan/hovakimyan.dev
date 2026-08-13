import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import AboutFile from "@/app/files/AboutFile";

export const metadata: Metadata = {
  title: "About",
  description: "The story, how I lead, how I work with agents, and a git log of a 13-year career from Yerevan to Santa Monica.",
};

export default function AboutPage() {
  return (
    <FilePane>
      <AboutFile />
    </FilePane>
  );
}
