import React, {useEffect} from 'react';

import {PostcardBlock} from "./PostcardSection/style";
import PostcardSection from "./PostcardSection/PostcardSection";
import {useDispatch} from "react-redux";
import {setBackgroundCannon} from "../../../redux/actions/cannon";

const Postcard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBackgroundCannon('https://boomf.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fboomf-production%2Fstamps_images%2F000%2F002%2F330%2Foriginal.jpg%3F1563188722&w=1920&q=75'));
  }, [])

  return (
    <PostcardBlock>
      <PostcardSection/>
    </PostcardBlock>
  );
};

export default Postcard;