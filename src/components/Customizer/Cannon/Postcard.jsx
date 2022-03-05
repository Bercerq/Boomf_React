import React from 'react';
import {useDispatch} from "react-redux";

import PostcardSection from "./PostcardSection/PostcardSection";
import BlueButton from "../../Buttons/BlueButton";
import Modal from "../../Modal/Modal";

import ArrowRightIcon from '../../../utils/assets/svg/ArrowRightIcon.svg'
import {PostcardBlock, PostcardButton} from "./PostcardSection/style";
import {setCurrentModal} from "../../../redux/actions/modal";

const Postcard = () => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(setCurrentModal({title: "Add to cart", state: true}));
  };

  return (
    <>
      <PostcardBlock>
        <PostcardSection/>
        <PostcardButton>
          <BlueButton handleButtonClick={handleButtonClick}>
            Add to cart <img src={ArrowRightIcon} alt="add"/>
          </BlueButton>
        </PostcardButton>
      </PostcardBlock>
      <Modal>
        <h1 style={{textAling: "center"}}>
          Item add
        </h1>
        <BlueButton>Checkout</BlueButton>{" "}
      </Modal>
    </>
  );
};

export default Postcard;