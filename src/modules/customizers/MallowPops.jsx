import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { setConfettiData } from "../../redux/actions/confetti";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import { confettiDataBoomb } from "../../utils/constants/ConfettiData";
import Mallow from "../../components/Customizer/MallowPops/Mallow";

function MallowPops() {
  const dispatch = useDispatch();
  const editTextRef = useRef([]);

  useEffect(() => {
    dispatch(setConfettiData(confettiDataBoomb));
  }, [dispatch]);

  return (
    <CustomizerLayout
      productType={"mallowpops"}
      editTextRef={editTextRef}
      title="Mallow Pops customizer"
    >
      <Mallow editTextRef={editTextRef} />
    </CustomizerLayout>
  );
}

export default MallowPops;
