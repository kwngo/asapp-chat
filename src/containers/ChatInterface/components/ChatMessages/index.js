import React from 'react';
import Message from '../Message';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import ChatTypingIndicator from '../ChatTypingIndicator'; 

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
        <div className={props.containerClassName}>
            {messages}
            <ChatTypingIndicator
                usersTyping={props.usersTyping}
                currentUser={props.currentUser}
            />

        </div>
    )
}

var _parseSent = function(messageId, currentUserId) {
    return messageId == currentUserId;
}

ChatMessages.propTypes = {
    containerClassName: PropTypes.string,
    currentUser: PropTypes.object.isRequired,
    messages: PropTypes.instanceOf(Immutable.List).isRequired,
    usersTyping: PropTypes.instanceOf(Immutable.Set).isRequired
}

export default ChatMessages;
