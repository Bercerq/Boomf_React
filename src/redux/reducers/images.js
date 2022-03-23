import {
  SET_IMAGES,
  SET_IMAGES_CATEGORIES,
  SET_PRODUCT_TYPE,
} from "../constants/images";

const initialState = {};

const boomfImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case SET_PRODUCT_TYPE:
      return {
        ...state,
        productType: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default boomfImagesReducer;
