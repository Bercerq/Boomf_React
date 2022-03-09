import React, {useState} from 'react';

import PostcardTextComponent from "../../Cannon/PostcardSection/PostcardText";
import {DivFlex, FontPageDiv} from "./style";

const InsidePages = () => {
  const [enableRotate, setEnableRotate] = useState(false);
  const [enableWidthText, setEnableWidthText] = useState(false);

  return (
    <div
      id="buttonClickStandard"
      onMouseUp={() => {
        setEnableRotate(false);
      }}
      onTouchEnd={() => {
        setEnableRotate(false);
        document.body.style.overflow = 'auto';
      }}
    >
      <DivFlex>
        <FontPageDiv>
          <PostcardTextComponent
            enableRotate={enableRotate}
            setEnableRotate={setEnableRotate}
            buttonflag='buttonClickStandard'
            activeSizeImage={true}
            enableWidthText={enableWidthText}
            setEnableWidthText={setEnableWidthText}
            column={1}
          />
        </FontPageDiv>
        <FontPageDiv>
          <PostcardTextComponent
            enableRotate={enableRotate}
            setEnableRotate={setEnableRotate}
            buttonflag='buttonClickStandard'
            activeSizeImage={true}
            enableWidthText={enableWidthText}
            setEnableWidthText={setEnableWidthText}
            column={2}
          />
        </FontPageDiv>
      </DivFlex>
    </div>
  );
};

export default InsidePages;