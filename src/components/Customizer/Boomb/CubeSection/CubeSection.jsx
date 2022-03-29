import React from "react";
import { useDispatch } from "react-redux";

import RotateButtons from "./RotateButtons";
import CubeSide from "./CubeSide";

import { CubeContainer, CubeWrapper } from "./style";

function CubeSection({ textDataState, textData, confettiState, editTextRef }) {
  return (
    <CubeContainer>
      <CubeWrapper
        textDataState={textDataState}
        confettiState={confettiState.img}
      >
        <CubeSide
          textDataState={textDataState}
          textStyles={textData[0].textStyles}
          editTextRef={editTextRef}
        />
        {/* {findStaticText(textData, textDataState, dispatch)} */}
      </CubeWrapper>
      <RotateButtons />
    </CubeContainer>
  );
}

export default CubeSection;
