import React, {useEffect, useRef} from 'react';
import TaDahSheet from "../../components/Customizer/TaDah/TaDahSheet";
import {setConfettiData} from "../../redux/actions/confetti";
import {confettiDataBoomb} from "../../utils/constants/ConfettiData";
import {useDispatch} from "react-redux";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import ConfettiTaDah from "../../components/Confetti/TaDah";
import {setStandardName} from "../../redux/actions/standard";

const TaDah = () => {
  const dispatch = useDispatch();
  const editTextRef = useRef([]);

  useEffect(() => {
    dispatch(setStandardName("Front"));
    dispatch(setConfettiData([...confettiDataBoomb, ...confettiDataBoomb]));
  }, [dispatch]);

  return (
    <CustomizerLayout
      productType={""}
      editTextRef={editTextRef}
      title="Ta Dah"
    >
      <TaDahSheet editTextRef={editTextRef}/>
      <ConfettiTaDah/>
    </CustomizerLayout>
  );
};

export default TaDah;