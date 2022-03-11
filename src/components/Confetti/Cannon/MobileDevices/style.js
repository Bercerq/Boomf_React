import styled from "styled-components";

export const DeviceSelectImage = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100vw;
  height: 0;
  bottom: 0;
  border-radius: 32px 32px 0 0;
  z-index: 3;
  
  background: #FFFFFF;
  
  font-family: "objectivity-regular-11", sans-serif;
  box-shadow: 0 2px 8px rgba(40, 41, 61, 0.04), 0 16px 24px rgba(96, 97, 112, 0.16);
  transition: 0.4s;

  opacity: 0;
  ${({ currentEditor }) => currentEditor && "opacity:1;height: 37vh;transition: 0.4s;"};
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
  background: #D6D6D6;
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
  
  border-radius: 24px;
  background: #222222;
  color: #FFFFFF;
  box-shadow: 0 0 1px rgba(40, 41, 61, 0.08), 0 0.5px 2px rgba(96, 97, 112, 0.16);
  cursor: pointer;
`;

export const DivFlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeviceContentCard = styled(DivFlexCenter)`

  z-index: 3;
`;