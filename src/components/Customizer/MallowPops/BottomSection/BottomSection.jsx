import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStandardName } from "../../../../redux/actions/standard";
import SelectStep from "./SelectStep";
import SheetPage from "./SheetPage";

function BottomSection() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStandardName("AddCart"));
  }, []);

  return (
    <SelectStep>
      <SheetPage />
    </SelectStep>
  );
}

export default BottomSection;
