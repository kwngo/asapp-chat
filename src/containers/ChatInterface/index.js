import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable'
import { connect } from 'react-redux';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import ChatTypingIndicator from './components/ChatTypingIndicator';
import styles from './style.css';
import {loadMessages, addMessage, handleTyping, handleStopTyping, fetchParticipants} from './actions';

class ChatInterface extends Component {
    constructor(props) {
        super(props)
        this.typingTimeout = null;
        this.inputRef = this.inputRef.bind(this);
        this.dispatchAddMessage = this.dispatchAddMessage.bind(this);
        this.dispatchHandleMessage = this.dispatchHandleMessage.bind(this);
        this.props.fetchParticipants(
            this.props.chatId, 
            this.props.session.currentUser.id
        );
        this.props.loadMessages(
            this.props.chatId,
            this.props.session.currentUser.id
        );
    }
    componentDidMount() {
        this.messageInput.focus()
    }
    inputRef(input) {
        this.messageInput = input;
    }
    dispatchAddMessage(e) {
        e.preventDefault();
        var message = {
            content: e.target.message.value,
            user: this.props.session.currentUser,
            sentTo: this.props.chatId,
            createdAt: new Date()
        };
        e.target.message.value = "";
        this.props.addMessage(message);
    }
    dispatchHandleMessage(e) {
        e.preventDefault();
        clearTimeout(this.typingTimeout)
        this.typingTimeout = setTimeout(() => {
            this.props.handleStopTyping(this.props.session.currentUser);
            this.typingTimeout = null;
        }, 3000)
        this.props.handleTyping(this.props.session.currentUser)
    }
    render() {
       let participant = this.props.participants
       return (
            <div className={styles.ChatInterface}>
                <div className={styles.ChatHeader}>
                    <div>{'Username'}</div>
                </div>
                <ChatMessages 
                    containerClassName={styles.ChatMessages} 
                    messages={this.props.messages}
                    currentUser={this.props.session.currentUser}
                    usersTyping={this.props.usersTyping}
                />
                <ChatInput 
                    className={styles.ChatInput}
                    addMessage={this.dispatchAddMessage}
                    handleMessage={this.dispatchHandleMessage}
                    inputRef={this.inputRef}
                />
           </div>
        )
    }
}

ChatInterface.propTypes = {
    chatId: PropTypes.string.isRequired,
    messages: PropTypes.instanceOf(Immutable.List).isRequired,
    participants: PropTypes.instanceOf(Immutable.List).isRequired,
    session: PropTypes.object.isRequired,
    usersTyping: PropTypes.instanceOf(Immutable.Set).isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadMessages: (chatId, userId) => {
            dispatch(loadMessages(chatId, userId))
        },
        addMessage: (message) => {
            dispatch(addMessage(message));
        },
        handleTyping: (user) => {
            dispatch(handleTyping(user));
        },
        handleStopTyping: (user) => {
            dispatch(handleStopTyping(user));
        },
        fetchParticipants: (chatId, userId) => {
            dispatch(fetchParticipants(chatId, userId));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.chat.get('messages'),
        message: state.chat.get('message'),
        chatId: state.chat.get('chatId'),
        participants: state.chat.get('participants'),
        usersTyping: state.chat.get('usersTyping')
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInterface)
