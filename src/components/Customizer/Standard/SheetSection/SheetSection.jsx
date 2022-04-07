import React from 'react';
import {useSelector} from "react-redux";

import InsidePages from "./InsidePages";
import SelectPage from "./SelectPage";
import FrontPage from "./FrontPage";

import {DivSheets, SheetContentPage} from "./style";

const SheetSection = ({editTextRef, type}) => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  return (
    <SheetContentPage>
      <DivSheets>
        <FrontPage
          standardName={standardName}
          type={type}
        />
        <InsidePages
          buttonFlag='buttonClickTaDah'
          editTextRef={editTextRef}
          standardName={standardName}
          type={type}
        />
      </DivSheets>
      <SelectPage type={type}/>
    </SheetContentPage>
  );
};

export default SheetSection;