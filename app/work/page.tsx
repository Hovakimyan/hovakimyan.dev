import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import WorkFile from "@/app/files/WorkFile";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from 13 years: financial systems at BuildOps with measured delivery data, EPAM micro-frontends, Renderforest Video Maker, Cloud Fleet Manager.",
};

export default function WorkPage() {
  return (
    <FilePane>
      <WorkFile />
    </FilePane>
  );
}
