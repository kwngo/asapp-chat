import React, {Component, PropTypes} from 'react';

export default class ChatInput extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Write your message here..." />
            </div>
        )
    }
}
