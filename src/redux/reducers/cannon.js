import confettiState from '../../utils/assets/png/confetti/CC.png'

import {
  SET_CONFETTI_CANNON,
  SET_BACKGROUND_CANNON,
  SET_IMAGE_CANNON
} from '../constants/cannon';

const initialState = {
  confettiState: confettiState,
  backgroundState: null,
  imageState: null,
};

const cannonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFETTI_CANNON: {
      return {
        ...state,
        confettiState: action.payload
      }
    }
    case SET_BACKGROUND_CANNON: {
      return {
        ...state,
        backgroundState: action.payload,
      }
    }
    case SET_IMAGE_CANNON: {
      return {
        ...state,
        imageState: action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}

export default cannonReducer;