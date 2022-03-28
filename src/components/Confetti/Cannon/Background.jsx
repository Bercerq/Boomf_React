import React from 'react';
import {useSelector} from "react-redux";

import BackgroundDevice from "./MobileDevices/BackgroundDevice";

import {
  BackgroundWrapperCannon,
  TitleCannon
} from "./style";

const Background = () => {
  const {backgroundState} = useSelector(
    ({backgroundReducer}) => backgroundReducer
  );

  return (
    <BackgroundWrapperCannon>
      <TitleCannon>
        Background: <span>{backgroundState.name}</span>
      </TitleCannon>
      <BackgroundDevice columnConfetti={7}/>
    </BackgroundWrapperCannon>
  );
};

export default Background;