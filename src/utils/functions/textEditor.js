import {alignmentIcon, editOptions} from "../constants/TextEditData";

import {
  editText,
  setCurrentEditor,
  setEditTextFocus,
  setTextStyle,
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
    } else {
      dispatch(setCurrentEditor({flag: currentEditor.flag, state: false}));
      dispatch(setEditTextFocus(false));
    }
    setOption("");

    findSavedStyles(dispatch, textStyles, currentEditor.flag);
  };

const findSavedStyles = (dispatch, textStyles, flag) => {
  if (textStyles[flag]) {
    // dispatch(editText({[flag]: textStyles[flag]})); // todo bomb style
    dispatch(setTextStyle({[flag]: textStyles[flag]}))
  } else {
    // dispatch(editText({[flag.toLowerCase()]: ""})); // todo bomb style
    dispatch(setTextStyle({[flag.toLowerCase()]: ""}));
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

export const updateStateEditText = (state, key, value) => {
  const textState = {
    ...state.textEditorState,
    [key]: key === 'textStyles' ? {
      ...state.textEditorState.textStyles,
      ...value
    } : value
  }

  return {
    ...state,
    textEditorData: state.textEditorData.map(e => (
      e.id === state.textEditorState.id ? textState : {...e, dblClickState: false}
    )),
    textEditorState: textState,
  }
}

export const addStateEditText = (state, initialState) => {
  const data = state.textEditorData.map(e => ({...e, dblClickState: false}))
  const textState = {
    ...initialState.textEditorState,
    dblClickState: true,
    id: uid()
  }
  if(data.length > 10) {
    data[0] = {...data[0], dblClickState: true}
    return  {
      ...state,
      textEditorData: [...data],
      textEditorState: data[0]
    }
  }
  return {
    ...state,
    textEditorData: [...data, textState],
    textEditorState: textState
  }
}

export const deleteStateEditText = (state, initialState) => {
  const data = state.textEditorData.filter(e => e.id !== state.textEditorState.id);

  if (!data.length) {
    return initialState
  }

  return {
    ...state,
    textEditorData: data,
    textEditorState: data[0]
  }
}

export const uid = () => {
  const array = new Uint32Array(8)
  window.crypto.getRandomValues(array)
  let str = '';
  for (let i = 0; i < array.length; i++) {
    str += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4)
  }
  return str
}