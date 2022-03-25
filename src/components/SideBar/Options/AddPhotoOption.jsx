import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectUploadedImage,
  setCurrentSidebar,
} from "../../../redux/actions/sideBar";

import Buttons from "./components/Buttons";
import ImageUploader from "./components/ImageUploader";
import { setAddImageData } from "../../../redux/actions/textData";
import {setDeleteImageLibrary, setImageLibrary} from "../../../redux/actions/imageLibrary";

import CloseImage from "../../../utils/assets/svg/CloseImage.svg";
import {
  MainWrapper,
  ImageWrapper,
  ActionsWrapper,
  UploadedImagesWrapper,
  DivUploadImage,
  CloseIconDiv,
  Loader,
} from "./style";
import { getUserImages } from "../../../redux/actions/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { editImage } from "../../../redux/actions/boomb";

function AddPhotoOption() {
  const { imageData } = useSelector(
    ({ imageLibraryReducer }) => imageLibraryReducer
  );
  const { standardName } = useSelector(
    ({ standardReducer }) => standardReducer
  );
  const { loadingState } = useSelector(({ loadingReducer }) => loadingReducer);

  const dispatch = useDispatch();
  const setImage = (img) => () => {
    if (standardName) {
      dispatch(setAddImageData({ ...img, key: standardName }));
    }
    dispatch(setImageLibrary(img.id));
    dispatch(selectUploadedImage(img.img || img.url));
    dispatch(setCurrentSidebar({ flag: "", state: false }));
    dispatch(editImage({ key: "size", value: "1" }));
  };
  const deleteImage = (id) => {
    dispatch(setDeleteImageLibrary(id));
  };

  useEffect(() => {
    if (!imageData[0]?.id) {
      dispatch(getUserImages());
    }
  }, []);

  return (
    <MainWrapper>
      <ActionsWrapper>
        <ImageUploader imageData={imageData} />
        <Buttons />
      </ActionsWrapper>
      <UploadedImagesWrapper>
        {/**todo Route temporary solution*/}
        {imageData?.map((img, idx) =>
          img.id ? (
            <ImageWrapper key={"DivUploadImage" + idx}>
              <DivUploadImage
                images={img}
                loadingState={loadingState}
                loadedElement={imageData.slice(-1)[0]}
              >
                <CloseIconDiv onClick={() => deleteImage(img.id)}>
                  <img src={CloseImage} alt="Close" />
                </CloseIconDiv>
                <LazyLoadImage
                  id={img.id}
                  onClick={setImage(img)}
                  src={img.img || img.url}
                  effect="blur"
                />
              </DivUploadImage>
              {loadingState && imageData.slice(-1)[0] === img && <Loader />}
            </ImageWrapper>
          ) : null
        )}
      </UploadedImagesWrapper>
    </MainWrapper>
  );
}

export default AddPhotoOption;
