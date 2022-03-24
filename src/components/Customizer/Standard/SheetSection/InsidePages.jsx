import React from 'react';

import TextDraggable from "../../../Draggable/TextDraggable";
import ImageDraggable from "../../../Draggable/ImageDraggable";

import {
  FontPageDiv,
  LineDivStandard,
  SheetDivFlex,
  SheetContainer,
  TextContentStandard
} from "./style";
import {useResizeDevice} from "../../../../utils/hooks/useResizeDevice";
import {useSelector} from "react-redux";

const InsidePages = ({editTextRef}) => {
  const {mobileDevice} = useResizeDevice({maxWidth: 540});
  const {textDataState} = useSelector(({textDataReducer}) => textDataReducer);
  //todo style
  return (
    <div id="buttonClickStandard" ref={ref => editTextRef.current[1] = ref}
         style={textDataState.focusState && mobileDevice ? {zIndex: 4} : {}}>
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
    </div>
  );
};

export default InsidePages;

