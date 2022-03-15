import {alignmentIcon, editOptions} from "../constants/TextEditData";

import {editText, setCurrentEditor, setFocus,} from "../../redux/actions/textEditor";

import {setUpdateTextData} from "../../redux/actions/textData";

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

export const drawEditorContent = (flag, option, setOption, dispatch) =>
  flag && flag !== "Alignment"
    ? drawOption(flag, option, setOption)
    : selectOptions(setOption, option, dispatch);

const selectOptions = (setOption, option, dispatch) => {
  return (
    <OptionsWrapper>
      {editOptions.map(({icon, text}) => (
        <Option
          onClick={selectEditorOption(text, setOption, option, dispatch)}
          key={text}
        >
          <OptionIcon>
            {text === "Alignment" ? (
              findAlignmentImage(option)
            ) : (
              <img src={icon} alt={text}/>
            )}
          </OptionIcon>
          <OptionText>{text}</OptionText>
        </Option>
      ))}
    </OptionsWrapper>
  );
};

const selectEditorOption = (text, setOption, option, dispatch) => () => {
  if (text === "Alignment") {
    findAlignment(option, setOption);
  }
  dispatch(setCurrentEditor({state: true, flag: text}));

  //todo cannon
  dispatch(setUpdateTextData({key: 'currentEditor', value: {flag: text, state: true}}));
};

const findAlignment = (option, setOption) => {
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
    <img src={alignmentIcon[0].icon} alt="center"/>
  ) : (
    alignmentIcon.map(({icon, side}) => {
      if (option === side) {
        return <img key="side" src={icon} alt={side}/>;
      }
    })
  );

const drawOption = (flag, option, setOption) => {
  switch (flag) {
    case "Font":
      return <Font option={option} setOption={setOption}/>;
    case "Size":
      return <Size option={option} setOption={setOption}/>;
    case "Colour":
      return <Colour option={option} setOption={setOption}/>;
    case "Image":
      return <Image option={option} setOption={setOption}/>;
    default:
      break;
  }
};

export const closeSideBar =
  (dispatch, currentEditor, textStyles, setOption) => () => {
    if (
      currentEditor.flag &&
      currentEditor.flag !== "Alignment" &&
      currentEditor.flag !== "Image"
    ) {
      dispatch(setCurrentEditor({flag: "", state: true}));
      // todo cannon
      dispatch(setUpdateTextData({key: 'currentEditor', value: {flag: "", state: true}}));
    } else {
      dispatch(setCurrentEditor({flag: "", state: false}));
      dispatch(setFocus(false));
      // todo cannon
      dispatch(setUpdateTextData({key: 'currentEditor', value: {flag: "", state: false}}));
      dispatch(setUpdateTextData({key: 'focusState', value: false}));
      // dispatch(setUpdateTextData({key: 'dblClickState', value: false}));
    }
    setOption("");

    findSavedStyles(dispatch, textStyles, currentEditor.flag);
  };

const findSavedStyles = (dispatch, textStyles, flag) => {
  if (textStyles[flag]) {
    dispatch(editText({[flag]: textStyles[flag]}));
    // todo cannon
    dispatch(setUpdateTextData({key: 'textStyles', value: {[flag]: textStyles[flag]}}));
  } else {
    dispatch(editText({[flag.toLowerCase()]: ""}));
    // todo cannon
    dispatch(setUpdateTextData({key: 'textStyles', value: {[flag.toLowerCase()]: ""}}));
  }
};

export const findButtonName = (flag) => {
  if (flag) {
    if (flag !== "Alignment" && flag !== "Image") {
      return "Cancel";
    } else {
      return "Close";
    }
  } else {
    return "Close";
  }
};