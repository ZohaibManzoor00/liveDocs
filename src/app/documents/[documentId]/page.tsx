import { Editor } from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <div>DocumentId: {documentId}</div>
      <div>
        <Editor />
      </div>
    </div>
  );
}
