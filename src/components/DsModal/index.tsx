import React from 'react';

import * as S_ from './styles';
import { IDsModal } from './types';

export const DsModal = ({ children, title, onClose, status }: IDsModal) => {
  if (status === 'close') return  <></>;

  return (
    <>
      <S_.Layer onClick={onClose} />
      <S_.Screen>
        <S_.TitleModalWrapper>
          <S_.TitleModal>{title}</S_.TitleModal>
          <S_.ButtonCloseModal onClick={onClose}>X</S_.ButtonCloseModal>
        </S_.TitleModalWrapper>
        {children}
      </S_.Screen>
    </>
  );
};
