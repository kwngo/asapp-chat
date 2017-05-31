import React, {Component} from 'react';
import styles from './style.css';
import moment from 'moment';
import TimeAgo from 'react-timeago';

export default class Message extends Component { 
    render() {
        return (
            <div className={this.props.sent ? styles.MessageSent : styles.MessageReceived}>
                <div className={styles.Content}>
                <div className={this.props.sent ? styles.Hidden : styles.AvatarContainer}>
                    <img 
                        src={this.props.avatar}
                        className={styles.Avatar}
                    />
                </div>
                <div className={styles.BubbleContainer}>
                    <div className={this.props.sent ? styles.ChatBubbleSent : styles.ChatBubbleReceived}>{this.props.content}</div>
                    <TimeAgo className={styles.Timestamp + " " + (this.props.sent ? styles.Right : styles.Left)} date={this.props.createdAt} />
                </div>
                </div>
            </div>
        )
    }
}
