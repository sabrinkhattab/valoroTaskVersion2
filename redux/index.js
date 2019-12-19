import { createStore, applyMiddleware ,compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import logger from 'redux-logger';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const initStore = (initialState = {}) => {
    return createStore(rootReducer , initialState ,applyMiddleware(thunk));
}
