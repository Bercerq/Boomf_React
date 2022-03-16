import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import BlueButton from "../../Buttons/BlueButton";
import Modal from "../../Modal/Modal";
import SheetSection from "./SheetSection/SheetSection";

import {setCurrentModal} from "../../../redux/actions/modal";
import {setStandardName} from "../../../redux/actions/standard";

import ArrowRightIcon from "../../../utils/assets/svg/ArrowRightIcon.svg";

import {PostcardButton} from "../Cannon/PostcardSection/style";
import {SheetBlock} from "./SheetSection/style";

const Sheet = () => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  const handleButtonClick = () => {
    if (standardName === 'Front') {
      dispatch(setStandardName('Inside'))
    } else {
      dispatch(setCurrentModal({title: "Add to cart", state: true}));
    }
  };

  const dispatch = useDispatch();
  return (
    <>
      <SheetBlock>
        <h3>{standardName} Page</h3>
        <SheetSection/>
        <PostcardButton>
          <BlueButton handleButtonClick={handleButtonClick}>
            {standardName === 'Front' ? ('Inside pages') : ('Add to cart')} <img src={ArrowRightIcon} alt="add"/>
          </BlueButton>
        </PostcardButton>
      </SheetBlock>
      <Modal>
        <h1 style={{textAling: "center"}}>
          Item add
        </h1>
        <BlueButton>Checkout</BlueButton>{" "}
      </Modal>
    </>
  );
};

export default Sheet;