import {
  SET_IMAGE_LIBRARY,
  SET_IMAGE_LIBRARY_DATA,
  SET_ADD_IMAGE_LIBRARY,
  SET_UPDATE_IMAGE_LIBRARY,
  SET_DELETE_IMAGE_LIBRARY,
} from "../constants/imageLibrary";

export const setImageLibrary = (payload) => ({
  type: SET_IMAGE_LIBRARY,
  payload,
});

export const setUpdateImageLibrary = (payload) => ({
  type: SET_UPDATE_IMAGE_LIBRARY,
  payload,
})

export const setImageLibraryData = (payload) => ({
  type: SET_IMAGE_LIBRARY_DATA,
  payload,
});
export const setAddImageLibrary = (payload) => ({
  type: SET_ADD_IMAGE_LIBRARY,
  payload,
});
export const setDeleteImageLibrary = (payload) => ({
  type: SET_DELETE_IMAGE_LIBRARY,
  payload,
});