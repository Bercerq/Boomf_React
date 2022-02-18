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

function AddPhotoOption() {
  const { boombData, curCubeImage } = useSelector(
    ({ boombReducer }) => boombReducer
  );
  const dispatch = useDispatch();
  const setImage = (img) => () => {
    setBoxImage(img, dispatch);
  };
  return (
    <MainWrapper>
      <ActionsWrapper>
        <ImageUploader />
        <Buttons />
      </ActionsWrapper>
      <UploadedImagesWrapper>
        {/* when connect back, replace boombData to curCubeImage  */}
        {boombData.map(({ img }) => (
          <UploadedImage onClick={setImage(img)} src={img} />
        ))}
      </UploadedImagesWrapper>
    </MainWrapper>
  );
}

export default AddPhotoOption;
