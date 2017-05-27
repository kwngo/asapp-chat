import React from 'react';
import ReactDOM from 'react-dom';
import Channel from './components/Channel';
import ChatInput from './components/ChatInput';
import {createStore} from 'redux'
const title = 'ASAPP chat';

ReactDOM.render(
    <div>
    {title}
    <Channel></Channel>
    <ChatInput></ChatInput>
    </div>,
    document.getElementById('app')
);

module.hot.accept();
