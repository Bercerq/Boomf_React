import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setStandardName} from "../../../../redux/actions/standard";

import {
  DivFlex,
  DivSheetContent,
  FrontDblSheet,
  FrontSheetDiv,
  LineDivStandard,
  TitleNameSheet
} from "./style";

const SheetPageStandard = () => {
  const dispatch = useDispatch();

  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  const handleSelect = (name) => {
    dispatch(setStandardName(name));
  }

  return (
    <>
      <DivSheetContent>
        <FrontSheetDiv
          activeSheet={standardName === 'Front'}
          onClick={() => handleSelect('Front')}
        />
        <TitleNameSheet>Front</TitleNameSheet>
      </DivSheetContent>
      <DivSheetContent>
        <DivFlex
          onClick={() => handleSelect('Inside')}
          activeSheet={standardName === 'Inside'}
        >
          <FrontDblSheet>
            <LineDivStandard zIndexPos={true}/>
          </FrontDblSheet>
        </DivFlex>
        <TitleNameSheet>Inside pages</TitleNameSheet>
      </DivSheetContent>
    </>
  );
};

export default SheetPageStandard;