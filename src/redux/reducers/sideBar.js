import { CURRENT_SIDEBAR, IMAGE_LIBRARY } from "../constants/sideBar";

const initialState = {
  currentSidebar: { state: false, flag: "" },
  imageLibrary: [],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SIDEBAR:
      return {
        ...state,
        currentSidebar: action.payload,
      };
    case IMAGE_LIBRARY:
      return {
        ...state,
        imageLibrary: [{ img: action.payload }, ...state.imageLibrary],
      };
    default:
      return {
        ...state,
      };
  }
};

export default sidebarReducer;
