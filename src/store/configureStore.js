import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
import { ping } from '../enhancers/ping';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(ping));
    return store;
}