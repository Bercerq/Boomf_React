import React from 'react';

import {BackgroundImage, BackgroundItem, TitleCannon} from "../../../Confetti/Cannon/style";
import {DivFlexCenter} from "../../../Confetti/Cannon/MobileDevices/style";

const MobileDeviceBackground = ({title, itemState, selectItem}) => {
  return (
    <DivFlexCenter>
      <BackgroundItem
        onClick={selectItem}
        name={itemState.name}
      >
        <BackgroundImage
          src={itemState.img}
          alt={itemState.name}
        />
      </BackgroundItem>
      <TitleCannon>{title}</TitleCannon>
    </DivFlexCenter>
  );
};

export default MobileDeviceBackground;