import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setBoxPosition } from "../../../../utils/functions/boomb";

import { BoxImage, BoxSide, BoxText, PickerItem } from "./style";

const SelectImage = () => {
  const dispatch = useDispatch();
  const { curCubePosition, boombData } = useSelector(
    ({ boombReducer }) => boombReducer
  );

  return boombData?.map(({ position, img, defaultRotate, sideName }) => (
    <React.Fragment key={position}>
      <PickerItem onClick={setBoxPosition(dispatch, position, defaultRotate)}>
        <BoxSide
          img={img.img || img.url}
          curCubePosition={curCubePosition}
          position={position}
        >
          <BoxImage src={img.img || img.url} alt={`image ${position}`} />
        </BoxSide>
        <BoxText>Image - {sideName}</BoxText>
      </PickerItem>
    </React.Fragment>
  ));
};

export default SelectImage;
