import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../constants/action-types';

const initialState = {
    error: false,
    loading: false,
    authenticated: sessionStorage.getItem('authenticated')
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                authenticated: action.authenticated,
                loading: true
            }
        }
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                loading: false,
                userDetails: action.userDetails,
                error: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: true,
                loading: false
            }
        case LOGOUT: {
            return {
                ...state,
                authenticated: false
            }
        }
        default: return state;
    }
} 