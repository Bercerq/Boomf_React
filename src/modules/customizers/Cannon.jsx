import React, {useEffect} from 'react';
import {confettiDataCannon, backgroundDataCannon} from "../../utils/constants/ConfettiData";
import Postcard from "../../components/Customizer/Cannon/Postcard";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import {useDispatch} from "react-redux";
import {setConfettiData} from "../../redux/actions/confetti";
import {setBackgroundData} from "../../redux/actions/background";

const Cannon = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setConfettiData(confettiDataCannon));
    dispatch(setBackgroundData(backgroundDataCannon))
  }, []);

  return (
    <CustomizerLayout title="Boomf cannon card" dataName='cannon'>
      <Postcard/>
    </CustomizerLayout>
  );
};

export default Cannon;