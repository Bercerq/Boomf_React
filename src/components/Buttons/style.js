import styled from "styled-components";
export const BlueBtn = styled.button`
  padding: 8px 40px;
  width: 100%;
  height: 48px;
  background: #2edbe3;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
  border-radius: 4px;
  color: white;
  font-size: 16px;
  border: none;
  outline: none;
  font-family: "Objectivity";
  font-weight: 400;

  cursor: pointer;
  svg {
    margin-left: 5px;
  }
`;
export const WhiteBtn = styled.button`
  background: ${({ background }) => `${background}`};
  color: ${({ color }) => `${color}`};

  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
  border-radius: 24px;
  cursor: pointer;
  width: 100%;
  padding: 14px 66px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  font-family: "Objectivity";
`;
