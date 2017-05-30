import React from 'react';
import Message from '../Message';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

const ChatMessages = (props) => {
    var messages = props.messages.map((m, i) => {
        let sent = _parseSent(m.user.id, props.currentUser.id)
        return (
            <Message 
                key={i}
                sent={sent}
                content={m.content}
                createdAt={m.createdAt}
            /> 
        )
    });
    return (
             <div className={props.containerClassName}>{messages}</div>
    )
}

var _parseSent = function(messageId, currentUserId) {
    return messageId == currentUserId;
}

ChatMessages.propTypes = {
    className: PropTypes.string,
    messages: PropTypes.instanceOf(Immutable.List).isRequired
}

export default ChatMessages;
