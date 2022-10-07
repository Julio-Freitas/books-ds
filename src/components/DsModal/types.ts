import { ReactNode } from "react";

export interface IDsModal {
    children?: ReactNode,
    title?: string,
    status: 'open' | 'close',
    onClose?: () => void,
    widthScreen?: number
}
