interface DocsIdProps {
  params: Promise<{ documentId: string }>;
}

const Document = async ({ params }: DocsIdProps) => {
  const {documentId} = await params;
  
  return (
    <div>
      <h1>Single Document id : {documentId}</h1>
    </div>
  );
};

export default Document;
