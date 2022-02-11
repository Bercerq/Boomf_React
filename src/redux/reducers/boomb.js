import { EDIT_TEXT, SET_BOOMB } from "../constants/boomb";

const initialState = {
  editTextData: {},
};

const boomb = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOMB:
      return {
        ...state,
        boombData: action.payload,
      };
    case EDIT_TEXT:
      return {
        ...state,
        editTextData: { ...state.editTextData, ...action.payload },
      };
    default:
      return {
        ...state,
      };
  }
};

export default boomb;
