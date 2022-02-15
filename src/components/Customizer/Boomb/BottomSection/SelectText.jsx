import React from "react";
import { useDispatch } from "react-redux";
import {
  setCurrentEditor,
  setFocus,
} from "../../../../redux/actions/textEditor";
import { BoxSide, BoxText, PickerItem } from "./style";

function SelectText() {
  const dispatch = useDispatch();
  const setFocusToTop = () => {
    dispatch(setFocus(true));
    dispatch(setCurrentEditor({ flag: "", state: true }));
  };
  return (
    <PickerItem>
      <BoxSide onClick={setFocusToTop}>
        <div className="BoxNoImage">Click to edit text</div>
      </BoxSide>
      <BoxText>Top</BoxText>
    </PickerItem>
  );
}

export default SelectText;
