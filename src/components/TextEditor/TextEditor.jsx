import React, {useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
  closeSideBar,
  drawEditorContent,
} from "../../utils/functions/textEditor";

import useCreateEditorValue from "../../utils/hooks/useCreateEditorValue";
import useDebounce from "../../utils/hooks/useDebounce";

import Buttons from "./components/Buttons";

import {TextEditorWrapper, TextEditorContent} from "./style";

function TextEditor() {
  const [option, setOption] = useState();
  const dispatch = useDispatch();
  const {textEditorState} = useSelector(
    ({textEditorReducer}) => textEditorReducer
  );
  const debouncedValue = useDebounce(option, 500);

  useCreateEditorValue(textEditorState.currentEditor.flag, debouncedValue, dispatch);

  useEffect(() => {
    setOption(textEditorState.textStyles[textEditorState.currentEditor.flag.toLowerCase()]);
  }, [textEditorState.currentEditor.flag]);

  return (
    <TextEditorWrapper
      currentEditor={textEditorState.currentEditor.state}
      onClick={closeSideBar(dispatch, textEditorState.currentEditor, textEditorState.textStyles, setOption)}
    >
      <TextEditorContent
        currentEditor={textEditorState.currentEditor.state}
        onClick={(e) => e.stopPropagation()}
      >
        {drawEditorContent(textEditorState.currentEditor.flag, option, setOption, dispatch)}
        <Buttons
          currentEditor={textEditorState.currentEditor}
          textStyles={textEditorState.textStyles}
          option={option}
          setOption={setOption}
        />
      </TextEditorContent>
    </TextEditorWrapper>
  );
}

export default TextEditor;
