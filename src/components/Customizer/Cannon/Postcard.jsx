import React from 'react';

import PostcardSection from "./PostcardSection/PostcardSection";
import BlueButton from "../../Buttons/BlueButton";
import Modal from "../../Modal/Modal";

import {PostcardBlock} from "./PostcardSection/style";

const Postcard = ({editTextRef}) => {
  return (
    <>
      <PostcardBlock>
        <PostcardSection editTextRef={editTextRef}/>
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