import React from 'react';
import {useSelector} from "react-redux";

import {useResizeDevice} from "../../../../utils/hooks/useResizeDevice";

import TextDraggable from "../../../Draggable/TextDraggable";
import ImageDraggable from "../../../Draggable/ImageDraggable";

import {
  FontPageDiv,
  LineDivStandard,
  SheetDivFlex,
  SheetContainer,
  TextContentStandard, DivStandardInside
} from "./style";

const InsidePages = ({editTextRef, standardName}) => {
  const {mobileDevice} = useResizeDevice({maxWidth: 540});
  const {textDataState} = useSelector(({textDataReducer}) => textDataReducer);

  return (
    <DivStandardInside
      id="buttonClickStandard"
      ref={ref => editTextRef.current[1] = ref}
      focusState={textDataState.focusState && mobileDevice}
      standardName={standardName === 'Inside'}
    >
      <SheetDivFlex>
        <FontPageDiv>
          <SheetContainer>
            <TextContentStandard>
              <TextDraggable
                buttonFlag='buttonClickStandard'
                activeSizeImage={true}
                column={1}
              />
              <ImageDraggable imageKey={'Inside'}/>
            </TextContentStandard>
            <LineDivStandard/>
            <TextContentStandard>
              <TextDraggable
                buttonFlag='buttonClickStandard'
                activeSizeImage={true}
                column={2}
              />
            </TextContentStandard>
          </SheetContainer>
        </FontPageDiv>
      </SheetDivFlex>
    </DivStandardInside>
  );
};

export default InsidePages;

