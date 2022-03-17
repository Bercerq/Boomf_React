import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setConfettiData } from "../../redux/actions/confetti";
import Cube from "../../components/Customizer/Boomb/Cube";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import { confettiDataBoomb } from "../../utils/constants/ConfettiData";
import Confetti from "../../components/Confetti/Confetti";

function Boomb() {
  const dispatch = useDispatch();
  const { confettiData } = useSelector(
    ({ confettiReducer }) => confettiReducer
  );
  const editTextRef = useRef([]);

  useEffect(() => {
    dispatch(setConfettiData(confettiDataBoomb));
  }, []);

  return (
    <CustomizerLayout
      editTextRef={editTextRef}
      confettiData={confettiData}
      title="Boomb customizer"
    >
      <Cube editTextRef={editTextRef} />
      <Confetti textPosition='center' positionWrapper='absolute'/>
    </CustomizerLayout>
  );
}

export default Boomb;
