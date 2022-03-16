import {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";

import {useResize} from "./useResize";
import {useRotate} from "./useRotate";
import useDebounce from "./useDebounce";

import {setUpdateTextData} from "../../redux/actions/textData";

export const useEditText = ({resizeOption, textDataState}) => {
  const [textState, setText] = useState("");
  const [positionState, setPosition] = useState(null);
  const [autoResizeState, setAutoResize] = useState({width: 'auto', height: 'auto'});

  const refResize = useRef();
  const refRotate = useRef();

  const {initResize, sizeState} = useResize(refResize, resizeOption || {step: 5, axis: 'horizontal'});
  const {initRotate, rotateState, setRotateState} = useRotate(refRotate, '', textDataState.rotate);

  const debouncedValue = useDebounce(textState, 500);
  const debouncedPosition = useDebounce(positionState, 100);
  const debouncedRotate = useDebounce(rotateState, 500);
  const debouncedSize = useDebounce(sizeState, 500);
  const debouncedAuthSize = useDebounce(autoResizeState, 500)

  const setTextState = (event) => {
    if(event) {
      setText(event.target.value);
    }
  }

  const setAutoResizeState = (size) => {
    if(size) {
      setAutoResize(size)
    }
  }

  useEffect(() => {
    if (rotateState) {
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
    console.log(debouncedSize, 'debouncedSize')
  }, [debouncedSize])

  useEffect(() => {
    console.log(debouncedAuthSize, 'debouncedAuthSize')
  }, [debouncedAuthSize])

  useEffect(() => {
    if (textDataState.id) {
      setText(textDataState.value);
      setPosition(textDataState.position);
      setRotateState(textDataState.rotate);
    }
  }, [textDataState.id]);

  const dispatch = useDispatch();
  return {
    positionState,
    setPosition,
    textState,
    setTextState,
    autoResizeState,
    setAutoResizeState,
    refRotate,
    refResize,
    initResize,
    initRotate,
    rotateState,
    sizeState
  }
};