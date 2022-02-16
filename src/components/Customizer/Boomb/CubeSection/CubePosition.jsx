import React from "react";

import { setBoxPosition } from "../../../../utils/functions/boomb";

import { CubeItem, CubeSide } from "./style";
import CubeImage from "./CubeImage";
import { useDispatch } from "react-redux";

export const CubePosition = ({ boombData, curCubePosition }) => {
  const { rotate, img, position, editCrop } = boombData;
  const dispatch = useDispatch();

  return (
    <CubeSide spinParam={rotate}>
      <CubeItem
        position={position}
        curCubePosition={curCubePosition}
        onClick={setBoxPosition(position, dispatch)}
        img={img}
      >
        <CubeImage img={img} position={position} editCrop={editCrop} />
      </CubeItem>
      {/* 
      <BoxInfoSide position={position}>
        {findBoxSide(position)} side
      </BoxInfoSide> */}
    </CubeSide>
  );
};
