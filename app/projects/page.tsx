import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import ProjectsFile from "@/app/files/ProjectsFile";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal projects — Ashoon (ashoon.com), Kamui (kamui.digital), Ashoon Assistant (ashoon.dev), HiveHall, DeskMate, Ashoon Studio (ashoon.online), and hovakimyan.dev.",
};

export default function ProjectsPage() {
  return (
    <FilePane>
      <ProjectsFile />
    </FilePane>
  );
}
