import {useEffect} from "react";

import {editImage} from "../../redux/actions/boomb";
import {editText} from "../../redux/actions/textEditor";
import {setUpdateTextData} from "../../redux/actions/textData";

function useCreateEditorValue(flag, debouncedValue, dispatch) {
  useEffect(() => {
    if (flag === "Image") {
      if (debouncedValue) {
        dispatch(editImage(debouncedValue));
      }
    } else {
      dispatch(editText({[flag?.toLowerCase()]: debouncedValue}));
      dispatch(setUpdateTextData({key: 'textStyles', value: {[flag?.toLowerCase()]: debouncedValue}}));
    }
  }, [debouncedValue, dispatch]);
}

export default useCreateEditorValue;
