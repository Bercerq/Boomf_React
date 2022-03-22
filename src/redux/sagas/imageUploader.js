import { takeEvery, call } from "@redux-saga/core/effects";
import { apiResizer } from "../../services/api";
import { UPLOAD_IMAGE } from "../constants/imageUploader";

function* uploadImageReq(data) {
  const { value } = data.payload;
  try {
    yield call(apiResizer.post, "/user/images", value);
  } catch (error) {}
}

export function* imageUploadWatcher() {
  yield takeEvery(UPLOAD_IMAGE, uploadImageReq);
}
