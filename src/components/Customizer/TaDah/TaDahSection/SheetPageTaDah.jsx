import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStandardName} from "../../../../redux/actions/standard";
import {DivFlex, DivSheetContent, LineDivStandard, TitleNameSheet} from "../../Standard/SheetSection/style";
import {FrontDblSheetTaDah} from "./style";

const SheetPageTaDah = () => {
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

        <TitleNameSheet>Front</TitleNameSheet>
      </DivSheetContent>
      <DivSheetContent>
        <DivFlex
          onClick={() => handleSelect('Inside')}
          activeSheet={standardName === 'Inside'}
        >
          {/*<FrontDblSheetTaDah>*/}
            <LineDivStandard zIndexPos={true}/>
          {/*</FrontDblSheetTaDah>*/}

        </DivFlex>
        <TitleNameSheet>Inside pages</TitleNameSheet>
      </DivSheetContent>
    </>
  );
};

export default SheetPageTaDah;