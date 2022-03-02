import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  selectUploadedImage,
  setCurrentSidebar,
} from "../../../redux/actions/sideBar";
import { setImageCannon } from "../../../redux/actions/cannon";

import { selectImage } from "../../../utils/functions/boomb";
import {setCannonImage, setUploadImage} from "../../../utils/functions/cannon";

import Buttons from "./components/Buttons";
import ImageUploader from "./components/ImageUploader";

import {
  MainWrapper,
  ActionsWrapper,
  UploadedImagesWrapper,
  UploadedImage,
} from "./style";

function AddPhotoOption() {
  const { boombData, curCubePosition } = useSelector(
    ({ boombReducer }) => boombReducer
  );
  const { imageLibrary } = useSelector(({ sidebarReducer }) => sidebarReducer);

  const dispatch = useDispatch();
  const setImage = (img) => () => {
    dispatch(selectUploadedImage(img));
    setCannonImage(img, dispatch);
    dispatch(setCurrentSidebar({ flag: "", state: false }));
  };
  return (
    <MainWrapper>
      <ActionsWrapper>
        <ImageUploader />
        <Buttons />
      </ActionsWrapper>
      <UploadedImagesWrapper>
        {/* when connect back, replace boombData to imageLibrary  */}
        {boombData.map(({ img, position }) => (
          <UploadedImage
            curCubePosition={curCubePosition}
            position={position}
            key={position}
            onClick={setImage(img)}
            src={img}
          />
        ))}
      </UploadedImagesWrapper>
    </MainWrapper>
  );
}

export default AddPhotoOption;
