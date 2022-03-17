import styled from "styled-components";

export const Title = styled.div`
  color: #717171;
  font-size: 16px;
  text-align: ${({textPosition}) =>
          textPosition === 'start' ? `start; width: 100% !important;` : textPosition};
  font-family: "objectivity-regular-11", sans-serif;
  width: 200px;
  @media (max-width: 1130px) {
    width: 100%;
    margin: 0;
    &:last-child {
      display: ${({lastChild}) => lastChild ? 'block' : 'none'};
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
      display: ${({lastChild}) => lastChild ? 'contents' : 'none'};
    }
  }
`;
export const ConfettiWrapper = styled.div`
  margin-top: 3%;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1130px) {
    display: flex;
    ${({positionWrapper}) =>
            positionWrapper === 'absolute' ?
                    `position: absolute; right: 0; width: 20vw; flex-direction: column-reverse;` : `width: 100%;`}
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
  height: 350px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 135px;
  @media (max-width: 1130px) {
    height: unset !important;
    padding: 0;
    width: unset !important;
    flex-wrap: nowrap;
  }
`;
export const ConfettiImage = styled.img`
  width: 100%;
  margin: auto;
  display: flex;
  border-radius: 50%;
  transition: 0.4s;
`;
export const ConfettiItem = styled.div`
  padding: 4px;
  background-color: white;

  ${({selectConfetti, name, mobileDevice}) =>
          `border: 4px solid ${
                  !mobileDevice && selectConfetti.id === name ? "#2EDBE3" : "transparent"
          };transition: 0.4s;
    ${mobileDevice && selectConfetti.id !== name && "display:none;"}`}

  filter: drop-shadow(0px 0px 1px rgba(40, 41, 61, 0.04)) drop-shadow(0px 2px 4px rgba(96, 97, 112, 0.16));
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 20px 10px;

  @media (max-height: 605px) {
    margin: 10px 0;
  }
`;
