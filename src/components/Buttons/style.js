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
  font-family: "objectivity-regular-11", sans-serif;
  font-weight: 400;
  
  &:hover {
    background: #85ecf1;
  }
  &:focus {
    background: #01aeb7;
  }

  cursor: pointer;
  img {
    margin-left: 4px;
  }
`;

export const WhiteBtn = styled.button`
  background: ${({ background }) => `${background}`};
  color: ${({ color }) => `${color}`};
  &:focus {
    box-shadow: none;
  }

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
  font-family: "objectivity-regular-11", sans-serif;
  ${({marginDesktop}) => marginDesktop && `margin-right: ${marginDesktop}; width: fit-content; padding: 14px 30px;`};
  @media (max-width: 415px) {
    padding: 14px 30px;
  }
`;

export const SideBarBtn = styled.button`
  width: 100%;
  padding: 12px 61px 12px 0;
  @media (max-width: 1130px){
    padding: 10px 20px 10px 0;
    font-size: 13px;
  }

  display: flex;
  cursor: pointer;
  outline: none;
  font-family: "objectivity-regular-11", sans-serif;

  font-size: 16px;
  text-align: center;
  font-weight: 400;
  color: #222222;
  align-items: center;
  background: #ffffff;
  border: 1px solid #222222;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
  border-radius: 4px;
  img {
    margin: 0 16px;
  }
  &:nth-child(2) {
    margin: 24px 0;
  }

  &:hover {
    box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
      0px 8px 16px rgba(96, 97, 112, 0.16);
  }
  &:focus {
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.08),
      0px 0.5px 2px rgba(96, 97, 112, 0.16);
  }
`;
