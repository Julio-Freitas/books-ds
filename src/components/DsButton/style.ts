import styled from 'styled-components';
import { Colors } from './types';

export const Button = styled.button`
  background-color: ${Colors.PRIMARY};
  padding: 16px 32px;
  border: 2px solid ${Colors.PRIMARY};
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  border-radius: 3px;
  transition: ease-in-out .5s;
  font-weight: 600;
  text-transform: capitalize;

  &:hover {
    background-color: ${Colors.HOVER_PRIMARY} ;
    border: 2px solid ${Colors.HOVER_PRIMARY};
  }
`;
