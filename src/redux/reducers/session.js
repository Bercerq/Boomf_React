import { SET_SESSION } from "../constants/session";

const initialState = {};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION:
      return {
        ...state,
        currentSession: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default sessionReducer;
