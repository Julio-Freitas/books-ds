import React from 'react';
import { IDsCard } from './types';

import * as S_ from './styles'

export const DsCard = ({ children }: IDsCard) => {
  return <S_.Card>{children}</S_.Card>;
};
