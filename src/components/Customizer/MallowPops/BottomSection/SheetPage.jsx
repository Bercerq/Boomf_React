import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStandardName } from "../../../../redux/actions/standard";
import { DivSheetContent } from "../../Standard/SheetSection/style";
import { FrontSheetDiv } from "./style";

const SheetPage = () => {
  const dispatch = useDispatch();

  const { standardName } = useSelector(
    ({ standardReducer }) => standardReducer
  );


  const handleSelect = (name) => {
    dispatch(setStandardName(name));
  };

  return (
    <>
      <DivSheetContent>
        <FrontSheetDiv
          activeSheet={standardName === "Card"}
          onClick={() => handleSelect("Card")}
        />
      </DivSheetContent>
      <DivSheetContent>
        <FrontSheetDiv
          onClick={() => handleSelect("AddCart")}
          activeSheet={standardName === "AddCart"}
        />
      </DivSheetContent>
    </>
  );
};

export default SheetPage;
