import React from "react";
import { Slider, SliderContainer, CurrentValue } from "../style";

function Size({ option, setOption }) {
  const setValue = (e) => {
    setOption(e.target.value);
  };
  return (
    <SliderContainer>
      <CurrentValue>{option}</CurrentValue>
      <Slider
        onChange={setValue}
        type="range"
        min="5"
        max="60"
        value={+option}
      />
    </SliderContainer>
  );
}

export default Size;
