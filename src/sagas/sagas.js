import { all, put, takeLatest } from 'redux-saga/effects'
import { API } from '../services/api';
import * as types from '../constants/action-types';

function* login(payload) {
    try {
        const response = yield fetch(API.LOGIN + '/username/' + payload.username + '/password/' + payload.password).then(res => {
            if (res.status === 401) { throw Error(res.statusText); }
            return res.json();
        });
        yield put({ type: types.LOGIN_SUCCESS, userDetails: response.userDetails });
        sessionStorage.setItem('authenticated', 'true');
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.userDetails._id);

    } catch (error) {
        yield put({ type: types.LOGIN_FAILED });
    }
}

function* fetchUsers() {
    try {
        const users = yield fetch(API.GET_USERS).then(res => res.json());
        yield put({ type: types.USERS_RECEIVED, users: users });
    } catch (error) {
        yield put({ type: types.USER_FAILED });
    }

}

function* fetchTasksByUserId() {
    try {
        const tasks = yield fetch(API.GET_TASKS_BY_USER_ID + 'userID').then(res => res.json());
        yield put({ type: types.GET_USER_TASKS_RECEIVED, tasks: tasks })
    } catch (error) {
        yield put({ type: types.GET_USER_TASKS_FAILED });
    }
}

function* fetchAllTasks() {
    try {
        const tasks = yield fetch(API.GET_ALL_TASKS).then(res => res.json());
        yield put({ type: types.GET_ALL_TASKS_RECEIVED, tasks: tasks })
    } catch (error) {
        yield put({ type: types.GET_ALL_TASKS_FAILED });
    }
}

function* addUser(payload) {
    try {
        yield fetch(API.ADD_USER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': sessionStorage.getItem("token")
            },
            body: JSON.stringify(payload.userDetails)
        });
        yield put({ type: types.USER_ADDED_SUCCESSFULLY });
        yield fetchUsers();
    } catch (error) {
        yield put({ type: types.ADD_USER_FAILED });
    }
}

function* addTask(payload) {
    try {
        yield fetch(API.ADD_TASK, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': sessionStorage.getItem("token")
            },
            body: JSON.stringify(payload.taskDetails)
        });
        yield put({ type: types.TASK_ADDED_SUCCESSFULLY });
        yield fetchAllTasks();
    } catch (error) {
        yield put({ type: types.ADD_TASK_FAILED });
    }
}

function* actionWatcher() {
    yield takeLatest(types.LOGIN, login);
    yield takeLatest(types.GET_USERS, fetchUsers);
    yield takeLatest(types.ADD_USER, addUser);
    yield takeLatest(types.GET_USER_TASKS, fetchTasksByUserId);
    yield takeLatest(types.GET_ALL_TASKS, fetchAllTasks);
    yield takeLatest(types.ADD_TASK, addTask);
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ]);
}