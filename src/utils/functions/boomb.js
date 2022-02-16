import {
  setBoomb,
  setCurImage,
  setCurPosition,
} from "../../redux/actions/boomb";
import { setCurrentEditor, setFocus } from "../../redux/actions/textEditor";

export const changeCubeRotate = (operator, setCubeRotateY, cubeRotateY) => {
  if (operator === "right") {
    setCubeRotateY(cubeRotateY + 90);
  } else if (operator === "left") {
    setCubeRotateY(cubeRotateY - 90);
  }
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
export const setBoxImage = (e, dispatch) => {
  dispatch(setCurImage(e.target.value));
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
        console.log("click");
        dispatch(setCurrentEditor({ flag: "", state: true }));
      }, 200);
    }
  });
  button.addEventListener("dblclick", (event) => {
    clearTimeout(timer);
    dispatch(setFocus(true));
    console.log("dblclick");
  });
};
