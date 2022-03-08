import {
  SET_ACTIVE_TEXT_DATA,
  SET_DATA_TEXT,
  SET_ADD_TEXT_DATA,
  SET_UPDATE_TEXT_DATA,
  SET_DELETE_TEXT_DATA,
} from "../constants/textData";

import {
  addDataStateText,
  updateDataStateText,
  deleteDataStateText
} from "../../utils/functions/textData";

const initialTextState = {
  value: '',
  position: {x: 0, y: 0},
  rotate: 0,
  textStyles: {},
  currentEditor: {state: false, flag: ''},
  focusState: false,
  dblClickState: false,
  column: 1,
  id: '1233221'
}

const initialState = {
  textData: [initialTextState, {...initialTextState, column: 2, id: '3221123'}],
  textDataState: initialTextState,
};

const textDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TEXT_DATA: {
      return {
        ...state,
        textDataState: {
          ...state.textData.filter(e => e.id === action.payload)[0] || initialState.textDataState,
        },
      }
    }
    case SET_DATA_TEXT: {
      return {
        textData: action.payload,
        textDataState: action.payload[0]
      };
    }
    case SET_ADD_TEXT_DATA: {
      return addDataStateText(state, initialState);
    }
    case SET_UPDATE_TEXT_DATA: {
      return updateDataStateText(state, action.payload);
    }
    case SET_DELETE_TEXT_DATA: {
      return deleteDataStateText(state, initialState);
    }
    default:
      return {
        ...state,
      };
  }
};

export default textDataReducer;