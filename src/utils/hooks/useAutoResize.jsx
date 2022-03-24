import {useEffect} from 'react';

export const  useAutoResize = ({inputRef, valueText, currentState}) => {
  function onInput() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
    // setAutoResize({width: 'auto', height: this.scrollHeight});
  }

  useEffect(() => {
    if (inputRef && inputRef.current && currentState.value === valueText) {
      inputRef.current.setAttribute("style", "height:" + (inputRef.current.scrollHeight) + "px;overflow-y:hidden;");
      inputRef.current.addEventListener("input", onInput, false);
    }
  }, [inputRef, valueText, currentState.value, currentState.textStyles]);

  return null;
};