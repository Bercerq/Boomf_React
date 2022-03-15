import React, {useEffect, useState} from 'react';

import Confetti from "../Confetti";
import Background from "./Background";
import MobileDevices from "./MobileDevices";
import ConfettiDevice from "./MobileDevices/ConfettiDevice";
import {ConfettiWrapperCannonColumn} from "./style";

const CannonRightColumn = () => {
  const [mobileDevice, setMobileDevice] = useState(window.matchMedia("(max-width: 1130px)").matches);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobileDevice(window.matchMedia("(max-width: 1130px)").matches)
    });
  }, []);

  return mobileDevice ? (
    <MobileDevices/>
  ) : (
    <ConfettiWrapperCannonColumn>
      <Background/>
      <Confetti textStart={true}>
        <ConfettiDevice />
      </Confetti>
    </ConfettiWrapperCannonColumn>
  )
};

export default CannonRightColumn;