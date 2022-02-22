import React, {useMemo} from 'react';
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
  const PostcardWrapperMemo = useMemo(() => {
    return <PostcardWrapper src={confettiState.img} alt={confettiState.name}/>
  }, [confettiState]);

  const BackgroundCardMemo = useMemo(() => {
    return (
      <BackgroundCard>
        <BackgroundImage src={backgroundState}/>
        <PostcardImage/>
        <PostcardText/>
      </BackgroundCard>
    )
  }, [backgroundState])

  return (
    <PostcardContainer>
      {PostcardWrapperMemo}
      {BackgroundCardMemo}
    </PostcardContainer>
  );
};

export default PostcardSection;