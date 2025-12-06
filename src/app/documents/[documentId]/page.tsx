import Editor from "./editor";
import Toolbar from './toolbar';

interface DocsIdProps {
  params: Promise<{ documentId: string }>;
}

const Document = async ({ params }: DocsIdProps) => {
  const {documentId} = await params;
  
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar/>
      <Editor />
    </div>
  );
};

export default Document;
