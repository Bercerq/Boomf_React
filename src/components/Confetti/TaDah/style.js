import styled from "styled-components";
import {BackgroundBoxCannon, ConfettiWrapperCannonColumn} from "../Cannon/style";

export const ConfettiItemTaDahImage = styled.img`
  width: 78px;
  margin: auto;
  display: flex;
  border-radius: 50%;
  transition: 0.4s;

  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    width: 45px;
  }
`;

export const ConfettiBoxTaDah = styled(BackgroundBoxCannon)`
  height: 60%;

  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    display: flex;
    justify-content: flex-start;
    padding-bottom: 10px;
    height: auto;
    width: 100%;
  }
`;

export const ConfettiWrapperTaDahColumn = styled(ConfettiWrapperCannonColumn)`
  position: absolute;
  right: 0;
  padding: 0;
  width: fit-content;
  height: 60%;
  ${({displayOpacity}) => displayOpacity === 'Front' ? 'opacity: 1;' : 'opacity: 0;'};
  transition: 1s;
  @media screen and (max-width: 1130px), screen and (max-height: 605px) {
    position: static;
    display: flex;
    height: fit-content;
    order: -1;
    margin: 0;
  }
  @media (min-width: 1130px) and (max-height: 605px) {
    order: 0;
  }
`;