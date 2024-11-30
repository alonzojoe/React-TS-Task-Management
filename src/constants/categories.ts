
import { Category } from "../types/Categories";
import { IoBagHandleSharp } from "react-icons/io5";
import { TbUserPentagon } from "react-icons/tb";
import { MdOutlineMenuBook } from "react-icons/md";

export const CATEGORIES: Category[] = [
    {
        id: 1,
        name: 'Work Project',
        icon: IoBagHandleSharp,
        classColor: 'text-darkPink',
        classBgColor: 'bg-lightPink',
        color: '#F57CBA',
        bgColor: '#FFE4F2'
    },
    {
        id: 2,
        name: 'Personal Project',
        icon: TbUserPentagon,
        classColor: 'text-primary',
        classBgColor: 'bg-lightPrimary',
        color: '#5F33E1',
        bgColor: '#E8E1FB'
    },
    {
        id: 3,
        name: 'Daily Study',
        icon: MdOutlineMenuBook,
        classColor: 'text-darkOrange',
        classBgColor: 'bg-lightOrange',
        color: '#FF7D53',
        bgColor: '#FFE9E1'
    },
]