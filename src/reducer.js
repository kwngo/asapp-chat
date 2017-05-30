import {combineReducers} from 'redux';
import chatInterfaceReducer from './containers/ChatInterface/reducer'; 

export default combineReducers({
    chat: chatInterfaceReducer
})
