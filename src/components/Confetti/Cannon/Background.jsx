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
        {backgroundData.map((confetti, idx) => (
          <BackgroundItemCannon
            key={idx}
            selectConfetti={backgroundState}
            name={confetti.name}
            onClick={handleSelectBackground(confetti)}
          >
            <BackgroundImageCannon src={confetti.img} alt={confetti.name}/>
          </BackgroundItemCannon>
        ))}
      </ConfettiBoxCannon>
    </ConfettiWrapperCannon>
  );
};

export default Background;