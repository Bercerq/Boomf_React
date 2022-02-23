import { combineReducers } from "redux";
import boombReducer from "./boomb";
import textEditorReducer from "./textEditor";
import confettiReducer from "./confetti";
import sidebarReducer from "./sideBar";
import cannonReducer from "./cannon";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  boombReducer,
  textEditorReducer,
  confettiReducer,
  sidebarReducer,
  modalReducer,
  cannonReducer,
});

export default rootReducer;
