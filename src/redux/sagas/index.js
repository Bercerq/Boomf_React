import { all } from "@redux-saga/core/effects";
import { boombWatcher } from "./boomb";

function* rootSaga() {
  yield all([boombWatcher()]);
}

export default rootSaga;
