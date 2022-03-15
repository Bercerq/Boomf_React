import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import DraggableText from "./Draggable";
import {useEditText} from "../../utils/hooks/useEditText";
import {useFocus} from "../../utils/hooks/useFocus";
import {openEditor} from "../../utils/functions/boomb";

const TextDoubleClick = ({buttonflag, column, activeSizeImage}) => {
  const [inputRef, setInputRef] = useFocus();
  const {textData, textDataState} = useSelector(({textDataReducer}) => textDataReducer);
  const textEditorParams = useEditText({resizeOption: null, textDataState});

  useEffect(() => {
    openEditor(dispatch, buttonflag)();
  }, []);

  useEffect(() => {
    if (textDataState.focusState) {
      setInputRef();
    }
  }, [textDataState.focusState]);

  const dispatch = useDispatch();
  return textData.map((e, idx) => e.column === column && (
    <React.Fragment key={'DraggableText' + idx}>
      <DraggableText
        currentState={e}
        textEditorParams={textEditorParams}
        inputRef={inputRef}
        activeSizeImage={activeSizeImage}
        textState={textDataState.id === e.id ? textEditorParams.textState : e.value}
        activeId={textDataState.id === e.id}
      />
    </React.Fragment>
  ))
};

export default TextDoubleClick;