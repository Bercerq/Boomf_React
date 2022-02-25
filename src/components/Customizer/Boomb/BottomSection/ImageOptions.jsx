import React from "react";
import SelectImage from "./SelectImage";
import SelectText from "./SelectText";
import { ImagePicker } from "./style";

function ImageOptions() {
  return (
    <ImagePicker>
      <SelectImage  />
      <SelectText />
    </ImagePicker>
  );
}

export default ImageOptions;
