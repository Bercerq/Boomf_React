import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setBackground} from "../../../redux/actions/background";

import {
  BackgroundImageCannon,
  BackgroundItemCannon,
  ConfettiBoxCannon,
  ConfettiWrapperCannon,
  TitleCannon
} from "./style";

const Background = () => {
  const dispatch = useDispatch();

  const { backgroundState, backgroundData } = useSelector(
    ({ backgroundReducer }) => backgroundReducer
  );

  const handleSelectBackground = (background) => () => {
    dispatch(setBackground(background));
  };

  return (
    <ConfettiWrapperCannon>
      <TitleCannon>Background: {backgroundState.name}</TitleCannon>
      <ConfettiBoxCannon>
        {backgroundData.map((background, idx) => (
          <BackgroundItemCannon
            key={idx}
            selectConfetti={background.id === backgroundState.id}
            name={background.name}
            onClick={handleSelectBackground(background)}
          >
            <BackgroundImageCannon src={background.img} alt={background.name}/>
          </BackgroundItemCannon>
        ))}
      </ConfettiBoxCannon>
    </ConfettiWrapperCannon>
  );
};

export default Background;