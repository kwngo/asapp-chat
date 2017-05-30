import React, {Component} from 'react';
import styles from './style.css';
import moment from 'moment';

export default class Message extends Component { 
    render() {
        var time = moment(this.props.createdAt).fromNow()
        return (
            <div className={this.props.sent ? this.props.sentClassName : this.props.receiveClassName}>
                {this.props.content}
                <div className={styles.Timestamp}>
                    sent {time}
                </div>
            </div>
        )
    }
}
