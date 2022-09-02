import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import redux from './combineReducers';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

let store = createStore(redux,composedEnhancer);
export default store;
