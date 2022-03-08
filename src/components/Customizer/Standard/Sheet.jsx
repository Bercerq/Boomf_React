import React from 'react';
import BlueButton from "../../Buttons/BlueButton";
import Modal from "../../Modal/Modal";

import {SheetBlock} from "./SheetSection/style";
import SheetSection from "./SheetSection/SheetSection";
import ArrowRightIcon from "../../../utils/assets/svg/ArrowRightIcon.svg";
import {PostcardButton} from "../Cannon/PostcardSection/style";
import {setCurrentModal} from "../../../redux/actions/modal";
import {useDispatch, useSelector} from "react-redux";
import {setStandardName} from "../../../redux/actions/standard";

const Sheet = () => {
  const dispatch = useDispatch();
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