import {Map} from 'immutable';
import uuidv4 from 'uuid';

const JULIE_TOKEN = uuidv4();
const ROB_TOKEN = uuidv4();

const sessionsObj = {}

export const userRob = {
    id: '1',
    username: 'Rob',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg'
}

export const userJulie = {
    id: '2',
    username: 'Julie',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'
}

sessionsObj[ROB_TOKEN] = {
    currentUser: userRob
};

sessionsObj[JULIE_TOKEN] = {
    currentUser: userJulie
};

const sessions = new Map(sessionsObj);
const tokens = new Map({
    'julie': JULIE_TOKEN,
    'rob': ROB_TOKEN
});

export function getParticipants(chatId, userId) {
    return [
        userRob, userJulie
    ];
}

export function getToken(param) {
    let token = tokens.get(param);
    return token;
}

export function getSessions(token) {
    return sessions.get(token);
}
