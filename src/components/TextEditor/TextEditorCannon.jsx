import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Buttons from "./components/Buttons";
import useDebounce from "../../utils/hooks/useDebounce";
import useCreateEditorValue from "../../utils/hooks/useCreateEditorValue";
import {closeSideBar, drawEditorContent} from "../../utils/functions/textEditor";
import {TextEditorContent, TextEditorWrapper} from "./style";

const TextEditorCannon = () => {
  const [option, setOption] = useState();
  const dispatch = useDispatch();
  const {textDataState} = useSelector(
    ({textDataReducer}) => textDataReducer
  );
  const debouncedValue = useDebounce(option, 500);

  useCreateEditorValue(textDataState.currentEditor.flag, debouncedValue, dispatch);

  useEffect(() => {
    setOption(textDataState.textStyles[textDataState.currentEditor?.flag?.toLowerCase()]);
  }, [textDataState.currentEditor.flag]);

  return (
    <TextEditorWrapper
      currentEditor={textDataState.currentEditor.state}
      onClick={closeSideBar(dispatch, textDataState.currentEditor, textDataState.textStyles, setOption)}
    >
      <TextEditorContent
        currentEditor={textDataState.currentEditor.state}
        onClick={(e) => e.stopPropagation()}
      >
        {drawEditorContent(textDataState.currentEditor.flag, option, setOption, dispatch)}
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

export default TextEditorCannon;