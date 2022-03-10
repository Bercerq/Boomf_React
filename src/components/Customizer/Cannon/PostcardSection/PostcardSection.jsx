import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setCurrentModal} from "../../../../redux/actions/modal";

import PostcardTextComponent from "./PostcardText";
import PostcardImage from "./PostcardImage";

import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";
import {FormTextContent} from "../../../TextDoubleClick/style";
import {
  BackgroundCard,
  BackgroundImage,
  PostcardBlueButton,
  PostcardButton,
  PostcardContainer,
  PostcardWrapper,
  PostcardTest,
} from "./style";

const PostcardSection = () => {
  const [sizeCard, setSize] = useState({
    height: window.innerWidth / 100 * 40,
    width: window.innerWidth / 100 * 40 / 1.5
  });

  const {confettiState} = useSelector(({confettiReducer}) => confettiReducer);
  const {backgroundState} = useSelector(({backgroundReducer}) => backgroundReducer);

  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(setCurrentModal({title: "Add to cart", state: true}));
  };

  useEffect(() => {
    // window.addEventListener('resize', () => {
    //   setSize((e) => ({
    //     height: window.innerWidth / 100 * 40,
    //     width: window.innerWidth / 100 * 40 / 1.5
    //   }));
    // });  TODO
  }, [])

  return (
    <PostcardTest>
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
          <FormTextContent id="buttonClickCannon">
            <PostcardTextComponent
              buttonflag='buttonClickCannon'
              column={1}
            />
          </FormTextContent>
        </BackgroundCard>
      </PostcardContainer>
      <PostcardButton>
        <PostcardBlueButton onClick={handleButtonClick}>
          Add to cart <img src={ArrowRightIcon} alt="add"/>
        </PostcardBlueButton>
      </PostcardButton>
    </PostcardTest>
  );
};

export default PostcardSection;