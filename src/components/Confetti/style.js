import styled from "styled-components";
export const Title = styled.div`
  color: #717171;
  font-size: 16px;
  text-align: end;
  font-family: "objectivity-regular-11", sans-serif;
  @media (max-width: 920px) {
    text-align: start;
    margin: 12px 16px;
    &:last-child {
      display: none;
    }
  }
  @media (max-width: 920px) {
    display: none;
  }
`;
export const ConfettiWrapper = styled.div`
  margin-top: 3%;
  padding-right: 50px;
  @media (max-width: 920px) {
    order: 1;
    margin-top: 0;
    padding-right: 0;
  }
`;
export const ConfetiBox = styled.div`
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #666666 #ffffff;
  }
  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #666666;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  overflow-y: scroll;
  padding-right: 5px;
  height: 58vh;
  @media (max-width: 1600px) {
    height: 40vh;
  }
  @media (max-height: 785px) {
    height: 35vh;
  }
  @media (max-width: 920px) {
    display: flex;
    height: unset;
    &::-webkit-scrollbar {
      height: 8px;
    }
  }
`;
export const ConfettiImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin: 6px;
  @media (max-width: 920px) {
    width: 45px;
    height: 45px;
    margin: 0;
  }
`;
export const ConfettiItem = styled.div`
  filter: drop-shadow(0px 0px 1px rgba(40, 41, 61, 0.04))
    drop-shadow(0px 2px 4px rgba(96, 97, 112, 0.16));
  cursor: pointer;
  width: 78px;
  height: 78px;
  @media (max-width: 920px) {
    width: 45px;
    height: 45px;
  }
  border-radius: 50%;
  ${({ selectConfetti, name }) =>
    `border: 4px solid ${
      selectConfetti.name === name ? "#2EDBE3" : "transparent"
    };  transition: 0.4s;`}
  transition: 0.4s;
  background-color: white;
  margin: 24px 0 24px auto;
  @media (max-width: 920px) {
    margin: 12px 4%;
  }
  @media (max-width: 520px) {
    margin: 12px 1%;
  }
`;