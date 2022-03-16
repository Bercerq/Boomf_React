import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import Sheet from "../../components/Customizer/Standard/Sheet";
import {setConfettiData} from "../../redux/actions/confetti";

import {confettiDataBoomb} from "../../utils/constants/ConfettiData";

const Standard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setConfettiData(confettiDataBoomb));
  }, []);

  return (
    <CustomizerLayout title='Standard'>
      <Sheet/>
    </CustomizerLayout>
  );
};

export default Standard;