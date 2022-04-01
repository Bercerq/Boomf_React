import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setCurrentModal} from "../../../../redux/actions/modal";

import MobileDeviceColumn from "./MobileDeviceColumn";
import PostcardBackground from "./PostcardBackground";

import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";

import {
  PostcardBlueButton,
  PostcardButton,
  PostcardContainer,
  PostcardWrapper,
  PostcardCard,
} from "./style";

const PostcardSection = ({editTextRef}) => {
  const [sizeCard, setSize] = useState({
    height: Math.round(window.innerWidth / 100 * 40),
    width: Math.round(window.innerWidth / 100 * 40 / 1.5)
  });

  const {confettiState} = useSelector(({confettiReducer}) => confettiReducer);

  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(setCurrentModal({title: "Add to cart", state: true}));
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize((e) => ({
        height: Math.round(window.innerWidth / 100 * 40),
        width: Math.round(window.innerWidth / 100 * 40 / 1.5)
      }));
    });
  }, []);

  return (
    <PostcardCard>
      <PostcardContainer>
        <PostcardWrapper
          src={confettiState.img}
          alt={confettiState.name}
        />
        <MobileDeviceColumn/>
        <PostcardBackground
          sizeCard={sizeCard}
          editTextRef={editTextRef}
          options={{buttonFlag: 'buttonClickCannon', column: 1}}
        />
      </PostcardContainer>
      <PostcardButton>
        <PostcardBlueButton onClick={handleButtonClick}>
          Add to cart <img src={ArrowRightIcon} alt="add"/>
        </PostcardBlueButton>
      </PostcardButton>
    </PostcardCard>
  );
};

export default PostcardSection;