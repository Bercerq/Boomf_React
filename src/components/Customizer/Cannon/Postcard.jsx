import React from 'react';

import PostcardSection from "./PostcardSection/PostcardSection";

import {PostcardBlock} from "./PostcardSection/style";

const Postcard = ({editTextRef}) => {
  return (
    <PostcardBlock>
      <PostcardSection editTextRef={editTextRef}/>
    </PostcardBlock>
  );
};

export default Postcard;