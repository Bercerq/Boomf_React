import React from "react";

import {
  MainWrapper,
  ActionsWrapper,
  UploadedImagesWrapper,
  UploadedImage,
} from "./style";

import Buttons from "./components/Buttons";
import ImageUploader from "./components/ImageUploader";
import { useSelector } from "react-redux";
import { setBoxImage } from "../../../utils/functions/boomb";
import { useDispatch } from "react-redux";
import { setCurrentSidebar } from "../../../redux/actions/sideBar";

function AddPhotoOption() {
  const { boombData, curCubePosition } = useSelector(
    ({ boombReducer }) => boombReducer
  );
  const { imageLibrary } = useSelector(({ sidebarReducer }) => sidebarReducer);

  const dispatch = useDispatch();
  const setImage = (img) => () => {
    setBoxImage(img, dispatch);
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
