import styled from "styled-components";

import {
  CubeContainer,
  CubeItem,
  SideContent,
  TopText
} from "../../Boomb/CubeSection/style";
import {BlueBtn} from "../../../Buttons/style";

export const PostcardBlock = styled(SideContent)`
  width: 62%;
  @media (max-width: 920px) {
    display: flex;
    align-items: flex-start;
    margin-bottom: 5px;
    width: 100%;
    height: fit-content;
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

export const PostcardTest = styled.div`
  position: static;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  
  @media (max-width: 920px) {
    height: auto;
    width: 100%;
    margin: 0;
  }
`
export const PostcardContainer = styled(CubeContainer)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;

  @media (max-width: 415px) {
    height: auto;
    margin: 0;
  }
`;


export const PostcardWrapper = styled.img`
  position: absolute;
  width: 100%;
  height: 90%;
  object-fit: cover;

  @media (max-width: 415px) {
    width: 416px;
    height: 427px;
  }
`

export const BackgroundCard = styled.div`
  display: flex;
  height: ${({sizeCard: {height}}) => height ? `${height}px` : 'auto'};
  width: ${({sizeCard: {width}}) => width ? `${width}px` : 'auto'};;
  margin-top: 40px;
  position: relative;
  user-select: none;
  overflow: hidden;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 920px) {
    height: 630px;
    width: 390px;
  }

  @media (max-width: 840px) {
    height: 525px;
    width: 335px;
    margin-bottom: 30px;
  }

  @media (max-width: 520px) {
    margin-top: 10px;
  }

  @media (max-width: 415px) {
    width: 265px;
    height: 427px;
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

  @media (max-width: 920px) {
    height: 50%;
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
`


export const ImageContent = styled(ImageDiv)``

export const PostcardButton = styled.div`
  position: absolute;
  background: transparent;
  right: 0;
  bottom: 0;
  margin: 30px;

  @media (max-width: 920px) {
    position: static;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 0 30px 0 0;
  }
`

export const PostcardBlueButton = styled(BlueBtn)`
  @media (max-width: 920px) {
    padding: 0;
    margin-right: 10px;
    width: 146px;
    height: 40px;
  }
`;

export const PostcardText = styled(TopText)`
  opacity: 0;
  transform: none;
  left: auto;
  top: auto;
  height: auto;
`

