import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import useDebounce from "../../../../utils/hooks/useDebounce";
import {useFocus} from "../../../../utils/hooks/useFocus";
import {setUpdateTextData} from "../../../../redux/actions/textData";

import TextDoubleClick from "../../../TextDoubleClick";
import {openEditor} from "../../../../utils/functions/boomb";

const PostcardTextComponent = ({
 enableRotate,
 setEnableRotate,
 buttonflag,
 column,
 activeSizeImage,
 enableWidthText,
 setEnableWidthText
}) => {
  const [inputRef, setInputRef] = useFocus();
  const [textState, setTextState] = useState("");
  const [rotateState, setRotateState] = useState(0);
  const [positionState, setPositionState] = useState(null);

  const [cursorPosition, setCursorPosition] = useState(null);

  const dispatch = useDispatch();
  const {textDataState} = useSelector(
    ({textDataReducer}) => textDataReducer
  );

  const debouncedValue = useDebounce(textState, 500);
  const debouncedRotate = useDebounce(rotateState, 500);
  const debouncedPosition = useDebounce(positionState, 500);

  useEffect(() => {
    openEditor(dispatch, buttonflag)();
  }, [])

  useEffect(() => {
    if (textDataState.focusState) {
      setInputRef();
    }
  }, [textDataState.focusState]);

  useEffect(() => {
    if (textDataState.focusState) {
      dispatch(setUpdateTextData({key: 'value', value: debouncedValue}));
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (rotateState) {
      dispatch(setUpdateTextData({key: 'rotate', value: debouncedRotate}));
    }
  }, [debouncedRotate]);

  useEffect(() => {
    if (positionState) {
      dispatch(setUpdateTextData({key: 'position', value: debouncedPosition}));
    }
  }, [debouncedPosition]);

  useEffect(() => {
    if (textDataState.id) {
      setTextState(textDataState.value);
      setRotateState(textDataState.rotate);
      setPositionState(textDataState.position);
    }
  }, [textDataState.id]);

  return (
    <TextDoubleClick
      textState={textState}
      rotateState={rotateState}
      setRotateState={setRotateState}
      positionState={positionState}
      setPositionState={setPositionState}
      setTextState={setTextState}
      inputRef={inputRef}

      enableRotate={enableRotate}
      setEnableRotate={setEnableRotate}
      enableWidthText={enableWidthText}
      setEnableWidthText={setEnableWidthText}

      cursorPosition={cursorPosition}
      setCursorPosition={setCursorPosition}

      column={column}
      activeSizeImage={activeSizeImage}
    />
  );
};

export default PostcardTextComponent;