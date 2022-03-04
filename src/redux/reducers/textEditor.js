import {
  CURRENT_EDITOR,
  EDIT_TEXT,
  FOCUS_STATE,
  DBL_CLICK_STATE,
  EDIT_TEXT_DATA,
  TEXT_STYLES,
  EDIT_TEXT_VALUE,
  EDIT_TEXT_ROTATE,
  EDIT_TEXT_POSITION,
  DELETE_EDIT_TEXT,
  ADD_EDIT_TEXT
} from "../constants/textEditor";

import {
  addStateEditText,
  updateStateEditText,
  deleteStateEditText,
} from "../../utils/functions/textEditor";

const initialTextState = {
  value: '',
  position: {x: 0, y: 0},
  rotate: 0,
  textStyles: {},
  currentEditor: {state: false, flag: ''},
  focusState: false,
  dblClickState: false,
  id: 0
}

const initialState = {
  textEditorData: [initialTextState],
  textEditorState: initialTextState,

  textStyles: {},
  currentEditor: {state: false, flag: ''},
  focusState: false,
  dblClickState: false
};

const textEditorReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TEXT: {
      return {
        ...state,
        textEditorState: {
          ...state.textEditorData.filter(e => e.id === action.payload)[0] || initialState.textEditorState,
        },

        textStyles: {...state.textStyles, ...action.payload}, //todo
      }
    }
    case TEXT_STYLES: {
      return updateStateEditText(state, 'textStyles', action.payload);
    }
    case CURRENT_EDITOR: {
      return {
        ...updateStateEditText(state, 'currentEditor', action.payload),

        currentEditor: {...action.payload}, //todo
    };
    }
    case FOCUS_STATE: {
      return {
        ...updateStateEditText(state, 'focusState', action.payload),

        focusState: action.payload, //todo
    };
    }
    case DBL_CLICK_STATE: {
      return updateStateEditText(state, 'dblClickState', action.payload);
    }
    case EDIT_TEXT_DATA: {
      return {
        textEditorData: action.payload,
        textEditorState: initialTextState
      }
    }
    case EDIT_TEXT_VALUE: {
      return updateStateEditText(state, 'value', action.payload);
    }
    case EDIT_TEXT_ROTATE: {
      return updateStateEditText(state, 'rotate', action.payload);
    }
    case EDIT_TEXT_POSITION: {
      return updateStateEditText(state, 'position', action.payload);
    }
    case ADD_EDIT_TEXT: {
      return addStateEditText(state, initialState);
    }
    case DELETE_EDIT_TEXT: {
      return deleteStateEditText(state, initialState);
    }
    default:
      return {
        ...state,
      };
  }
};

export default textEditorReducer;
