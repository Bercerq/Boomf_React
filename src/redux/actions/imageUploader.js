import { UPLOAD_IMAGE } from "../constants/imageUploader";

export const fetchUploadImage = (payload) => ({
  type: UPLOAD_IMAGE,
  payload,
});
