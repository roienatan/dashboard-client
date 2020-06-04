import * as types from '../constants/action-types';

export const login = authenticated => ({
    type: types.AUTHENTICATED,
    authenticated
})

export const toggleDarkMode = darkMode => ({
    type: types.TOGGLE_DARK_MODE,
    darkMode
})


export const changeScreenSize = screenSize => ({
    type: types.CHANGE_SCREEN_SIZE,
    screenSize
})
