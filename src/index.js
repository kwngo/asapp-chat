import React from 'react';
import ReactDOM from 'react-dom';
import ChatInterface from './containers/ChatInterface';
import App from './containers/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import rootReducer from './reducer'

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore); 
const initialState = {};
const store = createStoreWithMiddleware(rootReducer);
const title = 'ASAPP chat';

ReactDOM.render(
    <Provider store={store}>
        <App>
            <ChatInterface />
        </App>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
