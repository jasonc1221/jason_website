import { GET_MENU_SIZE, SET_MENU_SIZE } from './types'

export const setMenuSize = size => dispatch =>{
    dispatch({
        type: SET_MENU_SIZE,
        payload: size
    })
}

export const getMenuSize = () => dispatch => {
    dispatch({
        type: GET_MENU_SIZE,
      })
}

