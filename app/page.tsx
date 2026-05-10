import FilePane from "@/app/components/ide/FilePane";
import IndexFile from "@/app/files/IndexFile";

export default function HomePage() {
  return (
    <FilePane>
      <IndexFile />
    </FilePane>
  );
}
