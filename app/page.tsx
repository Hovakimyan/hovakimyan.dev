import FilePane from "@/app/components/ide/FilePane";
import HomeView from "@/app/components/HomeView";
import IndexFile from "@/app/files/IndexFile";

export default function HomePage() {
  return (
    <FilePane>
      <HomeView code={<IndexFile />} />
    </FilePane>
  );
}
