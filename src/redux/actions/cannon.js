import {
    SET_BACKGROUND_CANNON,
    SET_IMAGE_CANNON,
} from "../constants/cannon";


export const setBackgroundCannon = (payload) => ({
    type: SET_BACKGROUND_CANNON,
    payload,
});
export const setImageCannon = (payload) => ({
    type: SET_IMAGE_CANNON,
    payload,
});