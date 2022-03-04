import {SET_CONFETTI, SET_CONFETTI_DATA} from "../constants/confetti";

export const setConfetti = (payload) => ({
  type: SET_CONFETTI,
  payload,
});

export const setConfettiData = (payload) => ({
  type: SET_CONFETTI_DATA,
  payload,
});