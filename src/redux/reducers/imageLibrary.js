import {
  SET_ADD_IMAGE_LIBRARY,
  SET_DELETE_IMAGE_LIBRARY,
  SET_IMAGE_LIBRARY,
  SET_IMAGE_LIBRARY_DATA,
} from "../constants/imageLibrary";

import {uid} from "../../utils/functions/textData";
import {addStateImage, deleteStateImage} from "../../utils/functions/imageLibrary";

const initialImageState = {
  img: null,
  alt: '',
  action: false,
  id: 0
}

const initialState = {
  imageData: [initialImageState],
  imageState: initialImageState,
};

const imageLibraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE_LIBRARY: {
      const data = state.imageData.map(e =>
        e.id === action.payload ?
          {...e, action: true} :
          {...e, action: false})

      return {
        ...state,
        imageData: data,
        imageState: data.filter(e => e.id === action.payload)[0]
      };
    }
    case SET_IMAGE_LIBRARY_DATA: {
      const data = action.payload.map((e) => ({
        img: e.img,
        name: e.name,
        active: e.active || false,
        id: uid()
      }));

      return {
        ...state,
        imageData: data,
        imageState: data.filter((e) => e.active)[0] || initialImageState
      };
    }
    case SET_ADD_IMAGE_LIBRARY: {
      return addStateImage(state, action.payload);
    }
    case SET_DELETE_IMAGE_LIBRARY: {
      return deleteStateImage(state, initialImageState, action.payload)
    }
    default:
      return {
        ...state,
      };
  }
};

export default imageLibraryReducer;
