import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setConfettiData} from "../../redux/actions/confetti";
import Cube from "../../components/Customizer/Boomb/Cube";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";
import {confettiDataBoomb} from "../../utils/constants/ConfettiData";

function Boomb() {
  const dispatch = useDispatch();
  const {confettiState, confettiData} = useSelector(({confettiReducer}) => confettiReducer)

  useEffect(() => {
    dispatch(setConfettiData(confettiDataBoomb))
  }, []);

  return (
    <CustomizerLayout confettiData={confettiData} title="Boomb customizer" dataName='boomb'>
      <Cube />
    </CustomizerLayout>
  );
}

export default Boomb;
