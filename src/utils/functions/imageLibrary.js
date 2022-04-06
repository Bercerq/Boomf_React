import {uid} from "./textData";
import {setSelectedBackground} from "../../redux/actions/background";
import {setSelectedConfetti} from "../../redux/actions/confetti";

export const addStateImage = (state, image) => {
  const data = state.imageData.map(e => ({...e, active: false}));
  const imageState = {...image, size: 1, active: true, id: uid()}

  return {
    ...state,
    imageData: [...data, imageState],
    imageState
  }
}


export const updateStateImage = (state, {key, value}) => {
  const imageState = {
    ...state.imageState,
    [key]: value
  }

  return {
    ...state,
    imageData: state.imageData.map(e => (
      e.id === state.imageState.id ? imageState : e
    )),
    imageState
  }
}

export const deleteStateImage = (state, initialState, id) => {
  const data = state.imageData.filter(e => e.id !== id);

  if(!data.length) {
    return {
      ...state,
      imageData: [initialState],
      imageState: initialState
    }
  }

  return {
    ...state,
    imageData: data,
    imageState: state.imageState.id === id ? initialState : state.imageState
  }
}

export const diagonalLine = (box) => {
  const widthLine = Math.sqrt(box.height * box.height + box.width * box.width);
  const rotateLine = Math.asin(box.height / widthLine) * (180 / Math.PI);

  return {
    widthLine,
    rotateLine
  }
}

export const closeSelectDevice = (dispatch) => () => {
  dispatch(setSelectedBackground(false));
  dispatch(setSelectedConfetti(false));
}