import React from 'react';

import TextDraggable from "../../../Draggable/TextDraggable";
import ImageDraggable from "../../../Draggable/ImageDraggable";
import {LineDivStandard, TextContentStandard} from "./style";

const TextContentInsidePages = () => {
  return (
    <>
      <TextContentStandard>
        <TextDraggable
          buttonFlag='buttonClickStandard'
          activeSizeImage={true}
          column={1}
        />
        <ImageDraggable imageKey={'Inside'}/>
      </TextContentStandard>
      <LineDivStandard/>
      <TextContentStandard>
        <TextDraggable
          buttonFlag='buttonClickStandard'
          activeSizeImage={true}
          column={2}
        />
      </TextContentStandard>
    </>
  );
};

export default TextContentInsidePages;