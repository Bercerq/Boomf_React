import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editText, setCurrentEditor } from "../../redux/actions/textEditor";
import {
  closeSideBar,
  drawOption,
  selectOptions,
} from "../../utils/functions/textEditor";
import useDebounce from "../../utils/hooks/useDebounce";
import WhiteButton from "../Buttons/WhiteButton";
import { TextEditorWrapper, TextEditorContent, ButtonWrapper } from "./style";

function TextEditor() {
  const [option, setOption] = useState();

  const dispatch = useDispatch();

  const { textStyles, currentEditor } = useSelector(
    ({ textEditorReducer }) => textEditorReducer
  );

  const debouncedValue = useDebounce(option, 500);

  const submitChanges = () => {
    dispatch(setCurrentEditor({ flag: "", state: true }));
  };

  const selectEditor = (editor) => {
    dispatch(setCurrentEditor(editor));
  };

  useEffect(() => {
    dispatch(editText({ [currentEditor.flag.toLowerCase()]: debouncedValue }));
  }, [debouncedValue, dispatch]);

  useEffect(() => {
    setOption(textStyles[currentEditor?.flag.toLowerCase()]);
  }, [currentEditor.flag]);

  return (
    <TextEditorWrapper
      currentEditor={currentEditor.state}
      onClick={closeSideBar(dispatch, currentEditor, setOption)}
    >
      <TextEditorContent
        currentEditor={currentEditor.state}
        onClick={(e) => e.stopPropagation()}
      >
        {currentEditor.flag
          ? drawOption(currentEditor.flag, option, setOption)
          : selectOptions(selectEditor, setOption)}
        <ButtonWrapper>
          <div>
            <WhiteButton
              color="#222222"
              backgroun="#ffffff"
              handleButtonClick={closeSideBar(
                dispatch,
                currentEditor,
                setOption
              )}
            >
              {currentEditor.flag ? "Cancel" : "Close"}
            </WhiteButton>
          </div>
          {option && (
            <div>
              <WhiteButton
                color="#FFFFFF"
                background="#2EDBE3"
                handleButtonClick={submitChanges}
              >
                Done
              </WhiteButton>
            </div>
          )}
        </ButtonWrapper>
      </TextEditorContent>
    </TextEditorWrapper>
  );
}

export default TextEditor;
