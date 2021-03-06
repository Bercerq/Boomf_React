import React from "react";
import { useDispatch } from "react-redux";

import {
  closeSideBar,
  findButtonName,
} from "../../../utils/functions/textEditor";

import WhiteButton from "../../Buttons/WhiteButton";

import { ButtonWrapper } from "../style";
import { setUpdateTextData } from "../../../redux/actions/textData";

function Buttons({ currentEditor, textStyles, option, setOption }) {
  const dispatch = useDispatch();

  const submitChanges = () => {
    setOption("");
    if (currentEditor.flag === "Image") {
      dispatch(setUpdateTextData({key: 'currentEditor', value: {flag: "", state: false}}));
    } else if(currentEditor.flag === "Alignment") {
      dispatch(setUpdateTextData({key: 'currentEditor', value: {flag: "", state: false}}));
      dispatch(setUpdateTextData({key: 'focusState', value: {flag: "", state: false}}));
    } else {
      dispatch(setUpdateTextData({key: 'currentEditor', value: {flag: "", state: true}}));
    }
  };

  return (
    <ButtonWrapper>
      <div>
        <WhiteButton
          color="#222222"
          background="#ffffff"
          handleButtonClick={closeSideBar(
            dispatch,
            currentEditor,
            textStyles,
            setOption
          )}
        >
          {findButtonName(currentEditor.flag)}
        </WhiteButton>
      </div>
      {option && currentEditor.flag && (
        <div>
          <WhiteButton
            color="#FFFFFF"
            background="#2EDBE3"
            handleButtonClick={submitChanges}
          >
            Done
          </WhiteButton>
        </div>
      )}
    </ButtonWrapper>
  );
}

export default Buttons;
