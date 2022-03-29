import React from "react";

import BlueButton from "../../Buttons/BlueButton";
import MallowCard from "./MallowCard/MallowCard";
import MallowColums from "./MallowColums/MallowColums";

import ArrowRightIcon from "../../../utils/assets/svg/ArrowRightIcon.svg";

import { MallowWrapper, MainWrapper, ButtonWrapper } from "./style";

import { useDispatch } from "react-redux";
import { setCurrentModal } from "../../../redux/actions/modal";
function MallowPops({ editTextRef }) {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(
      setCurrentModal({
        title: "Add to cart",
        state: true,
      })
    );
  };

  return (
    <MainWrapper>
      <MallowWrapper>
        <MallowColums />
        <MallowCard editTextRef={editTextRef} />
      </MallowWrapper>
      <ButtonWrapper>
        <BlueButton handleButtonClick={handleButtonClick}>
          Add to basket <img src={ArrowRightIcon} alt="add" />
        </BlueButton>
      </ButtonWrapper>
    </MainWrapper>
  );
}

export default MallowPops;
