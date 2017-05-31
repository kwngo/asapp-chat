import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import ChatInterface from './containers/ChatInterface';
import App from './containers/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {Iterable} from 'immutable';
import createReducer from './reducer'
import styles from './defaults.css';
import { getSessions, getToken } from './sessions'; 
// Support for immutable
const logger = createLogger({
  stateTransformer: (state) => {
    let newState = {};

    for (var i of Object.keys(state)) {
      if (Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    };

    return newState;
  }
});


const middleware = [logger, thunk]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore); 
const rootReducer = createReducer();
const store = createStoreWithMiddleware(rootReducer);
const julieToken = getToken('julie');
const robToken = getToken('rob')
const sessionJulie = getSessions(julieToken);
const sessionRob = getSessions(robToken);
const title = 'ASAPP chat';

ReactDOM.render(
    <Provider store={store}>
        <div className={styles.MainContainer}>
        <App session={sessionRob}>
            <ChatInterface />
        </App>
        <App session={sessionJulie}>
            <ChatInterface />
        </App>
        </div>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
