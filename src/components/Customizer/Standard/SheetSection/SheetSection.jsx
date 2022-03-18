import React from 'react';
import FontPage from "./FontPage";
import {useSelector} from "react-redux";
import SelectPage from "./SelectPage";
import InsidePages from "./InsidePages";

const SheetSection = ({editTextRef}) => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  return (
    <div>
      {standardName === 'Front' && (
        <FontPage/>
      )}
      {standardName === 'Inside' && (
        <InsidePages editTextRef={editTextRef}/>
      )}
      <SelectPage />
    </div>
  );
};

export default SheetSection;