import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const ChatInput = (props) => {
    return (
        <div className={props.className}>
            <form onSubmit={props.sendMessage}>
                <input 
                    className={styles.Input} 
                    type="text" 
                    name="message"
                    placeholder="Write your message here..."
                    onChange={props.handleMessage} 
                    ref={props.inputRef}
                    autoComplete="off"
                /> 
            <button className={styles.Button} type="submit">Send</button>
            </form>
        </div>
    )
}

ChatInput.propTypes = {
    className: PropTypes.string 
}

export default ChatInput;
