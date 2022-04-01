import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setConfetti} from "../../../../redux/actions/confetti";

import {
  ConfettiBoxCannon,
  ConfettiItemCannon
} from "../style";
import {ConfettiImage} from "../../style";

const ConfettiDevice = ({justifyContent, sizeConfetti}) => {
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
          name={confetti.name}
          sizeConfetti={sizeConfetti}
          selectConfetti={confetti.id === confettiState.id}
          onClick={handleSelectConfetti(confetti)}
        >
          <ConfettiImage src={confetti.img} alt={confetti.name}/>
        </ConfettiItemCannon>
      ))}
    </ConfettiBoxCannon>
  );
};

export default ConfettiDevice;