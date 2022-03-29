import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setConfetti} from "../../../redux/actions/confetti";

import {ConfettiItemCannon} from "../Cannon/style";
import {ConfettiBoxTaDah, ConfettiItemTaDahImage} from "./style";

const ConfettiTaDahComponent = () => {
  const {confettiState, confettiData} = useSelector(
    ({confettiReducer}) => confettiReducer
  );

  const handleSelectConfetti = (confetti) => () => {
    dispatch(setConfetti(confetti));
  };

  const dispatch = useDispatch();
  return (
    <ConfettiBoxTaDah
      columnConfetti={2}
    >
      {confettiData.map((confetti, idx) => (
        <ConfettiItemCannon
          key={idx}
          selectConfetti={confetti.id === confettiState.id}
          name={confetti.name}
          onClick={handleSelectConfetti(confetti)}
        >
          <ConfettiItemTaDahImage src={confetti.img} alt={confetti.name}/>
        </ConfettiItemCannon>
      ))}
    </ConfettiBoxTaDah>
  );
};

export default ConfettiTaDahComponent;