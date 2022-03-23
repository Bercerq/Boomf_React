import { takeEvery, call, put } from "@redux-saga/core/effects";
import { api } from "../../services/api_boomf";
import { apiResizer } from "../../services/api_resizer";
import { setCategoriesImages, setImages } from "../actions/images";
import {
  GET_BOOMF_LIBRARY_CATEGORIES,
  GET_BOOMF_LIBRARY_IMAGES,
  UPLOAD_IMAGE,
} from "../constants/images";

function* uploadImageReq(data) {
  const { value } = data.payload;
  try {
    yield call(apiResizer.post, "/user/images", value);
  } catch (error) {}
}

function* getBoomfLibraryCategories(data) {
  const { productType } = data.payload;
  try {
    const { data } = yield call(api.post, "/graphql", {
      operationName: "getDesignLibraryCategories",
      variables: { pt: productType },
      query:
        "query getDesignLibraryCategories($pt: String!) {\n  designLibrary {\n    categories(productType: $pt) {\n      id\n      image\n      name\n      slug\n      __typename\n    }\n    __typename\n  }\n}\n",
    });
    yield put(setCategoriesImages(data.data.designLibrary.categories));
  } catch (error) {}
}
function* getBoomfLibraryImages(data) {
  const { name, productType } = data.payload;
  console.log(productType);
  try {
    const { data } = yield call(api.post, "/graphql", {
      operationName: "getDesignLibraryCategories",
      variables: { pt: productType, c: name },
      query:
        "query getDesignLibraryCategories($pt: String!, $c: String!) {\n  designLibrary {\n    images(productType: $pt, category: $c) {\n      id\n      name\n      file {\n        height\n        url\n        width\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
      // "query designLibrary ($productType1: String!, $category: String!) {designLibrary {images (category: $category, productType: $productType1) {file {height url width} id name}}}",
    });
    yield put(setImages(data.data.designLibrary.images));
  } catch (error) {}
}
export function* imageUploadWatcher() {
  yield takeEvery(UPLOAD_IMAGE, uploadImageReq);
  yield takeEvery(GET_BOOMF_LIBRARY_CATEGORIES, getBoomfLibraryCategories);
  yield takeEvery(GET_BOOMF_LIBRARY_IMAGES, getBoomfLibraryImages);
}
