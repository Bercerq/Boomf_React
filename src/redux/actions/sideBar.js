import { CURRENT_SIDEBAR, SELECT_UPLOADED } from "../constants/sideBar";

export const setCurrentSidebar = (payload) => ({
  type: CURRENT_SIDEBAR,
  payload,
});

export const selectUploadedImage = (payload) => ({
  type: SELECT_UPLOADED,
  payload,
});
