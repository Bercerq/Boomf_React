import React from 'react';

import TaDahSection from "./TaDahSection/TaDahSection";

import {SheetBlock} from "../Standard/SheetSection/style";
import {TitleTaDah} from "./TaDahSection/style";

const TaDahSheet = ({editTextRef, standardName, type}) => {
  return (
    <>
      <SheetBlock>
        <TitleTaDah titleDevice='desktop'>
          {standardName} Page
        </TitleTaDah>
        <TaDahSection editTextRef={editTextRef} type={type}/>
      </SheetBlock>
    </>
  );
};

export default TaDahSheet;