import React, {useEffect, useState} from 'react';
import {PostcardText} from "./style";
import {useSelector} from "react-redux";
import {changeTopText} from "../../../../utils/functions/boomb";
import {useFocus} from "../../../../utils/hooks/useFocus";
import TextDoubleClick from "../../../TextDoubleClick";

const PostcardTextComponent = () => {
  // const [textEditor, setTextEditorState] = useState();

  const [inputRef, setInputRef] = useFocus();
  const [textState, setTextState] = useState("");

  const {
    textStyles,
    focusState,
    dblClickState,
    // textEditorState
  } = useSelector(
    ({textEditorReducer}) => textEditorReducer
  );

  useEffect(() => {
    if (focusState) setInputRef();
  }, [focusState]);

  return (
    <>
      {focusState && (
        <PostcardText
          focusState={focusState}
          ref={inputRef}
          textStyles={textStyles}
          onChange={(e) => changeTopText(setTextState, e)}
          type="text"
          value={textState}
          resize="none"
          readOnly={!focusState}
        />
      )}
        <TextDoubleClick
          textState={textState}
          textStyles={textStyles}
          activeState={dblClickState}
        />
    </>

  );
};

export default PostcardTextComponent;