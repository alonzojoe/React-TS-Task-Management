import { ComponentType } from "react";
import { Category } from "./Categories";

export type FormData = {
    category: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: number;
}

export type Task = FormData & {
    id: string;
}

export type DateSelection = 'startDate' | 'endDate'

export type Status = {
    id: number;
    name: string;
    icon: ComponentType<{ className: string }>;
    classColor: string;
    classBgColor: string;
}

export type OptionBased = {
    id: number;
    name: string;
    icon: ComponentType<{ className: string }>;
    classColor: string;
    classBgColor: string;
    color?: string;
    bgColor?: string;
}

export type TValidation = {
    title: boolean,
    description: boolean
}

export type TaskData = Omit<Task, "category" | "status"> & {
    category: Category | null;
    status: Status | null
}