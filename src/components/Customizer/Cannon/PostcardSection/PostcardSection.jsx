import React, {useEffect, useState} from 'react';
import {
  BackgroundCard, BackgroundImage,
  PostcardContainer,
  PostcardWrapper,
} from "./style";

import PostcardText from "./PostcardText";
import PostcardImage from "./PostcardImage";
import {useSelector} from "react-redux";

const PostcardSection = () => {
  const [sizeCard, setSize] = useState({
    height: window.innerWidth / 100 * 40,
    width: window.innerWidth / 100 * 40 / 1.5
  });
  const {confettiState} = useSelector(({confettiReducer}) => confettiReducer);
  const {backgroundState} = useSelector(({backgroundReducer}) => backgroundReducer);

  useEffect(() => {
    // window.addEventListener('resize', () => {
    //   setSize((e) => ({
    //     height: window.innerWidth / 100 * 40,
    //     width: window.innerWidth / 100 * 40 / 1.5
    //   }));
    // });
  }, [])

  return (
    <PostcardContainer>
      <PostcardWrapper src={confettiState.img} alt={confettiState.name}/>
      <BackgroundCard
        sizeCard={sizeCard}
      >
        <BackgroundImage src={backgroundState.img} alt={backgroundState.name}/>
        <PostcardImage/>
        <PostcardText/>
      </BackgroundCard>
    </PostcardContainer>
  );
};

export default PostcardSection;