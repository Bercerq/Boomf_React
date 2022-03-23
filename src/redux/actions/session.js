import { GET_SESSION, SET_SESSION } from "../constants/session";

export const getCurrentSession = (payload) => ({
  type: GET_SESSION,
  payload,
});
export const setCurrentSession = (payload) => ({
  type: SET_SESSION,
  payload,
});
