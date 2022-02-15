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
import { editText, setCurrentEditor } from "../../redux/actions/textEditor";

export const selectOptions = (selectEditor, setOption, option) => {
  return (
    <OptionsWrapper>
      {editOptions.map(({ icon, text }) => (
        <Option
          onClick={selectOption(text, selectEditor, setOption, option)}
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

const selectOption = (text, selectEditor, setOption, option) => () => {
  if (text === "Alignment") {
    findSide(option, setOption);
  }
  selectEditor({ state: true, flag: text });
};

const findSide = (option, setOption) => {
  if (!option) {
    setOption("left");
  } else if (option === "left") {
    setOption("center");
  } else if (option === "center") {
    setOption("right");
  } else if (option === "right") {
    setOption("left");
  }
};

export const drawOption = (flag, option, setOption) => {
  switch (flag) {
    case "Font":
      return <Font option={option} setOption={setOption} />;
    case "Size":
      return <Size option={option} setOption={setOption} />;
    case "Colour":
      return <Colour option={option} setOption={setOption} />;

    default:
      break;
  }
};

export const closeSideBar = (dispatch, currentEditor, setOption) => () => {
  if (currentEditor.flag) {
    dispatch(setCurrentEditor({ flag: "", state: true }));
  } else {
    dispatch(setCurrentEditor({ flag: "", state: false }));
  }
  setOption("");

  if (currentEditor.flag) {
    dispatch(editText({ [currentEditor.flag]: "" }));
  }
};
