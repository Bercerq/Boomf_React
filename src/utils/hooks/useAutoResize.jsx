import {useEffect} from 'react';

export const useAutoResize = ({inputRef, valueText}) => {
  function onInput() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
    // setAutoResize({width: 'auto', height: this.scrollHeight});
  }

  useEffect(() => {
    if(inputRef && inputRef.current) {
      inputRef.current.setAttribute("style", "height:" + (inputRef.current.scrollHeight) + "px;overflow-y:hidden;");
      inputRef.current.addEventListener("input", onInput, false);
    }
  }, [inputRef, valueText]);

  return null;
};