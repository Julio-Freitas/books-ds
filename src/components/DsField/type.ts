import { InputHTMLAttributes } from "react";


export interface IDsField extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: 'text' | 'email' | 'password' | 'date';
    text: string;
    onChangeValue: (value: string) => void
}
