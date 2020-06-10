import * as types from '../constants/action-types';

const initialState = {
    tasks: [],
    loading: false,
    showAddTask: false,
    addingTask: false
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASKS:
            return {
                ...state,
                loading: true
            }
        case types.GET_TASKS_RECEIVED:
            return {
                ...state,
                tasks: action.tasks,
                loading: false
            }
        case types.GET_TASKS_FAILED:
            return {
                ...state,
                tasks: []
            }
        case types.TOGGLE_ADD_TASK:
            return {
                ...state,
                showAddTask: action.showAddTask
            }
        case types.ADD_TASK:
            return {
                ...state,
                addingTask: true
            }
        case types.TASK_ADDED_SUCCESSFULLY:
            return {
                ...state,
                addingTask: false,
                showAddTask: false
            }
        case types.ADD_TASK_FAILED:
            return {
                ...state,
                addingTask: false
            }
        default: return state;
    }
}