import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { changeCubeRotate } from "../../../../utils/functions/boomb";

import Arrow from "../../../../utils/assets/svg/Arrow.svg";

import { ArrowRight, ArrowLeft } from "./style";

function RotateButtons({ setCubeRotateY, cubeRotateY }) {
  const dispatch = useDispatch();
  const { curCubePosition } = useSelector(({ boombReducer }) => boombReducer);
  const handleChangeRotate = (side) => () => {
    changeCubeRotate(
      side,
      setCubeRotateY,
      cubeRotateY,
      curCubePosition,
      dispatch
    );
  };

  return (
    <>
      <ArrowRight onClick={handleChangeRotate("right")}>
        <img src={Arrow} alt="right" />
      </ArrowRight>
      <ArrowLeft onClick={handleChangeRotate("left")}>
        <img src={Arrow} alt="left" />
      </ArrowLeft>
    </>
  );
}

export default RotateButtons;
