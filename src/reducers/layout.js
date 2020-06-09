import { TOGGLE_DARK_MODE, CHANGE_SCREEN_SIZE, TOGGLE_MENU, TOGGLE_USER_TOOLTIP } from '../constants/action-types';
import { LIGHT_MODE, DARK_MODE } from '../constants/colors';
import { getScreenSize } from '../utils';

const initialState = {
    darkMode: true,
    color: DARK_MODE,
    screenSize: getScreenSize(),
    showMenu: false,
    showUserTooltip: false
};


export const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE: {
            return {
                ...state,
                darkMode: action.darkMode,
                color: action.darkMode ? DARK_MODE : LIGHT_MODE
            }
        }
        case CHANGE_SCREEN_SIZE: {
            return {
                ...state,
                screenSize: action.screenSize
            }
        }
        case TOGGLE_MENU:
            return {
                ...state,
                showMenu: action.showMenu,
                showUserTooltip: false

            }
        case TOGGLE_USER_TOOLTIP:
            return {
                ...state,
                showUserTooltip: action.showUserTooltip,
                showMenu: false
            }
        default: return state;
    }
}



