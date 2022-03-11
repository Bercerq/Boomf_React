import {
  SET_CONFETTI,
  SET_CONFETTI_DATA,
  SET_SELECTED_CONFETTI
} from "../constants/confetti";

const initialState = {
  confettiData: [],
  confettiState: {
    img: '',
    name: 'Image',
    action: false,
    id: 0
  },
  selectedConfetti: false
};

const confettiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFETTI: {
      const data = state.confettiData.map((e, idx) => ({
        img: e.img,
        name: e.name,
        active: idx === action.payload.id,
        id: idx
      }))

      return {
        ...state,
        confettiData: data,
        confettiState: action.payload,
      };
    }
    case SET_CONFETTI_DATA: {
      const data = action.payload.map((e, idx) => ({
        img: e.img,
        name: e.name,
        active: e?.active || idx === 0,
        id: idx
      }));

      const active = data.filter((e) => e?.active)[0] || data[0];

      return {
        ...state,
        confettiData: data,
        confettiState: active
      }
    }
    case SET_SELECTED_CONFETTI: {
      return {
        ...state,
        selectedConfetti: action.payload
      }
    }
    default:
      return {
        ...state,
      };
  }
};

export default confettiReducer;
