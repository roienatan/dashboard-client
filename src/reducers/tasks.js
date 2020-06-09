import { GET_USER_TASKS, GET_USER_TASKS_RECEIVED, TOGGLE_ADD_TASK, ADD_TASK, ADD_TASK_FAILED } from '../constants/action-types';

const initialState = {
    tasks: [],
    loading: false,
    showAddTask: false,
    addingTask: false
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_TASKS:
            return {
                ...state,
                tasks: action.tasks,
                loading: true
            }
        case GET_USER_TASKS_RECEIVED:
            return {
                ...state,
                loading: false
            }
        case TOGGLE_ADD_TASK:
            return {
                ...state,
                showAddTask: action.showAddTask
            }
        case ADD_TASK:
            return {
                ...state,
                addingTask: true
            }
        case ADD_TASK_FAILED:
            return {
                ...state,
                addingTask: false
            }
        default: return state;
    }
}