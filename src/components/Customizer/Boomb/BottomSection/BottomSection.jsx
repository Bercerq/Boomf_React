import React from "react";

import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";

import BlueButton from "../../../Buttons/BlueButton";
import ImageOptions from "./ImageOptions";

import { Bottom, ButtonWrapper } from "./style";

function BottomSection({ handleButtonClick }) {
  return (
    <Bottom>
      <ImageOptions />
      <ButtonWrapper>
        <BlueButton handleButtonClick={handleButtonClick}>
          Add to cart <img src={ArrowRightIcon} alt="add" />
        </BlueButton>
      </ButtonWrapper>
      
    </Bottom>
  );
}

export default BottomSection;
