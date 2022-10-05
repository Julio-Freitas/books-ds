import React, { HtmlHTMLAttributes } from 'react';
import * as S from './style';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
}
export const DsButton = ({ onClick, ...rest }: ButtonProps) => {
  return (
    <S.Button type="button" onClick={onClick} {...rest}>
      Button
    </S.Button>
  );
};
