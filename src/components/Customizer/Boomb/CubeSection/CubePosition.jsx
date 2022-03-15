import React from "react";
import { useDispatch } from "react-redux";

import { setBoxPosition } from "../../../../utils/functions/boomb";

import CubeImage from "./CubeImage";

import { CubeItem, CubeSide } from "./style";

export const CubePosition = ({ boombData, curCubePosition }) => {
  const { rotate, img, position, editCrop, defaultRotate } = boombData;

  const dispatch = useDispatch();

  return (
    <CubeSide spinParam={rotate}>
      <CubeItem
        position={position}
        curCubePosition={curCubePosition}
        onClick={setBoxPosition(dispatch, position, defaultRotate)}
        img={img}
      >
        <CubeImage img={img} position={position} editCrop={editCrop} />
      </CubeItem>
    </CubeSide>
  );
};
