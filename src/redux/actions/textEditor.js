import {CURRENT_EDITOR, EDIT_TEXT, FOCUS_STATE, DBL_CLICK_STATE} from "../constants/textEditor";

export const editText = (payload) => ({
  type: EDIT_TEXT,
  payload,
});

export const setCurrentEditor = (payload) => ({
  type: CURRENT_EDITOR,
  payload,
});
export const setFocus = (payload) => ({
  type: FOCUS_STATE,
  payload,
});
export const setDblClick = (payload) => ({
  type: DBL_CLICK_STATE,
  payload,
});