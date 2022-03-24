import React from "react";
import { useSelector } from "react-redux";

import { CubePosition } from "./CubePosition";
import { CubeTop } from "./CubeTop";
import { CubeBox } from "./style";

function CubeSide({ textStyles, editTextRef }) {
  const { curCubePosition, curCubeRotate, boombData } = useSelector(
    ({ boombReducer }) => boombReducer
  );
п  return (
    <CubeBox cubeRotateY={curCubeRotate}>
      <CubeTop textStyles={textStyles} editTextRef={editTextRef} />
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
