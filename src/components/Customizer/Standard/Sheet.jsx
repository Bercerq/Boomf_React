import React from 'react';
import {useSelector} from "react-redux";

import SheetSection from "./SheetSection/SheetSection";

import {SheetBlock, TitleStandard} from "./SheetSection/style";

const Sheet = ({editTextRef}) => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  return (
    <SheetBlock>
      <TitleStandard marginDevice={true}>
        {standardName === "Inside" ? standardName + ' pages' : standardName + ' page'}
      </TitleStandard>
      <SheetSection editTextRef={editTextRef}/>
    </SheetBlock>
  );
};

export default Sheet;