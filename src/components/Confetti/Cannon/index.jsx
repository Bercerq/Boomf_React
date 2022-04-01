import React from 'react';

import Confetti from "../Confetti";
import Background from "./Background";
import MobileDevices from "./MobileDevices";
import ConfettiDevice from "./MobileDevices/ConfettiDevice";
import {ConfettiWrapperCannonColumn} from "./style";
import {useResizeDevice} from "../../../utils/hooks/useResizeDevice";

const CannonRightColumn = () => {
  const {mobileDevice} = useResizeDevice({maxWidth: 540});

  return mobileDevice ? (
    <MobileDevices/>
  ) : (
    <ConfettiWrapperCannonColumn>
      <Background/>
      <Confetti textPosition='start' lastChild={true}>
        <ConfettiDevice justifyContent='flex-start' sizeConfetti={48}/>
      </Confetti>
    </ConfettiWrapperCannonColumn>
  )
};

export default CannonRightColumn;