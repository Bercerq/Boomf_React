import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  closeSideBar,
  drawEditorContent,
} from "../../utils/functions/textEditor";

import useCreateEditorValue from "../../utils/hooks/useCreateEditorValue";
import useDebounce from "../../utils/hooks/useDebounce";

import Buttons from "./components/Buttons";

import { TextEditorWrapper, TextEditorContent } from "./style";

function TextEditor() {
  const [option, setOption] = useState();
  const dispatch = useDispatch();
  const { textStyles, currentEditor } = useSelector(
    ({ textEditorReducer }) => textEditorReducer
  );
  const debouncedValue = useDebounce(option, 500);

  useCreateEditorValue(currentEditor.flag, debouncedValue, dispatch);

  useEffect(() => {
    setOption(textStyles[currentEditor?.flag.toLowerCase()]);
  }, [currentEditor.flag]);

  return (
    <TextEditorWrapper
      currentEditor={currentEditor.state}
      onClick={closeSideBar(dispatch, currentEditor, textStyles, setOption)}
    >
      <TextEditorContent
        currentEditor={currentEditor.state}
        onClick={(e) => e.stopPropagation()}
      >
        {drawEditorContent(currentEditor.flag, option, setOption, dispatch)}
        <Buttons
          currentEditor={currentEditor}
          textStyles={textStyles}
          option={option}
          setOption={setOption}
        />
      </TextEditorContent>
    </TextEditorWrapper>
  );
}

export default TextEditor;