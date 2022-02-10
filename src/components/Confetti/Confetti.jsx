import React from "react";

import { ConfettiData } from "./../../utils/constants/ConfettiData";

import {
  ConfettiWrapper,
  Title,
  ConfettiItem,
  ConfettiImage,
  ConfetiBox,
} from "./style";

function Confetti({ setSelectConfetti, selectConfetti }) {
  const handleSelectConfetti = (img, name) => () => {
    setSelectConfetti({ img, name });
  };
  return (
    <ConfettiWrapper>
      <Title>Confetti: {selectConfetti.name}</Title>
      <ConfetiBox>
        {ConfettiData.map(({ img, name }) => (
          <ConfettiItem
            key={name}
            selectConfetti={selectConfetti}
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
