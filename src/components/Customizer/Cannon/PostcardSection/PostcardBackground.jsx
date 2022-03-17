import React from 'react';
import {useSelector} from "react-redux";

import PostcardImage from "./PostcardImage";
import TextDoubleClick from "../../../TextDoubleClick";

import {BackgroundCard, BackgroundImage} from "./style";
import {FormTextContent} from "../../../TextDoubleClick/style";

const PostcardBackground = ({sizeCard, editTextRef, options}) => {
  const {backgroundState} = useSelector(
    ({backgroundReducer}) => backgroundReducer
  );

  return (
    <BackgroundCard sizeCard={sizeCard}>
      <BackgroundImage
        src={backgroundState.img}
        alt={backgroundState.name}
      />
      <PostcardImage/>
      <FormTextContent
        id={options.buttonFlag}
        ref={ref => editTextRef.current[1] = ref}
      >
        <TextDoubleClick {...options}/>
      </FormTextContent>
    </BackgroundCard>
  );
};

export default PostcardBackground;