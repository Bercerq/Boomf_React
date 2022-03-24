import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {drawOptionDevice, selectOptionDevice} from "../../../utils/functions/textEditor";
import useCreateEditorValue from "../../../utils/hooks/useCreateEditorValue";

import {DeviceDataType, DeviceTypesStyle, TextEditorDeviceContainer} from "./style";
import useDebounce from "../../../utils/hooks/useDebounce";

const TextEditorDevice = () => {
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

  return (
    <>
      <DeviceTypesStyle currentEditor={textDataState.focusState}>
        {textDataState.focusState && (
          selectOptionDevice(
            textDataState.currentEditor.flag,
            setOption,
            option,
            dispatch,
            textDataState,
            textDataState.textStyles
          ))}
      </DeviceTypesStyle>

      <DeviceDataType currentEditor={textDataState.focusState}>
        {textDataState.focusState && (
          drawOptionDevice(textDataState.currentEditor.flag, option, setOption)
        )}
      </DeviceDataType>

      <TextEditorDeviceContainer
        // ref={(ref) => (editTextRef.current[0] = ref)}
        currentEditor={textDataState.focusState}
      />
    </>
  );
};

export default TextEditorDevice;