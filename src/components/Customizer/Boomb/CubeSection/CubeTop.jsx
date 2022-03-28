import React from "react";
import { useDispatch } from "react-redux";

import { openEditor } from "../../../../utils/functions/boomb";
import TextDraggable from "../../../Draggable/TextDraggable";

import { CubeItem, CubeSide } from "./style";

export const CubeTop = ({ topText, editTextRef }) => {
  const dispatch = useDispatch();

  return (
    <CubeSide
      id="buttonClickTop"
      onClick={openEditor(dispatch, "buttonClickTop")}
      spinParam="rotateX(90deg)"
      ref={(ref) => (editTextRef.current[1] = ref)}
    >
      <CubeItem ref={editTextRef} topText={topText}>
        <div
          id="buttonClickCannon"
          ref={(ref) => (editTextRef.current[1] = ref)}
        >
          <TextDraggable buttonFlag="buttonClickCannon" column={1} />
        </div>
      </CubeItem>
    </CubeSide>
  );
};
