'use client'
import {BoldIcon, ItalicIcon, ListTodoIcon, LucideIcon, MessageSquarePlus, PrinterIcon, Redo2Icon, RemoveFormattingIcon, SpellCheckIcon, UnderlineIcon, Undo2Icon} from 'lucide-react'
import { cn } from '../../../lib/utils';
import { useEditorStore } from '@/store/use-editor-store';
import { Separator } from '@/components/ui/separator';


interface ToolbarButtonProps{
    onClick?:()=>void;
    isActive?:boolean;
    icon:LucideIcon
}

const ToolbarButton = ({
    onClick,
    isActive,
    icon:Icon
}:ToolbarButtonProps)=>{
    return(
        <button
        onClick={onClick}
        className={cn(
        'text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80',
        isActive && "bg-neutral-200/80"
        )}
        >
            <Icon className='size-4'/>
        </button>
    )
}

const Toolbar = () => {
    const {editor}=useEditorStore();
    const section:{
        lable:string , 
        icon:LucideIcon ,
        onClick:()=>void,
        isActive?:boolean
    }[][] = [
        [
            {
                lable:"Undo",
                icon:Undo2Icon,
                onClick:()=>{
                    editor?.chain().focus().undo().run()
                }
            },
             {
                lable:"Redo",
                icon:Redo2Icon,
                onClick:()=>{
                    editor?.chain().focus().redo().run()
                }
            },
             {
                lable:"Print",
                icon:PrinterIcon,
                onClick:()=>{
                    window.print();
                }
            },
             {
                lable:"Spell Check",
                icon:SpellCheckIcon,
                onClick:()=>{
                   const current = editor?.view.dom.getAttribute("spellcheck");
                   editor?.view.dom.setAttribute("spellcheck", current==="false"?"true":"false");
                }
            },
        ],
        [
            {
                lable:"Bold",
                icon:BoldIcon,
                isActive:editor?.isActive("bold"),
                onClick:()=>{
                    editor?.chain().focus().toggleBold().run()
                }
            },
            {
                lable:"Italic",
                icon:ItalicIcon,
                isActive:editor?.isActive("italic"),
                onClick:()=>{
                    editor?.chain().focus().toggleItalic().run()
                }
            }, 
            {
                lable:"Underline",
                icon:UnderlineIcon,
                isActive:editor?.isActive("underline"),
                onClick:()=>{
                    editor?.chain().focus().toggleUnderline().run()
                }
            },
            {
                lable:"Comment",
                icon:MessageSquarePlus,
                isActive:false,
                onClick:()=>{
                    console.log("TO DO LATER")
                }
            },
               {
                lable:"List Todo",
                icon:ListTodoIcon,
                onClick:()=>{
                   editor?.chain().focus().toggleTaskList().run()
                },
                isActive:editor?.isActive("tasklist"),
            },
               {
                lable:"Remove Foemating",
                icon:RemoveFormattingIcon,
                isActive:false,
                onClick:()=>{
                    editor?.chain().focus().unsetAllMarks().run()
                }
            },
            
        ]
    ]
    
    return (
        <div className='bg-[#f1F4F9] py-0.5 px-2.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto'>
           {section[0].map((item)=>(
            <ToolbarButton key={item.lable} {...item}/>
           ))}
           <Separator orientation='vertical' className='min-h-6 bg-neutral-300'/>
           {section[1].map((item)=>(
            <ToolbarButton key={item.lable} {...item}/>
           ))}           
           <Separator orientation='vertical' className='min-h-6 bg-neutral-300'/>
           <Separator orientation='vertical' className='min-h-6 bg-neutral-300'/>
           <Separator orientation='vertical' className='min-h-6 bg-neutral-300'/>
           <Separator orientation='vertical' className='min-h-6 bg-neutral-300'/>
        </div>
    );
}

export default Toolbar;