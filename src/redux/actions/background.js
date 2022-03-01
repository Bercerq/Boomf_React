import {SET_BACKGROUND, SET_BACKGROUND_DATA} from "../constants/background";

export const setBackground = (payload) => ({
  type: SET_BACKGROUND,
  payload
})

export const setBackgroundData = (payload) => ({
  type: SET_BACKGROUND_DATA,
  payload
})