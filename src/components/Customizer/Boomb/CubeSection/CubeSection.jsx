import React, { useEffect, useState } from "react";

import { CubePosition } from "./CubePosition";
import { CubeTop } from "./CubeTop";
import RotateButtons from "./RotateButtons";

import {
  onCubeDrag,
  onCubeDragEnd,
  onCubeDragStart,
} from "../../../../utils/functions/boomb";

import { CubeBox, CubeContainer, CubeWrapper } from "./style";

function CubeSection({
  topText,
  setCurrPosition,
  currPosition,
  setCurrentImage,
  cubeData,
  selectConfetti,
}) {
  const [cubeRotateY, setCubeRotateY] = useState(760);

  useEffect(() => {
    cubeData.map(({ defaultRotate, position }) => {
      if (position === currPosition) {
        setCubeRotateY(defaultRotate);
      }
    });
  }, [currPosition, cubeData]);

  return (
    <CubeContainer>
      <CubeWrapper selectConfetti={selectConfetti}>
        <CubeBox
          onMouseMove={(e) => onCubeDrag(e, setCubeRotateY, cubeRotateY)}
          onMouseDown={onCubeDragStart}
          onMouseUp={onCubeDragEnd()}
          cubeRotateY={cubeRotateY}
        >
          <CubeTop topText={topText} />
          {cubeData.map(({ position, img, rotate, textSideRotate }) => (
            <CubePosition
              key={position}
              setCurrPosition={setCurrPosition}
              setCurrentImage={setCurrentImage}
              position={position}
              img={img}
              rotate={rotate}
              textSideRotate={textSideRotate}
            />
          ))}
        </CubeBox>
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
