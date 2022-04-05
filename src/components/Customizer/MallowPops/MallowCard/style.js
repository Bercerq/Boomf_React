import styled from "styled-components";
export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #d6d6d6;
  height: 435px;
  box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
    0px 8px 16px rgba(96, 97, 112, 0.16);
  @media (max-height: 610px) {
    height: 328px;
    width: 218px;
  }
  @media (max-width: 1130px) {
    width: 327px;
    height: 327px;
  }
`;
export const CardBox = styled.div`
  height: 280px;
  @media (max-height: 610px) {
    height: 160px;
  }
  @media (max-width: 1130px) {
    height: 160px;
  }
`;
export const SpaceForText = styled.div`
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
  @media (max-width: 1130px) {
    width: 292px;
    height: 133px;
  }
`;
