import React from "react";
import { font } from "../../../utils/constants/TextEditData";
import { FontItem, OptionWrapper } from "../style";

function Font({ option, setOption }) {
  const handleSetFonts = (family) => () => {
    setOption(family);
  };
  return (
    <OptionWrapper>
      {font.map(({ family }) => (
        <FontItem
          key={family}
          option={option}
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
