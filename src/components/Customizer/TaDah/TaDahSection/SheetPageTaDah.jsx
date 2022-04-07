import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setStandardName} from "../../../../redux/actions/standard";

import {FrontDblSheetTaDah, FrontSheetTaDah} from "./style";
import {
  DivFlex,
  DivSheetContent,
  LineDivStandard,
  TitleNameSheet
} from "../../Standard/SheetSection/style";

const SheetPageTaDah = ({type}) => {
  const dispatch = useDispatch();

  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  const handleSelect = (name) => {
    dispatch(setStandardName(name));
  }

  return (
    <>
      <DivSheetContent
        onClick={() => handleSelect('Front')}
      >
        <FrontSheetTaDah
          type={type}
          activeSheet={standardName === 'Front'}
        />
        <TitleNameSheet>Front</TitleNameSheet>
      </DivSheetContent>
      <DivSheetContent>
        <DivFlex
          onClick={() => handleSelect('Inside')}
          activeSheet={standardName === 'Inside'}
        >
          <FrontDblSheetTaDah type={type}>
            <LineDivStandard zIndexPos={true}/>
          </FrontDblSheetTaDah>
        </DivFlex>
        <TitleNameSheet>Inside pages</TitleNameSheet>
      </DivSheetContent>
    </>
  );
};

export default SheetPageTaDah;