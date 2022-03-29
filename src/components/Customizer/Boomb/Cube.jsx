import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleClickAddToCart } from "../../../utils/functions/boomb";

import BottomSection from "./BottomSection/BottomSection";
import CubeSection from "./CubeSection/CubeSection";

import { SideContent } from "./CubeSection/style";
import useUpdateCube from "../../../utils/hooks/useUpdateCube";

function Cube({ editTextRef }) {
  const dispatch = useDispatch();

  const { editCrop, curCubePosition, boombData } = useSelector(
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
          handleButtonClick={handleClickAddToCart(
            boombData,
            dispatch,
            confettiState,
            textData
          )}
        />
      </SideContent>
    </>
  );
}

export default Cube;
