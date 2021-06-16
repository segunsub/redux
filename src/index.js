import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// // let store = createStore()


// //Store -> Globalized state

// //Action Increment (describe what you want to do) returns object
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }
// //Reducer -> how action is being called (based on what action the store is modified)
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case "INCREMENT":
//       return state + 1;
//       case 'DECREMENT':
//         return state - 1
//   }
// }

// let store = createStore(counter)


// store.subscribe(() => console.log(store.getState()))
// //Dispatch -> The way the action is ran
// store.dispatch(increment())






ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
,
  document.getElementById('root')
);


