import React, { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFocus } from "../../../../redux/actions/textEditor";
// import { setEditTextFocus } from "../../../../redux/actions/textEditor";
import { changeTopText, openEditor } from "../../../../utils/functions/boomb";
import { useOnClickOutside } from "../../../../utils/hooks/useOnClickOutside";
import { CubeItem, TopText, CubeSide } from "./style";

export const CubeTop = ({
  topText,
  setTopText,
  textStyles,
  inputRef,
  focusState,
}) => {
  const ref = useRef();
  const dispatch = useDispatch();

  const { currentEditor } = useSelector(
    ({ textEditorReducer }) => textEditorReducer
  );
  useEffect(() => {
    if (!focusState) {
      !currentEditor.state && dispatch(setFocus(false));
    }
  }, [focusState]);
  return (
    <>
      <CubeSide
        id="buttonClickTop"
        onClick={openEditor(dispatch, "buttonClickTop")}
        spinParam="rotateX(90deg)"
      >
        <CubeItem ref={ref} topText={topText}>
          <TopText
            focusState={focusState}
            ref={inputRef}
            textStyles={textStyles}
            onChange={(e) => changeTopText(setTopText, e)}
            type="text"
            value={topText}
            resize="none"
            readOnly={!currentEditor.state}
          />
        </CubeItem>
      </CubeSide>
    </>
  );
};
