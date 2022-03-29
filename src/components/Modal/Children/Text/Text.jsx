import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentModal } from "../../../../redux/actions/modal";
import { setUpdateTextData } from "../../../../redux/actions/textData";

import BlueButton from "../../../Buttons/BlueButton";

import { TextArea } from "../style";

function Text() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { textDataState } = useSelector(
    ({ textDataReducer }) => textDataReducer
  );
  const handleSaveChanges = () => {
    dispatch(setUpdateTextData({ key: "value", value }));
    setValue("");
    dispatch(
      setCurrentModal({
        title: "Text",
        state: false,
      })
    );
  };
  const handleSetValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <TextArea
        defaultValue={textDataState.value || value}
        placeholder="Placeholder"
        onChange={handleSetValue}
      />

      <BlueButton handleButtonClick={handleSaveChanges}>Done</BlueButton>
    </div>
  );
}

export default Text;
