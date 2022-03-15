import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentEditor } from "../../../../redux/actions/textEditor";
import { BoxSide, BoxText, PickerItemText } from "./style";

function SelectText() {
  const dispatch = useDispatch();
  const setFocusToTop = () => {
    dispatch(setCurrentEditor({ flag: "", state: true }));
  };
  return (
    <PickerItemText>
      <BoxSide onClick={setFocusToTop} />
      <BoxText>Top</BoxText>
    </PickerItemText>
  );
}

export default SelectText;
