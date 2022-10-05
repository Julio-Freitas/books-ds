import { ButtonHTMLAttributes } from "react";

export enum Colors  {
    PRIMARY = '#EB9B00',
    SECONDARY = '#EB9B00',
    WHITE = "#fff",
    HOVER = '#B87900',

}

export interface IDSButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string,
    typeButton?: 'primary' | 'secondary',
    onClick?: () => void
}
