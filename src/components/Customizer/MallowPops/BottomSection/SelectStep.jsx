import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setStandardName } from "../../../../redux/actions/standard";
import { setCurrentModal } from "../../../../redux/actions/modal";
import { useResizeDevice } from "../../../../utils/hooks/useResizeDevice";

import BlueButton from "../../../Buttons/BlueButton";

import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";

import { ActiveSheetDiv } from "../../Standard/SheetSection/style";
import { PostcardButton } from "../../Cannon/PostcardSection/style";
import { ColumnActiveSheet } from "./style";

const SelectStep = ({ children, mobileDevice }) => {
  const dispatch = useDispatch();

  const { standardName } = useSelector(
    ({ standardReducer }) => standardReducer
  );

  const handleButtonClick = () => {
    if (standardName === "Card" && mobileDevice) {
      dispatch(setStandardName("AddCart"));
    } else {
      dispatch(setCurrentModal({ title: "Add to cart", state: true }));
    }
  };

  return (
    <ColumnActiveSheet>
      <ActiveSheetDiv>{children}</ActiveSheetDiv>
      <PostcardButton widthSheet={true}>
        <BlueButton handleButtonClick={handleButtonClick}>
          {standardName === "Card" && mobileDevice ? "Add to cart" : "Card"}{" "}
          <img src={ArrowRightIcon} alt="add" />
        </BlueButton>
      </PostcardButton>
    </ColumnActiveSheet>
  );
};

export default SelectStep;
