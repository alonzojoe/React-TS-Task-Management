
import { Category } from "../types/Categories";
import { Status } from "../types/Task";
import { IoBagHandleSharp } from "react-icons/io5";
import { TbUserPentagon } from "react-icons/tb";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { RiCalendarTodoFill } from "react-icons/ri";

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

export const STATUS: Status[] = [
    {
        id: 1,
        name: 'To-do',
        icon: RiCalendarTodoFill,
        classColor: 'text-darkBlue',
        classBgColor: 'bg-lightBlue',
    },
    {
        id: 2,
        name: 'In Progress',
        icon: GoClockFill,
        classColor: 'text-darkOrange',
        classBgColor: 'bg-lightOrange',
    },
    {
        id: 3,
        name: 'Done',
        icon: FaCheckCircle,
        classColor: 'text-primary',
        classBgColor: 'bg-lightPrimary',
    }
]