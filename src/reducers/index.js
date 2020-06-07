import { combineReducers } from 'redux';
import { layoutReducer } from './layout';
import { authReducer } from './auth';
import { usersReducer } from './users';

const reducers = combineReducers({
    layoutReducer,
    authReducer,
    usersReducer
})

export default reducers;