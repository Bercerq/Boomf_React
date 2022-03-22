import {
  sendBoomb,
  setBoomb,
  setCurPosition,
  setCurRotate,
} from "../../redux/actions/boomb";
import {setAddImageData, setUpdateTextData} from "../../redux/actions/textData";

import { setAddImageLibrary } from "../../redux/actions/imageLibrary";
import { setCurrentModal } from "../../redux/actions/modal";
import { StaticText } from "../../components/Customizer/Boomb/CubeSection/style";
import { uid } from "./textData";
import { fetchUploadImage } from "../../redux/actions/imageUploader";

export const changeCubeRotate = (
  operator,
  curCubeRotate,
  curCubePosition,
  dispatch
) => {
  if (operator === "right") {
    dispatch(setCurRotate(curCubeRotate + 90));
    dispatch(setCurPosition(curCubePosition === 4 ? 1 : ++curCubePosition));
  } else if (operator === "left") {
    dispatch(setCurRotate(curCubeRotate - 90));
    dispatch(setCurPosition(curCubePosition === 1 ? 4 : --curCubePosition));
  }
};

export const updateItem = (
  curCubePosition,
  itemAttributes,
  boombData,
  dispatch
) => {
  let index = boombData?.findIndex((x) => x.position === curCubePosition);
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
export const setUploadImage = (img, imageData, dispatch) => {
  const uploadImage = {
    img: URL.createObjectURL(img[0]),
    alt: img[0].name,
    id: uid(),
  };
  const arr = [];
  imageData.map((data) => arr.push(data, uploadImage));
  if (!img) {
    return null;
  }
  dispatch(setAddImageLibrary(uploadImage));

  const formData = new FormData();

  formData.append("image", img[0]);
  console.log(formData);
  dispatch(fetchUploadImage({ value: formData }));
};
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
export const openEditor = (dispatch, buttonFlag) => () => {
  const button = document.getElementById(buttonFlag);
  let timer;
  button.addEventListener("click", (event) => {
    if (event.detail === 1) {
      timer = setTimeout(() => {
        dispatch(
          setUpdateTextData({
            key: "currentEditor",
            value: { flag: "", state: true },
          })
        );
        dispatch(setUpdateTextData({ key: "focusState", value: true }));
      }, 200);
    }
  });
  button.addEventListener("dblclick", () => {
    clearTimeout(timer);
    dispatch(setUpdateTextData({ key: "focusState", value: true }));
  });

  button.addEventListener("touchend", () => {
    dispatch(setUpdateTextData({ key: "focusState", value: true }));
  });

  if (buttonFlag === "buttonClickTop") {
    dispatch(setCurRotate(760));
  }
};

export const handleClickAddToCart =
  (boombData, dispatch, confettiState, textData) => () => {
    let boxArr = [];
    boombData?.map((data) => boxArr.push(data));
    dispatch(sendBoomb([...boxArr, textData, { confetti: confettiState.img }]));
    dispatch(
      setCurrentModal({
        title: "Add to cart",
        state: true,
      })
    );
  };

export const findStaticText = (textData, textDataState, dispatch) => {
  return textData.map(
    ({ textStyles, value, focusState, id }) =>
      focusState && (
        <StaticText
          key={id}
          textStyles={textStyles}
          id="buttonClick"
          onClick={openEditor(dispatch, "buttonClick")}
        >
          {!value && !textDataState.focusState
            ? "Double Click to type your text"
            : textDataState.currentEditor.state && value}
        </StaticText>
      )
  );
};

export const findCurrentCrop = (boombData, curCubePosition) => {
  const curCrop = boombData.find(
    ({ position }) => curCubePosition === position
  );
  return +curCrop.editCrop;
};
