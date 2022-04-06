import {useEffect} from "react";

export const useTextHidden = ({currentState, buttonFlag, activeHooks}) => {
  useEffect(() => {
    const parentBlock = document.getElementById(buttonFlag);
    if(currentState.focusState && activeHooks) {
      parentBlock.style.overflow = 'initial';
    } else if (!currentState.focusState && activeHooks) {
      parentBlock.style.overflow = 'hidden';
    }
  }, [currentState.focusState, buttonFlag]);
};