import { media } from "../constants/BoombData";

export const changeCubeRotate = (operator, setCubeRotateY, cubeRotateY) => {
  if (operator === "right") {
    setCubeRotateY(cubeRotateY + 90);
  } else if (operator === "left") {
    setCubeRotateY(cubeRotateY - 90);
  }
};
export const updateItem = (
  id,
  itemAttributes,
  cubeData,
  setCubeData,
  setCurrentImage
) => {
  let index = cubeData.findIndex((x) => x.position === id);
  if (index !== -1) {
    setCubeData([
      ...cubeData.slice(0, index),
      Object.assign({}, cubeData[index], itemAttributes),
      ...cubeData.slice(index + 1),
    ]);
    //uncomment when connect server
    // setCurrentImage("");
  }
};
export const setBoxImage = (e, setCurrentImage) => {
  setCurrentImage(e.target.value);
};
export const setBoxPosition = (position, setCurrPosition) => () => {
  setCurrPosition(position);
};
export const changeTopText = (e, setTopText) => {
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
//Spin cube for mouse hold
let startX;
export const onCubeDragStart = () => {
  startX = true;
};

export const onCubeDragEnd = () => {
  startX = false;
};

export const onCubeDrag = (e, setCubeRotateY, cubeRotateY) => {
  if (startX) {
    media.map(({ width, maxSize, minSize }) => {
      if (window.matchMedia(width).matches) {
        if (e.pageX > minSize && e.pageX < maxSize) {
          setCubeRotateY(cubeRotateY - 90);
        } else {
          setCubeRotateY(cubeRotateY + 90);
        }
      }
    });
  }
};
//
