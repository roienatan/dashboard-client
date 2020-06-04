import { combineReducers } from 'redux';
import { layoutReducer } from './layout';
import { authReducer } from './auth';

const reducers = combineReducers({
    layoutReducer,
    authReducer
})

export default reducers;