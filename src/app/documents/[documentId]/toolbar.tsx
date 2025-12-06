'use client'
import {LucideIcon, Undo2Icon} from 'lucide-react'
import { cn } from '../../../lib/utils';

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
                    console.log("Undo Click")
                }
            },
        
        ]
    ]
    
    return (
        <div className='bg-[#f1F4F9] py-0.5 px-2.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto'>
           {section[0].map((item)=>(
            <ToolbarButton key={item.lable} {...item}/>
           ))}
        </div>
    );
}

export default Toolbar;