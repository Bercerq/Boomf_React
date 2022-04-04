import React from "react";
import { useDispatch } from "react-redux";

import { openEditor } from "../../../../utils/functions/boomb";
import TextDraggable from "../../../Draggable/TextDraggable";

import { CubeItem, CubeSide, TextEditorWrapper } from "./style";

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
        <TextEditorWrapper
          id="buttonClickCannon"
          ref={(ref) => (editTextRef.current[1] = ref)}
        >
          <TextDraggable
            buttonFlag="buttonClickCannon"
            activeRebootImage={true}
            column={1}
          />
        </TextEditorWrapper>
      </CubeItem>
    </CubeSide>
  );
};
