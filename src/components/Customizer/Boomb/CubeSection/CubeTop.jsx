import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setFocus } from "../../../../redux/actions/textEditor";
import { changeTopText } from "../../../../utils/functions/boomb";
import { useOnClickOutside } from "../../../../utils/hooks/useOnClickOutside";
import { CubeItem, TopText, CubeSide } from "./style";

export const CubeTop = ({
  topText,
  setTopText,
  inputRef,
  focusState,
  textStyles,
  openEditor,
}) => {
  const ref = useRef();
  const dispatch = useDispatch();

  // const { currentEditor } = useSelector(
  //   ({ textEditorReducer }) => textEditorReducer
  // );
  useOnClickOutside(ref, () => dispatch(setFocus(false)));
  return (
    <>
      <CubeSide onClick={openEditor} spinParam="rotateX(90deg)">
        <CubeItem ref={ref} topText={topText}>
          <TopText
            ref={inputRef}
            textStyles={textStyles}
            maxLength={80}
            onChange={(e) => changeTopText(setTopText, e)}
            type="text"
            value={topText}
            resize="none"
            readOnly={!focusState}
          />
        </CubeItem>
      </CubeSide>
    </>
  );
};
