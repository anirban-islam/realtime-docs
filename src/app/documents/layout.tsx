interface DocumentsLayoutProps{
    children : React.ReactNode;
}
const DocumentsLayout = ({children}:DocumentsLayoutProps) => {
    return (
        <div>
            <h1>Document Layout</h1>
            {children}
        </div>
    );
}

export default DocumentsLayout;
