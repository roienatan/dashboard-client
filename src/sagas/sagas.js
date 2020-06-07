import { all, put, takeLatest } from 'redux-saga/effects'
import { API } from '../services/api';
import { GET_USERS, USERS_RECEIVED, ADD_USER, USER_FAILED, USER_ADDED_SUCCESSFULLY } from '../constants/action-types';

function* fetchUsers() {
    try {
        const users = yield fetch(API.GET_USERS).then(res => res.json());
        yield put({ type: USERS_RECEIVED, users: users });
    } catch (error) {
        yield put({ type: USER_FAILED });
    }

}

function* addUser(userDetails) {
    try {
        yield fetch(API.ADD_USER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
                //Authorization: sessionStorage.getItem("token")
            },
            body: JSON.stringify(userDetails.userDetails)
        });
        yield put({ type: USER_ADDED_SUCCESSFULLY });
    } catch (error) {
        yield put({ type: USER_FAILED });
    }
}

function* actionWatcher() {
    yield takeLatest(GET_USERS, fetchUsers);
    yield takeLatest(ADD_USER, addUser);
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ]);
}