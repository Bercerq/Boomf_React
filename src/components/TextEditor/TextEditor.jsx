import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Buttons from "./components/Buttons";
import useCreateEditorValue from "../../utils/hooks/useCreateEditorValue";
import {
  closeSideBar,
  drawEditorContent,
} from "../../utils/functions/textEditor";
import {TextEditorContent, TextEditorWrapper} from "./style";

const TextEditor = ({editTextRef}) => {
  const [option, setOption] = useState();
  const dispatch = useDispatch();

  const {textDataState} = useSelector(
    ({textDataReducer}) => textDataReducer
  );
  useCreateEditorValue(
    textDataState.currentEditor.flag,
    option,
    dispatch
  );

  useEffect(() => {
    setOption(
      textDataState.textStyles[textDataState.currentEditor?.flag?.toLowerCase()]
    );
  }, [textDataState.textStyles]);


  useEffect(() => {
    const handleClick = (event) => {
      if (editTextRef.current && !(editTextRef.current[0].contains(event.target) || editTextRef.current[1].contains(event.target))) {
        closeSideBar(dispatch, textDataState.currentEditor, textDataState.textStyles, setOption)()
      }
    }

    if (textDataState.currentEditor.state) {
      window.addEventListener("click", handleClick, true);
    }
    return () => {
      window.removeEventListener("click", handleClick, true);
    }
  }, [textDataState.currentEditor.state]);

  return (
    <TextEditorWrapper
      ref={(ref) => (editTextRef.current[0] = ref)}
      currentEditor={textDataState.currentEditor.state}
    >
      <TextEditorContent currentEditor={textDataState.currentEditor.state}>
        {drawEditorContent(
          textDataState.currentEditor.flag,
          option,
          setOption,
          dispatch
        )}
        <Buttons
          currentEditor={textDataState.currentEditor}
          textStyles={textDataState.textStyles}
          option={option}
          setOption={setOption}
        />
      </TextEditorContent>
    </TextEditorWrapper>
  );
};

export default TextEditor;
