import { all } from "@redux-saga/core/effects";
import { boombWatcher } from "./boomb";
import { sessionWatcher } from "./session";

function* rootSaga() {
  yield all([boombWatcher(), sessionWatcher()]);
}

export default rootSaga;
