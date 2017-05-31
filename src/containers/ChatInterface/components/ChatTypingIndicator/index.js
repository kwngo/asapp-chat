import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const ChatTypingIndicator = (props) => {
    let usersTyping = props.usersTyping.filter(u => {
        return u.id != props.currentUser.id
    }).map((u, i) => {
        return (
            <div key={i} className={styles.Container}>
                <div className={styles.AvatarContainer}>
                <img 
                    src={u.avatar}
                    className={styles.Avatar}
                />
                </div>
                <div className={styles.Indicator}>
                    {u.username + " is typing..."}
                </div>

            </div>
        )
    })
    return (
        <div className={usersTyping.size > 0 ? styles.Show : styles.Hidden}>
            {usersTyping}
        </div>
    )
}

export default ChatTypingIndicator;
