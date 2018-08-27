import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
// import { ping } from '../enhancers/ping';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger));
        // applyMiddleware(ping));
    return store;
}