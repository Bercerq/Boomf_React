import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import PostcardTextComponent from "./PostcardText";
import PostcardImage from "./PostcardImage";

import {FormTextContent} from "../../../TextDoubleClick/style";
import {
  BackgroundCard,
  BackgroundImage,
  PostcardContainer,
  PostcardWrapper,
} from "./style";

const PostcardSection = () => {
  const [enableRotate, setEnableRotate] = useState(false);
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
    // });  TODO
  }, [])

  return (
    <PostcardContainer>
      <PostcardWrapper
        src={confettiState.img}
        alt={confettiState.name}
      />
      <BackgroundCard sizeCard={sizeCard}>
        <BackgroundImage
          src={backgroundState.img}
          alt={backgroundState.name}
        />
        <PostcardImage/>
        <FormTextContent
          id="buttonClickCannon"
          onMouseUp={() => {
            setEnableRotate(false);
          }}
          onTouchEnd={() => {
            setEnableRotate(false);
            document.body.style.overflow = 'auto';
          }}
        >
          <PostcardTextComponent
            enableRotate={enableRotate}
            setEnableRotate={setEnableRotate}
            buttonflag='buttonClickCannon'
            column={1}
          />
        </FormTextContent>
      </BackgroundCard>
    </PostcardContainer>
  );
};

export default PostcardSection;