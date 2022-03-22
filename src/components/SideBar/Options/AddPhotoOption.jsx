import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectUploadedImage,
  setCurrentSidebar,
} from "../../../redux/actions/sideBar";

import Buttons from "./components/Buttons";
import ImageUploader from "./components/ImageUploader";
import {setAddImageData} from "../../../redux/actions/textData";
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
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  )
  const dispatch = useDispatch();
  const setImage = (img) => () => {
    if(standardName) {
      dispatch(setAddImageData({...img, key: standardName}));
    }
    dispatch(selectUploadedImage(img.img));
    dispatch(setCurrentSidebar({ flag: "", state: false }));
  };
  const deleteImage = (id) => {
    dispatch(setDeleteImageLibrary(id));
  };

  
  return (
    <MainWrapper>
      <ActionsWrapper>
        <ImageUploader imageData={imageData}/>
        <Buttons />
      </ActionsWrapper>
      <UploadedImagesWrapper>
        {/**todo Route temporary solution*/}
        {imageData?.map((img, idx) =>
          img.id ? (
            <DivUploadImage key={"DivUploadImage" + idx}>
              <CloseIconDiv onClick={() => deleteImage(img.id)}>
                <img src={CloseImage} alt="Close" />
              </CloseIconDiv>
              <UploadedImg
                activeId={imageState.id}
                id={img.id}
                onClick={setImage(img)}
                src={img.img}
              />
            </DivUploadImage>
          ) : null
        )}
      </UploadedImagesWrapper>
    </MainWrapper>
  );
}

export default AddPhotoOption;
