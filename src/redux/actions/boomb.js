import { SET_BOOMB, SET_TOP_TEXT } from "./../constants/boomb";
export const setBoomb = (payload) => ({
  type: SET_BOOMB,
  payload,
});

export const setTopText = (payload) => ({
  type: SET_TOP_TEXT,
  payload,
});
