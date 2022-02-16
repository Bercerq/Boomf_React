import {
  CURRENT_CUBE_IMAGE,
  CURRENT_CUBE_POSITION,
  EDIT_IMAGE,
  SEND_BOOMB,
  SET_BOOMB,
  SET_TOP_TEXT,
} from "./../constants/boomb";
export const setBoomb = (payload) => ({
  type: SET_BOOMB,
  payload,
});

export const setTopText = (payload) => ({
  type: SET_TOP_TEXT,
  payload,
});
export const editImage = (payload) => ({
  type: EDIT_IMAGE,
  payload,
});
export const setCurPosition = (payload) => ({
  type: CURRENT_CUBE_POSITION,
  payload,
});
export const setCurImage = (payload) => ({
  type: CURRENT_CUBE_IMAGE,
  payload,
});
export const sendBoomb = (payload) => ({
  type: SEND_BOOMB,
  payload,
});
