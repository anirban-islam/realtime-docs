'use client'
import { TaskItem, TaskList } from '@tiptap/extension-list'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image'
import { Table, TableCell, TableHeader, TableRow } from '@tiptap/extension-table'
import { useEditorStore } from '@/store/use-editor-store'

const Editor = () => {
    const {setEditor}=useEditorStore();
    const editor = useEditor({
        onCreate({editor}){
            setEditor(editor);
        },
        onDestroy(){
            setEditor(null)
        },
        onUpdate({editor}){
            setEditor(editor)
        },
        onSelectionUpdate({editor}){
            setEditor(editor)
        },
        onTransaction({editor}){
            setEditor(editor)
        },
        onFocus({editor}){
            setEditor(editor)
        },
        onBlur({editor}){
            setEditor(editor)
        },
        onContentError({editor}){
            setEditor(editor)
        },
        editorProps:{
            attributes:{
                style:"padding-left:56px; padding-right:56px;",
                class:"foucs:outline-none print:border-0 bg-white border-[#C7C7C7] border flex flex-col min-h-[1054px] w-[860px] pt-10 pr-14 pb-10 cursor-text"
            }
        },
        extensions: [
            StarterKit,
            Image,
            ImageResize,
            Table,
            TableHeader,
            TableCell,
            TableRow,
            TaskList,
            TaskItem.configure({
            nested: true,
            }),
        ],
        content: `  <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>`,
        immediatelyRender: false,
    })
    return (
    <div className='size-full  overflow-x-auto bg-[#F9FBFD] px-4 print:px-0 print:bg-white print:overflow-visible'>
        <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
        <EditorContent editor={editor} />
        </div>
    </div>
    );
}

export default Editor;
