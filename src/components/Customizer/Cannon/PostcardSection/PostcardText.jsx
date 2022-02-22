import React, {useEffect, useState} from 'react';
import {PostcardText, TextContentBlock} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {changeTopText, openEditor} from "../../../../utils/functions/boomb";
import {useFocus} from "../../../../utils/hooks/useFocus";

const PostcardTextComponent = () => {
  const [inputRef, setInputRef] = useFocus();
  const [textState, setTextState] = useState("");

  const {textStyles, focusState} = useSelector(
    ({textEditorReducer}) => textEditorReducer
  );

  useEffect(() => {
    if (focusState) setInputRef();
  }, [focusState]);

  const dispatch = useDispatch();
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
      <TextContentBlock
        textStyles={textStyles}
        id="buttonClickCannon"
        onClick={openEditor(dispatch, "buttonClickCannon")}
      >
        {!textState ? (
          "Double Click to type your text"
        ) : (textState)}
      </TextContentBlock>
    </>

  );
};

export default PostcardTextComponent;