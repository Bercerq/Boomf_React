import React from "react";
import { drawEditOptions } from "../../utils/functions/textEditor";
import { TextEditorWrapper, TextEditorContent, OptionsWrapper } from "./style";

function TextEditor({ openTextEditor, setOpenTextEditor }) {
  const closeSideBar = () => {
    setOpenTextEditor(false);
  };

  return (
    <TextEditorWrapper openTextEditor={openTextEditor} onClick={closeSideBar}>
      <TextEditorContent
        openTextEditor={openTextEditor}
        onClick={(e) => e.stopPropagation()}
      >
        <OptionsWrapper>{drawEditOptions()}</OptionsWrapper>
      </TextEditorContent>
    </TextEditorWrapper>
  );
}

export default TextEditor;
