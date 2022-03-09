import React from 'react';
import FontPage from "./FontPage";
import {useSelector} from "react-redux";
import SelectPage from "./SelectPage";
import InsidePages from "./InsidePages";

const SheetSection = () => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  return (
    <div>
      {standardName === 'Front' && (
        <FontPage/>
      )}
      {standardName === 'Inside' && (
        <InsidePages />
      )}
      <SelectPage />
    </div>
  );
};

export default SheetSection;