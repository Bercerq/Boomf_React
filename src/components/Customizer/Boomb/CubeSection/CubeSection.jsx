import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { openEditor } from "../../../../utils/functions/boomb";

import RotateButtons from "./RotateButtons";
import CubeSide from "./CubeSide";

import { CubeContainer, CubeWrapper, StaticText } from "./style";

function CubeSection({
  topText,
  setCurrPosition,
  currPosition,
  setCurrentImage,
  cubeData,
  confettiState,
  setTopText,
}) {
  const [cubeRotateY, setCubeRotateY] = useState(760);
  const { textStyles, focusState } = useSelector(
    ({ textEditorReducer }) => textEditorReducer
  );
  const dispatch = useDispatch();

  return (
    <CubeContainer>
      <CubeWrapper confettiState={confettiState.img}>
        <CubeSide
          setCubeRotateY={setCubeRotateY}
          cubeRotateY={cubeRotateY}
          textStyles={textStyles}
          focusState={focusState}
          topText={topText}
          setTopText={setTopText}
          cubeData={cubeData}
          setCurrPosition={setCurrPosition}
          setCurrentImage={setCurrentImage}
          currPosition={currPosition}
        />
        <StaticText textStyles={textStyles} onClick={openEditor(dispatch)}>
          {!topText ? "Click to type your text" : focusState && topText}
        </StaticText>
      </CubeWrapper>
      <RotateButtons
        cubeRotateY={cubeRotateY}
        setCubeRotateY={setCubeRotateY}
        setCurrPosition={setCurrPosition}
      />
    </CubeContainer>
  );
}

export default CubeSection;
