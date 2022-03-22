import {
  SET_ACTIVE_TEXT_DATA,
  SET_DATA_TEXT,
  SET_ADD_TEXT_DATA,
  SET_UPDATE_TEXT_DATA,
  SET_DELETE_TEXT_DATA,
  SET_ADD_IMAGE_DATA
} from '../constants/textData';

export const setActionTextData = (payload) => ({
  type: SET_ACTIVE_TEXT_DATA,
  payload,
});
export const setDataText = (payload) => ({
  type: SET_DATA_TEXT,
  payload,
});
export const setAddTextData = (payload) => ({
  type: SET_ADD_TEXT_DATA,
  payload,
});
export const setAddImageData = (payload) => ({
  type: SET_ADD_IMAGE_DATA,
  payload,
});
export const setUpdateTextData = (payload) => ({
  type: SET_UPDATE_TEXT_DATA,
  payload,
});
export const setDeleteTextData = (payload) => ({
  type: SET_DELETE_TEXT_DATA,
  payload,
});