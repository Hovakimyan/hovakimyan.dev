import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import PackageFile from "@/app/files/PackageFile";

export const metadata: Metadata = {
  title: "package.json",
  description: "npm dependencies and scripts.",
};

export default function PackagePage() {
  return (
    <FilePane>
      <PackageFile />
    </FilePane>
  );
}
