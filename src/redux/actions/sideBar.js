import { CURRENT_SIDEBAR, IMAGE_LIBRARY, SELECT_UPLOADED } from "../constants/sideBar";

export const setCurrentSidebar = (payload) => ({
  type: CURRENT_SIDEBAR,
  payload,
});

export const selectUploadedImage = (payload) => ({
  type: SELECT_UPLOADED,
  payload,
});
// export const setImageLibrary = (payload) => ({
//   type: IMAGE_LIBRARY,
//   payload,
// });
