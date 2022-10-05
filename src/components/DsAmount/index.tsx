import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S_ from './styles';
import { IDsAmount } from './types';

export const DsAmount = ({ type, maxValue, onchangeValue }: IDsAmount) => {
  const [_value, _setValue] = useState(0);
  const amoutRef = useRef<HTMLInputElement>(null);

  const updateValue = useCallback(() => onchangeValue(_value), [_value]);

  useEffect(() => updateValue(), [updateValue]);

  const _handleAmountPlus = useCallback(() => {
    _setValue(oddValue =>
      amoutRef && Number(amoutRef.current?.max) <= oddValue
        ? oddValue
        : oddValue + 1
    );
  }, []);

  const _handleAmountLess = useCallback(
    () => _setValue(oddValue => (oddValue > 0 ? oddValue - 1 : 0)),
    []
  );

  return (
    <S_.Container type={type}>
      <S_.Icon onClick={_handleAmountLess} htmlFor="amount">
        -
      </S_.Icon>

      <S_.Input
        ref={amoutRef}
        type="number"
        value={_value}
        max={maxValue}
        min={0}
        id="amount"
        name="amount"
        disabled={_value === Number(amoutRef.current?.max)}
      />
      <S_.Icon onClick={_handleAmountPlus} htmlFor="amount">
        +
      </S_.Icon>
    </S_.Container>
  );
};
