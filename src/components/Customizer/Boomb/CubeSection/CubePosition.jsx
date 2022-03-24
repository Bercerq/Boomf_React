import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editImage } from "../../../../redux/actions/boomb";
import { setCurrentSidebar } from "../../../../redux/actions/sideBar";

import { setBoxPosition } from "../../../../utils/functions/boomb";

import CubeImage from "./CubeImage";

import { CubeItem, CubeSide } from "./style";

export const CubePosition = ({ boombData, curCubePosition }) => {
  const { rotate, img, position, editCrop, defaultRotate } = boombData;
  const dispatch = useDispatch();
  const openSideBar = () => {
    dispatch(setCurrentSidebar({ flag: "+ Add photo", state: true }));
  };
  return (
    <CubeSide onClick={openSideBar} spinParam={rotate}>
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
