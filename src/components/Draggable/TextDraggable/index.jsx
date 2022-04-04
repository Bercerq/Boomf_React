import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {useFocus} from "../../../utils/hooks/useFocus";
import {useEditText} from "../../../utils/hooks/useEditText";
import {openEditor} from "../../../utils/functions/boomb";
import TextDraggablePos from "./TextDraggable";

const TextDraggable = ({buttonFlag, column, activeSizeImage}) => {
  const [inputRef, setInputRef] = useFocus();
  const {textData, textDataState} = useSelector(
    ({textDataReducer}) => textDataReducer
  );

  const textEditorParams = useEditText({resizeOption: null, textDataState});
  const dispatch = useDispatch();

  useEffect(() => {
    openEditor(dispatch, buttonFlag)();
  }, []);

  useEffect(() => {
    if (textDataState.focusState) {
      setInputRef();
    }
  }, [textDataState.focusState]);

  return textData.map(
    (e, idx) =>
      e.column === column &&
      e.type === "text" && (
        <React.Fragment key={"TextDraggablePos" + idx}>
          <TextDraggablePos
            currentState={e}
            textEditorParams={textEditorParams}
            inputRef={inputRef}
            activeSizeImage={activeSizeImage}

            buttonFlag={buttonFlag}

            textState={
              textDataState.id === e.id ? textEditorParams.textState : e.value
            }
            activeId={textDataState.id === e.id}
          />
        </React.Fragment>
      )
  );
};

export default TextDraggable;
