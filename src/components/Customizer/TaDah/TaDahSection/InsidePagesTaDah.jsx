import React from 'react';

import InsidePages from "../../Standard/SheetSection/InsidePages";
import TextInsidePagesTaDah from "./TextInsidePagesTaDah";

const InsidePagesTaDah = ({editTextRef, standardName}) => {
  return (
    <InsidePages
      editTextRef={editTextRef}
      standardName={standardName}
    >
      <TextInsidePagesTaDah/>
    </InsidePages>
  );
};

export default InsidePagesTaDah;