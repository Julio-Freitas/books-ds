import React from 'react';
import * as S_ from './style';
import { IDSButton } from './types';

export const DsButton = ({
  text,
  typeButton = 'primary',
  onClick,
  ...rest
}: IDSButton) => {
  return (
    <S_.Button type="button" typeButton={typeButton} onClick={onClick} {...rest}>
      {text}
    </S_.Button>
  );
};
