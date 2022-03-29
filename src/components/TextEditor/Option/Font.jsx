import React from "react";
import { useSelector } from "react-redux";
import { font } from "../../../utils/constants/TextEditData";
import { FontItem, OptionWrapper } from "../style";

function Font({  setOption }) {
  const { textDataState } = useSelector(
    ({ textDataReducer }) => textDataReducer
  );

  const handleSetFonts = (family) => () => {
    setOption(family);
  };
  return (
    <OptionWrapper>
      {font.map(({ family }) => (
        <FontItem
          key={family}
          option={textDataState.textStyles?.font}
          onClick={handleSetFonts(family)}
          family={family}
        >
          {family}
        </FontItem>
      ))}
    </OptionWrapper>
  );
}

export default Font;
