import React from 'react';
import {useSelector} from "react-redux";

import {useResizeDevice} from "../../../../utils/hooks/useResizeDevice";

import {
  FontPageDiv,
  SheetDivFlex,
  DivStandardInside,
  SheetContainer
} from "./style";
import TextContentInsidePages from "./TextContentInsidePages";

const InsidePages = ({editTextRef, standardName, buttonFlag, children, type}) => {
  const {mobileDevice} = useResizeDevice({maxWidth: 540});
  const {textDataState} = useSelector(
    ({textDataReducer}) => textDataReducer
  );
  return (
    <DivStandardInside
      id={buttonFlag}
      ref={ref => editTextRef.current[1] = ref}
      focusState={textDataState.focusState && mobileDevice}
      standardName={standardName === 'Inside'}
    >
      <SheetDivFlex>
        <FontPageDiv>
          <SheetContainer type={type} focusState={textDataState.focusState}>
           <TextContentInsidePages buttonFlag={buttonFlag}/>
          </SheetContainer>
        </FontPageDiv>
      </SheetDivFlex>
    </DivStandardInside>
  );
};

export default InsidePages;