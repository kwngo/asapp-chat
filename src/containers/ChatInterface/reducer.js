import {Map, List} from 'immutable';
import {
    LOAD_MESSAGES,
    LOAD_MESSAGES_SUCCESS,
    LOAD_MESSAGES_FAIL,
    ADD_MESSAGE,
    ADD_MESSAGE_SUCCESS,
    ADD_MESSAGE_FAIL,
    RECEIVE_MESSAGE,
    RECEIVE_MESSAGE_SUCCESS,
    RECEIVE_MESSAGE_FAIL,
    HANDLE_MESSAGE
} from './constants';

const initialState = new Map({
    messages: List([
        {
            content: "Yo",
            userId: "2",
            createdAt: new Date()
        }, {
            content: "This is another one",
            userId: "2",
            createdAt: new Date()
        } 
    ]),
    currentUser: new Map({
        id: '1',
        avatar: ''
    }),
    message: "",
    error: null,
    typings: List([]),
    isLoadingMessages: false
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
                .set('message', "")
        case ADD_MESSAGE_SUCCESS:
            return state.set('message', "")
        case ADD_MESSAGE_FAIL:
            const index = state.findIndex(i => i.id === action.message.id)
            return state.setIn(['messages', index, 'error'], true)
        case RECEIVE_MESSAGE:
            return state.set(state.messages.size, action.message); 
        case RECEIVE_MESSAGE_SUCCESS:
            return 
        case RECEIVE_MESSAGE_FAIL:
            return
        case HANDLE_MESSAGE:
            return state
                .set('typings', state.get('typings').push(action))
                .set('message', action.message)
        default:
            return state
    }
}
