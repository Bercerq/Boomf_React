import {
  CURRENT_EDITOR,
  EDIT_TEXT,
  FOCUS_STATE,
  DBL_CLICK_STATE,
  EDIT_TEXT_DATA,
  TEXT_STYLES
} from "../constants/textEditor";

const initialState = {
  textEditorData: [{
    value: '',
    position: null,
    rotate: 0,
    textStyles: {},
    currentEditor: {state: false, flag: ''},
    focusState: false,
    dblClickState: false,
    id: 0
  }],
  textEditorState: null,


  textStyles: {},
  currentEditor: {state: false, flag: ''},
  focusState: false,
  dblClickState: true
};

const textEditorReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TEXT: {
      return {
        ...state,
        textEditorState: {
          ...state.textEditorData[action.payload.id],
        },//todo

        textStyles: {...state.textStyles, ...action.payload},
      }
    }
    case TEXT_STYLES: {
      return {
        ...state,
        textEditorState: {
          ...state.textEditorState,
          textStyles: {
            ...state.textEditorState.textStyles,
            ...action.payload
          }
        },
      }
    }
    case CURRENT_EDITOR: {
      return {
        ...state,
        textEditorState: {
          ...state.textEditorState,
          currentEditor: {...action.payload}
        },//todo

        currentEditor: {...action.payload},
      }
    }
    case FOCUS_STATE: {
      return {
        ...state,
        textEditorState: {
          ...state.textEditorState,
          focusState: action.payload,
        },//todo

        focusState: action.payload,
      }
    }
    case DBL_CLICK_STATE: {
      return {
        ...state,
        textEditorState: {
          ...state.textEditorState,
          dblClickState: action.payload
        },//todo

        dblClickState: action.payload
      }
    }
    case EDIT_TEXT_DATA: {
      return {
        textEditorData: action.payload,
        textEditorState: null
      }
    }
    default:
      return {
        ...state,
      };
  }
};

export default textEditorReducer;
