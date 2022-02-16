import { combineReducers } from "redux";
import boombReducer from "./boomb";
import textEditorReducer from "./textEditor";
import confettiReducer from "./confetti";
import sidebarReducer from "./sideBar";

const rootReducer = combineReducers({
  boombReducer,
  textEditorReducer,
  confettiReducer,
  sidebarReducer,
});

export default rootReducer;
