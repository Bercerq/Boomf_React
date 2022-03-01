import React, {useEffect} from 'react';
import {confettiDataCannon} from "../../utils/constants/ConfettiData";
import Postcard from "../../components/Customizer/Cannon/Postcard";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import {useDispatch, useSelector} from "react-redux";
import {setConfettiData} from "../../redux/actions/confetti";

const Cannon = () => {
  const dispatch = useDispatch();
  const {confettiState, confettiData} = useSelector(({confettiReducer}) => confettiReducer)

  useEffect(() => {
    dispatch(setConfettiData(confettiDataCannon))
  }, []);

  return (
    <CustomizerLayout confettiData={confettiData} title="Boomf cannon card" dataName='cannon'>
      <Postcard/>
    </CustomizerLayout>
  );
};

export default Cannon;