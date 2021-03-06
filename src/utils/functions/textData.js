export const uid = () => {
  const array = new Uint32Array(8);
  window.crypto.getRandomValues(array);
  let str = '';
  for (let i = 0; i < array.length; i++) {
    str += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4);
  }
  return str;
}

export const textPosition = (parentBlock, childrenBlock, data, childWidth) => {
  const position = {x: data.lastX, y: data.lastY};

  position.x = positionX(parentBlock, childrenBlock, childWidth, data);
  position.y = positionY(parentBlock, childrenBlock, childWidth, data);

  if (childrenBlock.height + 20 > parentBlock.height || childrenBlock.width + 20 > parentBlock.width) {
    position.x = 0;
    position.y = 0;
  }

  return position;
}

const positionX = (parentBlock, childrenBlock, childWidth, data) => {
  if (parentBlock.left > childrenBlock.left - (childWidth > 1 ? 10 : 20)) {
    return -parentBlock.width / (childWidth > 1 ? 2 : 4) + childrenBlock.width / 2 + (childWidth > 1 ? 10 : 25);
  }
  if (parentBlock.right < childrenBlock.right + (childWidth > 1 ? 10 : 20)) {
    return parentBlock.width / (childWidth > 1 ? 2 : 4) - childrenBlock.width / 2 - (childWidth > 1 ? 10 : 25);
  }

  return data.lastX;
}

const positionY = (parentBlock, childrenBlock, childWidth, data) => {
  if (parentBlock.top > childrenBlock.top - (childWidth > 1 ? 10 : 50)) {
    return -parentBlock.height / 2 + childrenBlock.height / 2 - (childWidth > 1 ? -10 : -50);
  }
  if (parentBlock.bottom < childrenBlock.bottom + (childWidth > 1 ? 20 : 15)) {
    return parentBlock.height / 2 - childrenBlock.height / 2 + (childWidth > 1 ? -10 : -20);
  }

  return data.lastY;
}

export const getCenterBox = (box, scroll) => {
  let boxBoundingRect = box?.getBoundingClientRect();

  return {
    x: boxBoundingRect?.left + boxBoundingRect?.width / 2,
    y: boxBoundingRect?.top + scroll + boxBoundingRect?.height / 2
  }
}

export const rotateDegree = (event, boxCenter) => {
  return Math.atan2(event.pageX - boxCenter.x, -(event.pageY - boxCenter.y)) * (180 / Math.PI);
}

export const setDataStateText = (state, initialState, id) => {
  const data = state.textData.filter(e => e.id === id ? {...e, focusState: true} : {...e, focusState: false});
  const textDataState = state.textData.filter(e => e.id === id && {...e, focusState: true})[0] || initialState;

  return {
    ...state,
    textData: data,
    textDataState: textDataState
  }
}

export const addDataStateText = (state, initialState) => {
  const data = state.textData.map(e => ({...e, focusState: false}));
  const textDataState = {
    ...initialState.textDataState,
    column: state.textDataState.column,
    focusState: true,
    id: uid()
  }
  const dataText = data.filter(e => e.type === 'text');
  if (dataText.length > state.maxLengthText) {
    for (let key of data) {
      if (key.type === 'text') {
        const newStateData = {...data[data.indexOf(key)], focusState: true};

        data[data.indexOf(key)] = newStateData;
        return {
          ...state,
          textData: [...data],
          textDataState: newStateData
        }
      }
    }
  }
  return {
    ...state,
    textData: [...data, textDataState],
    textDataState
  }
}

export const addDataStateImage = (state, initialState, payload) => {
  const data = state.textData.map(e => ({...e, focusState: false}));
  const textDataState = {
    ...initialState.textDataState,
    type: 'image',
    image: payload,
    column: state.textDataState.column,
    focusState: false,
    id: uid()
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
      e.id === state.textDataState.id ? textState : {...e, focusState: false}
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