import { BoombData } from "../../utils/constants/BoombData";
import {
  CURRENT_CUBE_IMAGE,
  CURRENT_CUBE_POSITION,
  EDIT_IMAGE,
  SEND_BOOMB,
  SET_BOOMB,
  SET_TOP_TEXT,
} from "../constants/boomb";

const initialState = {
  boombData: BoombData,
  editCrop: "1",
  cubeImabeLibrary: [],
  curCubePosition: 1,
};

const boombReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOMB:
      return {
        ...state,
        boombData: action.payload,
      };
    case SEND_BOOMB:
      return {
        ...state,
        readyBomb: action.payload,
      };
    case SET_TOP_TEXT:
      return {
        ...state,
        topText: action.payload,
      };
    case EDIT_IMAGE:
      return {
        ...state,
        editCrop: action.payload,
      };
    case CURRENT_CUBE_POSITION:
      return {
        ...state,
        curCubePosition: action.payload,
      };
    case CURRENT_CUBE_IMAGE:
      return {
        ...state,
        curCubeImage: [{ img: action.payload }, ...state.curCubeImage],
      };
    default:
      return {
        ...state,
      };
  }
};

export default boombReducer;
