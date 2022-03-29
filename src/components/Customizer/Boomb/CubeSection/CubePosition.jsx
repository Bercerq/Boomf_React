import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editImage } from "../../../../redux/actions/boomb";
import { setCurrentSidebar } from "../../../../redux/actions/sideBar";

import { setBoxPosition } from "../../../../utils/functions/boomb";

import CubeImage from "./CubeImage";

import { CubeItem, CubeSide } from "./style";

export const CubePosition = ({ textDataState, boombData, curCubePosition }) => {
  const { rotate, img, position, editCrop, defaultRotate } = boombData;
  const dispatch = useDispatch();
  const openSideBar = () => {
    if (!textDataState.focusState)
      dispatch(setCurrentSidebar({ flag: "+ Add photo", state: true }));
  };
  return (
    <CubeSide onClick={openSideBar} spinParam={rotate}>
      <CubeItem
        position={position}
        curCubePosition={curCubePosition}
        onClick={setBoxPosition(
          dispatch,
          position,
          defaultRotate,
          textDataState
        )}
        img={img}
      >
        <CubeImage
          defaultRotate={defaultRotate}
          textDataState={textDataState}
          img={img}
          position={position}
          editCrop={editCrop}
        />
      </CubeItem>
    </CubeSide>
  );
};
