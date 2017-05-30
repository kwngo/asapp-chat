import {combineReducers} from 'redux';
import chatInterfaceReducer from './containers/ChatInterface/reducer'; 

export default function createReducer(optionalReducers) {
   return combineReducers({
        chat: chatInterfaceReducer,
        ...optionalReducers
   });
}
