// types
import { OPEN_POP_UP, CLOSE_POP_UP } from "./types"

let pop_up_status = false

export const reducer = (state = pop_up_status, action) => {
    switch (action.type) {
        case OPEN_POP_UP:
            return state = true

        case CLOSE_POP_UP:
            return state = false

        default:
            return state
    }
}