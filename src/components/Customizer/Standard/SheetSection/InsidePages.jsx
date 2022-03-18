import React from 'react';

import {DivFlex, FontPageDiv, LineDivStandard, TextContentStandard} from "./style";
import TextDoubleClick from "../../../TextDoubleClick";

const InsidePages = ({editTextRef}) => {
  return (
    <div id="buttonClickStandard" ref={ref => editTextRef.current[1] = ref}>
      <DivFlex>
        <FontPageDiv>
          <TextContentStandard>
            <TextDoubleClick
              buttonFlag='buttonClickStandard'
              activeSizeImage={true}
              column={1}
            />
          </TextContentStandard>
          <LineDivStandard/>
          <TextContentStandard>
            <TextDoubleClick
              buttonFlag='buttonClickStandard'
              activeSizeImage={true}
              column={2}
            />
          </TextContentStandard>
        </FontPageDiv>
      </DivFlex>
    </div>
  );
};

export default InsidePages;

