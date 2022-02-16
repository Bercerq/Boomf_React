import React, { useEffect } from "react";
import { useSelector } from "react-redux";

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
}) {
  const [inputRef, setInputRef] = useFocus();

  const { curCubePosition, boombData } = useSelector(
    ({ boombReducer }) => boombReducer
  );
  useCubePosition({ boombData, setCubeRotateY, curCubePosition });

  useEffect(() => {
    if (focusState) setInputRef();
  }, [focusState]);
  return (
    <CubeBox cubeRotateY={cubeRotateY}>
      <CubeTop
        textStyles={textStyles}
        focusState={focusState}
        topText={topText}
        setTopText={setTopText}
        inputRef={inputRef}
      />
      {boombData?.map((boombData) => (
        <CubePosition
          key={boombData.position}
          curCubePosition={curCubePosition}
          boombData={boombData}
        />
      ))}
    </CubeBox>
  );
}

export default CubeSide;
