import React from 'react';
import PropTypes from 'prop-types';

const ChatHeader = (props) => {
    let participants = props.participants
        .filter(u => { return u.id != props.currentUser.id})
        .map(p => {
            return p.username
        }).join(", ");

    return (
        <div className={props.className}>
            <div>{participants}</div>
        </div>
    )
}

ChatHeader.propTypes = {
    currentUser: PropTypes.object.isRequired,
    participants: PropTypes.array.isRequired,
    className: PropTypes.string
}

export default ChatHeader;

