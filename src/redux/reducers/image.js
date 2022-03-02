import {
  SET_IMAGE,
  SET_IMAGE_DATA,
} from "../constants/image";

const initialState = {
  imageData: [],
  imageState: {
    img: null,
    alt: '',
    action: false,
    id: 0
  },
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE: {
      const imageState = {
        ...action.payload,
        action: true,
        id: state.imageData.length
      }

      return {
        imageData: [...state.imageData, imageState],
        imageState: imageState
      };
    }
    case SET_IMAGE_DATA: {
      const data = action.payload.map((e, idx) => ({
        img: e.img,
        name: e.name,
        active: e.active || false,
        id: idx
      }));

      return {
        imageData: data,
        imageState: data.filter((e) => e?.active)[0] || initialState.imageState
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default imageReducer;
