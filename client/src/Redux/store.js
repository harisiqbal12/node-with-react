import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk'

import authReducer from './Reducers/authReducer';
import surveyReducer from './Reducers/surveyReducer';

const middlewares = [logger, reduxThunk];
const rootReducers = combineReducers({
	auth: authReducer,
	survey: surveyReducer,
});

const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;
