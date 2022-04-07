import React from 'react';

import SheetSection from "../Standard/SheetSection/SheetSection";

import {SheetBlock} from "../Standard/SheetSection/style";
import {TitleTaDah} from "./TaDahSection/style";

const TaDahSheet = ({editTextRef, standardName, type}) => {
  return (
    <SheetBlock>
      <TitleTaDah titleDevice='desktop'>
        {standardName === "Inside" ? standardName + ' pages' : standardName + ' page'}
      </TitleTaDah>
      <SheetSection editTextRef={editTextRef} type={type}/>
    </SheetBlock>
  );
};

export default TaDahSheet;