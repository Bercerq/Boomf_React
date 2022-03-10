import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setBackground} from "../../../redux/actions/background";

import {
  BackgroundImage,
  BackgroundItem,
  ConfettiBoxCannon,
  BackgroundWrapperCannon,
  TitleCannon
} from "./style";

const Background = () => {
  const dispatch = useDispatch();

  const {backgroundState, backgroundData} = useSelector(
    ({backgroundReducer}) => backgroundReducer
  );

  const handleSelectBackground = (background) => () => {
    dispatch(setBackground(background));
  };

  return (
    <BackgroundWrapperCannon>
      <TitleCannon>Background: {backgroundState.name}</TitleCannon>
      <ConfettiBoxCannon>
        {backgroundData.map((background, idx) => (
          <BackgroundItem
            key={idx}
            selectConfetti={background.id === backgroundState.id}
            name={background.name}
            onClick={handleSelectBackground(background)}
          >
            <BackgroundImage
              src={background.img}
              alt={background.name}
              selectConfetti={background.id === backgroundState.id}
            />
          </BackgroundItem>
        ))}
      </ConfettiBoxCannon>
    </BackgroundWrapperCannon>
  );
};

export default Background;