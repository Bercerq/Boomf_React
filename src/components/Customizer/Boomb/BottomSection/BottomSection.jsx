import React from "react";

import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";

import BlueButton from "../../../Buttons/BlueButton";
import ImageOptions from "./ImageOptions";

import { Bottom, ButtonWrapper } from "./style";

function BottomSection({
  cubeData,
  setCurrentImage,
  setCurrPosition,
  handleButtonClick,
}) {
  return (
    <Bottom>
      <ImageOptions
        cubeData={cubeData}
        setCurrentImage={setCurrentImage}
        setCurrPosition={setCurrPosition}
      />
      <ButtonWrapper>
        <BlueButton handleButtonClick={handleButtonClick}>
          Add to cart <img src={ArrowRightIcon} alt="add" />
        </BlueButton>
      </ButtonWrapper>
    </Bottom>
  );
}

export default BottomSection;
