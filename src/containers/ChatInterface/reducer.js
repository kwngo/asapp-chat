import {Map, List, Set} from 'immutable';
import {
    LOAD_MESSAGES,
    LOAD_MESSAGES_SUCCESS,
    LOAD_MESSAGES_FAIL,
    ADD_MESSAGE,
    ADD_MESSAGE_SUCCESS,
    ADD_MESSAGE_FAIL,
    HANDLE_TYPING,
    HANDLE_STOP_TYPING,
    FETCH_PARTICIPANTS,
    FETCH_PARTICIPANTS_SUCCESS,
    FETCH_PARTICIPANTS_FAIL
} from './constants';
import uuidv4 from 'uuid';

const chatId = uuidv4();
const initialState = new Map({
    chatId: chatId, 
    messages: List([]),
    participants: List([]),
    error: null,
    usersTyping: Set([]),
    isLoadingMessages: false,
    isSendingMessage: false,
    isLoadingParticipants: false
});

export default function chatInterfaceReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_MESSAGES:
            return state.set('isLoadingMessages', true);
        case LOAD_MESSAGES_SUCCESS:
            return state.merge({
                messages: action.messages,
                isLoadingMessage: false
            });
        case LOAD_MESSAGES_FAIL:
            return state.set('isLoadingMessages', false);
        case ADD_MESSAGE:
            return state
                .set('messages', state.get('messages').push(action.message))
                .set('usersTyping', state.get('usersTyping')
                .delete(action.message.user));
        case ADD_MESSAGE_SUCCESS:
            return state
        case ADD_MESSAGE_FAIL:
            const index = state.findIndex(i => i.id === action.message.id)
            return state.setIn(['messages', index, 'error'], true)
        case HANDLE_TYPING:
            return state
                .set('usersTyping', state.get('usersTyping')
                .add(action.user));
        case HANDLE_STOP_TYPING:
            return state
                .set('usersTyping', state.get('usersTyping')
                .delete(action.user));
        case FETCH_PARTICIPANTS:
            return state
                .set('isLoadingParticipants', true);
        case FETCH_PARTICIPANTS_SUCCESS:
            return state.merge({
                'participants': action.participants,
                'isLoadingParticipants': false
            });
        case FETCH_PARTICIPANTS_FAIL:
            return state
                .set('isLoadingParticipants', false)
                .set('error', action.error)
        default:
            return state
    }
}
