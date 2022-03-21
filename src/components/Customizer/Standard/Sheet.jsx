import React from 'react';
import {useSelector} from "react-redux";

import BlueButton from "../../Buttons/BlueButton";
import Modal from "../../Modal/Modal";
import SheetSection from "./SheetSection/SheetSection";

import {SheetBlock, TitleStandard} from "./SheetSection/style";

const Sheet = ({editTextRef}) => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  return (
    <>
      <SheetBlock>
        <TitleStandard>
          {standardName} Page
        </TitleStandard>
        <SheetSection editTextRef={editTextRef}/>
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