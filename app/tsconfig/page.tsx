import type { Metadata } from "next";
import FilePane from "@/app/components/ide/FilePane";
import TsconfigFile from "@/app/files/TsconfigFile";

export const metadata: Metadata = {
  title: "tsconfig.json",
  description: "TypeScript compiler config.",
};

export default function TsconfigPage() {
  return (
    <FilePane>
      <TsconfigFile />
    </FilePane>
  );
}
