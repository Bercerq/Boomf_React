
import { EDIT_TEXT, SET_BOOMB } from './../constants/boomb';
export const setBoomb = (payload) => ({
  type: SET_BOOMB,
  payload,
});

export const editText = (payload) => ({
  type: EDIT_TEXT,
  payload,
});
