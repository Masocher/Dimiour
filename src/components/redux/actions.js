import { OPEN_POP_UP, CLOSE_POP_UP, OPEN_MENU, CLOSE_MENU } from "./types"

export const openPopUp = () => {
    return { type: OPEN_POP_UP }
}

export const closePopUp = () => {
    return { type: CLOSE_POP_UP }
}

export const openMenu = () => {
    return { type: OPEN_MENU }
}

export const closeMenu = () => {
    return { type: CLOSE_MENU }
}