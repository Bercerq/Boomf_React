import React from "react";
import SelectImage from "./SelectImage";
import SelectText from "./SelectText";
import { ImagePicker } from "./style";

function ImageOptions({
  setCurrentImage,
  setCurrPosition,
  cubeData,
  currPosition,
}) {
  return (
    <ImagePicker>
      <SelectImage
        cubeData={cubeData}
        setCurrPosition={setCurrPosition}
        setCurrentImage={setCurrentImage}
        currPosition={currPosition}
      />
      <SelectText />
    </ImagePicker>
  );
}

export default ImageOptions;
