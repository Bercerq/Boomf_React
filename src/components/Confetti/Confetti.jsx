import React from "react";
import { useDispatch } from "react-redux";
import { setConfetti } from "../../redux/actions/confetti";

import {
  ConfettiWrapper,
  Title,
  ConfettiItem,
  ConfettiImage,
  ConfetiBox,
} from "./style";

function Confetti({ confettiState, ConfettiData }) {
  const dispatch = useDispatch();
  const handleSelectConfetti = (img, name) => () => {
    dispatch(setConfetti({ img, name }));
  };
  return (
    <ConfettiWrapper>
      <Title>Confetti: {confettiState.name}</Title>
      <ConfetiBox>
        {ConfettiData.map(({ img, name }) => (
          <ConfettiItem
            key={name}
            selectConfetti={confettiState}
            name={name}
            onClick={handleSelectConfetti(img, name)}
          >
            <ConfettiImage src={img} alt={name} />
          </ConfettiItem>
        ))}
      </ConfetiBox>
      <Title>Confetti launches out of card</Title>
    </ConfettiWrapper>
  );
}

export default Confetti;
