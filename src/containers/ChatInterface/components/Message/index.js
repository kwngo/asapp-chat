import React, {Component} from 'react';
import styles from './style.css';
import moment from 'moment';

export default class Message extends Component { 
    render() {
        let time = moment(this.props.createdAt).fromNow(); 
        return (
            <div className={this.props.sent ? styles.MessageSent : styles.MessageReceived}>
                <div className={styles.Content}>
                <div className={this.props.sent ? styles.Hidden : styles.AvatarContainer}>
                    <img 
                        src={this.props.avatar}
                        className={styles.Avatar}
                    />
                </div>
                <div className={this.props.sent ? styles.ChatBubbleSent : styles.ChatBubbleReceived}>
                    <span>{this.props.content}</span>
                </div>
                </div>
            </div>
        )
    }
}
