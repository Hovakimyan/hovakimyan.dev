import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import PortraitFile from "@/app/files/PortraitFile";

export const metadata: Metadata = {
  title: "portrait.jpg",
  description: "B&W studio portrait.",
};

export default function PortraitPage() {
  return (
    <FilePane>
      <PortraitFile />
    </FilePane>
  );
}
