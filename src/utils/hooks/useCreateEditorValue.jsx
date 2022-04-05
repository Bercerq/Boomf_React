import { useEffect } from "react";

import { setUpdateTextData } from "../../redux/actions/textData";
import { setUpdateImageLibrary } from "../../redux/actions/imageLibrary";
import { editImage } from "../../redux/actions/boomb";

function useCreateEditorValue(flag, debouncedValue, dispatch) {
  useEffect(() => {
    if (flag === "Image") {
      dispatch(editImage({ key: "size", value: debouncedValue }));
      dispatch(setUpdateImageLibrary({key: 'size', value: debouncedValue}));
    } else {
      dispatch(
        setUpdateTextData({
          key: "textStyles",
          value: { [flag?.toLowerCase()]: debouncedValue },
        })
      );
    }
  }, [debouncedValue, dispatch]);
}

export default useCreateEditorValue;
