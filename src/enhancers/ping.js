export const ping = store => next => action => {
    console.log(`Action type: ${action.type}, addition action data: ${action.payload}`);
    return next(action)
};

/** ES6 long version */
// export const ping = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log('ping');
//       return next(action);
//     }
//   }
// };

/** ES5 version */
// var ping = function ping(store) {
//     return function (next) {
//         return function (action) {
//             console.log('ping');
//             return next(action);
//         };
//     };
// };