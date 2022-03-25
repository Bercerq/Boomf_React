import {useEffect} from 'react';

export const useAutoResize = ({inputRef, valueText, currentState, textEditorParams}) => {
  function onInput() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
    // setAutoResize({width: 'auto', height: this.scrollHeight});
  }

  useEffect(() => {
    if (inputRef && inputRef.current && currentState.value === valueText) {
      inputRef.current.setAttribute("style", "height: auto;overflow-y:hidden;");
      inputRef.current.setAttribute("style", "height:" + (inputRef.current.scrollHeight) + "px;overflow-y:hidden;");
      inputRef.current.addEventListener("input", onInput, false);

      return () => inputRef?.current?.removeEventListener("input", onInput, false);
    }
  }, [inputRef, valueText, currentState.value, currentState.textStyles, textEditorParams.sizeState]);

  return null;
};