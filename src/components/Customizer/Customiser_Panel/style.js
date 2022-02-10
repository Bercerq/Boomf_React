import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  user-select: none;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;
export const PanelContainer = styled.div`
  width: 198px;
  height: 100vh;
  background: #2edbe3;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 4;

  @media (max-height: 765px) {
    height: unset;
  }
  @media (max-width: 920px) {
    order: 3;
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;

export const LogoIcon = styled.img`
  margin-top: 30px;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const Option = styled.div`
  background: #ffffff;
  width: 119px;
  border-radius: 16px;
  margin: 32px 42px 17px 42px;
  @media (max-width: 920px) {
    height: 70px;
  }
  @media (max-width: 600px) {
    margin: 0 10px;
    width: 70px;
  }

  cursor: pointer;
  &:hover {
    filter: drop-shadow(0px 2px 4px rgba(53, 53, 53, 0.281))
      drop-shadow(0px 8px 16px rgba(53, 53, 53, 0.281));
    transition: 0.4s;
  }
  transition: 0.4s;
`;
export const OptionIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.img`
  width: 35px;
  height: 50px;
  margin: 15px 0;
  @media (max-width: 920px) {
    display: block;
    margin: 5px;
  }
`;

export const OptionText = styled.div`
  color: #222222;
  font-size: 16px;
  line-height: 170%;
  text-align: center;
  font-weight: bold;
  padding-bottom: 16px;
  margin-top: -10px;
  font-weight: 600;
  font-family: "Objectivity";
  @media (max-width: 920px) {
    display: none;
  }
`;
