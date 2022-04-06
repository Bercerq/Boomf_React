import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentSidebar } from "../../../../redux/actions/sideBar";

import { setBoxPosition } from "../../../../utils/functions/boomb";

import CubeImage from "./CubeImage";

import { CubeItem, CubeSide } from "./style";

export const CubePosition = ({ textDataState, boombData, curCubePosition }) => {
  const { rotate, img, position, editCrop, defaultRotate } = boombData;
  const dispatch = useDispatch();

  return (
    <CubeSide spinParam={rotate}>
      <CubeItem
        position={position}
        curCubePosition={curCubePosition}
        onClick={setBoxPosition(
          dispatch,
          position,
          defaultRotate,
          textDataState
        )}
        img={img.img || img.url}
      >
        <CubeImage
          textDataState={textDataState}
          img={img.img || img.url}
          position={position}
          editCrop={editCrop}
        />
      </CubeItem>
    </CubeSide>
  );
};
