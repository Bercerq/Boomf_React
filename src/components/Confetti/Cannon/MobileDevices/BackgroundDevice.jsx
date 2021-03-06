import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setBackground} from "../../../../redux/actions/background";

import {
  ActiveBackground,
  BackgroundBoxCannon,
  BackgroundImage,
  BackgroundItem
} from "../style";

const BackgroundDevice = ({columnConfetti}) => {
  const {backgroundState, backgroundData} = useSelector(
    ({backgroundReducer}) => backgroundReducer
  );

  const handleSelectBackground = (background) => () => {
    dispatch(setBackground(background));
  };

  const dispatch = useDispatch();
  return (
    <BackgroundBoxCannon
      columnConfetti={columnConfetti}
    >
      {backgroundData.map((background, idx) => (
        <BackgroundItem
          key={idx}
          name={background.name}
          onClick={handleSelectBackground(background)}
        >
          <BackgroundImage
            src={background.img}
            alt={background.name}
          />
          <ActiveBackground selectConfetti={background.id === backgroundState.id}/>
        </BackgroundItem>
      ))}
    </BackgroundBoxCannon>
  )

};

export default BackgroundDevice;