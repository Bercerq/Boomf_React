import {useEffect} from "react";

import {editImage} from "../../redux/actions/boomb";
import {editText} from "../../redux/actions/textEditor";
import {setUpdateTextData} from "../../redux/actions/textData";
import {setUpdateImageLibrary} from "../../redux/actions/imageLibrary";

function useCreateEditorValue(flag, debouncedValue, dispatch) {
  useEffect(() => {
    if (flag === "Image") {
      if (debouncedValue) {
        dispatch(editImage(debouncedValue));
        // todo cannon
        dispatch(setUpdateImageLibrary({key: 'size', value: debouncedValue}))
      }
    } else {
      dispatch(editText({[flag?.toLowerCase()]: debouncedValue}));
      //todo cannon
      dispatch(setUpdateTextData({key: 'textStyles', value: {[flag?.toLowerCase()]: debouncedValue}}));
    }
  }, [debouncedValue, dispatch]);
}

export default useCreateEditorValue;
