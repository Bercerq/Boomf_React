import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import useDebounce from "../../../../utils/hooks/useDebounce";
import {changeTopText} from "../../../../utils/functions/boomb";
import {useFocus} from "../../../../utils/hooks/useFocus";
import {setUpdateTextData} from "../../../../redux/actions/textData";

import TextDoubleClick from "../../../TextDoubleClick";
import {PostcardText} from "./style";

const PostcardTextComponent = () => {
  const [inputRef, setInputRef] = useFocus();
  const [textState, setTextState] = useState("");
  const [rotateState, setRotateState] = useState(0);
  const [positionState, setPositionState] = useState({ x:0, y:0 });

  const dispatch = useDispatch();
  const {textDataState} = useSelector(
    ({textDataReducer}) => textDataReducer
  );

  const debouncedValue = useDebounce(textState, 500);
  const debouncedRotate = useDebounce(rotateState, 500);
  const debouncedPosition = useDebounce(positionState, 500);

  useEffect(() => {
    if (textDataState.focusState) setInputRef();
  }, [textDataState.focusState]);

  useEffect(() => {
    dispatch(setUpdateTextData({key: 'value', value: debouncedValue}));
  }, [debouncedValue]);

  useEffect(() => {
    dispatch(setUpdateTextData({key: 'rotate', value: debouncedRotate}));
  }, [debouncedRotate]);

  useEffect(() => {
    dispatch(setUpdateTextData({key: 'position', value: debouncedPosition}));
  }, [debouncedPosition]);

  useEffect(() => {
    setTextState(textDataState.value);
    setRotateState(textDataState.rotate);
    setPositionState(textDataState.position);
  }, [textDataState.id]);

  return (
    <>
      {textDataState.focusState && (
        <PostcardText
          focusState={textDataState.focusState}
          ref={inputRef}
          textStyles={textDataState.textStyles}
          onChange={(e) => changeTopText(setTextState, e)}
          type="text"
          value={textState}
          defaultValue={textDataState.value}
          resize="none"
          readOnly={!textDataState.focusState}
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