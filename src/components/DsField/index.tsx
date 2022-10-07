import React from 'react';
import * as S_ from './styles';
import { IDsField } from './type';

export const DsField = ({
  type,
  label,
  onChangeValue,
  text,
  ...props
}: IDsField) => (
  <S_.InputContainer>
    <S_.Label htmlFor="name">{label}</S_.Label>
    <S_.Input
      type={type}
      name="name"
      placeholder="Seu Placeholder Aqui..."
      onChange={({ target }) => onChangeValue(target.value)}
      value={text}
      {...props}
    />
  </S_.InputContainer>
);
