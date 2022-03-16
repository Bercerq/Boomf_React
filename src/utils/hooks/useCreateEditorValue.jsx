import {useEffect} from "react";

import {setUpdateTextData} from "../../redux/actions/textData";
import {setUpdateImageLibrary} from "../../redux/actions/imageLibrary";

function useCreateEditorValue(flag, debouncedValue, dispatch) {
  useEffect(() => {
    if (flag === "Image") {
      if (debouncedValue) {
        dispatch(setUpdateImageLibrary({key: 'size', value: debouncedValue}))
      }
    } else {
      dispatch(setUpdateTextData({key: 'textStyles', value: {[flag?.toLowerCase()]: debouncedValue}}));
    }
  }, [debouncedValue, dispatch]);
}

export default useCreateEditorValue;
