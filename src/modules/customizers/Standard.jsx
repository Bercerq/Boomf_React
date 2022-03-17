import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import Sheet from "../../components/Customizer/Standard/Sheet";
import { setConfettiData } from "../../redux/actions/confetti";

import { confettiDataBoomb } from "../../utils/constants/ConfettiData";

const Standard = () => {
  const dispatch = useDispatch();
  const editTextRef = useRef([]);

  useEffect(() => {
    dispatch(setConfettiData(confettiDataBoomb));
  }, [dispatch]);

  return (
    <CustomizerLayout editTextRef={editTextRef} title="Standard">
      <Sheet />
    </CustomizerLayout>
  );
};

export default Standard;
