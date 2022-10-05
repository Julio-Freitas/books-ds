import styled from 'styled-components';
import { Colors, IDsTags } from './types';

export const Tag = styled.label<IDsTags>`
  padding: 20px 32px;
  background-color: ${Colors.PRIMARY};
  color: ${Colors.WHITE};
  border-radius: 5px;
  display: inline-flex;
  gap: 5px;
  font-size: 24px;
  font-family: sans-serif;
  font-weight: 700;
`;
