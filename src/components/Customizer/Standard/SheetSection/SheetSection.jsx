import React from 'react';
import {useSelector} from "react-redux";

import FontPage from "./FontPage";
import SelectPage from "./SelectPage";
import InsidePages from "./InsidePages";

import {SheetContentPage} from "./style";

const SheetSection = ({editTextRef}) => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  return (
    <SheetContentPage>
      <div style={{display: 'flex'}}>
        {/*{standardName === 'Front' && (*/}
          <FontPage standardName={standardName}/>
        {/*)}*/}
        {/*{standardName === 'Inside' && (*/}
          <InsidePages
            editTextRef={editTextRef}
            standardName={standardName}
          />
        {/*)} */}
      </div>
      <SelectPage />
    </SheetContentPage>
  );
};

export default SheetSection;