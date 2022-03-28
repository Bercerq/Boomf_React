import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setConfetti} from "../../../redux/actions/confetti";

import {BackgroundBoxCannon, ConfettiItemCannon} from "../Cannon/style";
import {ConfettiImage} from "../style";

const ConfettiTaDahComponent = () => {
  const {confettiState, confettiData} = useSelector(
    ({confettiReducer}) => confettiReducer
  );

  const handleSelectConfetti = (confetti) => () => {
    dispatch(setConfetti(confetti));
  };

  const dispatch = useDispatch();
  return (
    <BackgroundBoxCannon
      columnConfetti={2}
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
    </BackgroundBoxCannon>
  );
};

export default ConfettiTaDahComponent;