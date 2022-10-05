import { LabelHTMLAttributes } from "react";


export enum Colors  {
    PRIMARY = '#EB9B00',
    WHITE = '#FFF',
}

export interface IDsTags extends LabelHTMLAttributes<HTMLLabelElement> {
    text?: string
}
