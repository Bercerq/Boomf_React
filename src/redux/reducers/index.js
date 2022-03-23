import { combineReducers } from "redux";
import boombReducer from "./boomb";
import confettiReducer from "./confetti";
import sidebarReducer from "./sideBar";
import modalReducer from "./modal";
import backgroundReducer from "./background";
import imageLibraryReducer from "./imageLibrary";
import textDataReducer from "./textData";
import standardReducer from "./standard";
import sessionReducer from "./session";
import boomfImagesReducer from './images';

const rootReducer = combineReducers({
  boombReducer,
  confettiReducer,
  sidebarReducer,
  modalReducer,
  backgroundReducer,
  imageLibraryReducer,
  textDataReducer,
  standardReducer,
  sessionReducer,
  boomfImagesReducer,
});

export default rootReducer;
