import { SET_CONFETTI } from "../constants/confetti";

export const setConfetti = (payload) => ({
  type: SET_CONFETTI,
  payload,
});
