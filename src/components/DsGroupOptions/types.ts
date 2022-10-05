import { HTMLAttributes } from 'react';

export enum Colors {
  SELECTED = '002F52',
  DEFAULT = '#eb9b00',
  WITHE = '#fff',
  SELECTED_LINEAR = 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)',
}

export interface IDsGroupOption {
  selected?: boolean;
  id: number | string;
  body: string;
  title: string;
  footer: string;
}

export interface IDsGroupOptions extends HTMLAttributes<HTMLElement> {
  options: IDsGroupOption[];
  defaultOption?: IDsGroupOption;
  onChangeOption: (option: IDsGroupOption) => void;
}
