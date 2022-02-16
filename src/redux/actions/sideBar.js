import { CURRENT_SIDEBAR } from "../constants/sideBar";

export const setCurrentSidebar = (payload) => ({
  type: CURRENT_SIDEBAR,
  payload,
});
