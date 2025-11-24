import type React from 'react';
import styles from './hover-container.module.css';

const HoverContainer: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
}

export default HoverContainer;