import React from "react";

import {
  findBoxSide,
  setBoxImage,
  setBoxPosition,
} from "../../../../utils/functions/boomb";

import { BoxImage, BoxSide, BoxText, PickerItem } from "./style";

const SelectImage = ({ cubeData, setCurrentImage, setCurrPosition }) => {
  return cubeData.map(({ position, img }) => (
    <React.Fragment key={position}>
      <input
        onChange={(e) => setBoxImage(e, setCurrentImage)}
        style={{ display: "none" }}
        type="file"
        id="imageUploader"
        accept=".png, .jpg, .jpeg"
      />
      <PickerItem
        onClick={setBoxPosition(position, setCurrPosition)}
        htmlFor="imageUploader"
      >
        <BoxSide>
          {img ? (
            <BoxImage src={img} alt={`image ${position}`} />
          ) : (
            <div className="BoxNoImage">Click to add image</div>
          )}
        </BoxSide>
        <BoxText>Image - {findBoxSide(position)}</BoxText>
      </PickerItem>
    </React.Fragment>
  ));
};

export default SelectImage;
