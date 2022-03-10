import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { openEditor } from "../../../../utils/functions/boomb";

import RotateButtons from "./RotateButtons";
import CubeSide from "./CubeSide";

import { CubeContainer, CubeWrapper, StaticText } from "./style";

function CubeSection({ topText, confettiState, setTopText }) {
  const { textStyles, focusState } = useSelector(
    ({ textEditorReducer }) => textEditorReducer
  );

  const dispatch = useDispatch();

  return (
    <CubeContainer>
      <CubeWrapper confettiState={confettiState.img}>
        <CubeSide
          textStyles={textStyles}
          focusState={focusState}
          topText={topText}
          setTopText={setTopText}
        />
        <StaticText
          textStyles={textStyles}
          id="buttonClick"
          onClick={openEditor(dispatch, "buttonClick")}
        >
          {!topText ? "Click to type or edit your text" : focusState && topText}
        </StaticText>
      </CubeWrapper>
      <RotateButtons />
    </CubeContainer>
  );
}

export default CubeSection;
