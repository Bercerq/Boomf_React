import React from "react";
import { Slider, SliderContainer, CurrentValue } from "../style";

function Size({ option, setOption }) {
  const setValue = (e) => {
    setOption(e.target.value);
  };
  return (
    <SliderContainer>
      <CurrentValue>{option ? +option : 16}</CurrentValue>
      <Slider
        onChange={setValue}
        type="range"
        min="5"
        max="60"
        value={option ? +option : 16}
      />
    </SliderContainer>
  );
}

export default Size;
