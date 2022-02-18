import { CURRENT_SIDEBAR, IMAGE_LIBRARY } from "../constants/sideBar";

export const setCurrentSidebar = (payload) => ({
  type: CURRENT_SIDEBAR,
  payload,
});
export const setImageLibrary = (payload) => ({
  type: IMAGE_LIBRARY,
  payload,
});
