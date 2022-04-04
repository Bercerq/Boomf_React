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
  position.y = positionY(parentBlock, childrenBlock, data);

  if (childrenBlock.height > parentBlock.height || childrenBlock.width > parentBlock.width) {
    position.x = 0;
    position.y = 0;
  }

  return position;
}

const positionX = (parentBlock, childrenBlock, childWidth, data) => {
  if (childWidth > 1) {
    if (parentBlock.left > childrenBlock.left) {
      return -parentBlock.width / 2 + childrenBlock.width / childWidth;
    }
    if (parentBlock.right < childrenBlock.right) {
      return parentBlock.width / 2 - childrenBlock.width / childWidth;
    }
  }

  return data.lastX;
}

const positionY = (parentBlock, childrenBlock, data) => {
  if (parentBlock.top > childrenBlock.top) {
    return -parentBlock.height / 2 + childrenBlock.height;
  }
  if (parentBlock.bottom < childrenBlock.bottom) {
    return parentBlock.height / 2 - childrenBlock.height;
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
  if (dataText.length > 10) {
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