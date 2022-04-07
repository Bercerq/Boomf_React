import React from 'react';

import TextDraggable from "../../../Draggable/TextDraggable";
import ImageDraggable from "../../../Draggable/ImageDraggable";

import {TextContentTaDah} from "../../TaDah/TaDahSection/style";
import {LineDivStandard} from "./style";

const TextContentInsidePages = ({buttonFlag}) => {
  return (
    <>
      <TextContentTaDah>
        <TextDraggable
          buttonFlag={buttonFlag}
          activeSizeImage={true}
          activeRebootImage={true}
          column={1}
        />
        <ImageDraggable imageKey={'Inside'}/>
      </TextContentTaDah>
      <LineDivStandard/>
      <TextContentTaDah>
        <TextDraggable
          buttonFlag={buttonFlag}
          activeSizeImage={true}
          activeRebootImage={true}
          column={2}
        />
      </TextContentTaDah>
    </>
  );
};

export default TextContentInsidePages;