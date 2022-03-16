import React, {useEffect, useRef} from 'react';
import {confettiDataCannon, backgroundDataCannon} from "../../utils/constants/ConfettiData";
import Postcard from "../../components/Customizer/Cannon/Postcard";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import {useDispatch} from "react-redux";
import {setConfettiData} from "../../redux/actions/confetti";
import {setBackgroundData} from "../../redux/actions/background";
import TextEditorCannon from "../../components/TextEditor/TextEditorCannon";
import CannonRightColumn from "../../components/Confetti/Cannon";

const Cannon = () => {
  const dispatch = useDispatch();

  const editTextRef = useRef([]);

  useEffect(() => {
    dispatch(setConfettiData(confettiDataCannon));
    dispatch(setBackgroundData(backgroundDataCannon))
  }, []);

  return (
    <CustomizerLayout title="Boomf cannon card">
      <Postcard editTextRef={editTextRef}/>
      <TextEditorCannon editTextRef={editTextRef}/>
      <CannonRightColumn/>
    </CustomizerLayout>
  );
};

export default Cannon;