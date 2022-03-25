import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { setConfettiData } from "../../redux/actions/confetti";
import { setBackgroundData } from "../../redux/actions/background";

import CannonRightColumn from "../../components/Confetti/Cannon";
import Postcard from "../../components/Customizer/Cannon/Postcard";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";

import {
  confettiDataCannon,
  backgroundDataCannon,
} from "../../utils/constants/ConfettiData";

const Cannon = () => {
  const dispatch = useDispatch();

  const editTextRef = useRef([]);

  useEffect(() => {
    dispatch(setConfettiData(confettiDataCannon));
    dispatch(setBackgroundData(backgroundDataCannon));
  }, [dispatch]);

  return (
    <CustomizerLayout
      productType={"greeting_card"}
      editTextRef={editTextRef}
      title="Boomf cannon card"
    >
      <Postcard editTextRef={editTextRef} />
      <CannonRightColumn />
    </CustomizerLayout>
  );
};

export default Cannon;
