import React from "react";

import TextDraggable from "../../../Draggable/TextDraggable";
import ImageDraggable from "../../../Draggable/ImageDraggable";

import { LineDivStandard } from "../../Standard/SheetSection/style";
import { TextContentTaDah } from "./style";

const TextInsidePagesTaDah = () => {
  return (
    <>
      <TextContentTaDah id="buttonClickTaDah">
        <TextDraggable
          buttonFlag="buttonClickTaDah"
          activeSizeImage={true}
          column={1}
        />
        <ImageDraggable imageKey={"Inside"} />
      </TextContentTaDah>
      <LineDivStandard />
      <TextContentTaDah>
        <TextDraggable
          buttonFlag="buttonClickTaDah"
          activeSizeImage={true}
          column={2}
        />
      </TextContentTaDah>
    </>
  );
};

export default TextInsidePagesTaDah;
