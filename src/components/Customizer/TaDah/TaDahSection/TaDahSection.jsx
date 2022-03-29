import React from 'react';
import {useSelector} from "react-redux";

import SelectPage from "../../Standard/SheetSection/SelectPage";
import SheetPageTaDah from "./SheetPageTaDah";
import FontPageTaDah from "./FontPageTaDah";
import InsidePagesTaDah from "./InsidePagesTaDah";
import TextInsidePagesTaDah from "./TextInsidePagesTaDah";

import {DivSheets, SheetContentPage} from "../../Standard/SheetSection/style";

const TaDahSection = ({editTextRef}) => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  return (
    <SheetContentPage>
      <DivSheets>
        <FontPageTaDah
          standardName={standardName}
        />
        <InsidePagesTaDah
          standardName={standardName}
          editTextRef={editTextRef}
        >
          <TextInsidePagesTaDah />
        </InsidePagesTaDah>
      </DivSheets>
      <SelectPage>
        <SheetPageTaDah />
      </SelectPage>
    </SheetContentPage>
  );
};

export default TaDahSection;