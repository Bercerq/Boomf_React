import React from 'react';

import {DivFlex, FontPageDiv} from "./style";
import TextDoubleClick from "../../../TextDoubleClick";

const InsidePages = () => {
  return (
    <div id="buttonClickStandard">
      <DivFlex>
        <FontPageDiv>
          <TextDoubleClick
            buttonFlag='buttonClickStandard'
            activeSizeImage={true}
            column={1}
          />
        </FontPageDiv>
        <FontPageDiv>
          <TextDoubleClick
            buttonFlag='buttonClickStandard'
            activeSizeImage={true}
            column={2}
          />
        </FontPageDiv>
      </DivFlex>
    </div>
  );
};

export default InsidePages;