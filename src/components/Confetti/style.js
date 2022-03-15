import styled from "styled-components";
export const Title = styled.div`
  color: #717171;
  font-size: 16px;
  text-align: ${({ textStart }) => (textStart ? "start" : "end")};
  font-family: "objectivity-regular-11", sans-serif;
  width: 200px;
  text-align: center;
  @media (max-width: 1130px) {
    width: auto;
    text-align: center;
    margin: 0;
    &:last-child {
      display: none;
    }
  }
  @media (max-height: 680px) {
    &:last-child {
      display: none;
    }
  }

  span {
    font-weight: bold;
    @media (max-width: 1130px) {
      display: none;
    }
  }
`;
export const ConfettiWrapper = styled.div`
  margin-top: 3%;
  padding-right: 40px;

  @media (max-width: 1130px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    position: absolute;
    right: 0;
    width: 20vw;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 400px) {
    margin-left: unset;
  }
  @media (max-width: 520px) {
    right: 20px;
  }

`;
export const ConfetiBox = styled.div`
  * {
    scrollbar-width: auto;
    scrollbar-color: #666666 #ffffff;
  }
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
  padding-right: 5px;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 1130px) {
    height: unset !important;
    padding: 0;
    width: unset !important;
    flex-wrap: nowrap;
  }
  @media (max-height: 680px) {
    overflow-x: hidden;
    height: 30vh;
    flex-wrap: nowrap;
    width: 9vw;
    margin: auto;
  }
`;
export const ConfettiImage = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  border-radius: 50%;
  transition: 0.4s;

  @media (max-width: 1130px) {
    width: 45px;
    height: 45px;
    margin: 0;
  }
`;
export const ConfettiItem = styled.div`
  padding: 4px;
  background-color: white;

  ${({ selectConfetti, name, mobileDevice }) =>
    `border: 4px solid ${
      !mobileDevice && selectConfetti.id === name ? "#2EDBE3" : "transparent"
    };transition: 0.4s;
    ${mobileDevice && selectConfetti.id !== name && "display:none;"}`}

  filter: drop-shadow(0px 0px 1px rgba(40, 41, 61, 0.04))
    drop-shadow(0px 2px 4px rgba(96, 97, 112, 0.16));
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 20px;

  @media (max-height: 680px) {
    margin: 20px 0;
  }
  @media (max-width: 490px) {
    margin: 10px 0;
  }
`;
