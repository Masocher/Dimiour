import { OPEN_POP_UP, CLOSE_POP_UP } from './types'

export const openPopUp = () => {
    return {type: OPEN_POP_UP}
}

export const closePopUp = () => {
    return {type: CLOSE_POP_UP}
}