import React from 'react';
import * as S_ from './styles';
import { IDsTags } from './types';

export const DsTag = ({ text = 'tag' }: IDsTags) => <S_.Tag>{text}</S_.Tag>;
