import { SET_LOADING } from "../constants/loader";

const initialState = {
  loadingState: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loadingState: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default loadingReducer;
