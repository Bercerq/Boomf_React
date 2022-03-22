import React from "react";
import {useDispatch} from "react-redux";

import { setUploadImage } from "../../../../utils/functions/boomb";

import UploadIcon from "../../../../utils/assets/svg/UploadIcon.svg";
import { Icon, ImageItem } from "../../../TextEditor/style";
import { ImageCide, Uploader } from "../style";

function ImageUploader({ imageData }) {
  const dispatch = useDispatch();

  return (
    <>
      <Uploader
        onChange={(e) => {
          setUploadImage(e.target.files, imageData, dispatch);
        }}
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
