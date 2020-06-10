import * as types from '../constants/action-types';

const initialState = {
    loading: false,
    users: [],
    showAddUser: false,
    addingUser: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                loading: true
            };
        case types.ADD_USER:
            return {
                ...state,
                addingUser: true
            }
        case types.ADD_USER_FAILED:
            return {
                ...state,
                addingUser: false
            }
        case types.USER_ADDED_SUCCESSFULLY:
            return {
                ...state,
                addingUser: false,
                showAddUser: false
            }
        case types.USERS_RECEIVED:
            return {
                ...state,
                users: action.users,
                loading: false
            }
        case types.TOGGLE_ADD_USER:
            return {
                ...state,
                showAddUser: action.showAddUser
            }
        case types.USER_FAILED:
            return {
                ...state,
                loading: false
            }

        default: return state;
    }
}