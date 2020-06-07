import { GET_USERS, USERS_RECEIVED, TOGGLE_ADD_USER, USER_FAILED, ADD_USER, USER_ADDED_SUCCESSFULLY } from '../constants/action-types';

const initialState = {
    loading: false,
    users: [],
    showAddUser: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS || ADD_USER:
            return {
                ...state,
                loading: true
            };
        case USERS_RECEIVED:
            return {
                ...state,
                users: action.users,
                loading: false
            }
        case TOGGLE_ADD_USER:
            return {
                ...state,
                showAddUser: action.showAddUser
            }
        case USER_FAILED || USER_ADDED_SUCCESSFULLY:
            return {
                ...state,
                loading: false
            }
        
        default: return state;
    }
}