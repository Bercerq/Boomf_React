import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editText } from "../../redux/actions/boomb";
import { drawOption, selectOptions } from "../../utils/functions/textEditor";
import WhiteButton from "../Buttons/WhiteButton";
import { TextEditorWrapper, TextEditorContent, ButtonWrapper } from "./style";

function TextEditor({ openTextEditor, setOpenTextEditor }) {
  const [option, setOption] = useState("");
  const dispatch = useDispatch();
  const closeSideBar = () => {
    if (openTextEditor.flag) {
      setOpenTextEditor({ flag: "", state: true });
    } else {
      setOpenTextEditor({ flag: "", state: false });
    }
    setOption("");
  };

  const submitChanges = () => {
    dispatch(editText({ [openTextEditor.flag.toLowerCase()]: option }));
    setOpenTextEditor({ flag: "", state: true });
  };

  return (
    <TextEditorWrapper
      openTextEditor={openTextEditor.state}
      onClick={closeSideBar}
    >
      <TextEditorContent
        openTextEditor={openTextEditor.state}
        onClick={(e) => e.stopPropagation()}
      >
        {openTextEditor.flag
          ? drawOption(openTextEditor.flag, option, setOption)
          : selectOptions(setOpenTextEditor, setOption)}
        <ButtonWrapper>
          <div>
            <WhiteButton
              color="#222222"
              backgroun="#ffffff"
              handleButtonClick={closeSideBar}
            >
              {openTextEditor.flag ? "Cancel" : "Close"}
            </WhiteButton>
          </div>
          {option && (
            <div>
              <WhiteButton
                color="#FFFFFF"
                background="#2EDBE3"
                handleButtonClick={submitChanges}
              >
                Done
              </WhiteButton>
            </div>
          )}
        </ButtonWrapper>
      </TextEditorContent>
    </TextEditorWrapper>
  );
}

export default TextEditor;
