import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addBoombToCart } from "../../../utils/functions/boomb";

import BottomSection from "./BottomSection/BottomSection";
import CubeSection from "./CubeSection/CubeSection";

import { SideContent } from "./CubeSection/style";
import useUpdateCube from "../../../utils/hooks/useUpdateCube";

function Cube({ editTextRef }) {
  const dispatch = useDispatch();

  const { editCrop, curCubePosition, boombData, curCubeRotate } = useSelector(
    ({ boombReducer }) => boombReducer
  );
  const { curCubeImage } = useSelector(({ sidebarReducer }) => sidebarReducer);

  const { confettiState } = useSelector(
    ({ confettiReducer }) => confettiReducer
  );

  const { textData, textDataState } = useSelector(
    ({ textDataReducer }) => textDataReducer
  );

  useUpdateCube(curCubePosition, curCubeImage, boombData, editCrop);
  return (
    <>
      <SideContent>
        <CubeSection
          textDataState={textDataState}
          textData={textData}
          confettiState={confettiState}
          editTextRef={editTextRef}
        />
        <BottomSection
          handleButtonClick={addBoombToCart(
            boombData,
            dispatch,
            confettiState,
            textData,
            curCubeRotate
          )}
        />
      </SideContent>
    </>
  );
}

export default Cube;
