import {
  CURRENT_EDITOR,
  EDIT_TEXT,
  FOCUS_STATE,
  DBL_CLICK_STATE
} from "../constants/textEditor";

const initialState = {
  textStyles: {},
  currentEditor: { state: false, flag: "" },
  focusState: false,
  dblClickState: false
};

const textEditorReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TEXT:
      return {
        ...state,
        textStyles: { ...state.textStyles, ...action.payload },
      };
    case CURRENT_EDITOR:
      return {
        ...state,
        currentEditor: { ...action.payload },
      };
    case FOCUS_STATE:
      return {
        ...state,
        focusState: action.payload,
      };
    case DBL_CLICK_STATE:
      return {
        ...state,
        dblClickState: action.payload
      }
    default:
      return {
        ...state,
      };
  }
};

export default textEditorReducer;
