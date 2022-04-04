import React from "react";

import TextDraggable from "../../../Draggable/TextDraggable";
import ImageDraggable from "../../../Draggable/ImageDraggable";

import {LineDivStandard} from "../../Standard/SheetSection/style";
import {TextContentTaDah} from "./style";

const TextInsidePagesTaDah = ({buttonFlag}) => {
  return (
    <>
      <TextContentTaDah>
        <TextDraggable
          buttonFlag={buttonFlag}
          activeSizeImage={true}
          activeRebootImage={true}
          column={1}
        />
        <ImageDraggable imageKey={"Inside"}/>
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

export default TextInsidePagesTaDah;
