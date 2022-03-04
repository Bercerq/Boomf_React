import {
  CURRENT_EDITOR,
  EDIT_TEXT,
  FOCUS_STATE,
  DBL_CLICK_STATE,
  EDIT_TEXT_DATA,
  TEXT_STYLES,
  EDIT_TEXT_VALUE,
  EDIT_TEXT_ROTATE,
  EDIT_TEXT_POSITION,
  DELETE_EDIT_TEXT, ADD_EDIT_TEXT
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
export const setEditTextValue = (payload) => ({
  type: EDIT_TEXT_VALUE,
  payload,
});
export const setEditTextRotate = (payload) => ({
  type: EDIT_TEXT_ROTATE,
  payload,
});
export const setEditTextPosition = (payload) => ({
  type: EDIT_TEXT_POSITION,
  payload,
});
export const deleteEditText = (payload) => ({
  type: DELETE_EDIT_TEXT,
  payload,
});
export const addEditText = (payload) => ({
  type: ADD_EDIT_TEXT,
  payload,
});