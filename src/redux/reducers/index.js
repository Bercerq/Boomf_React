import { combineReducers } from "redux";
import boombReducer from "./boomb";
import textEditorReducer from "./textEditor";
import confettiReducer from "./confetti";
import sidebarReducer from "./sideBar";
import modalReducer from "./modal";
import backgroundReducer from "./background";
import imageLibraryReducer from "./imageLibrary";
import textDataReducer from "./textData";

const rootReducer = combineReducers({
  boombReducer,
  textEditorReducer,
  confettiReducer,
  sidebarReducer,
  modalReducer,
  backgroundReducer,
  imageLibraryReducer,
  textDataReducer
});

export default rootReducer;
