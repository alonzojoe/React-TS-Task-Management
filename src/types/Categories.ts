import { ComponentType } from "react";
export type Category = {
    id: number;
    name: string;
    icon: ComponentType<{ className: string }>;
    classColor: string;
    classBgColor: string;
    color: string;
    bgColor: string;
}