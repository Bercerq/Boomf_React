import React from 'react';
import {useSelector} from "react-redux";

import {useResizeDevice} from "../../../../utils/hooks/useResizeDevice";

import {
  FontPageDiv,
  SheetDivFlex,
  DivStandardInside,
  SheetContainer
} from "./style";

const InsidePages = ({editTextRef, standardName, children}) => {
  const {mobileDevice} = useResizeDevice({maxWidth: 540});
  const {textDataState} = useSelector(
    ({textDataReducer}) => textDataReducer
  );

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
            {children}
          </SheetContainer>
        </FontPageDiv>
      </SheetDivFlex>
    </DivStandardInside>
  );
};

export default InsidePages;

