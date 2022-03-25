import styled from "styled-components";
export const MainWrapper = styled.div``;
export const ImageWrapper = styled.div`
  position: relative;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  margin: 12px;

  @media (max-width: 1130px) {
    width: 100vw;
  }
  @media (max-width: 500px) {
    width: 90vw;
  }
`;
export const UploadedImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 42px;
  @media (max-width: 1130px) {
    width: 90vw;
    margin-top: 10px;
  }
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
  display: flex;
  z-index: 1;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  margin: 5px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  img {
    width: unset !important;
    height: unset !important;
    margin: unset !important;
  }
`;

export const Loader = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50px;
  left: 55px;
  border-top: 5px solid white;
  z-index: 1;
  border-bottom: 5px solid white;
  border-radius: 50px;
  animation: LoaderRotate 2s infinite;
  @keyframes LoaderRotate {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }
`;

export const DivUploadImage = styled.div`
  position: relative;
  display: flex;
  width: 150px;
  height: 150px;
  margin: 12px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  ${({ loadingState, loadedElement, images }) =>
    loadingState && loadedElement === images && `filter:blur(3px)`};
  img {
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
  }
`;
export const ButtonsWrapper = styled.div``;
export const ButtonsItem = styled.div``;

export const InputFilterImage = styled.input`
  padding: 10px 8px 10px 30px;
  width: 56%;
  background: rgba(118, 118, 128, 0.12);
  border-radius: 10px;
  border-color: transparent;
  font-size: 16px;
  outline: none;
`;
export const DivMicroIcon = styled.div`
  position: absolute;
  left: 58%;
  width: 16px;
  height: 16px;
`;
export const DivSearchIcon = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  left: 20px;
`;
export const DivContainerMicro = styled.div`
  display: flex;
  align-items: center;
  margin: 12px;
`;
export const DivCollectionImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  div {
    text-align: center;
  }
`;
export const TitleCollection = styled.span`
  width: 150px;
  overflow-wrap: break-word;
  margin: 0 auto 12px auto;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: "objectivity-regular-11", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #222222;
`;
