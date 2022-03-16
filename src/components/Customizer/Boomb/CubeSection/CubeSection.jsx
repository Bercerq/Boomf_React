import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { findStaticText } from "../../../../utils/functions/boomb";

import RotateButtons from "./RotateButtons";
import CubeSide from "./CubeSide";

import { CubeContainer, CubeWrapper } from "./style";

function CubeSection({ confettiState, editTextRef }) {
  const { textData, textDataState } = useSelector(
    ({ textDataReducer }) => textDataReducer
  );
  const dispatch = useDispatch();

  return (
    <CubeContainer>
      <CubeWrapper confettiState={confettiState.img}>
        <CubeSide
          textStyles={textData[0].textStyles}
          editTextRef={editTextRef}
        />
        {findStaticText(textData, textDataState, dispatch)}
      </CubeWrapper>
      <RotateButtons />
    </CubeContainer>
  );
}

export default CubeSection;
