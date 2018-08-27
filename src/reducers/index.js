// const initialState = {
//     name: 'Pig',
//     surname: 'Fucker',
//     age: '99'
// };
//
// export default function userstate(state = initialState) {
//     return state;
// };

import { combineReducers } from 'redux';
import page from './page';
import user from './user';

export default combineReducers({
    page,
    user
});