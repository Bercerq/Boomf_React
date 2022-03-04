export const uid = () => {
  const array = new Uint32Array(8)
  window.crypto.getRandomValues(array)
  let str = '';
  for (let i = 0; i < array.length; i++) {
    str += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4)
  }
  return str
}

export const textPosition = (data, wrapperH, wrapperW) => {
  const center = {
    x: data.x + (data.node.clientWidth / 2),
    y: data.y + (data.node.clientHeight / 2)
  }

  const margin = {
    top: center.y - 0,
    left: center.x - 0,
    bottom: wrapperH - center.y,
    right: wrapperW - center.x
  }

  const position = {
    top: {y: 0, x: data.x},
    left: {y: data.y, x: 0},
    bottom: {y: (wrapperH - data.node.clientHeight), x: data.x},
    right: {y: data.y, x: (wrapperW - data.node.clientWidth)}
  }

  const sorted = Object.keys(margin).sort((a, b) => margin[a] - margin[b])
  const nearestSide = sorted[0];

  return position[nearestSide];
}

export const getCenterBox = (box) => {
  let boxBoundingRect = box.getBoundingClientRect();

  return {
    x: boxBoundingRect.left + boxBoundingRect.width / 2,
    y: boxBoundingRect.top + boxBoundingRect.height / 2
  }
}

export const rotateDegree = (event, boxCenter) => {
  return Math.atan2(event.pageX - boxCenter.x, -(event.pageY - boxCenter.y)) * (180 / Math.PI)
}


export const addDataStateText = (state, initialState) => {
  const data = state.textData.map(e => ({...e, dblClickState: false}))
  const textDataState = {
    ...initialState.textDataState,
    dblClickState: true,
    id: uid()
  }
  if (data.length > 10) {
    data[0] = {...data[0], dblClickState: true}
    return {
      ...state,
      textData: [...data],
      textDataState: data[0]
    }
  }
  return {
    ...state,
    textData: [...data, textDataState],
    textDataState
  }
}

export const updateDataStateText = (state, {key, value}) => {
  const textState = {
    ...state.textDataState,
    [key]: key === 'textStyles' ? {
      ...state.textDataState.textStyles,
      ...value
    } : value
  }

  return {
    ...state,
    textData: state.textData.map(e => (
      e.id === state.textDataState.id ? textState : {...e, dblClickState: false}
    )),
    textDataState: textState,
  }
}

export const deleteDataStateText = (state, initialState) => {
  const data = state.textData.filter(e => e.id !== state.textDataState.id);

  if (!data.length) {
    return initialState
  }

  return {
    ...state,
    textData: data,
    textDataState: data[0]
  }
}