import { SET_BOOMB, SET_TOP_TEXT } from "../constants/boomb";

const initialState = {};

const boombReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOMB:
      return {
        boombData: action.payload,
      };
    case SET_TOP_TEXT:
      return {
        ...state,
        topText: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default boombReducer;
