import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import WorkFile from "@/app/files/WorkFile";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies — BuildOps, EPAM, Renderforest, Cloud Fleet Manager.",
};

export default function WorkPage() {
  return (
    <FilePane>
      <WorkFile />
    </FilePane>
  );
}
