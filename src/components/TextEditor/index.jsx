import React from 'react';
import {useResizeDevice} from "../../utils/hooks/useResizeDevice";
import TextEditorDevice from "./TextEditorDevice";
import TextEditorDesktop from "./TextEditor";

const TextEditor = ({editTextRef}) => {
  const {mobileDevice} = useResizeDevice({maxWidth: 540});

  return mobileDevice ? (
    <TextEditorDevice/>
  ) : (
    <TextEditorDesktop editTextRef={editTextRef}/>
  )
};

export default TextEditor;