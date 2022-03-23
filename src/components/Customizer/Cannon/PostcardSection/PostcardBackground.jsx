import React from 'react';
import {useSelector} from "react-redux";

import PostcardImage from "./PostcardImage";
import TextDraggable from "../../../Draggable/TextDraggable";

import {BackgroundCard, BackgroundImage} from "./style";
import {FormTextContent} from "../../../Draggable/TextDraggable/style";

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
        <TextDraggable {...options}/>
      </FormTextContent>
    </BackgroundCard>
  );
};

export default PostcardBackground;