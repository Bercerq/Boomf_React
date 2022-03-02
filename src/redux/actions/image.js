import {SET_IMAGE, SET_IMAGE_DATA} from "../constants/image";

export const setImage = (payload) => ({
  type: SET_IMAGE,
  payload,
});

export const setImageData = (payload) => ({
  type: SET_IMAGE_DATA,
  payload,
});