import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editImage } from "../../../../redux/actions/boomb";

import { setBoxPosition } from "../../../../utils/functions/boomb";

import CubeImage from "./CubeImage";

import { CubeItem, CubeSide } from "./style";

export const CubePosition = ({ boombData, curCubePosition, imageData }) => {
  const { rotate, img, position, editCrop, defaultRotate } = boombData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editImage(imageData));
  }, [imageData]);

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
