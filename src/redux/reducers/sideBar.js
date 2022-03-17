import {
  CURRENT_SIDEBAR,
  SELECT_UPLOADED,
} from "../constants/sideBar";

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
    case SELECT_UPLOADED:
      return {
        ...state,
        curCubeImage: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default sidebarReducer;
