import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentModal } from "../../../../redux/actions/modal";
import { useEditText } from "../../../../utils/hooks/useEditText";
import BlueButton from "../../../Buttons/BlueButton";
import { TextArea } from "../style";
import { setUpdateTextData } from "./../../../../redux/actions/textData";

function Text() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const { textData, textDataState } = useSelector(
    ({ textDataReducer }) => textDataReducer
  );

  const data = textData.find(({ focusState }) => focusState);
  console.log(data);
  const handleSaveChanges = () => {
    dispatch(setUpdateTextData({ key: "value", value }));
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
        defaultValue={data?.value}
        placeholder="Placeholder"
        onChange={handleSetValue}
      />

      <BlueButton handleButtonClick={handleSaveChanges}>Done</BlueButton>
    </div>
  );
}

export default Text;
