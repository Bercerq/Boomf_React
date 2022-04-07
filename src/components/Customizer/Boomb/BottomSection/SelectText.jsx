import React from "react";
import { useDispatch } from "react-redux";
import { setCurRotate } from "../../../../redux/actions/boomb";
import { setUpdateTextData } from "../../../../redux/actions/textData";
import { BoxSide, BoxText, PickerItemText } from "./style";

function SelectText() {
  const dispatch = useDispatch();
  const setFocusToTop = () => {
    dispatch(setCurRotate(760));
    dispatch(setUpdateTextData({ key: "focusState", value: true }));
    dispatch(
      setUpdateTextData({
        key: "currentEditor",
        value: { flag: "", state: true },
      })
    );
  };
  return (
    <PickerItemText>
      <BoxSide onClick={setFocusToTop} />
      <BoxText>Top</BoxText>
    </PickerItemText>
  );
}

export default SelectText;
