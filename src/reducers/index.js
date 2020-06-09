import { combineReducers } from 'redux';
import { layoutReducer } from './layout';
import { authReducer } from './auth';
import { usersReducer } from './users';
import { tasksReducer } from './tasks';

const reducers = combineReducers({
    layoutReducer,
    authReducer,
    usersReducer,
    tasksReducer
})

export default reducers;