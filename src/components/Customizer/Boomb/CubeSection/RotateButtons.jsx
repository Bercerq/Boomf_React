import React from "react";

import { changeCubeRotate } from "../../../../utils/functions/boomb";

import Arrow from "../../../../utils/assets/svg/Arrow.svg";

import { ArrowRight, ArrowLeft } from "./style";

function RotateButtons({ setCubeRotateY, cubeRotateY }) {
  const handleChangeRotate = (side) => () => {
    changeCubeRotate(side, setCubeRotateY, cubeRotateY);
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
