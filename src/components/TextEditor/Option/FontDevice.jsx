import React from 'react';
import {FontItemDevice, OptionWrapperDevice} from "../style";
import {font} from "../../../utils/constants/TextEditData";

const FontDevice = ({option, setOption}) => {
  const handleSetFonts = (family) => () => {
    setOption(family);
  };
  return (
    <OptionWrapperDevice>
      {font.map(({ family }) => (
        <FontItemDevice
          key={family}
          option={option}
          onClick={handleSetFonts(family)}
          family={family}
        >
          Aa
        </FontItemDevice>
      ))}
    </OptionWrapperDevice>
  );
};

export default FontDevice;