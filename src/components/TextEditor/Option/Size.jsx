import React from "react";
import { useSelector } from "react-redux";
import { Slider, SliderContainer, CurrentValue } from "../style";

function Size({ option, setOption }) {
  const { editText } = useSelector(({ boomb }) => boomb);
  console.log(editText.size);
  const setValue = (e) => {
    setOption(e.target.value);
  };

  return (
    <SliderContainer>
      <CurrentValue>{option}</CurrentValue>
      <Slider
        onChange={setValue}
        type="range"
        min="12"
        max="36"
        defaultValue={+editText.size}
      />
    </SliderContainer>
  );
}

export default Size;
