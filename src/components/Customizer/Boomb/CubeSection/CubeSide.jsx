import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useFocus } from "../../../../utils/hooks/useFocus";

import { CubePosition } from "./CubePosition";
import { CubeTop } from "./CubeTop";
import { CubeBox } from "./style";

function CubeSide({ textStyles, focusState, topText, setTopText }) {
  const [inputRef, setInputRef] = useFocus();

  const { curCubePosition, curCubeRotate, boombData } = useSelector(
    ({ boombReducer }) => boombReducer
  );

  useEffect(() => {
    if (focusState) setInputRef();
  }, [focusState]);
  return (
    <CubeBox cubeRotateY={curCubeRotate}>
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
