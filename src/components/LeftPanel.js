import React from 'react';
import styles from '../styling/LeftPanel.module.css';
import AboutContainer from '../molecules/AboutContainer';
import TopContainer from '../molecules/TopContainer';
import FooterContainer from '../molecules/FooterContainer';

const LeftPanel = () => {
    return (
        <div className={styles.leftPanel}>
            <TopContainer />
            <AboutContainer />
            <FooterContainer />
        </div>
    )
}

export default LeftPanel;