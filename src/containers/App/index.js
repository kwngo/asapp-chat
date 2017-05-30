import React from 'react';
import styles from './style.css';

export function App(props) {
    return (
        <div>
        {React.Children.toArray(props.children)}
        </div>
    )
}

App.propTypes = {
    children: React.PropTypes.node
}

export default App;
