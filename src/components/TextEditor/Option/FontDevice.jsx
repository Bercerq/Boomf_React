import React from 'react';
import {FontItemDevice, OptionWrapperDevice} from "../style";
import {font} from "../../../utils/constants/TextEditData";
import {useDispatch, useSelector} from "react-redux";
import {setUpdateTextData} from "../../../redux/actions/textData";

const FontDevice = ({option, setOption}) => {
  const dispatch = useDispatch();
  const {textDataState} = useSelector(
    ({textDataReducer}) => textDataReducer
  );

  const handleSetFonts = (family) => () => {
    if (textDataState.currentEditor.flag !== "Font") {
      dispatch(setUpdateTextData({key: "currentEditor", value: {flag: 'Font', state: true}}));
    }
    setOption(family);
  };

  return (
    <OptionWrapperDevice>
      {font.map(({family}) => (
        <FontItemDevice
          key={family}
          option={textDataState.textStyles?.font}
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