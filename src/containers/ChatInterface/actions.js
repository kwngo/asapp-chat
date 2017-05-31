import {
    LOAD_MESSAGES,
    LOAD_MESSAGES_SUCCESS,
    ADD_MESSAGE,
    ADD_MESSAGE_SUCCESS,
    ADD_MESSAGE_FAIL,
    RECEIVE_MESSAGE,
    HANDLE_TYPING,
    HANDLE_STOP_TYPING,
    FETCH_PARTICIPANTS,
    FETCH_PARTICIPANTS_SUCCESS,
    FETCH_PARTICIPANTS_FAIL
} from './constants';
import {getParticipants} from '../../sessions';



export function addMessageSuccess() {
    return {
        type: ADD_MESSAGE_SUCCESS
    }
}

export function addMessageFail(error) {
    return {
        type: ADD_MESSAGE_FAIL,
        error
    }
}

export function receiveMessage(message, user) {
    const payload = {message, user}
    return {
        type: RECEIVE_MESSAGE,
        payload
    }
}

export function handleTyping(user) {
    return {
        type: HANDLE_TYPING,
        user
    }
}

export function handleStopTyping(user) {
    return {
        type: HANDLE_STOP_TYPING,
        user
    }
}

export function fetchParticipantsFail(error) {
    return {
        type: FETCH_PARTICIPANTS_FAIL,
        error
    }
}

export function fetchParticipantsSuccess(participants) {
    return {
        type: FETCH_PARTICIPANTS_SUCCESS,
        participants
    }
}

export function addMessage(message) {
    return dispatch => {
        dispatch({type: ADD_MESSAGE, message});
        dispatch(addMessageSuccess());
    }
}

export function loadMessages(chatId, userId) {
    return dispatch => {
        dispatch({type: LOAD_MESSAGES});
        let messages = [];
        dispatch({type: LOAD_MESSAGES_SUCCESS, messages});
    }
}

export function fetchParticipants(chatId, userId) {
    return dispatch => {
        dispatch({type: FETCH_PARTICIPANTS, chatId})
        let participants = getParticipants(chatId, userId);
        if (participants.length > 0) {
            dispatch(fetchParticipantsSuccess(participants))
        } else {
            dispatch(fetchParticipantsFail('Had trouble getting participants'))
        }
    }
}
