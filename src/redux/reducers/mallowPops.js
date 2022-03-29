import { mallowpoopsData } from "../../utils/constants/MallowPopsData";
import { SET_MALLOWPOPS } from "../constants/mallowPops";

const initialState = {
  mallowpops: mallowpoopsData,
};

const mallowPopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MALLOWPOPS:
      return {
        ...state,
        mallowpops: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default mallowPopsReducer;
