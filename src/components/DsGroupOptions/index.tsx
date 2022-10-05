import React, { useState } from 'react';
import * as S_ from './styles';
import { IDsGroupOptions, IDsGroupOption } from './types';

export const DsGroupOptions = ({
  options,
  onChangeOption,
  defaultOption,
}: IDsGroupOptions) => {
  const [_select, _setSelect] = useState<IDsGroupOption | null>(
    defaultOption ?? null
  );

  const _handleSelected = (option: IDsGroupOption) => {
    _setSelect(option);
    if (onChangeOption) onChangeOption(option);
  };

  return (
    <>
      {options.map(option => (
        <S_.Section
          key={option.id}
          selected={_select?.id === option.id}
          onClick={() => _handleSelected(option)}
        >
          <S_.Header>{option.title}</S_.Header>

          <S_.Content>
            <strong>{option.body}</strong>
          </S_.Content>
          <S_.Footer>{option.footer}</S_.Footer>
        </S_.Section>
      ))}
    </>
  );
};
