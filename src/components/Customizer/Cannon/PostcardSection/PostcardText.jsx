import React, {useEffect, useState} from 'react';
import {PostcardText} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {changeTopText} from "../../../../utils/functions/boomb";
import {useFocus} from "../../../../utils/hooks/useFocus";
import TextDoubleClick from "../../../TextDoubleClick";
import useDebounce from "../../../../utils/hooks/useDebounce";
import {setEditTextPosition, setEditTextRotate, setEditTextValue} from "../../../../redux/actions/textEditor";

const PostcardTextComponent = () => {
  const [inputRef, setInputRef] = useFocus();
  const [textState, setTextState] = useState("");
  const [rotateState, setRotateState] = useState(0);
  const [positionState, setPositionState] = useState({ x:0, y:0 });

  const dispatch = useDispatch();
  const {textEditorState} = useSelector(
    ({textEditorReducer}) => textEditorReducer
  );

  const debouncedValue = useDebounce(textState, 500);
  const debouncedRotate = useDebounce(rotateState, 500);
  const debouncedPosition = useDebounce(positionState, 500);

  useEffect(() => {
    if (textEditorState.focusState) setInputRef();
  }, [textEditorState.focusState]);

  useEffect(() => {
    dispatch(setEditTextValue(debouncedValue));
  }, [debouncedValue]);

  useEffect(() => {
    dispatch(setEditTextRotate(debouncedRotate));
  }, [debouncedRotate]);

  useEffect(() => {
    dispatch(setEditTextPosition(debouncedPosition));
  }, [debouncedPosition]);

  useEffect(() => {
    setTextState(textEditorState.value);
    setRotateState(textEditorState.rotate);
    setPositionState(textEditorState.position);
  }, [textEditorState.id]);

  return (
    <>
      {textEditorState.focusState && (
        <PostcardText
          focusState={textEditorState.focusState}
          ref={inputRef}
          textStyles={textEditorState.textStyles}
          onChange={(e) => changeTopText(setTextState, e)}
          type="text"
          value={textState}
          defaultValue={textEditorState.value}
          resize="none"
          readOnly={!textEditorState.focusState}
        />
      )}
      <TextDoubleClick
        textState={textState}
        rotateState={rotateState}
        setRotateState={setRotateState}
        positionState={positionState}
        setPositionState={setPositionState}
      />
    </>

  );
};

export default PostcardTextComponent;