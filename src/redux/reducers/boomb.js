const initialState = {
};


const boomb = (state= initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
        boombData: action.payload
      };
  }
};

export default boomb;
