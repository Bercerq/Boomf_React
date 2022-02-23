import React from 'react';
import {
  BackgroundCard, BackgroundImage,
  PostcardContainer,
  PostcardWrapper,
} from "./style";

import PostcardText from "./PostcardText";
import PostcardImage from "./PostcardImage";
import {useSelector} from "react-redux";

const PostcardSection = () => {
  const {confettiState} = useSelector(({confettiReducer}) => confettiReducer);
  const {backgroundState} = useSelector(({cannonReducer}) => cannonReducer);

  return (
    <PostcardContainer>
      <PostcardWrapper src={confettiState.img} alt={confettiState.name}/>
      <BackgroundCard>
        <BackgroundImage src={backgroundState}/>
        <PostcardImage/>
        <PostcardText/>
      </BackgroundCard>
    </PostcardContainer>
  );
};

export default PostcardSection;