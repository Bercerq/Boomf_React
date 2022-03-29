import React from "react";
import { useResizeDevice } from "../../utils/hooks/useResizeDevice";
import TextEditorDevice from "./TextEditorDevice";
import TextEditorDesktop from "./TextEditor";
import { useSelector } from "react-redux";

const TextEditor = ({ editTextRef }) => {
  const { mobileDevice } = useResizeDevice({ maxWidth: 540 });

  const { textDataState } = useSelector(
    ({ textDataReducer }) => textDataReducer
  );

  return mobileDevice && textDataState.currentEditor.flag !== "Image" ? (
    <TextEditorDevice />
  ) : (
    <TextEditorDesktop editTextRef={editTextRef} />
  );
};

export default TextEditor;
