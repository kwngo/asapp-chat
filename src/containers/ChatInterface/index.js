import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable'
import { connect } from 'react-redux';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import styles from './style.css';
import {loadMessages, sendMessage, handleMessage} from './actions';

class ChatInterface extends Component {
    constructor() {
        super()
        this.inputRef = this.inputRef.bind(this);
        this.dispatchSendMessage = this.dispatchSendMessage.bind(this);
    }
    componentDidMount() {
        this.messageInput.focus()
    }
    inputRef(input) {
        this.messageInput = input;
    }
    dispatchSendMessage(e) {
        e.preventDefault();
        var message = {
            content: e.target.message.value,
            user: this.props.session.currentUser,
            createdAt: new Date()
        };
        e.target.message.value = "";
        this.props.sendMessage(message);
    }
    render() {
       return (
            <div className={styles.ChatInterface}>
                <div className={styles.ChatHeader}>
                    <div>User name</div>
                </div>
                <ChatMessages 
                    containerClassName={styles.ChatMessages} 
                    messages={this.props.messages}
                    currentUser={this.props.session.currentUser}
                />
                <ChatInput 
                    className={styles.ChatInput}
                    sendMessage={this.dispatchSendMessage}
                    handleMessage={this.props.handleMessage}
                    inputRef={this.inputRef}
                />
            </div>
        )
    }
}

ChatInterface.propTypes = {
    messages: PropTypes.instanceOf(Immutable.List).isRequired,
    participants: PropTypes.array.isRequired,
    currentUser: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadMessages: () => {
            dispatch(loadMessages());
        },
        sendMessage: (message) => {
            dispatch(sendMessage(message));
        },
        handleMessage: (e) => {
            var message = e.target.value;
            dispatch(handleMessage(message));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.chat.get('messages'),
        message: state.chat.get('message')
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInterface)
