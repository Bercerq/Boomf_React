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
      <Title>
        Confetti: <span>{confettiState.name}</span>
      </Title>
      <ConfetiBox>
        {confettiData.map((confetti, idx) => (
          <ConfettiItem
            selectConfetti={confettiState}
            name={confetti.id}
            key={idx}
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
