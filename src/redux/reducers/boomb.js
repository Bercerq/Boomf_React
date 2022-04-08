import { BoombData } from "../../utils/constants/BoombData";
import {
  CURRENT_CUBE_POSITION,
  CURRENT_CUBE_ROTATE,
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
  curCubeRotate: 670,
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
        editCrop: action.payload.value,
      };
    case CURRENT_CUBE_POSITION:
      return {
        ...state,
        curCubePosition: action.payload,
      };
    case CURRENT_CUBE_ROTATE:
      return {
        ...state,
        curCubeRotate: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default boombReducer;
