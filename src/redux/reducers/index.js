import { combineReducers } from "redux";
import boombReducer from './boomb';
import textEditorReducer from './textEditor';
import confettiReducer from './confetti';

const rootReducer = combineReducers({
  boombReducer,
  textEditorReducer,
  confettiReducer,
});

export default rootReducer;
