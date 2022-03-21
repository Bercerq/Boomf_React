import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectUploadedImage,
  setCurrentSidebar,
} from "../../../redux/actions/sideBar";

import Buttons from "./components/Buttons";
import ImageUploader from "./components/ImageUploader";
import { setDeleteImageLibrary } from "../../../redux/actions/imageLibrary";

import CloseImage from "../../../utils/assets/svg/CloseImage.svg";
import {
  MainWrapper,
  ActionsWrapper,
  UploadedImagesWrapper,
  DivUploadImage,
  CloseIconDiv,
  UploadedImg,
} from "./style";

function AddPhotoOption() {
  const { imageData, imageState } = useSelector(
    ({ imageLibraryReducer }) => imageLibraryReducer
  );
  const dispatch = useDispatch();
  const setImage = (img, id) => () => {
    dispatch(selectUploadedImage(img));
    dispatch(setCurrentSidebar({ flag: "", state: false }));
  };
  const deleteImage = (id) => {
    dispatch(setDeleteImageLibrary(id));
  };

  const localImage = JSON.parse(localStorage.getItem("imageLibrary"));
  
  return (
    <MainWrapper>
      <ActionsWrapper>
        <ImageUploader imageData={imageData} />
        <Buttons />
      </ActionsWrapper>
      <UploadedImagesWrapper>
        {/**todo Route temporary solution*/}
        {imageData?.map(({ img, id }, idx) =>
          id ? (
            <DivUploadImage key={"DivUploadImage" + idx}>
              <CloseIconDiv onClick={() => deleteImage(id)}>
                <img src={CloseImage} alt="Close" />
              </CloseIconDiv>
              <UploadedImg
                activeId={imageState.id}
                id={id}
                onClick={setImage(img, id)}
                src={img}
              />
            </DivUploadImage>
          ) : null
        )}
      </UploadedImagesWrapper>
    </MainWrapper>
  );
}

export default AddPhotoOption;
