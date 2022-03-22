import { all } from "@redux-saga/core/effects";
import { boombWatcher } from "./boomb";
import { imageUploadWatcher } from "./imageUploader";
import { sessionWatcher } from "./session";

function* rootSaga() {
  yield all([boombWatcher(), sessionWatcher(),imageUploadWatcher()]);
}

export default rootSaga;
