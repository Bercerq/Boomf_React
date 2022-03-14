import {SET_CONFETTI, SET_CONFETTI_DATA, SET_SELECTED_CONFETTI} from "../constants/confetti";

export const setConfetti = (payload) => ({
  type: SET_CONFETTI,
  payload,
});

export const setConfettiData = (payload) => ({
  type: SET_CONFETTI_DATA,
  payload,
});
export const setSelectedConfetti = (payload) => ({
  type: SET_SELECTED_CONFETTI,
  payload
})