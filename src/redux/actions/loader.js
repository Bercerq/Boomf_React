import { SET_LOADING } from "./../constants/loader";

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
