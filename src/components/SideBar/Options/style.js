import styled from "styled-components";
export const MainWrapper = styled.div``;

export const ActionsWrapper = styled.div`
  display: flex;
  @media (max-width: 920px) {
    width: 80vw;
  }
`;
export const UploadedImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 42px;
  @media (max-width: 920px) {
    width: 90vw;
    margin-top: 10px;
  }
`;

export const UploadedImage = styled.img`
  width: 150px;
  height: 150px;
  filter: drop-shadow(0px 0px 1px rgba(40, 41, 61, 0.08))
    drop-shadow(0px 0.5px 2px rgba(96, 97, 112, 0.16));
  border-radius: 16px;
  margin: 12px;
  cursor: pointer;
  @media (max-width: 920px) {
    width: 120px;
    height: 120px;
  }
  @media (max-height: 605px) {
    margin: 6px;
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
    font-family: Objectivity;
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

export const ButtonsWrapper = styled.div``;
export const ButtonsItem = styled.div``;
