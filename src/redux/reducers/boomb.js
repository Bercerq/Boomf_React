import { EDIT_TEXT, SET_BOOMB } from "../constants/boomb";

const initialState = {
  editTextData: { font: "", size: "", colour: "", alignment: "" },
};

const boomb = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOMB:
      return {
        ...state,
        boombData: action.payload,
      };
    case EDIT_TEXT:
      console.log(Object.keys(action.payload)[0]);
      let val = action.payload;
      return {
        editTextData: (state.editTextData[Object.keys(action.payload)[0]] = {
          ...state.editTextData,
          ...val,
        }),
      };
    default:
      return {
        ...state,
      };
  }
};

export default boomb;
