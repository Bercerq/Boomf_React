import styled, { keyframes, css } from "styled-components";

const heightSelectOpen = keyframes`
  0% {height: 0}
  100% {height: 37vh}
`;

const heightSelectClose = keyframes`
  0% {height: 37vh}
  100% {height: 0}
`;

const animationHeightSelect = ({ selected }) => css`
  ${selected ? heightSelectOpen : heightSelectClose}
`;

export const DeviceSelectImage = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  bottom: 0;
  border-radius: 32px 32px 0 0;
  z-index: 3;

  background: #ffffff;
  font-family: "objectivity-regular-11", sans-serif;
  box-shadow: 0 2px 8px rgba(40, 41, 61, 0.04),
    0 16px 24px rgba(96, 97, 112, 0.16);
  animation: ${animationHeightSelect} 100ms linear forwards;
`;

export const DeviceDivCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 6px;
`;

export const DeviceCloseWindow = styled.div`
  width: 37px;
  height: 5px;
  border-radius: 100px;
  background: #d6d6d6;
  cursor: pointer;
`;

export const DeviceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 52%;
  margin-top: 26px;
`;

export const DeviceButtonClose = styled.button`
  width: 88%;
  height: 48px;
  font-size: 16px;
  border-radius: 24px;
  background: #222222;
  color: #ffffff;
  box-shadow: 0 0 1px rgba(40, 41, 61, 0.08),
    0 0.5px 2px rgba(96, 97, 112, 0.16);
  cursor: pointer;
`;

export const DivFlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeviceContentCard = styled(DivFlexCenter)`
  z-index: 2;

  @media (max-width: 1130px) {
    position: absolute;
    right: 0;
    height: 100%;
    width: 30%;
    margin-top: 50px;
  }
  @media (max-width: 620px) {
    width: 15%;
  }
  @media (max-width: 540px) {
    width: auto;
    position: static;
    margin: 15px;
  }
`;
