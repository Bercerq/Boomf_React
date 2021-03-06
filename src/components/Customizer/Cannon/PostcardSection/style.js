import styled from "styled-components";

import {BlueBtn} from "../../../Buttons/style";
import {CubeItem} from "../../Boomb/CubeSection/style";

export const PostcardBlock = styled.div`
  display: block;
  height: 100vh;
  width: 62%;

  @media (max-width: 1130px) {
    display: flex;
    align-items: flex-start;
    height: 100%;
    order: 2;
    margin-bottom: 5px;
    width: 100%;
  }

  @media (max-width: 540px) {
    height: 100%;
  }
`

export const PostcardEditButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    transform: scale(1.2);
  }
`;

export const PostcardCard = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1130px) {
    width: 100%;
    height: 100%;
    margin: 0;
    justify-content: space-between;
  }

  @media (max-width: 540px) {
    display: grid;
    align-content: space-between;
    align-items: start;
    height: 100%;
  }
`
export const PostcardContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;

  width: 100%;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1130px) {
    margin: 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: center;
  }

  @media (max-width: 540px) {
    width: 100vw;
    justify-content: space-around;
    flex-direction: row;
    height: auto;
    margin: 0;
  }
`;


export const PostcardWrapper = styled.img`
  position: absolute;
  width: 45%;
  object-fit: cover;
  z-index: -1;

  @media (max-width: 1130px) {
    width: 80%;
  }
  @media (max-width: 920px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    width: 100%;
    margin-top: 30%;
  }
`

export const BackgroundCard = styled.div`
  display: flex;
  height: ${({sizeCard: {height}}) => height ? `${height}px` : 'auto'};
  width: ${({sizeCard: {width}}) => width ? `${width}px` : 'auto'};;
  margin: 40px;
  position: relative;
  user-select: none;
  overflow: hidden;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-height: 920px) and (min-width: 1440px) {
    height: 492px;
    width: 295px;
  }

  @media (max-height: 600px) and (max-width: 1300px) {
    height: 328px;
    width: 218px;
  }

  @media (max-width: 1130px) {
    height: 630px;
    width: 379px;
  }

  @media (max-width: 840px) {
    height: 520px;
    width: 313px;
  }

  @media (min-height: 1060px) and (max-width: 840px) {
    height: 593px;
    width: 357px;
  }

  @media (max-width: 540px) {
    margin: 14px 10px 0 0;
    height: 413px;
    width: 248px;
  }

  @media (max-width: 375px) {
    width: 241px;
    height: 380px;
  }

  @media (max-width: 300px) {
    width: 190px;
    height: 315px;
  }
`

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  -moz-background-size: 100%;
  -webkit-background-size: 100%;
  -o-background-size: 100%;
  transform: scale(${({increaseSize}) => increaseSize || 1});
`

export const ImageDiv = styled(CubeItem)`
  width: 76%;
  height: 51%;
  padding: initial;
  margin-top: 45px;
  background: white;

  @media (max-height: 600px) and (max-width: 1300px) {
    margin-top: 25px;
  }
  @media (max-width: 1130px) {
    height: 48%;
    width: 80%;
    margin: 30px 30px 0 30px;
  }

  @media (max-width: 415px) {
    height: 50%;
  }
`

export const ImageNotContent = styled(ImageDiv)`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  background: #F5F5F5;
`

export const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  pointer-events: all;
  width: 135px;
  height: 32px;
  z-index: 1;
  background: #FF328B;

  box-shadow: 0 0 1px rgba(40, 41, 61, 0.04), 0 2px 4px rgba(96, 97, 112, 0.16);
  border-radius: 4px;
  border-color: transparent;
  color: #FFFFFF;
  cursor: pointer;

  @media (max-height: 600px) and (max-width: 1300px) {
    width: fit-content;
    height: 25px;
  }
`

export const PostcardButton = styled.div`
  position: absolute;
  background: transparent;
  right: 0;
  bottom: 0;
  margin: 30px;

  @media (max-width: 1130px) {
    position: static;
    display: flex;
    justify-content: flex-end;
    width: ${({widthSheet}) => widthSheet ? 'auto' : '100%'};
    margin: 0;
  }

  @media (max-width: 540px) {
    button {
      ${({widthSheet}) => widthSheet ? `
        padding: 8px 18px !important; height: 40px !important;margin: 0 0 0 8px !important;` : ''};
    }
  }
}
`

export const PostcardBlueButton = styled(BlueBtn)`
  @media (max-width: 1130px) {
    padding: 0;
    margin: 20px;
  }

  @media (max-width: 520px) {
    padding: 0;
    margin: 10px;
    height: 40px;
  }
`;
