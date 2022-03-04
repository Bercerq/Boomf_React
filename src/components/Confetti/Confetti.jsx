import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConfetti } from "../../redux/actions/confetti";

import {
  ConfettiWrapper,
  Title,
  ConfettiItem,
  ConfettiImage,
  ConfetiBox,
} from "./style";

function Confetti() {
  const dispatch = useDispatch();

  const { confettiState, confettiData } = useSelector(
    ({ confettiReducer }) => confettiReducer
  );

  const handleSelectConfetti = (confetti) => () => {
    dispatch(setConfetti(confetti));
  };
  return (
    <ConfettiWrapper>
      <Title>Confetti: {confettiState.name}</Title>
      <ConfetiBox>
        {confettiData.map((confetti, idx) => (
          <ConfettiItem
            key={idx}
            selectConfetti={confettiState}
            name={confetti.id}
            onClick={handleSelectConfetti(confetti)}
          >
            <ConfettiImage src={confetti.img} alt={confetti.name} />
          </ConfettiItem>
        ))}
      </ConfetiBox>
      <Title>Confetti launches out of card</Title>
    </ConfettiWrapper>
  );
}

export default Confetti;
