import React from 'react';
import {useSelector} from "react-redux";

import SelectPage from "../../Standard/SheetSection/SelectPage";
import SheetPageTaDah from "./SheetPageTaDah";
import FontPageTaDah from "./FontPageTaDah";
import TextInsidePagesTaDah from "./TextInsidePagesTaDah";
import InsidePages from "../../Standard/SheetSection/InsidePages";

import {DivSheets, SheetContentPage} from "../../Standard/SheetSection/style";

const TaDahSection = ({editTextRef, type}) => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  return (
    <SheetContentPage>
      <DivSheets>
        <FontPageTaDah
          standardName={standardName}
          type={type}
        />
        <InsidePages
          buttonFlag='buttonClickTaDah'
          editTextRef={editTextRef}
          standardName={standardName}
          type={type}
        >
          <TextInsidePagesTaDah buttonFlag='buttonClickTaDah'/>
        </InsidePages>
      </DivSheets>
      <SelectPage>
        <SheetPageTaDah type={type}/>
      </SelectPage>
    </SheetContentPage>
  );
};

export default TaDahSection;