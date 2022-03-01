import React, {useState} from 'react';

import {PostcardBlock} from "./PostcardSection/style";
import PostcardSection from "./PostcardSection/PostcardSection";
import {useDispatch} from "react-redux";
import BlueButton from "../../Buttons/BlueButton";
import Modal from "../../Modal/Modal";

const Postcard = () => {
  const [openModal, setOpenModal] = useState({ state: false, title: "" });

  const handleButtonClick = () => {
    setOpenModal({
      title: "Add to cart",
      state: true,
    });
  };

  const dispatch = useDispatch();
  return (
    <>
      <PostcardBlock>
        <PostcardSection/>
        {/*<div>*/}
        {/*  <BlueButton handleButtonClick={handleButtonClick}>*/}
        {/*    Add to cart <img src={ArrowRightIcon} alt="add" />*/}
        {/*  </BlueButton>*/}
        {/*</div>*/}

      </PostcardBlock>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h1 style={{ textAling: "center" }}>Item add</h1>
        <BlueButton>Checkout</BlueButton>{" "}
      </Modal>
    </>

  );
};

export default Postcard;