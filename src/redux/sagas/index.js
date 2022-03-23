import { all } from "@redux-saga/core/effects";
import { imageUploadWatcher } from "./images";
import { sessionWatcher } from "./session";

function* rootSaga() {
  yield all([sessionWatcher(), imageUploadWatcher()]);
}

export default rootSaga;
