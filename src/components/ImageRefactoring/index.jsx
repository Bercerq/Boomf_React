import React from 'react';
import {useSelector} from "react-redux";

import DraggableImage from "./DraggableImage";

import {ImageRefactoringContent} from "./style";
import {useEditText} from "../../utils/hooks/useEditText";

const ImageRefactoring = ({imageKey}) => {
  const {textData, textDataState} = useSelector(
    ({textDataReducer}) => textDataReducer
  );
  const textEditorParams = useEditText({resizeOption: {step: 5, axis: 'both'}, textDataState});

  return (
    <ImageRefactoringContent>
      {textData.map((image, idx) => image.type === 'image' && image.image.key === imageKey && (
        <React.Fragment key={'ImageRefactoringContent' + idx}>
          <DraggableImage
            currentState={image}
            textEditorParams={textEditorParams}
            activeId={textDataState.id === image.id}
          />
        </React.Fragment>
      ))}
    </ImageRefactoringContent>
  );
};

export default ImageRefactoring;