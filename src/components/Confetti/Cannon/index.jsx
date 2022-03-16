import React from 'react';

import Confetti from "../Confetti";
import Background from "./Background";
import MobileDevices from "./MobileDevices";
import ConfettiDevice from "./MobileDevices/ConfettiDevice";
import {ConfettiWrapperCannonColumn} from "./style";
import {useResizeDevice} from "../../../utils/hooks/useResizeDevice";

const CannonRightColumn = () => {
  const {mobileDevice} = useResizeDevice({maxWidth: 1130});

  return mobileDevice ? (
    <MobileDevices/>
  ) : (
    <ConfettiWrapperCannonColumn>
      <Background/>
      <Confetti textPosition='start'>
        <ConfettiDevice />
      </Confetti>
    </ConfettiWrapperCannonColumn>
  )
};

export default CannonRightColumn;