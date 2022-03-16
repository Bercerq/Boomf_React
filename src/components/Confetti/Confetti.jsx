import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {useResizeDevice} from "../../utils/hooks/useResizeDevice";
import {setConfetti, setSelectedConfetti} from "../../redux/actions/confetti";

import MobileDevices from "./Cannon/MobileDevices";

import {
  ConfettiWrapper,
  Title,
  ConfettiItem,
  ConfettiImage,
  ConfetiBox,
} from "./style";


function Confetti({children, textPosition}) {
  const dispatch = useDispatch();
  const {mobileDevice} = useResizeDevice({maxWidth: 1130});

  const {confettiState, confettiData} = useSelector(
    ({confettiReducer}) => confettiReducer
  );

  const handleSelectConfetti = (confetti) => () => {
    dispatch(setConfetti(confetti));
  };

  const handleSelectConfettiMobile = () => {
    dispatch(setSelectedConfetti(true));
  };

  return (
    <>
      <ConfettiWrapper>
        <Title textPosition={textPosition}>
          Confetti<span>: {confettiState.name}</span>
        </Title>
        {children ? (
          children
        ) : (
          <ConfetiBox>
            {confettiData.map((confetti, idx) => (
              <ConfettiItem
                mobileDevice={mobileDevice}
                selectConfetti={confettiState}
                name={confetti.id}
                key={idx}
                onClick={
                  mobileDevice
                    ? handleSelectConfettiMobile
                    : handleSelectConfetti(confetti)
                }
              >
                <ConfettiImage src={confetti.img} alt={confetti.name}/>
              </ConfettiItem>
            ))}
          </ConfetiBox>
        )}
        <Title textPosition={textPosition}>Confetti launches out of card</Title>
      </ConfettiWrapper>

      {mobileDevice && <MobileDevices/>}
    </>
  );
}

export default Confetti;
