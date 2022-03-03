import {
  CURRENT_EDITOR,
  EDIT_TEXT,
  FOCUS_STATE,
  DBL_CLICK_STATE,
  EDIT_TEXT_DATA,
  TEXT_STYLES
} from "../constants/textEditor";

export const editText = (payload) => ({
  type: EDIT_TEXT,
  payload,
});

export const setCurrentEditor = (payload) => ({
  type: CURRENT_EDITOR,
  payload,
});
export const setEditTextFocus = (payload) => ({
  type: FOCUS_STATE,
  payload,
});
export const setEditTextDblClick = (payload) => ({
  type: DBL_CLICK_STATE,
  payload,
});

export const setTextStyle = (payload) => ({
  type: TEXT_STYLES,
  payload,
});
export const setEditTextData = (payload) => ({
  type: EDIT_TEXT_DATA,
  payload,
});
