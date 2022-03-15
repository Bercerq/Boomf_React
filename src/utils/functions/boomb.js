import {
  setBoomb,
  setCurImage,
  setCurPosition,
  setCurRotate,
} from "../../redux/actions/boomb";
import {setCurrentEditor, setFocus} from "../../redux/actions/textEditor";
import {setUpdateTextData} from "../../redux/actions/textData";
// import {
//   selectUploadedImage,
//   setImageLibrary,
// } from "../../redux/actions/sideBar";
import {setAddImageLibrary} from "../../redux/actions/imageLibrary";

export const changeCubeRotate = (
  operator,
  curCubeRotate,
  curCubePosition,
  dispatch
) => {
  if (operator === "right") {
    dispatch(setCurRotate(curCubeRotate + 90));
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
    dispatch(setCurRotate(curCubeRotate - 90));
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
// export const setLibraryImage = (image, dispatch) => {
//   dispatch(setImageLibrary(image));
// };
export const setUploadImage = (img, dispatch) => {
  if (!img) {
    return null;
  }

  dispatch(setAddImageLibrary({img: URL.createObjectURL(img[0]), alt: img[0].name}))
}
export const setBoxPosition = (dispatch, position, defaultRotate) => () => {
  dispatch(setCurPosition(position));
  dispatch(setCurRotate(defaultRotate));
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
      return "Right";
    case 4:
      return "Back";
    case 3:
      return "Left";

    default:
      break;
  }
};
//check one or double click
export const openEditor = (dispatch, buttonflag) => () => {
  const button = document.getElementById(buttonflag);
  let timer;
  button.addEventListener("click", (event) => {
    if (event.detail === 1) {
      timer = setTimeout(() => {
        dispatch(setCurrentEditor({flag: "", state: true}));
        dispatch(setFocus(true));
        // todo cannon
        dispatch(setUpdateTextData({key: 'currentEditor', value: {flag: "", state: true}}));
        dispatch(setUpdateTextData({key: 'focusState', value: true}));
        // dispatch(setUpdateTextData({key: 'dblClickState', value: true}));
      }, 200);
    }
  });
  button.addEventListener("dblclick", (event) => {
    clearTimeout(timer);
    dispatch(setFocus(true));
    // todo cannon
    dispatch(setUpdateTextData({key: 'focusState', value: true}));
    // dispatch(setUpdateTextData({key: 'dblClickState', value: true}));
  });

  button.addEventListener('touchend', () => {
    dispatch(setFocus(true));
    // todo cannon
    dispatch(setUpdateTextData({key: 'focusState', value: true}));
    // dispatch(setUpdateTextData({key: 'dblClickState', value: true}));
  })
};
