import { takeEvery, call } from "@redux-saga/core/effects";
import { api } from "../../services/api";
import { SET_BOOMB } from "../constants/boomb";

function* createNewBoomb() {
//   try {
//     yield call(api.post, "/", "reqObject");
//   } catch (error) {}
}

export function* boombWatcher() {
  yield takeEvery(SET_BOOMB, createNewBoomb);
}
