import React, { useEffect, useState } from "react";

import { CubePosition } from "./CubePosition";
import { CubeTop } from "./CubeTop";
import RotateButtons from "./RotateButtons";

import {
  onCubeDrag,
  onCubeDragEnd,
  onCubeDragStart,
  openEditor,
} from "../../../../utils/functions/boomb";

import { CubeBox, CubeContainer, CubeWrapper, StaticText } from "./style";
import { useCubePosition } from "../../../../utils/hooks/useCubePosition";
import { useDispatch, useSelector } from "react-redux";

function CubeSection({
  topText,
  setCurrPosition,
  currPosition,
  setCurrentImage,
  cubeData,
  setInputFocus,
  inputRef,
  confettiState,
  setTopText,
}) {
  const [cubeRotateY, setCubeRotateY] = useState(760);
  const { textStyles, focusState } = useSelector(
    ({ textEditorReducer }) => textEditorReducer
  );
  const dispatch = useDispatch();
  useCubePosition({ cubeData, setCubeRotateY, currPosition });

  useEffect(() => {
    if (focusState) setInputFocus();
  }, [focusState]);

  return (
    <CubeContainer>
      <CubeWrapper confettiState={confettiState.img}>
        <CubeBox
          onMouseMove={(e) => onCubeDrag(e, setCubeRotateY, cubeRotateY)}
          onMouseDown={onCubeDragStart}
          onMouseUp={onCubeDragEnd()}
          cubeRotateY={cubeRotateY}
        >
          <CubeTop
            textStyles={textStyles}
            focusState={focusState}
            topText={topText}
            setTopText={setTopText}
            inputRef={inputRef}
            openEditor={openEditor(dispatch)}
          />
          {cubeData.map((cubeData) => (
            <CubePosition
              key={cubeData.position}
              setCurrPosition={setCurrPosition}
              setCurrentImage={setCurrentImage}
              cubeData={cubeData}
            />
          ))}
        </CubeBox>
        <StaticText textStyles={textStyles} onClick={openEditor(dispatch)}>
          {!topText ? "Double Click to type your text" : focusState && topText}
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
