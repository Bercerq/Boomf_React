import React from "react";

import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";

import BlueButton from "../../../Buttons/BlueButton";
import ImageOptions from "./ImageOptions";

import { Bottom, ButtonWrapper } from "./style";

function BottomSection({
  topText,
  setTopText,
  cubeData,
  setCurrentImage,
  setCurrPosition,
  handleButtonClick,
  inputRef,
  setOpenTextEditor,
}) {
  return (
    <Bottom>
      <ImageOptions
        topText={topText}
        setTopText={setTopText}
        cubeData={cubeData}
        setCurrentImage={setCurrentImage}
        setCurrPosition={setCurrPosition}
        inputRef={inputRef}
        setOpenTextEditor={setOpenTextEditor}
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
