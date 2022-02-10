import { EDIT_TEXT, SET_BOOMB } from "../constants/boomb";

const initialState = {
  editText: { font: "", size: "", colour: "", alignment: "" },
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
        editText: (state.editText[Object.keys(action.payload)[0]] = {
          ...state.editText,
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
