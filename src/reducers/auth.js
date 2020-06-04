import { AUTHENTICATED } from '../constants/action-types';

const initialState = {
    authenticated: true
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTHENTICATED: {
            return {
                ...state,
                authenticated: action.authenticated
            }
        }
        default: return state;
    }
} 