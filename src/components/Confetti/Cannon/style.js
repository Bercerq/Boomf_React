import styled from "styled-components";
import {ConfetiBox, ConfettiImage, ConfettiItem, ConfettiWrapper, Title} from "../style";

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
    margin-left: 0;
    width: 100%;
  }
`;

export const ConfettiWrapperCannon = styled(ConfettiWrapper)`
  padding: 0;
`;

export const ConfettiBoxCannon = styled(ConfetiBox)`
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

export const ConfettiItemCannon = styled(ConfettiItem)`
  margin: 10px;
  
  @media (max-width: 920px) {
    width: 45px;
    height: 45px;
  }
`;

export const TitleCannon = styled(Title)`
  text-align: start;
`;

export const BackgroundItemCannon = styled(ConfettiItemCannon)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  margin-bottom: 0;
`;

export const BackgroundImageCannon = styled(ConfettiImage)`
  width: 45px;
  height: 45px;
`;

export const ConfettiImageCannon = styled(ConfettiImage)`
  @media (max-width: 920px) {
    width: 45px;
    height: 45px;
  }
`;