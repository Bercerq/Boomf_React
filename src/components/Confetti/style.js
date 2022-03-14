import styled from "styled-components";
export const Title = styled.div`
  color: #717171;
  font-size: 16px;
  font-family: "objectivity-regular-11", sans-serif;
  width: 200px;
  text-align: center;
  @media screen and (max-width: 1130px), screen and (max-height: 605px)  {
    text-align: start;
    margin: 12px 16px;
    &:last-child {
      display: none;
    }
  }
  span {
    font-weight: bold;
  }
`;
export const ConfettiWrapper = styled.div`
  margin-top: 3%;
  padding-right: 40px;

  @media screen and (max-width: 1130px), screen and (max-height: 605px)  {
    order: 1;
    padding-right: 0;
    margin-left: 30px;
    margin-top: 10px;
  }
  @media (max-width: 400px) {
    margin-left: unset;
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

  @media screen and (max-width: 1130px), screen and (max-height: 605px)  {
    flex-direction: row;
    flex-wrap: nowrap;
    display: flex;
    overflow: scroll;
    height: unset;
    width: 90vw;
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border: 3px solid transparent;
    }
  }
`;
export const ConfettiImage = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  border-radius: 50%;
  transition: 0.4s;

  @media screen and (max-width: 1130px), screen and (max-height: 605px)  {
    width: 45px;
    height: 45px;
    margin: 0;
  }
`;
export const ConfettiItem = styled.div`
  padding: 4px;
  background-color: white;

  ${({ selectConfetti, name }) =>
    `border: 4px solid ${
      selectConfetti.id === name ? "#2EDBE3" : "transparent"
    };  transition: 0.4s;`}
  filter: drop-shadow(0px 0px 1px rgba(40, 41, 61, 0.04))
    drop-shadow(0px 2px 4px rgba(96, 97, 112, 0.16));
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin: 20px;
  @media screen and (max-width: 1130px), screen and (max-height: 605px)  {
    margin: 0 10px 12px 10px;
  }
  @media (max-width: 520px) {
    margin: 0 6px;
  }
`;
