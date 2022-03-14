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

function Confetti({children, textStart}) {
  const dispatch = useDispatch();

  const { confettiState, confettiData } = useSelector(
    ({ confettiReducer }) => confettiReducer
  );

  const handleSelectConfetti = (confetti) => () => {
    dispatch(setConfetti(confetti));
  };
  return (
    <ConfettiWrapper>
      <Title textStart={textStart}>
        Confetti: <span>{confettiState.name}</span>
      </Title>
      {children ? children : (
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
      )}
      <Title textStart={textStart}>Confetti launches out of card</Title>
    </ConfettiWrapper>
  );
}

export default Confetti;
