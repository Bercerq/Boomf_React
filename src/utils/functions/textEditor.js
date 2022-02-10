import { editOptions } from "../constants/TextEditData";

import Alignment from "../../components/TextEditor/Option/Alignment";
import Colour from "../../components/TextEditor/Option/Colour";
import Font from "../../components/TextEditor/Option/Font";
import Size from "../../components/TextEditor/Option/Size";

import {
  Option,
  OptionIcon,
  OptionsWrapper,
  OptionText,
} from "../../components/TextEditor/style";

export const selectOptions = (setOpenTextEditor, setOption) => {
  return (
    <OptionsWrapper>
      {editOptions.map(({ icon, text }) => (
        <Option
          onClick={selectOption(text, setOpenTextEditor, setOption)}
          key={text}
        >
          <OptionIcon>
            <img src={icon} alt={text} />
          </OptionIcon>
          <OptionText>{text}</OptionText>
        </Option>
      ))}
    </OptionsWrapper>
  );
};

const selectOption = (text, setOpenTextEditor, setOption) => () => {
  setOpenTextEditor({ state: true, flag: text });
  setOption("");
};

export const drawOption = (flag, option, setOption) => {
  switch (flag) {
    case "Font":
      return <Font option={option} setOption={setOption} />;
    case "Size":
      return <Size option={option} setOption={setOption} />;
    case "Colour":
      return <Colour option={option} setOption={setOption} />;
    case "Aligment":
      return <Alignment option={option} setOption={setOption} />;
    default:
      break;
  }
};
