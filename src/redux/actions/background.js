import {
  SET_BACKGROUND,
  SET_BACKGROUND_DATA,
  SET_SELECTED_BACKGROUND
} from "../constants/background";

export const setBackground = (payload) => ({
  type: SET_BACKGROUND,
  payload
})

export const setBackgroundData = (payload) => ({
  type: SET_BACKGROUND_DATA,
  payload
})
export const setSelectedBackground = (payload) => ({
  type: SET_SELECTED_BACKGROUND,
  payload
})