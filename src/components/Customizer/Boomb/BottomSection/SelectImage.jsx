import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { findBoxSide, setBoxPosition } from "../../../../utils/functions/boomb";

import { BoxImage, BoxSide, BoxText, PickerItem } from "./style";

const SelectImage = () => {
  const dispatch = useDispatch();
  const { curCubePosition, boombData } = useSelector(
    ({ boombReducer }) => boombReducer
  );

  return boombData?.map(({ position, img, defaultRotate }) => (
    <React.Fragment key={position}>
      <PickerItem onClick={setBoxPosition(dispatch, position, defaultRotate)}>
        <BoxSide
          img={img}
          curCubePosition={curCubePosition}
          position={position}
        >
          {img ? (
            <BoxImage src={img} alt={`image ${position}`} />
          ) : (
            <div className="BoxNoImage"></div>
          )}
        </BoxSide>
        <BoxText>Image - {findBoxSide(position)}</BoxText>
      </PickerItem>
    </React.Fragment>
  ));
};

export default SelectImage;
