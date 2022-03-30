import React from 'react';
import {useSelector} from "react-redux";

import SelectPage from "../../Standard/SheetSection/SelectPage";
import SheetPageTaDah from "./SheetPageTaDah";
import FontPageTaDah from "./FontPageTaDah";
import TextInsidePagesTaDah from "./TextInsidePagesTaDah";

import {DivSheets, SheetContentPage} from "../../Standard/SheetSection/style";
import InsidePages from "../../Standard/SheetSection/InsidePages";

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
          type={type}
          editTextRef={editTextRef}
          standardName={standardName}
          buttonFlag='buttonClickTaDah'
        >
          <TextInsidePagesTaDah
            buttonFlag='buttonClickTaDah'
            type={type}
          />
        </InsidePages>
      </DivSheets>
      <SelectPage>
        <SheetPageTaDah type={type}/>
      </SelectPage>
    </SheetContentPage>
  );
};

export default TaDahSection;