import {setCurrentSidebar} from "../../redux/actions/sideBar";
import {setImageCannon} from "../../redux/actions/cannon";

export const setImageContent = (dispatch) => {
    dispatch(setCurrentSidebar({ flag: "+ Add photo", state: true }))
}

export const setCannonImage = (img, dispatch) => {
    dispatch(setImageCannon(img))
}