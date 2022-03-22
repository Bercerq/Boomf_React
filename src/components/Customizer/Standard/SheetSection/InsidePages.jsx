import React from 'react';

import TextDoubleClick from "../../../TextDoubleClick";

import {
  FontPageDiv,
  LineDivStandard,
  SheetDivFlex,
  SheetContainer,
  TextContentStandard
} from "./style";
import ImageRefactoring from "../../../ImageRefactoring";

const InsidePages = ({editTextRef}) => {
  return (
    <div id="buttonClickStandard" ref={ref => editTextRef.current[1] = ref}>
      <SheetDivFlex>
        <FontPageDiv>
          <SheetContainer>
            <TextContentStandard>
              <TextDoubleClick
                buttonFlag='buttonClickStandard'
                activeSizeImage={true}
                column={1}
              />
              <ImageRefactoring imageKey={'Inside'}/>
            </TextContentStandard>
            <LineDivStandard/>
            <TextContentStandard>
              <TextDoubleClick
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

