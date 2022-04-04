import React from 'react';

import TextDraggable from "../../../Draggable/TextDraggable";
import ImageDraggable from "../../../Draggable/ImageDraggable";
import {LineDivStandard, TextContentStandard} from "./style";

const TextContentInsidePages = ({buttonFlag}) => {
  return (
    <>
      <TextContentStandard>
        <TextDraggable
          buttonFlag={buttonFlag}
          activeSizeImage={true}
          activeRebootImage={true}
          column={1}
        />
        <ImageDraggable imageKey={'Inside'}/>
      </TextContentStandard>
      <LineDivStandard/>
      <TextContentStandard>
        <TextDraggable
          buttonFlag={buttonFlag}
          activeSizeImage={true}
          activeRebootImage={true}
          column={2}
        />
      </TextContentStandard>
    </>
  );
};

export default TextContentInsidePages;