import { ComponentType } from "react";
export type FormData = {
    category: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
}

export type DateSelection = 'startDate' | 'endDate'

export type Status = {
    id: number;
    name: string;
    icon: ComponentType<{ className: string }>;
    classColor: string;
    classBgColor: string;
}