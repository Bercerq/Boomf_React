import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import useDebounce from "../../../../utils/hooks/useDebounce";
import {useFocus} from "../../../../utils/hooks/useFocus";
import {setUpdateTextData} from "../../../../redux/actions/textData";

import TextDoubleClick from "../../../TextDoubleClick";
import {openEditor} from "../../../../utils/functions/boomb";
import {useResize} from "../../../../utils/hooks/useResize";
import useRotate from "../../../../utils/hooks/useRotate";

const PostcardTextComponent = ({
 buttonflag,
 column,
 activeSizeImage,
}) => {
  const [inputRef, setInputRef] = useFocus();
  const refResize = useRef();
  const refRotate = useRef();

  const [textState, setTextState] = useState("");
  const [positionState, setPositionState] = useState(null);


  const dispatch = useDispatch();
  const {textDataState} = useSelector(
    ({textDataReducer}) => textDataReducer
  );

  const {initResize, size} = useResize(refResize, {step: 5, axis: 'horizontal'});
  const {initRotate, rotate} = useRotate(refRotate, '', textDataState.rotate);

  const debouncedValue = useDebounce(textState, 500);
  const debouncedPosition = useDebounce(positionState, 500);
  const debouncedRotate = useDebounce(rotate, 500);
  const debouncedSize = useDebounce(size, 500);

  useEffect(() => {
    openEditor(dispatch, buttonflag)();
  }, []);

  useEffect(() => {
    if (rotate) {
      console.log(rotate, 'rotate')
      dispatch(setUpdateTextData({key: 'rotate', value: debouncedRotate}));
    }
  }, [debouncedRotate]);

  useEffect(() => {
    if (textDataState.focusState) {
      dispatch(setUpdateTextData({key: 'value', value: debouncedValue}));
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (positionState) {
      dispatch(setUpdateTextData({key: 'position', value: debouncedPosition}));
    }
  }, [debouncedPosition]);


  useEffect(() => {
    if (textDataState.focusState) {
      setInputRef();
    }
  }, [textDataState.focusState]);

  useEffect(() => {
    if (textDataState.id) {
      setTextState(textDataState.value);
      setPositionState(textDataState.position);
    }
  }, [textDataState.id]);

  return (
    <TextDoubleClick
      textState={textState}
      positionState={positionState}
      setPositionState={setPositionState}
      setTextState={setTextState}
      inputRef={inputRef}
      column={column}
      activeSizeImage={activeSizeImage}
      refResize={refResize}
      refRotate={refRotate}
      initResize={initResize}
      initRotate={initRotate}
      rotate={rotate}
    />
  );
};

export default PostcardTextComponent;