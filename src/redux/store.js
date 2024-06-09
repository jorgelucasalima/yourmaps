// store.js
import { legacy_createStore } from 'redux';
import filterReducer from './reducers';

const store = legacy_createStore(filterReducer);

export default store;
