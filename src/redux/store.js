import { createStore } from 'redux';
import todoApp from './reducer/index'


let store = createStore(todoApp);
// console.log(store.getState())


export default store;