import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setConfetti} from "../../../../redux/actions/confetti";

import {
  ConfettiBoxCannon,
  ConfettiItemCannon
} from "../style";
import {ConfettiImage} from "../../style";

const ConfettiDevice = ({justifyContent}) => {
  const {confettiState, confettiData} = useSelector(
    ({confettiReducer}) => confettiReducer
  );

  const handleSelectConfetti = (confetti) => () => {
    dispatch(setConfetti(confetti));
  };

  const dispatch = useDispatch();
  return (
    <ConfettiBoxCannon
      justifyContent={justifyContent}
    >
      {confettiData.map((confetti, idx) => (
        <ConfettiItemCannon
          key={idx}
          selectConfetti={confetti.id === confettiState.id}
          name={confetti.name}
          onClick={handleSelectConfetti(confetti)}
        >
          <ConfettiImage src={confetti.img} alt={confetti.name}/>
        </ConfettiItemCannon>
      ))}
    </ConfettiBoxCannon>
  );
};

export default ConfettiDevice;