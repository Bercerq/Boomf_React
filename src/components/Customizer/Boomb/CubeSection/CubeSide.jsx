import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onCubeDrag,
  onCubeDragEnd,
  onCubeDragStart,
  openEditor,
} from "../../../../utils/functions/boomb";

import { useCubePosition } from "../../../../utils/hooks/useCubePosition";
import { useFocus } from "../../../../utils/hooks/useFocus";

import { CubePosition } from "./CubePosition";
import { CubeTop } from "./CubeTop";
import { CubeBox } from "./style";

function CubeSide({
  setCubeRotateY,
  cubeRotateY,
  textStyles,
  focusState,
  topText,
  setTopText,
  cubeData,
  setCurrentImage,
  currPosition,
  setCurrPosition,
}) {
  const dispatch = useDispatch();
  const [inputRef, setInputRef] = useFocus();

  useCubePosition({ cubeData, setCubeRotateY, currPosition });

  useEffect(() => {
    if (focusState) setInputRef();
  }, [focusState]);

  return (
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
          currPosition={currPosition}
          cubeData={cubeData}
        />
      ))}
    </CubeBox>
  );
}

export default CubeSide;
