import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConfetti, setSelectedConfetti } from "../../redux/actions/confetti";
import MobileDevices from "./Cannon/MobileDevices";

import {
  ConfettiWrapper,
  Title,
  ConfettiItem,
  ConfettiImage,
  ConfetiBox,
} from "./style";

function Confetti({ children, textStart }) {
  const dispatch = useDispatch();

  const { confettiState, confettiData } = useSelector(
    ({ confettiReducer }) => confettiReducer
  );
  const [mobileDevice, setMobileDevice] = useState(
    window.matchMedia("(max-width: 1130px)").matches
  );

  const handleSelectConfetti = (confetti) => () => {
    dispatch(setConfetti(confetti));
  };

  const handleSelectConfettiMobile = () => {
    dispatch(setSelectedConfetti(true));
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobileDevice(window.matchMedia("(max-width: 1130px)").matches);
    });
  }, []);
  return (
    <>
      <ConfettiWrapper>
        <Title textStart={textStart}>
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
                <ConfettiImage src={confetti.img} alt={confetti.name} />
              </ConfettiItem>
            ))}
          </ConfetiBox>
        )}
        <Title textStart={textStart}>Confetti launches out of card</Title>
      </ConfettiWrapper>

      {mobileDevice && <MobileDevices />}
    </>
  );
}

export default Confetti;
