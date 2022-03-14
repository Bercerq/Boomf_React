import {
  CURRENT_SIDEBAR,
  // IMAGE_LIBRARY,
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
    // case IMAGE_LIBRARY:
    //   return {
    //     ...state,
    //     imageLibrary: [{ img: action.payload }, ...state.imageLibrary],
    //   };
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
