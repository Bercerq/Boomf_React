import { CURRENT_SIDEBAR } from "../constants/sideBar";

const initialState = {
  currentSidebar: { state: false, flag: "" },
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SIDEBAR:
      return {
        ...state,
        currentSidebar: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default sidebarReducer;
