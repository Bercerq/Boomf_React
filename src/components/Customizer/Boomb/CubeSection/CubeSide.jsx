import React from "react";
import { useSelector } from "react-redux";

import { CubePosition } from "./CubePosition";
import { CubeTop } from "./CubeTop";
import { CubeBox } from "./style";

function CubeSide({ textDataState, textStyles, editTextRef }) {
  const { curCubePosition, curCubeRotate, boombData } = useSelector(
    ({ boombReducer }) => boombReducer
  );
  return (
    <CubeBox cubeRotateY={curCubeRotate}>
      <CubeTop textStyles={textStyles} editTextRef={editTextRef} />
      {boombData?.map((boombData) => (
        <CubePosition
          textDataState={textDataState}
          key={boombData.position}
          curCubePosition={curCubePosition}
          boombData={boombData}
        />
      ))}
    </CubeBox>
  );
}

export default CubeSide;
