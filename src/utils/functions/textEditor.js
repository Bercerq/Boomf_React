import { alignmentIcon, editOptions } from "../constants/TextEditData";

import { setUpdateTextData } from "../../redux/actions/textData";

import Colour from "../../components/TextEditor/Option/Colour";
import Font from "../../components/TextEditor/Option/Font";
import Size from "../../components/TextEditor/Option/Size";

import {
  Option,
  OptionDevice,
  OptionIcon,
  OptionIconDevice,
  OptionsWrapper,
  OptionText,
} from "../../components/TextEditor/style";
import Image from "../../components/TextEditor/Option/Image";
import WhiteButton from "../../components/Buttons/WhiteButton";
import React from "react";
import FontDevice from "../../components/TextEditor/Option/FontDevice";

export const drawEditorContent = (flag, option, setOption, dispatch) =>
  flag && flag !== "Alignment"
    ? drawOption(flag, setOption, option)
    : selectOptions(setOption, option, dispatch);

const selectOptions = (setOption, option, dispatch) => {
  return (
    <OptionsWrapper>
      {editOptions.map(({ icon, text }) => (
        <Option
          onClick={selectEditorOption(text, setOption, option, dispatch)}
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

const selectEditorOption = (text, setOption, option, dispatch) => () => {
  if (text === "Alignment") {
    findAlignment(option, setOption);
  }
  dispatch(
    setUpdateTextData({
      key: "currentEditor",
      value: { flag: text, state: true },
    })
  );
};
const findAlignmentImage = (option) => {
  const image = alignmentIcon.find(({ side }) => side === option);
  return (
    <img
      key="side"
      src={image?.icon || alignmentIcon[0].icon}
      alt={image?.side || "center"}
    />
  );
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
  } else {
    setOption("left");
  }
};

const drawOption = (flag, setOption, option) => {
  switch (flag) {
    case "Font":
      return <Font setOption={setOption} />;
    case "Size":
      return <Size setOption={setOption} />;
    case "Colour":
      return <Colour setOption={setOption} />;
    case "Image":
      return <Image setOption={setOption} option={option}/>;
    default:
      break;
  }
};
export const drawOptionDevice = (flag, option, setOption) => {
  switch (flag) {
    case "Font":
      return <FontDevice option={option} setOption={setOption} />;
    case "Size":
      return <Size option={option} setOption={setOption} sizeDevice={true} />;
    case "Colour":
      return <Colour option={option} setOption={setOption} colourDevice={true} />;
    case "Image":
      return <Image option={option} setOption={setOption} />;
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
      dispatch(
        setUpdateTextData({
          key: "currentEditor",
          value: { flag: "", state: true },
        })
      );
    } else {
      dispatch(
        setUpdateTextData({
          key: "currentEditor",
          value: { flag: "", state: false },
        })
      );
      dispatch(setUpdateTextData({ key: "focusState", value: false }));
    }
    setOption("");

    findSavedStyles(dispatch, textStyles, currentEditor.flag);
  };

const findSavedStyles = (dispatch, textStyles, flag) => {
  if (textStyles[flag]) {
    dispatch(
      setUpdateTextData({
        key: "textStyles",
        value: { [flag]: textStyles[flag] },
      })
    );
  } else {
    dispatch(
      setUpdateTextData({
        key: "textStyles",
        value: { [flag?.toLowerCase()]: "" },
      })
    );
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

export const selectOptionDevice = (
  flag,
  setOption,
  option,
  dispatch,
  currentEditor,
  textStyles
) => {
  return (
    <>
      {editOptions.map(
        ({ icon, text }, idx) =>
          (flag !== text || flag === "Alignment") && (
            <OptionDevice
              onClick={selectEditorOption(text, setOption, option, dispatch)}
              key={"Option" + idx}
            >
              <OptionIconDevice>
                {text === "Alignment" ? (
                  findAlignmentImage(option)
                ) : (
                  <img src={icon} alt={text} />
                )}
              </OptionIconDevice>
            </OptionDevice>
          )
      )}
      <WhiteButton
        color={"#FFFFFF"}
        background={"#2EDBE3"}
        marginDesktop={"10px"}
        handleButtonClick={closeSideBar(
          dispatch,
          currentEditor,
          textStyles,
          setOption
        )}
      >
        Done
      </WhiteButton>
    </>
  );
};
