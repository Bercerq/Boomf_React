import React from "react";
import { useSelector } from "react-redux";
import { Slider, SliderContainer, CurrentValue } from "../style";

function Size({ setOption, sizeDevice }) {
  const { textDataState } = useSelector(
    ({ textDataReducer }) => textDataReducer
  );

  const setValue = (e) => {
    setOption(e.target.value);
  };
  return (
    <SliderContainer sizeDevice={sizeDevice}>
      <CurrentValue>{+textDataState.textStyles?.size || 16}</CurrentValue>
      <Slider
        onChange={setValue}
        type="range"
        min="5"
        max="60"
        value={+textDataState.textStyles?.size || 16}
      />
    </SliderContainer>
  );
}

export default Size;
