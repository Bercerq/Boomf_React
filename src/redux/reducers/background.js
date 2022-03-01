import {SET_BACKGROUND, SET_BACKGROUND_DATA} from "../constants/background";

const initialState = {
  backgroundState: {
    img: 'https://boomf.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fboomf-production%2Fstamps_images%2F000%2F002%2F330%2Foriginal.jpg%3F1563188722&w=1920&q=75',
    name: "Hot-Love",
    id: 0
  },
};

const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND:
      return {
        ...state,
        backgroundState: state.backgroundData[action.payload],
      };
    case SET_BACKGROUND_DATA:
      return {
        backgroundData: action.payload,
        backgroundState: action.payload[0]
      }
    default:
      return {
        ...state,
      };
  }
};

export default backgroundReducer;
