import React from 'react';
import Confetti from "./Confetti";
import Background from "./Background";
import {ConfettiWrapperCannonColumn} from "./style";
import {useDispatch, useSelector} from "react-redux";

const CannonRightColumn = () => {
  const dispatch = useDispatch();

  const { confettiState, confettiData } = useSelector(
    ({ confettiReducer }) => confettiReducer
  );

  return (
    <ConfettiWrapperCannonColumn>
      <Background />
      <Confetti confettiData={confettiData}/>
    </ConfettiWrapperCannonColumn>
  );
};

export default CannonRightColumn;