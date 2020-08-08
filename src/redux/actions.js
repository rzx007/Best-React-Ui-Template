import { CHANGE_COLOR, CHANGE_SILDER } from "./actionType";


export function changeColor(color) {
    return { type: CHANGE_COLOR, color }
}

export function changeSilder(mode) {
    return { type: CHANGE_SILDER, mode }
}
