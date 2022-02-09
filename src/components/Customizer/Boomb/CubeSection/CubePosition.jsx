import React from "react";
import {
  setBoxImage,
  setBoxPosition,
  setBoxSide,
} from "../../../../utils/functions/boomb";
import { CubeItem, CubeSide, NoImage, BoxInfoSide } from "./style";

export const CubePosition = ({
  setCurrPosition,
  setCurrentImage,
  position,
  img,
  rotate,
  textSideRotate,
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
        boxSide={setBoxSide(position)}
        onClick={setBoxPosition(position, setCurrPosition)}
        htmlFor="imageUpload"
        img={img}
      >
        {img ? (
          <>
            <img src={img} alt={`side ${position}`} />
          </>
        ) : (
          <NoImage>+ Photo {setBoxSide(position)}</NoImage>
        )}
      </CubeItem>

      <BoxInfoSide textSideRotate={textSideRotate}>
        {setBoxSide(position)}
      </BoxInfoSide>
    </CubeSide>
  );
};
