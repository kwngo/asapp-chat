import React, {Component} from 'react';
import Message from '../Message';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import ChatTypingIndicator from '../ChatTypingIndicator'; 

class ChatMessages extends Component {
    componentDidUpdate() {
        let scrollTop = this._messagesContainer.scrollTop;
        let clientHeight = this._messagesContainer.clientHeight;
        let scrollHeight = this._messagesContainer.scrollHeight;
        console.log(scrollTop, clientHeight, scrollHeight)
        if ((scrollTop + clientHeight) < scrollHeight) {
            this._messagesContainer.scrollTop = this._messagesContainer.scrollHeight;
        }
    }
    
    render() {
        var messages = this.props.messages.map((m, i) => {
            let sent = _parseSent(m.user.id, this.props.currentUser.id)
            return (
                <Message 
                    key={i}
                    sent={sent}
                    content={m.content}
                    avatar={m.user.avatar}
                    createdAt={m.createdAt}
                /> 
            )
        });

        return (
            <div 
                className={this.props.containerClassName} 
                ref={(e) => this._messagesContainer = e}>
                {messages}
                <ChatTypingIndicator
                    usersTyping={this.props.usersTyping}
                    currentUser={this.props.currentUser}
                />

            </div>
        )

    }
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
