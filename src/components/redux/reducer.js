// tools
import { combineReducers } from "redux"

// types
import { OPEN_POP_UP, CLOSE_POP_UP, OPEN_MENU, CLOSE_MENU } from "./types"

let pop_up_status = false
let meu_status = false

const reducer_1 = (state = pop_up_status, action) => {
    switch (action.type) {
        case OPEN_POP_UP:
            return state = true

        case CLOSE_POP_UP:
            return state = false

        default:
            return state
    }
}

const reducer_2 = (state = meu_status, action) => {
    switch (action.type) {
        case OPEN_MENU:
            return state = true

        case CLOSE_MENU:
            return state = false

        default:
            return state
    }
}

export const rootReducer = combineReducers({
    reducer_1,
    reducer_2
})