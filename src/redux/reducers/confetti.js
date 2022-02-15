import { SET_CONFETTI } from "../constants/confetti";
import BcGold1 from "../../utils/assets/png/confetti/BCGold-1.png";

const initialState = {
  confettiState: {
    img: BcGold1,
    name: "Gold",
  },
};

const confettiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFETTI:
      return {
        ...state,
        confettiState: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default confettiReducer;
