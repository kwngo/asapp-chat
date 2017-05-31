import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const ChatTypingIndicator = (props) => {
    let usersTyping = props.usersTyping.filter(u => {
        return u.id != props.currentUser.id
    }).map(u => {
        return u.username + " is typing..."
    })
    return (
        <div className={usersTyping.size > 0 ? styles.Indicator : styles.Hidden}>
            {usersTyping}
        </div>
    )
}

export default ChatTypingIndicator;
