import React from 'react';
import {useSelector} from "react-redux";

import FontPage from "./FontPage";
import SelectPage from "./SelectPage";
import InsidePages from "./InsidePages";

import {DivSheets, SheetContentPage} from "./style";
import SheetPageStandard from "./SheetPageStandard";

const SheetSection = ({editTextRef}) => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  return (
    <SheetContentPage>
      <DivSheets>
        <FontPage
          standardName={standardName}
        />
        <InsidePages
          editTextRef={editTextRef}
          standardName={standardName}
        />
      </DivSheets>
      <SelectPage>
        <SheetPageStandard/>
      </SelectPage>
    </SheetContentPage>
  );
};

export default SheetSection;