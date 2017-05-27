import React, {Component, PropTypes} from 'react';
import styles from './style.css';

export default class Message extends Component {
    render() {
        return (
            <div className={styles.Message}>
                {this.props.content}
            </div>
        )
    }
}
