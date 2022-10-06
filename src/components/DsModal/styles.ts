import styled from 'styled-components';

export const Layer = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(101, 101, 101, 0.85);
  z-index: 0;
  display: flex;
`;

export const Screen = styled.div`
  z-index: 1;
  position: fixed;
  padding: 64px;
  background: #ffffff;
  box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
`;

export const TitleModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
  align-items: center;
`;
export const TitleModal = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #eb9b00;
  margin: 0;
`;

export const ButtonCloseModal = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #002f52;
  margin-left: 10px;
  transition: all .5s;

  :hover {
    color: #002a50;
    font-weight: bold;
  }
`;
