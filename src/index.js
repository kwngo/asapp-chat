import React from 'react';
import ReactDOM from 'react-dom';
import ChatInterface from './containers/ChatInterface';
import App from './containers/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {Iterable} from 'immutable';
import rootReducer from './reducer'

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
