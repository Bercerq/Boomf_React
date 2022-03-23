import React from 'react';

import TextDraggable from "../../../Draggable/TextDraggable";
import ImageDraggable from "../../../Draggable/ImageDraggable";

import {
  FontPageDiv,
  LineDivStandard,
  SheetDivFlex,
  SheetContainer,
  TextContentStandard
} from "./style";

const InsidePages = ({editTextRef}) => {
  return (
    <div id="buttonClickStandard" ref={ref => editTextRef.current[1] = ref}>
      <SheetDivFlex>
        <FontPageDiv>
          <SheetContainer>
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
          </SheetContainer>
        </FontPageDiv>
      </SheetDivFlex>
    </div>
  );
};

export default InsidePages;

