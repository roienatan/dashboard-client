import { GET_USERS, USERS_RECEIVED, TOGGLE_ADD_USER, USER_FAILED, ADD_USER, USER_ADDED_SUCCESSFULLY, ADD_USER_FAILED } from '../constants/action-types';

const initialState = {
    loading: false,
    users: [],
    showAddUser: false,
    addingUser: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                loading: true
            };
        case ADD_USER:
            return {
                ...state,
                addingUser: true
            }
        case ADD_USER_FAILED:
            return {
                ...state,
                addingUser: false
            }
        case USER_ADDED_SUCCESSFULLY:
            return {
                ...state,
                addingUser: false,
                showAddUser: false
            }
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
        case USER_FAILED:
            return {
                ...state,
                loading: false
            }

        default: return state;
    }
}