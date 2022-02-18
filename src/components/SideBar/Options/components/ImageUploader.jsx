import React from "react";
import { useDispatch } from "react-redux";

import {
  setBoxImage,
  setLibraryImage,
} from "../../../../utils/functions/boomb";

import { Icon, ImageItem } from "../../../TextEditor/style";
import { ImageCide, Uploader } from "../style";

import UploadIcon from "../../../../utils/assets/svg/UploadIcon.svg";

function ImageUploader() {
  const dispatch = useDispatch();
  return (
    <>
      <Uploader
        onChange={(e) => setLibraryImage(e.target.value, dispatch)}
        type="file"
        id="imageUpload"
        accept=".png, .jpg, .jpeg"
      />
      <ImageCide htmlFor="imageUpload">
        <Icon>
          <ImageItem src={UploadIcon} alt="Upload" />
        </Icon>
        <span>
          Upload an
          <br /> image
        </span>
      </ImageCide>
    </>
  );
}

export default ImageUploader;
