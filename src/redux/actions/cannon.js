import {
    SET_BACKGROUND_CANNON,
    SET_IMAGE_CANNON,
    SET_CONFETTI_CANNON,
} from "../constants/cannon";


export const setBackgroundCannon = (payload) => ({
    type: SET_BACKGROUND_CANNON,
    payload,
});
export const setImageCannon = (payload) => ({
    type: SET_IMAGE_CANNON,
    payload,
});
export const setConfettiCannon = (payload) => ({
    type: SET_CONFETTI_CANNON,
    payload,
});