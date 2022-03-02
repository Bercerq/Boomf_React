import {
  CURRENT_EDITOR,
  EDIT_TEXT,
  FOCUS_STATE,
  DBL_CLICK_STATE,
  EDIT_TEXT_DATA
} from "../constants/textEditor";

const initialState = {
  textEditorData: [],
  textEditorState: {
    position: {x: 0, y: 0},
    rotate: 0,
    textStyles: {},
    currentEditor: {state: false, flag: ''},
    focusState: false,
    dblClickState: false
  },


  textStyles: {},
  currentEditor: {state: false, flag: ''},
  focusState: false,
  dblClickState: false
};

const textEditorReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TEXT: {
      const data = state.textEditorData[action.payload.id];

      return {
        ...state,
        textStyles: {...state.textStyles, ...action.payload},
      }
    }
    case CURRENT_EDITOR: {
      return {
        ...state,
        currentEditor: {...action.payload},
      }
    }
    case FOCUS_STATE: {
      return {
        ...state,
        focusState: action.payload,
      }
    }
    case DBL_CLICK_STATE: {
      return {
        ...state,
        dblClickState: action.payload
      }
    }
    case EDIT_TEXT_DATA: {

      return {

      }
    }
    default:
      return {
        ...state,
      };
  }
};

export default textEditorReducer;
