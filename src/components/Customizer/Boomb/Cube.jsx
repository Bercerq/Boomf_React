import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleClickAddToCart } from "../../../utils/functions/boomb";

import BottomSection from "./BottomSection/BottomSection";
import CubeSection from "./CubeSection/CubeSection";


import { SideContent } from "./CubeSection/style";
import useUpdateCube from "../../../utils/hooks/useUpdateCube";


function Cube({ editTextRef }) {
  const dispatch = useDispatch();
  const [localBoombData, setLocalBoombData] = useState();

  const { editCrop, curCubePosition, curCubeRotate, boombData } = useSelector(
    ({ boombReducer }) => boombReducer
  );
  const { curCubeImage } = useSelector(({ sidebarReducer }) => sidebarReducer);

  const { confettiState } = useSelector(
    ({ confettiReducer }) => confettiReducer
  );

  const { textData, textDataState } = useSelector(
    ({ textDataReducer }) => textDataReducer
  );

  useEffect(() => {
    setLocalBoombData(JSON.parse(localStorage.getItem("boomf-boomb-creator")));
  }, []);
  useUpdateCube(
    curCubePosition,
    curCubeImage,
    boombData,
    localBoombData?.boombData,
    editCrop
  );

  // useEffect(() => {
  //   localStorage.setItem(
  //     "boomf-boomb-creator",
  //     JSON.stringify({
  //       boombData,
  //       image: confettiState.img,
  //       curCubeRotate,
  //       textData,
  //       selectedTop: textDataState.focusState,
  //     })
  //   );
  // }, [
  //   curCubeImage,
  //   confettiState,
  //   curCubeRotate,
  //   textData,
  //   textDataState.focusState,
  // ]);

  return (
    <>
      <SideContent>
        <CubeSection confettiState={confettiState} editTextRef={editTextRef} />
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
