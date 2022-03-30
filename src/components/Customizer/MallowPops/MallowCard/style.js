import styled from "styled-components";
export const CardContainer = styled.div`
  background-color: #c4c4c4;
  height: 435px;
  @media (max-height: 610px) {
    height: 328px;
    width: 218px;
  }
`;
export const CardBox = styled.div`
  height: 280px;
  @media (max-height: 610px) {
    height: 160px;
  }
`;
export const SpaceForText = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;

  width: 292px;
  height: 133px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='white' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
  word-break: break-word;
  z-index: 3;

  @media (max-height: 610px) {
    width: 180px;
    height: 100px;
  }
  #buttonClickMallowpops {
    left: 35px;
    top: 38px;
    position: absolute;
    @media (max-height: 610px) {
      left: -15px;
      top: 25px;
    }
  }
`;
