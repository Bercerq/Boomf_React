import {
  sendBoomb,
  setBoomb,
  setCurPosition,
  setCurRotate,
} from "../../redux/actions/boomb";
import { setUpdateTextData } from "../../redux/actions/textData";

import { setAddImageLibrary } from "../../redux/actions/imageLibrary";
import { setCurrentModal } from "../../redux/actions/modal";
import { uid } from "./textData";
import { fetchUploadImage } from "../../redux/actions/images";

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
    source: "upload",
  };
  const arr = [];
  imageData.map((data) => arr.push(data, uploadImage));
  if (!img) {
    return null;
  }
  dispatch(setAddImageLibrary(uploadImage));

  const formData = new FormData();

  formData.append("image", img[0]);
  dispatch(fetchUploadImage({ value: formData }));
};
export const setBoxPosition =
  (dispatch, position, defaultRotate, textDataState) => () => {
    if (!textDataState?.focusState) {
      dispatch(setCurPosition(position));
      dispatch(setCurRotate(defaultRotate));
    }
  };
export const changeTopText = (setTopText, e) => {
  setTopText(e.target.value);
};

//check one or double click
export const openEditor = (dispatch, buttonFlag) => () => {
  const button = document.getElementById(buttonFlag);
  let timer;

  const openTextModal = () => {
    dispatch(setCurRotate(760));
    dispatch(
      setCurrentModal({
        title: "Text",
        state: true,
      })
    );
  };

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
    dispatch(setCurPosition(1));
    buttonFlag === "buttonClickTopMobile" && openTextModal();
  });
  button.addEventListener("dblclick", () => {
    clearTimeout(timer);
    dispatch(
      setUpdateTextData({
        key: "currentEditor",
        value: { flag: "", state: false },
      })
    );
    dispatch(setUpdateTextData({ key: "focusState", value: false }));
    buttonFlag === "buttonClickDesktop" && openTextModal();
  });
  button.addEventListener("touchend", () => {
    clearTimeout(timer);
    dispatch(setUpdateTextData({ key: "focusState", value: true }));
    dispatch(
      setUpdateTextData({
        key: "currentEditor",
        value: { flag: "", state: true },
      })
    );
    buttonFlag === "buttonClickTopMobile" && openTextModal();
    dispatch(setCurPosition(1));
  });
};

export const addBoombToCart =
  (boombData, dispatch, confettiState, textData, curCubeRotate) => () => {
    let cubeSides = [];
    boombData?.map((data) =>
      cubeSides.push({
        image: {
          url: data.img.img || data.img.url,
          height: data.img.height,
          weight: data.img.width,
        },
        position: data.position,
        source: data.img.source || "upload",
      })
    );
    let sendingProduct = {
      card: cubeSides,
      giftMessage: textData,
      confetti: confettiState.img,
      angle: curCubeRotate,
    };
    dispatch(sendBoomb(sendingProduct));
    dispatch(
      setCurrentModal({
        title: "Add to cart",
        state: true,
      })
    );
  };

export const findCurrentCrop = (boombData, curCubePosition) => {
  const curCrop = boombData.find(
    ({ position }) => curCubePosition === position
  );
  return +curCrop.editCrop;
};
