import React, { useState } from "react";

import { CubePosition } from "./CubePosition";
import { CubeTop } from "./CubeTop";
import RotateButtons from "./RotateButtons";

import {
  onCubeDrag,
  onCubeDragEnd,
  onCubeDragStart,
} from "../../../../utils/functions/boomb";

import { CubeBox, CubeContainer, CubeWrapper } from "./style";
import { useCubePosition } from "../../../../utils/hooks/useCubePosition";

function CubeSection({
  topText,
  setCurrPosition,
  currPosition,
  setCurrentImage,
  cubeData,
  selectConfetti,
  setInputFocus,
}) {
  const [cubeRotateY, setCubeRotateY] = useState(760);

  useCubePosition({ cubeData, setCubeRotateY, currPosition });

  return (
    <CubeContainer>
      <CubeWrapper selectConfetti={selectConfetti}>
        <CubeBox
          onMouseMove={(e) => onCubeDrag(e, setCubeRotateY, cubeRotateY)}
          onMouseDown={onCubeDragStart}
          onMouseUp={onCubeDragEnd()}
          cubeRotateY={cubeRotateY}
        >
          <CubeTop setInputFocus={setInputFocus} topText={topText} />
          {cubeData.map(({ position, img, rotate }) => (
            <CubePosition
              key={position}
              setCurrPosition={setCurrPosition}
              setCurrentImage={setCurrentImage}
              position={position}
              img={img}
              rotate={rotate}
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
