import React from 'react';
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
    children: React.PropTypes.node
}

export default App;
