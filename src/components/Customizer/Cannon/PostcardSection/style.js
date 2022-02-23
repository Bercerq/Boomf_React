import styled from "styled-components";
import {
  CubeContainer,
  CubeItem,
  SideContent,
  StaticText,
  TopText
} from "../../Boomb/CubeSection/style";

export const PostcardBlock = styled(SideContent)``

export const PostcardContainer = styled(CubeContainer)`
  width: 100%;
  height: 100%;
  align-items: flex-start;
`

export const PostcardWrapper = styled.img`
  position: absolute;
  width: 100%;
  height: 80%;
  object-fit: cover;
  @media (max-width: 1240px) {
    width: 80%;
  }
  @media (max-width: 920px) {
    width: 100%;
  }
`

export const BackgroundCard = styled.div`
  display: flex;
  height: 575px;
  width: 383px;
  margin-top: 40px;
  position: relative;
  user-select: none;
  overflow: hidden;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 920px) {
    max-width: 70%;
    min-width: 200px;
    height: 480px
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
`

export const ImageDiv = styled(CubeItem)`
  width: 292px;
  height: 291px;
  padding: initial;
  margin-top: 45px;
  background: white;

  @media (max-width: 920px) {
    height: 40%;
    width: 80%;
    margin: 30px 30px 0 30px;
  }
`

export const ImageNotContent = styled(ImageDiv)`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
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

  background: #FF328B;

  box-shadow: 0 0 1px rgba(40, 41, 61, 0.04), 0 2px 4px rgba(96, 97, 112, 0.16);
  border-radius: 4px;
  border-color: transparent;
  color: #FFFFFF;
  cursor: pointer;
`


export const ImageContent = styled(ImageDiv)``

export const TextContentBlock = styled(StaticText)`
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;

  top: auto;
  left: auto;
  right: auto;
  bottom: auto;

  width: 292px;
  height: 133px;
  margin-bottom: 45px;
  border: 1px dashed #F5F5F5;
  box-sizing: border-box;
  border-radius: 8px;

  overflow: auto;

  word-break: break-word;
  z-index: 1;
`

export const PostcardSide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PostcardText = styled(TopText)`
  z-index: -10;
`