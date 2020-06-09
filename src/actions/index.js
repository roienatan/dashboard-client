import * as types from '../constants/action-types';

export const login = ({ username, password }) => ({
    type: types.LOGIN,
    username,
    password
})

export const logout = () => ({
    type: types.LOGOUT
})

export const toggleDarkMode = darkMode => ({
    type: types.TOGGLE_DARK_MODE,
    darkMode
})

export const toggleMenu = showMenu => ({
    type: types.TOGGLE_MENU,
    showMenu
})

export const toggleUserTooltip = showUserTooltip => ({
    type: types.TOGGLE_USER_TOOLTIP,
    showUserTooltip
})


export const changeScreenSize = screenSize => ({
    type: types.CHANGE_SCREEN_SIZE,
    screenSize
})

export const getUsers = () => ({
    type: types.GET_USERS
})

export const toggleAddUser = showAddUser => ({
    type: types.TOGGLE_ADD_USER,
    showAddUser
})

export const addUser = userDetails => ({
    type: types.ADD_USER,
    userDetails
})

export const addTask = taskDetails => ({
    type: types.ADD_TASK,
    taskDetails
})

export const getUserTasks = userId => ({
    type: types.GET_USER_TASKS,
    userId
})

export const getAllTasks = () => ({
    type: types.GET_ALL_TASKS
})

export const toggleAddTask = showAddTask => ({
    type: types.TOGGLE_ADD_TASK,
    showAddTask
})