import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setStandardName } from "../../../../redux/actions/standard";

import BlueButton from "../../../Buttons/BlueButton";

import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";

import { ActiveSheetDiv } from "../../Standard/SheetSection/style";
import { PostcardButton } from "../../Cannon/PostcardSection/style";
import { ColumnActiveSheet } from "./style";
import { addMallowPopsToCart } from "../../../../utils/functions/mallowPops";

const SelectStep = ({ children, mobileDevice }) => {
  const dispatch = useDispatch();

  const { standardName } = useSelector(
    ({ standardReducer }) => standardReducer
  );
  const { mallowpops } = useSelector(
    ({ mallowPopsReducer }) => mallowPopsReducer
  );

  const { textData } = useSelector(({ textDataReducer }) => textDataReducer);
  const handleButtonClick = () => {
    if (standardName === "Card" && mobileDevice) {
      dispatch(setStandardName("AddCart"));
    } else {
      addMallowPopsToCart({ mallowpops, textData, dispatch });
    }
  };

  return (
    <ColumnActiveSheet>
      <ActiveSheetDiv>{children}</ActiveSheetDiv>
      <PostcardButton widthSheet={true}>
        <BlueButton handleButtonClick={handleButtonClick}>
          {standardName === "Card" && mobileDevice ? "Card" : "Add to cart"}{" "}
          <img src={ArrowRightIcon} alt="add" />
        </BlueButton>
      </PostcardButton>
    </ColumnActiveSheet>
  );
};

export default SelectStep;
