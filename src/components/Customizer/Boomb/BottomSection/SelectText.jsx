import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentEditor } from "../../../../redux/actions/textEditor";
import { BoxSide, BoxText, PickerItem, PickerItemText } from "./style";

function SelectText() {
  const dispatch = useDispatch();
  const setFocusToTop = () => {
    dispatch(setCurrentEditor({ flag: "", state: true }));
  };
  return (
    <PickerItemText>
      <BoxSide onClick={setFocusToTop}>
        <div className="BoxNoImage">Click to edit text</div>
      </BoxSide>
      <BoxText>Top</BoxText>
    </PickerItemText>
  );
}

export default SelectText;
