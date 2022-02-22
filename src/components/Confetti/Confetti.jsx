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
import {setConfettiCannon} from "../../redux/actions/cannon";

function Confetti({ сonfettiData }) {
  const dispatch = useDispatch();

  const { confettiState } = useSelector(
    ({ confettiReducer }) => confettiReducer
  );

  const handleSelectConfetti = (img, name) => () => {
    dispatch(setConfetti({ img, name }));
    dispatch(setConfettiCannon(img))
  };
  return (
    <ConfettiWrapper>
      <Title>Confetti: {confettiState.name}</Title>
      <ConfetiBox>
        {сonfettiData.map(({ img, name }) => (
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
