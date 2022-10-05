import styled from 'styled-components';
import { Colors, IDsAmount } from './types';

export const Input = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  border: 0;
  outline: none;
  text-align: center;
  flex: 1;
  caret-color: transparent;
  font-weight: 600;
  font-size: 16px;
  transition: ease-in 0.3s;

  &:disabled {
    background-color: #eef;
    border-radius: 28px;
    color: brown;
  }
`;

export const Icon = styled.label`
  min-width: 28px;
  min-height: 28px;
  display: inline-flex;
  background: ${Colors.PRIMARY};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  vertical-align: middle;
  transition: ease-in-out 0.3s;

  :hover {
    border-color: ${Colors.PRIMARY};
    background-color: #fff;
    color: ${Colors.PRIMARY};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.div<Partial<IDsAmount>>`
  position: relative;
  display: flex;
  align-items: center;
  min-width: calc(28px * 3.5);
  max-width: 100px;
  color: #fff;
  align-items: stretch;
  gap: 0;

  ${props =>
    props.type === 'secondary' &&
    `

   ${Icon} {
    background: ${Colors.SECONDARY};

    :hover {
        border-color: ${Colors.SECONDARY};
        background-color: ${Colors.WHITE};
        color: ${Colors.SECONDARY};
        box-shadow: 0px 2px 4px ${Colors.SECONDARY};
      }
   }
  `}
`;
