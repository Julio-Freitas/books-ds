import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid #002f52;
  border-radius: 24px;
  padding: 10px 15px;
  outline: #002f52;
  caret-color: #002f52;
  box-sizing: border-box;

  &::placeholder {
    font-family: 'sans-serif';
    color: #a4a4a4;
  }

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  font-family: 'sans-serif';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #002f52;
  padding-left: 15px;
  transition: transform 0.5s;
  transform: translateY(-7px);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  &:focus-within {
    ${Label} {
      transform: translateY(7px);
      &::first-letter {
        font-size: 18px;
        background-color: #002f52;
        color: #fff;
        padding: 0 2px;
        border-radius: 1px;
      }
    }
  }
`;
