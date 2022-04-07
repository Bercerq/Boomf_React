import React from "react";
import { useDispatch } from "react-redux";

import { openEditor } from "../../../../utils/functions/boomb";
import { useResizeDevice } from "../../../../utils/hooks/useResizeDevice";
import TextDraggable from "../../../Draggable/TextDraggable";

import { CubeItem, CubeSide, TextEditorWrapper } from "./style";

export const CubeTop = ({ topText, textStyles, editTextRef }) => {
  const dispatch = useDispatch();
  const { mobileDevice } = useResizeDevice({ maxWidth: 1130 });

  const currentId = mobileDevice
    ? "buttonClickTopMobile"
    : "buttonClickDesktop";
  return (
    <CubeSide
      id={currentId}
      onClick={openEditor(dispatch, currentId)}
      spinParam="rotateX(90deg)"
      ref={(ref) => (editTextRef.current[1] = ref)}
    >
      <CubeItem ref={editTextRef} topText={topText}>
        <TextEditorWrapper
          textStyles={textStyles}
          height={"100%"}
          width={"100%"}
          id={currentId}
          ref={(ref) => (editTextRef.current[1] = ref)}
        >
          <TextDraggable
            buttonFlag={currentId}
            activeRebootImage={true}
            column={1}
          />
        </TextEditorWrapper>
      </CubeItem>
    </CubeSide>
  );
};
