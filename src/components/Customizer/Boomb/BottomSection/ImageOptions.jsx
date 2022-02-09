import React from "react";
import SelectImage from "./SelectImage";
import SelectText from "./SelectText";
import { ImagePicker } from "./style";

function ImageOptions({
  setCurrentImage,
  setCurrPosition,
  cubeData,
  topText,
  setTopText,
  inputRef,
}) {
  return (
    <ImagePicker>
      <SelectImage
        cubeData={cubeData}
        setCurrPosition={setCurrPosition}
        setCurrentImage={setCurrentImage}
      />
      <SelectText
        inputRef={inputRef}
        setTopText={setTopText}
        topText={topText}
      />
    </ImagePicker>
  );
}

export default ImageOptions;
