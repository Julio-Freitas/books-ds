import styled from 'styled-components';
import { Colors, IDsGroupOption } from './types';

export const Section = styled.section<Partial<IDsGroupOption>>`
  background:${Colors.WITHE};
  border: 1px solid;
  border-color: ${Colors.DEFAULT};
  border-radius: 8px;
  padding: 10px 18px;
  max-width: 194px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 6px;
  color: ${Colors.DEFAULT};
  margin-bottom: 10px;
  font-family: 'sans-serif';
  transition: ease-in-out .4s;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
        `
        header, footer, div {color: ${Colors.WITHE};}
        background: ${Colors.SELECTED_LINEAR};
        border-color: ${Colors.SELECTED};
    `
    }
`;

export const Header = styled.header`
  font-size: 12px;
  font-weight: 400;
`;

export const Content = styled.div`
  strong {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Footer = styled.footer`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  font-weight: 400;
`;
