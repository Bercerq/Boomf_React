import { takeEvery, call, put } from "@redux-saga/core/effects";
import { api } from "../../services/api_boomf";
import { GET_SESSION } from "../constants/session";

function* sessionReq() {
  try {
    const { data } = yield call(api.get, "/user/session");
    localStorage.setItem("Boomf_accessToken", data.providers.photoLibrary);
  } catch (error) {
    console.log(error);
  }
}

export function* sessionWatcher() {
  yield takeEvery(GET_SESSION, sessionReq);
}
