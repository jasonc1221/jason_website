import { SET_MENU_SIZE, GET_MENU_SIZE } from '../actions/types'

const initialState = {
    menuSize: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_MENU_SIZE:
            return {
                ...state,
                menuSize: action.payload
            }
        case GET_MENU_SIZE:
            return {
                ...state,
            }
        default:
            return state
    }
}