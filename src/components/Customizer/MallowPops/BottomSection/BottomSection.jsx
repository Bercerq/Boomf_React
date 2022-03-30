import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStandardName } from "../../../../redux/actions/standard";
import { useResizeDevice } from "../../../../utils/hooks/useResizeDevice";
import SelectStep from "./SelectStep";
import SheetPage from "./SheetPage";

function BottomSection() {
  const dispatch = useDispatch();
  const { mobileDevice } = useResizeDevice({ maxWidth: 1130 });

  useEffect(() => {
    dispatch(setStandardName("AddCart"));
  }, []);

  return (
    <SelectStep mobileDevice={mobileDevice}>
      {mobileDevice && <SheetPage />}
    </SelectStep>
  );
}

export default BottomSection;
