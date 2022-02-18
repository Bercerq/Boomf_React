import { alignmentIcon, editOptions } from "../constants/TextEditData";

import {
  editText,
  setCurrentEditor,
  setFocus,
} from "../../redux/actions/textEditor";

import Colour from "../../components/TextEditor/Option/Colour";
import Font from "../../components/TextEditor/Option/Font";
import Size from "../../components/TextEditor/Option/Size";

import {
  Option,
  OptionIcon,
  OptionsWrapper,
  OptionText,
} from "../../components/TextEditor/style";
import Image from "../../components/TextEditor/Option/Image";

export const selectOptions = (selectEditor, setOption, option) => {
  return (
    <OptionsWrapper>
      {editOptions.map(({ icon, text }) => (
        <Option
          onClick={selectOption(text, selectEditor, setOption, option)}
          key={text}
        >
          <OptionIcon>
            {text === "Alignment" ? (
              findAlignmentImage(option)
            ) : (
              <img src={icon} alt={text} />
            )}
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

const findAlignmentImage = (option) =>
  !option ? (
    <img src={alignmentIcon[0].icon} alt="center" />
  ) : (
    alignmentIcon.map(({ icon, side }) => {
      if (option === side) {
        return <img key="side" src={icon} alt={side} />;
      }
    })
  );

export const drawOption = (flag, option, setOption) => {
  switch (flag) {
    case "Font":
      return <Font option={option} setOption={setOption} />;
    case "Size":
      return <Size option={option} setOption={setOption} />;
    case "Colour":
      return <Colour option={option} setOption={setOption} />;
    case "Image":
      return <Image option={option} setOption={setOption} />;
    default:
      break;
  }
};

export const closeSideBar =
  (dispatch, currentEditor, setOption, textStyles) => () => {
    if (
      currentEditor.flag &&
      currentEditor.flag !== "Alignment" &&
      currentEditor.flag !== "Image"
    ) {
      dispatch(setCurrentEditor({ flag: "", state: true }));
    } else {
      dispatch(setCurrentEditor({ flag: currentEditor.flag, state: false }));
      dispatch(setFocus(false));
    }
    setOption("");

    findSavedStyles(dispatch, textStyles, currentEditor.flag);
  };

const findSavedStyles = (dispatch, textStyles, flag) => {
  if (textStyles[flag]) {
    dispatch(editText({ [flag]: textStyles[flag] }));
  } else {
    dispatch(editText({ [flag.toLowerCase()]: "" }));
  }
};

export const findButtonName = (flag) => {
  if (flag) {
    if (flag !== "Alignment" && flag !== "Image") {
      return "Cancel";
    }
  } else {
    return "Close";
  }
};
