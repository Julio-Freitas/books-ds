import styled from 'styled-components';
import { Colors, IDSButton } from './types';

const isPrimary = (key: string = 'primary') => key && key === 'primary';

export const Button = styled.button<IDSButton>`
  background-color: ${({ typeButton }) =>
    isPrimary(typeButton) ? Colors.PRIMARY : Colors.WHITE};

  padding: 16px 32px;
  border: 2px solid;

  border-color: ${({ typeButton }) =>
    isPrimary(typeButton) ? Colors.PRIMARY : Colors.SECONDARY};

  color: ${({ typeButton }) =>
    isPrimary(typeButton) ? Colors.WHITE : Colors.SECONDARY};

  font-size: 20px;
  cursor: pointer;
  border-radius: 3px;
  transition: ease-in-out 0.5s;
  font-weight: 600;
  text-transform: capitalize;

  &:hover {
    ${({ typeButton }) =>
      isPrimary(typeButton)
        ? `
        background-color:${Colors.HOVER};
        border-color:${Colors.HOVER};
        `
        : `
        border-color:  ${Colors.HOVER};
        color:${Colors.HOVER};
    `}
  }
`;
