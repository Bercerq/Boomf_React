import React from "react";
import { changeTopText } from "../../../../utils/functions/boomb";
import { BoxSide, BoxText, PickerItem } from "./style";

function SelectText({ setTopText, topText, inputRef }) {
  return (
    <PickerItem>
      <BoxSide inputRef={inputRef}>
        <textarea
          ref={inputRef}
          maxLength={136}
          onChange={(e) => changeTopText(e, setTopText)}
          type="text"
          value={topText}
          resize="none"
          placeholder="Click to type your text"
        />
      </BoxSide>
      <BoxText>Text</BoxText>
    </PickerItem>
  );
}

export default SelectText;
