import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const ChatInput = (props) => {
    return (
        <div className={props.className}>
            <form onSubmit={props.addMessage} className={styles.Form}>
                <div className={styles.InputContainer}>
                <input 
                    className={styles.Input} 
                    type="text" 
                    name="message"
                    placeholder="Write your message here..."
                    onChange={props.handleMessage} 
                    ref={props.inputRef}
                    autoComplete="off"
                /> 
                </div>
                <div className={styles.ButtonContainer}>
                    <button className={styles.Button} type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

ChatInput.propTypes = {
    addMessage: PropTypes.func.isRequired,
    handleMessage: PropTypes.func.isRequired,
    inputRef: PropTypes.func.isRequired,
    className: PropTypes.string 
}

export default ChatInput;
