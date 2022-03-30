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

function Confetti({children, textPosition, lastChild, positionWrapper, alignItem, deviceTextPosition, title}) {
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
      <ConfettiWrapper positionWrapper={positionWrapper} alignItem={alignItem}>
        <Title deviceTextPosition={deviceTextPosition} textPosition={textPosition} lastChild={lastChild}>
          {title ? title : 'Confetti'}<span>: {confettiState.name}</span>
        </Title>
        {children ? (
          children
        ) : (
          <ConfetiBox>
            {confettiData.map((confetti, idx) => (
              <ConfettiItem
                key={idx}
                mobileDevice={mobileDevice}
                selectConfetti={confettiState}
                name={confetti.id}
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
        <Title deviceTextPosition={deviceTextPosition} textPosition={textPosition} lastChild={lastChild}>
          {title ? 'Butterfly toy flies out of the card' : 'Confetti launches out of card'}
        </Title>
      </ConfettiWrapper>

      {mobileDevice && <MobileDevices/>}
    </>
  );
}

export default Confetti;
