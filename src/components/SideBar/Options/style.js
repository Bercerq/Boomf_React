import styled from "styled-components";
export const MainWrapper = styled.div``;

export const ActionsWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 1130px), screen and (max-height: 605px)  {
    width: 80vw;
  }
`;
export const UploadedImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 42px;
  @media screen and (max-width: 1130px), screen and (max-height: 605px)  {
    width: 90vw;
    margin-top: 10px;
  }
`;

export const UploadedImage = styled.img`
  position: absolute;
  border: ${({ curCubePosition, position }) =>
    curCubePosition && curCubePosition === position
      ? `3px solid #2EDBE3;`
      : "3px solid transparent"};
  width: 150px;
  height: 150px;
  border-radius: 16px;
  margin: 12px;
  cursor: pointer;
  filter: drop-shadow(0px 0px 1px rgba(40, 41, 61, 0.08))
    drop-shadow(0px 0.5px 2px rgba(96, 97, 112, 0.16));

  @media screen and (max-width: 1130px), screen and (max-height: 605px)  {
    width: 120px;
    height: 120px;
  }
  @media (max-height: 605px) {
    margin: 6px;
  }
`;

export const UploadedImg = styled.img`
  position: absolute;
  border: ${({ id, activeId }) =>
    activeId && activeId === id
      ? `3px solid #2EDBE3;`
      : "3px solid transparent"};
  width: 150px;
  height: 150px;
  border-radius: 16px;
  margin: 12px;
  cursor: pointer;
  filter: drop-shadow(0px 0px 1px rgba(40, 41, 61, 0.08))
    drop-shadow(0px 0.5px 2px rgba(96, 97, 112, 0.16));

  @media (max-height: 605px) {
    margin: 6px;
  }
  object-fit: cover;
`;

export const ImageCide = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 192px;
  height: 192px;
  border: 1px dashed #d6d6d6;
  border-radius: 16px;
  margin-right: 28px;
  span {
    font-family: "objectivity-regular-11", sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #0a74ff;
    line-height: 170%;
  }
`;
export const Uploader = styled.input`
  display: none;
`;

export const CloseIconDiv = styled.div`
  position: absolute;
  display: flex;
  z-index: 1;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  top: 0;
  right: 0;
  margin: 5px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
export const DivUploadImage = styled.div`
  position: relative;
  display: flex;
  width: 150px;
  height: 150px;
  margin: 6px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const ButtonsWrapper = styled.div``;
export const ButtonsItem = styled.div``;

export const InputFilterImage = styled.input`
  padding: 7px 8px 7px 27px;
  width: 45%;
  background: rgba(118, 118, 128, 0.12);
  border-radius: 10px;
  border-color: transparent;
`;
export const DivMicroIcon = styled.div`
  position: absolute;
  left: 47%;
  width: 16px;
  height: 16px;
`;
export const DivSearchIcon = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  left: 10px;
`;
export const DivContainerMicro = styled.div`
  display: flex;
  align-items: center;
`;
export const DivCollectionImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;
export const TitleCollection = styled.h3`
  width: 150px;
  overflow-wrap: break-word;
`;
