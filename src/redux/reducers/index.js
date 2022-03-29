import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import boombReducer from "./boomb";
import confettiReducer from "./confetti";
import sidebarReducer from "./sideBar";
import modalReducer from "./modal";
import backgroundReducer from "./background";
import imageLibraryReducer from "./imageLibrary";
import textDataReducer from "./textData";
import standardReducer from "./standard";
import sessionReducer from "./session";
import boomfImagesReducer from "./images";
import loadingReducer from "./loader";
import mallowPopsReducer from "./mallowPops";

const persistConfig = {
  key: "boomb",
  storage: storage,
};
const rootPersistConfig = {
  key: "root",
  storage: storage,
};

const persistConfigMallow = {
  key: "Mallow",
  storage: storage,
};
const persistConfigText = {
  key: "Text",
  storage: storage,
};

const persistConfigImages = {
  key: "ImageLibrary",
  storage: storage,
};
const rootReducer = combineReducers({
  boombReducer: persistReducer(persistConfig, boombReducer),
  confettiReducer,
  sidebarReducer,
  modalReducer,
  backgroundReducer,
  imageLibraryReducer: persistReducer(persistConfigImages, imageLibraryReducer),
  textDataReducer: persistReducer(persistConfigText, textDataReducer),
  standardReducer,
  sessionReducer,
  boomfImagesReducer,
  loadingReducer,
  mallowPopsReducer: persistReducer(persistConfigMallow, mallowPopsReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
