import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { changeCubeRotate } from "../../../../utils/functions/boomb";

import Arrow from "../../../../utils/assets/svg/Arrow.svg";

import { ArrowRight, ArrowLeft } from "./style";

function RotateButtons() {
  const dispatch = useDispatch();
  const { curCubePosition, curCubeRotate } = useSelector(
    ({ boombReducer }) => boombReducer
  );
  const handleChangeRotate = (side) => () => {
    changeCubeRotate(side, curCubeRotate, curCubePosition, dispatch);
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
