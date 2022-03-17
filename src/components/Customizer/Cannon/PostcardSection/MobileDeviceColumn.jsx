import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {useResizeDevice} from "../../../../utils/hooks/useResizeDevice";
import {setSelectedBackground} from "../../../../redux/actions/background";
import {setSelectedConfetti} from "../../../../redux/actions/confetti";

import MobileDeviceBackground from "./MobileDeviceBackground";

import {DeviceContentCard} from "../../../Confetti/Cannon/MobileDevices/style";

const MobileDeviceColumn = () => {
  const {mobileDevice} = useResizeDevice({maxWidth: 540});

  const {confettiState} = useSelector(
    ({confettiReducer}) => confettiReducer
  );
  const {backgroundState} = useSelector(
    ({backgroundReducer}) => backgroundReducer
  );

  const selectBackground = () => {
    dispatch(setSelectedBackground(true));
    dispatch(setSelectedConfetti(false));
  }

  const selectConfetti = () => {
    dispatch(setSelectedConfetti(true));
    dispatch(setSelectedBackground(false));
  }

  const dispatch = useDispatch();
  return mobileDevice && (
    <DeviceContentCard>
      <MobileDeviceBackground
        itemState={confettiState}
        title='Confetti'
        selectItem={selectConfetti}
      />
      <MobileDeviceBackground
        itemState={backgroundState}
        title='Background'
        selectItem={selectBackground}
      />
    </DeviceContentCard>
  );
};

export default MobileDeviceColumn;