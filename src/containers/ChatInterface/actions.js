import {
    LOAD_MESSAGES,
    ADD_MESSAGE,
    ADD_MESSAGE_SUCCESS,
    ADD_MESSAGE_FAIL,
    RECEIVE_MESSAGE,
    HANDLE_MESSAGE
} from './constants';

export function addMessage(message, user) {
    const payload = {message, user}
    return {
        type: ADD_MESSAGE,
        payload
    }
}

export function addMessageSuccess() {
    return {
        type: ADD_MESSAGE_SUCCESS
    }
}

export function addMessageFail(message, user) {
    const payload = {message, user};
    return {
        type: ADD_MESSAGE_FAIL,
        payload
    }
}
export function receiveMessage(message, user) {
    const payload = {message, user}
    return {
        type: RECEIVE_MESSAGE,
        payload
    }
}

export function loadMessages(channelId) {
    return {
        type: LOAD_MESSAGES, 
        channelId
    }
}

export function sendMessage(message, user) {
    return {
        type: ADD_MESSAGE,
        message
    }
}

export function handleMessage(message) {
    return {
        type: HANDLE_MESSAGE,
        message
    }
}
