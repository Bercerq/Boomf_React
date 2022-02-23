import {
  setBoomb,
  setCurImage,
  setCurPosition,
} from "../../redux/actions/boomb";
import { setImageLibrary } from "../../redux/actions/sideBar";
import {setCurrentEditor, setDblClick, setFocus} from "../../redux/actions/textEditor";

export const changeCubeRotate = (
  operator,
  setCubeRotateY,
  cubeRotateY,
  curCubePosition,
  dispatch
) => {
  if (operator === "right") {
    setCubeRotateY(cubeRotateY + 90);
    switch (curCubePosition) {
      case 1:
        changeCubePosition(2, dispatch);
        break;
      case 2:
        changeCubePosition(3, dispatch);
        break;
      case 3:
        changeCubePosition(4, dispatch);
        break;
      case 4:
        changeCubePosition(1, dispatch);
        break;
      default:
        break;
    }
  } else if (operator === "left") {
    setCubeRotateY(cubeRotateY - 90);
    switch (curCubePosition) {
      case 4:
        changeCubePosition(3, dispatch);
        break;
      case 3:
        changeCubePosition(2, dispatch);
        break;
      case 2:
        changeCubePosition(1, dispatch);
        break;
      case 1:
        changeCubePosition(4, dispatch);
        break;
      default:
        break;
    }
  }
};

const changeCubePosition = (position, dispatch) => {
  dispatch(setCurPosition(position));
};

export const updateItem = (
  curCubePosition,
  itemAttributes,
  boombData,
  dispatch
) => {
  let index = boombData.findIndex((x) => x.position === curCubePosition);
  if (index !== -1) {
    dispatch(
      setBoomb([
        ...boombData.slice(0, index),
        Object.assign({}, boombData[index], itemAttributes),
        ...boombData.slice(index + 1),
      ])
    );
  }
};
export const setBoxImage = (image, dispatch) => {
  dispatch(setCurImage(image));
};
export const setLibraryImage = (image, dispatch) => {
  dispatch(setImageLibrary(image));
};
export const setBoxPosition = (position, dispatch) => () => {
  dispatch(setCurPosition(position));
};
export const changeTopText = (setTopText, e) => {
  setTopText(e.target.value);
};
// Show side name based position
export const findBoxSide = (position) => {
  switch (position) {
    case 2:
      return "Front";
    case 1:
      return "Left";
    case 4:
      return "Back";
    case 3:
      return "Right";
    default:
      break;
  }
};
//
//check one or double click
export const openEditor = (dispatch, buttonflag) => () => {
  const button = document.getElementById(buttonflag);
  let timer;
  button.addEventListener("click", (event) => {
    if (event.detail === 1) {
      timer = setTimeout(() => {
        dispatch(setCurrentEditor({flag: "", state: true}));
        dispatch(setFocus(true));
        dispatch(setDblClick(false));
      }, 200);
    }
  });
  button.addEventListener("dblclick", (event) => {
    clearTimeout(timer);
    dispatch(setFocus(true));
    dispatch(setDblClick(true));
  });
};
