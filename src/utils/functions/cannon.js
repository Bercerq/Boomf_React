import {setCurrentSidebar} from "../../redux/actions/sideBar";
import {setImageCannon} from "../../redux/actions/cannon";
import {setAddImageLibrary} from "../../redux/actions/imageLibrary";

export const setImageContent = (dispatch) => {
  dispatch(setCurrentSidebar({flag: "+ Add photo", state: true}))
}

export const setCannonImage = (img, dispatch) => {
  dispatch(setImageCannon(img))
}

export const setUploadImage = (img, dispatch) => {
  if (!img) {
    return null;
  }

  dispatch(setAddImageLibrary({img: URL.createObjectURL(img[0]), alt: img[0].name}))
}