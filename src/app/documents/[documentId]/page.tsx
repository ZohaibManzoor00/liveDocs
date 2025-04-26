import { Editor } from "./_components/editor";
import Navbar from "./_components/navbar";
import Toolbar from "./_components/toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <>
        <Navbar />
        <Toolbar />
        <Editor />
      </>
    </div>
  );
}
