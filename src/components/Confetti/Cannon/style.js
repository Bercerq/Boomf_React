import styled from "styled-components";
import {ConfetiBox, ConfettiImage, ConfettiWrapper, Title} from "../style";

export const ConfettiWrapperCannonColumn = styled(ConfettiWrapper)`
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding: 0 50px 0 40px;

  @media (max-width: 1200px) {
    width: 35vw;
  }
  @media (max-width: 1010px) {
    width: 30vw;
  }
  @media (max-width: 920px) {
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;

export const ConfettiWrapperCannon = styled(ConfettiWrapper)`
  padding: 0;

  @media (max-width: 920px) {
    margin-top: 0;
  }
`;

export const BackgroundWrapperCannon = styled(ConfettiWrapper)`
  padding: 0;

  @media (max-width: 920px) {
    margin-top: 12px;
  }
`;

export const ConfettiBoxCannon = styled(ConfetiBox)`
  overflow: auto hidden;

  &::-webkit-scrollbar {
    height: 8px;
  }

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: auto;
  width: 100%;
  padding-right: 20px;

  @media (min-width: 1440px) {
    overflow: hidden;
  }
  @media (max-width: 920px) {
    display: flex;
    padding: 0;
  }
`;

export const ConfettiItemCannon = styled.div`
  cursor: pointer;
  width: 78px;
  height: 78px;
  margin: 10px;
  border-radius: 50%;
  transition: 0.4s;
  background-color: white;

  filter: drop-shadow(0px 0px 1px rgba(40, 41, 61, 0.04)) drop-shadow(0px 2px 4px rgba(96, 97, 112, 0.16));

  ${({selectConfetti}) =>
          `border: 4px solid ${
                  selectConfetti ? "#2EDBE3" : "transparent"
          };  transition: 0.4s;`};

  @media (max-width: 920px) {
    width: 40px;
    height: 35px;
  }
  @media (max-width: 920px) {
    margin: 0 10px 12px 10px;
    width: 45px;
    height: 45px;
  }
  @media (max-width: 520px) {
    margin: 7px;
  }
`;

export const TitleCannon = styled(Title)`
  text-align: start;
  @media (max-width: 920px) {
    margin: 12px 0 0 0;
    &:last-child {
      display: block;
      margin: 0;
    }
  }
`;

export const BackgroundItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 45px;
  height: 45px;
  margin: 7px;
  border-radius: 50%;
  
  transition: 0.4s;
  background: transparent;

  ${({selectConfetti}) =>
          `border: 3px solid ${
                  selectConfetti ? "#75bce8" : "transparent"
          };  transition: 0.4s;`};

  @media (max-width: 920px) {
    margin: 0 10px 12px 10px;
  }
`;

export const BackgroundImage = styled(ConfettiImage)`
  width: 44px;
  height: 44px;
  margin: 0;
  ${({selectConfetti}) =>
          `border: 6px solid ${
                  selectConfetti ? "#FFFFFF; transform: scale(0.8);" : "transparent"
          }; transition: 0.4s;`};
`;

export const ConfettiImageCannon = styled(ConfettiImage)`
  @media (max-width: 920px) {
    width: 45px;
    height: 45px;
  }
`;