import {Map} from 'immutable';
import uuidv4 from 'uuid';

const JULIE_TOKEN = uuidv4();
const ROB_TOKEN = uuidv4();

const sessionsObj = {}

sessionsObj[ROB_TOKEN] = {
    currentUser: {
        id: '1',
        username: 'Rob'
    }
};

sessionsObj[JULIE_TOKEN] = {
    currentUser: {
        id: '2',
        username: 'Julie'
    }
};

const sessions = new Map(sessionsObj);
const tokens = new Map({
    'julie': JULIE_TOKEN,
    'rob': ROB_TOKEN
});

export function getToken(param) {
    let token = tokens.get(param);
    return token;
}

export function getSessions(token) {
    return sessions.get(token);
}
