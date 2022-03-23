import React from 'react';
import {useSelector} from "react-redux";

import {useEditText} from "../../../utils/hooks/useEditText";
import ImageDraggablePos from "./ImageDraggable";

import {ImageRefactoringContent} from "./style";

const ImageDraggable = ({imageKey}) => {
  const {textData, textDataState} = useSelector(
    ({textDataReducer}) => textDataReducer
  );
  const textEditorParams = useEditText({resizeOption: {step: 5, axis: 'both'}, textDataState});

  return (
    <ImageRefactoringContent>
      {textData.map((image, idx) => image.type === 'image' && image.image.key === imageKey && (
        <React.Fragment key={'ImageRefactoringContent' + idx}>
          <ImageDraggablePos
            currentState={image}
            textEditorParams={textEditorParams}
            activeId={textDataState.id === image.id}
          />
        </React.Fragment>
      ))}
    </ImageRefactoringContent>
  );
};

export default ImageDraggable;