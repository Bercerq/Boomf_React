import {
  SET_BACKGROUND,
  SET_BACKGROUND_DATA,
  SET_SELECTED_BACKGROUND
} from "../constants/background";

const initialState = {
  backgroundData: [],
  backgroundState: {
    img: '',
    name: 'Image',
    action: false,
    id: 0
  },
  selectedBackground: false
};

const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND: {
      const data = state.backgroundData.map((e, idx) => ({
        img: e.img,
        name: e.name,
        active: idx === action.payload.id,
        id: idx
      }))

      return {
        ...state,
        backgroundData: data,
        backgroundState: state.backgroundData[action.payload.id],
      };
    }
    case SET_BACKGROUND_DATA: {
      const data = action.payload.map((e, idx) => ({
        img: e.img,
        name: e.name,
        active: e?.active || idx === 0,
        id: idx
      }));

      return {
        backgroundData: data,
        backgroundState: data.filter((e) => e?.active)[0] || data[0]
      }
    }
    case SET_SELECTED_BACKGROUND: {
      return {
        ...state,
        selectedBackground: action.payload
      }
    }
    default:
      return {
        ...state,
      };
  }
};

export default backgroundReducer;
