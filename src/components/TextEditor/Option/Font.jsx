import React from "react";
import { font } from "../../../utils/constants/TextEditData";
import { FontItem, FontWrapper } from "../style";

function Font({ option, setOption }) {
  const handleSetFonts = (family) => () => {
    setOption(family);
  };
  return (
    <FontWrapper>
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
    </FontWrapper>
  );
}

export default Font;
