import React from 'react';
import {SheetBlock, TitleStandard} from "../Standard/SheetSection/style";
import {useSelector} from "react-redux";
import TaDahSection from "./TaDahSection/TaDahSection";
import BlueButton from "../../Buttons/BlueButton";
import Modal from "../../Modal/Modal";

const TaDahSheet = ({editTextRef}) => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  return (
    <>
      <SheetBlock>
        <TitleStandard>
          {standardName} Page
        </TitleStandard>
        <TaDahSection/>
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