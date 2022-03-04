import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setConfetti} from "../../../redux/actions/confetti";

import {
  ConfettiBoxCannon,
  ConfettiImageCannon,
  ConfettiItemCannon,
  ConfettiWrapperCannon,
  TitleCannon
} from "./style";

const Confetti = () => {
  const dispatch = useDispatch();

  const {confettiState, confettiData} = useSelector(
    ({confettiReducer}) => confettiReducer
  );

  const handleSelectConfetti = (confetti) => () => {
    dispatch(setConfetti(confetti));
  };
  return (
    <ConfettiWrapperCannon>
      <TitleCannon>Confetti: {confettiState.name}</TitleCannon>
      <ConfettiBoxCannon>
        {confettiData.map((confetti, idx) => (
          <ConfettiItemCannon
            key={idx}
            selectConfetti={confettiState}
            name={confetti.name}
            onClick={handleSelectConfetti(confetti)}
          >
            <ConfettiImageCannon src={confetti.img} alt={confetti.name}/>
          </ConfettiItemCannon>
        ))}
      </ConfettiBoxCannon>
      <TitleCannon>Confetti launches out of card</TitleCannon>
    </ConfettiWrapperCannon>
  );
};

export default Confetti;