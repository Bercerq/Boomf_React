import {uid} from "./textData";

export const addStateImage = (state, image) => {
  const data = state.imageData.map(e => ({...e, active: false}));
  const imageState = {...image, active: true, id: uid()}

  return {
    ...state,
    imageData: [...data, imageState],
    imageState
  }
}

export const updateStateImage = () => {

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