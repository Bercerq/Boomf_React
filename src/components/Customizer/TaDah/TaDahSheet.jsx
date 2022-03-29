import React from 'react';

import TaDahSection from "./TaDahSection/TaDahSection";
import BlueButton from "../../Buttons/BlueButton";
import Modal from "../../Modal/Modal";

import {SheetBlock} from "../Standard/SheetSection/style";
import {TitleTaDah} from "./TaDahSection/style";

const TaDahSheet = ({editTextRef, standardName}) => {
  return (
    <>
      <SheetBlock>
        <TitleTaDah titleDevice='desktop'>
          {standardName} Page
        </TitleTaDah>
        <TaDahSection editTextRef={editTextRef}/>
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

export default TaDahSheet;