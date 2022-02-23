import React, {useEffect, useState} from 'react';

import {PostcardBlock} from "./PostcardSection/style";
import PostcardSection from "./PostcardSection/PostcardSection";
import {useDispatch} from "react-redux";
import {setBackgroundCannon} from "../../../redux/actions/cannon";
import BlueButton from "../../Buttons/BlueButton";
import Modal from "../../Modal/Modal";
import ArrowRightIcon from "../../../utils/assets/svg/ArrowRightIcon.svg";

const Postcard = () => {
  const [openModal, setOpenModal] = useState({ state: false, title: "" });

  useEffect(() => {
    dispatch(setBackgroundCannon('https://boomf.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fboomf-production%2Fstamps_images%2F000%2F002%2F330%2Foriginal.jpg%3F1563188722&w=1920&q=75'));
  }, [])

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