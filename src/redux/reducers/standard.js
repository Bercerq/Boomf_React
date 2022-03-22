import {
  SET_STANDARD_NAME
} from '../constants/standard';

const initialState = {
  standardName: ''
}

const standardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STANDARD_NAME:
      return {
        ...state,
        standardName: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default standardReducer;