import {
  SET_ACTIVE_TEXT_DATA,
  SET_DATA_TEXT,
  SET_ADD_TEXT_DATA,
  SET_UPDATE_TEXT_DATA,
  SET_DELETE_TEXT_DATA,
  SET_ADD_IMAGE_DATA,
  SET_MAX_LENGTH_TEXT
} from "../constants/textData";

import {
  addDataStateText,
  updateDataStateText,
  deleteDataStateText,
  setDataStateText,
  addDataStateImage
} from "../../utils/functions/textData";

const initialTextState = {
  type: 'text',
  value: '',
  position: {x: 0, y: 0},
  rotate: 0,
  textStyles: {
    colour: "#222222",
    font: "Futura"
  },
  currentEditor: {state: false, flag: ''},
  focusState: false,
  column: 1,
  id: '1233221'
}

const initialState = {
  textData: [initialTextState, {...initialTextState, column: 2, id: '3221123'}],
  textDataState: initialTextState,
  maxLengthText: 6,
};

const textDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TEXT_DATA: {
      return setDataStateText(state, initialTextState, action.payload)
    }
    case SET_DATA_TEXT: {
      return {
        ...state,
        textData: action.payload,
        textDataState: action.payload[0]
      };
    }
    case SET_ADD_TEXT_DATA: {
      return addDataStateText(state, initialState);
    }
    case SET_ADD_IMAGE_DATA: {
      return addDataStateImage(state, initialState, action.payload);
    }
    case SET_UPDATE_TEXT_DATA: {
      return updateDataStateText(state, action.payload);
    }
    case SET_DELETE_TEXT_DATA: {
      return deleteDataStateText(state, initialState);
    }
    case SET_MAX_LENGTH_TEXT: {
      return {
        ...state,
        maxLengthText: action.payload
      }
    }
    default:
      return {
        ...state,
      };
  }
};

export default textDataReducer;