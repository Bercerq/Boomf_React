import React from "react";

import {
  setBoxImage,
  setBoxPosition,
  findBoxSide,
} from "../../../../utils/functions/boomb";

import { CubeItem, CubeSide, NoImage, BoxInfoSide } from "./style";

export const CubePosition = ({
  setCurrPosition,
  setCurrentImage,
  position,
  img,
  rotate,
}) => {
  return (
    <CubeSide spinParam={rotate}>
      <input
        onChange={(e) => setBoxImage(e, setCurrentImage)}
        style={{ display: "none" }}
        type="file"
        id="imageUpload"
        accept=".png, .jpg, .jpeg"
      />
      <CubeItem
        onClick={setBoxPosition(position, setCurrPosition)}
        htmlFor="imageUpload"
        img={img}
      >
        {img ? (
          <>
            <img src={img} alt={`side ${position}`} />
          </>
        ) : (
          <NoImage>+ Photo {findBoxSide(position)}</NoImage>
        )}
      </CubeItem>

      <BoxInfoSide>{findBoxSide(position)}</BoxInfoSide>
    </CubeSide>
  );
};
