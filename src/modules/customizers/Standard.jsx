import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import Sheet from "../../components/Customizer/Standard/Sheet";
import {setConfettiData} from "../../redux/actions/confetti";

import {confettiDataBoomb} from "../../utils/constants/ConfettiData";

const Standard = () => {
  const dispatch = useDispatch();

  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  useEffect(() => {
    dispatch(setConfettiData(confettiDataBoomb));
  }, []);

  return (
    <CustomizerLayout title='Standard' dataName={standardName}>
      <Sheet/>
    </CustomizerLayout>
  );
};

export default Standard;