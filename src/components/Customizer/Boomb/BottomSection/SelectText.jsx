import React from "react";
import { useDispatch } from "react-redux";
import { setUpdateTextData } from "../../../../redux/actions/textData";
import { BoxSide, BoxText, PickerItemText } from "./style";

function SelectText() {
  const dispatch = useDispatch();
  const setFocusToTop = () => {
    dispatch(setUpdateTextData({key: 'currentEditor', value: {flag: "", state: true}}));
  };
  return (
    <PickerItemText>
      <BoxSide onClick={setFocusToTop} />
      <BoxText>Top</BoxText>
    </PickerItemText>
  );
}

export default SelectText;
