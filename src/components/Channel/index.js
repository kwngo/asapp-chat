import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';

export default class Channel extends Component {
    componentWillMount() {
        
    }
    static propTypes = {
        participants: PropTypes.array
    }
    render() {
        var messages = [
            <Message key="0" content="Yo" />,
            <Message key="1" content="This is another message"/>
        ]
        return (
            <div>
            <div>Channel navbar</div>
            <div>{messages}</div>
            <div>Channel input</div>
            </div>
        )
    }
}
