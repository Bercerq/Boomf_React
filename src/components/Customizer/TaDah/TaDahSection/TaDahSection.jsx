import React from 'react';
import {SheetContentPage} from "../../Standard/SheetSection/style";
import {useSelector} from "react-redux";
import SelectPage from "../../Standard/SheetSection/SelectPage";
import SheetPageTaDah from "./SheetPageTaDah";

const TaDahSection = () => {
  const {standardName} = useSelector(
    ({standardReducer}) => standardReducer
  );

  return (
    <SheetContentPage>

      <SelectPage>
        <SheetPageTaDah />
      </SelectPage>
    </SheetContentPage>
  );
};

export default TaDahSection;