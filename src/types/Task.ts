import { ComponentType } from "react";
export type FormData = {
    category: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: number;
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