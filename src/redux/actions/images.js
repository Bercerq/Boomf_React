import {
  FILTER_IMAGES,
  GET_BOOMF_LIBRARY_CATEGORIES,
  GET_BOOMF_LIBRARY_IMAGES,
  GET_USER_IMAGES,
  SET_IMAGES,
  SET_IMAGES_CATEGORIES,
  SET_PRODUCT_TYPE,
  SET_USER_IMAGES,
  UPLOAD_IMAGE,
} from "../constants/images";

export const fetchUploadImage = (payload) => ({
  type: UPLOAD_IMAGE,
  payload,
});

export const getBoomfCategories = (payload) => ({
  type: GET_BOOMF_LIBRARY_CATEGORIES,
  payload,
});

export const setCategoriesImages = (payload) => ({
  type: SET_IMAGES_CATEGORIES,
  payload,
});

export const getBoomfImages = (payload) => ({
  type: GET_BOOMF_LIBRARY_IMAGES,
  payload,
});
export const setImages = (payload) => ({
  type: SET_IMAGES,
  payload,
});

export const setProductType = (payload) => ({
  type: SET_PRODUCT_TYPE,
  payload,
});

export const getUserImages = (payload) => ({
  type: GET_USER_IMAGES,
  payload,
});
export const searchImage = (payload) => ({
  type: FILTER_IMAGES,
  payload,
});
