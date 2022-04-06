import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {drawOptionDevice, selectOptionDevice} from "../../../utils/functions/textEditor";
import useCreateEditorValue from "../../../utils/hooks/useCreateEditorValue";

import {DeviceDataType, DeviceTypesStyle, TextEditorDeviceContainer} from "./style";
import SizeDevice from "../Option/SizeDevice";

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

  return (
    <>
      <DeviceTypesStyle currentEditor={textDataState.currentEditor.state && textDataState.type !== 'image'}>
        {textDataState.focusState && (
          selectOptionDevice(
            textDataState.currentEditor.flag || 'Font',
            setOption,
            option,
            dispatch,
            textDataState,
            textDataState.textStyles
          ))}
      </DeviceTypesStyle>

      <DeviceDataType currentEditor={textDataState.currentEditor.state && textDataState.type !== 'image'}>
        {drawOptionDevice(textDataState.currentEditor.flag || 'Font', option, setOption)}
      </DeviceDataType>

      {textDataState.currentEditor.state && textDataState.type !== 'image' && (
        <SizeDevice
          option={option}
          setOption={setOption}
        />
      )}
      <TextEditorDeviceContainer
        // ref={(ref) => (editTextRef.current[0] = ref)}
        //todo type image
        currentEditor={textDataState.currentEditor.state && textDataState.type !== 'image'}
      />
    </>
  );
};

export default TextEditorDevice;