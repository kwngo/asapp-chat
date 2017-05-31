import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export function App(props) {
    const childrenWithProps = React.Children.map(
        props.children,
        (child) => React.cloneElement(child, {
                session: props.session
            })
        );
    return (
        <div className={styles.AppContainer}>
            {childrenWithProps}
        </div>
    )
}

App.propTypes = {
    children: PropTypes.node
}

export default App;
