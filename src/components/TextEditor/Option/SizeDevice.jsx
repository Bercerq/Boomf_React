import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setUpdateTextData} from "../../../redux/actions/textData";

import {
  SliderContainerDevice,
  TriangleDevice,
  SliderDevice
} from "../style";

const SizeDevice = ({setOption}) => {
  const dispatch = useDispatch();
  const {textDataState} = useSelector(
    ({textDataReducer}) => textDataReducer
  );

  const setValue = (e) => {
    if(textDataState.currentEditor.flag !== "Size") {
      dispatch(setUpdateTextData({key: "currentEditor", value: { flag: 'Size', state: true }}));
    }

    setOption(e.target.value);
  };

  return (
    <SliderContainerDevice sizeDevice={true}>
      <SliderDevice
        onChange={setValue}
        type="range"
        min="5"
        max="60"
        value={textDataState.textStyles.size || 16}
      />
      <TriangleDevice/>
    </SliderContainerDevice>
  );
}

export default SizeDevice;