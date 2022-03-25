import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Buttons from "./components/Buttons";
import useCreateEditorValue from "../../utils/hooks/useCreateEditorValue";

import {
  closeSideBar,
  drawEditorContent,
} from "../../utils/functions/textEditor";

import {TextEditorContent, TextEditorWrapper} from "./style";
import useDebounce from "../../utils/hooks/useDebounce";

const TextEditorDesktop = ({editTextRef}) => {
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

  const debouncedSelect = useDebounce(textDataState.textStyles, 200);

  useEffect(() => {
    if(debouncedSelect) {
      setOption(debouncedSelect[textDataState.currentEditor?.flag?.toLowerCase()]);
    }
  }, [debouncedSelect]);


  useEffect(() => {
    const handleClick = (event) => {
      if (editTextRef.current && !(editTextRef.current[0].contains(event.target) || editTextRef.current[1].contains(event.target))) {
        closeSideBar(dispatch, textDataState.currentEditor, textDataState.textStyles, setOption)()
      }
    }

    if (textDataState.focusState) {
      window.addEventListener("click", handleClick, true);
    }
    return () => {
      window.removeEventListener("click", handleClick, true);
    }
  }, [textDataState.focusState]);

  return (
    <TextEditorWrapper
      ref={(ref) => (editTextRef.current[0] = ref)}
      currentEditor={textDataState.focusState && textDataState.type !== 'image'}
    >
      <TextEditorContent currentEditor={textDataState.focusState}>
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

export default TextEditorDesktop;
